using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using AutoMapper;
using Chains.API.Models;
using Chains.API.Models.ViewModels;
using log4net;
using WebGrease.Css.Extensions;

namespace Chains.API.Repositories
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly IDatabaseRepository _databaseRepository;
        private readonly IGuidRepository _guidRepository;
        private readonly IDateRepository _dateRepository;
        private readonly ILog _logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public PropertyRepository(IDatabaseRepository databaseRepository, IGuidRepository guidRepository, IDateRepository dateRepository)
        {
            _databaseRepository = databaseRepository;
            _guidRepository = guidRepository;
            _dateRepository = dateRepository;
        }

        public List<PropertyInformationViewModel> GetAllProperties()
        {
            using (var context = new ChainsDBEntities())
            {
                var returnList = new List<PropertyInformationViewModel>();
                var propertyList = _databaseRepository.GetAllProperties(context).Where(o => !o.Deleted);

                propertyList.ForEach(o =>
                {
                    var property = Mapper.Map<PropertyInformationViewModel>((Property)o);
                    foreach (var checkListitem in o.PropertyCheckListitems)
                    {
                        property.PropertyCheckListitems.Add(new PropertyCheckListItemViewModel(checkListitem));
                    }
                    returnList.Add(property);

                });
                return returnList;
            }
        }

        public List<PropertyCheckListitem> GetCheckListItemsForProperty(Guid propertyId)
        {
            using (var context = new ChainsDBEntities())
            {
                return _databaseRepository.GetCheckListItemsForProperty(context, propertyId);
            }
        }

        public bool Upsert(PropertyInformationViewModel viewModel)
        {
            try
            {
                using (var context = new ChainsDBEntities())
                {
                    var insert = viewModel.Id == _guidRepository.EmptyGuid();

                    if (insert)
                    {
                        var buyerCode = GetNewCode();
                        _databaseRepository.AddItem(context, buyerCode);
                        var sellerCode = GetNewCode();
                        _databaseRepository.AddItem(context, sellerCode);
                    }

                    var propertyToUpsert = ConvertPropertyViewModelToDBType(viewModel, viewModel.BuyerCodeId, viewModel.SellerCodeId);
                    
                    // TODO: add standard checklist items 
                    if (insert)
                    {
                        _databaseRepository.AddItem<Property>(context, propertyToUpsert);
                    }
                    else
                    {
                        _databaseRepository.Update(context, propertyToUpsert, propertyToUpsert.Id);   
                    }

                    return true;
                }
            }
            catch (Exception ex)
            {
                _logger.ErrorFormat("Could not save the property with RMI: {0} \r\n Exception: {1}", viewModel.RightMoveIdentifier, ex.Message);
                return false;
            }
        }

        public bool Delete(Guid id, string username)
        {
            try
            {
                using (var context = new ChainsDBEntities())
                {
                    _databaseRepository.DeleteProperty(context, id, username, _dateRepository.Now());
                    return true;
                }
            }
            catch (Exception ex)
            {
                _logger.ErrorFormat("Failed to delete property ID: {0} - Exception: {1}", id, ex.Message);
                return false;
            }
        }

        #region Supporting Methods 

        public Property ConvertPropertyViewModelToDBType(PropertyInformationViewModel viewModel, Guid buyerCodeId, Guid sellerCodeId)
        {
            
            var dbEntity = new Property();
            dbEntity.Id = viewModel.Id == _guidRepository.EmptyGuid() ? _guidRepository.NewGuid() : viewModel.Id;
            dbEntity.AddressLine1 = viewModel.AddressLine1;
            dbEntity.AddressLine2 = viewModel.AddressLine2;
            dbEntity.AddressLine3 = viewModel.AddressLine3;
            dbEntity.AddressLine4 = viewModel.AddressLine4;
            dbEntity.AddressLine5 = viewModel.AddressLine5;
            dbEntity.Postcode = viewModel.Postcode;
            dbEntity.RightMoveIdentifier = viewModel.RightMoveIdentifier;
            dbEntity.RightMoveImageUrl = viewModel.RightMoveImageUrl;
            dbEntity.RightMoveAskingPrice = viewModel.RightMoveAskingPrice;
            dbEntity.DateAdded = _dateRepository.Now();
            dbEntity.DisplayName = viewModel.DisplayName;
            dbEntity.PropertyCheckListitems = new List<PropertyCheckListitem>(); // Get the standard set if checklist items 
            dbEntity.BuyerCodeId = buyerCodeId;
            dbEntity.SellerCodeId = sellerCodeId;

            return dbEntity;
        }

        private Code GetNewCode()
        {
            var code = new Code();
            code.DateAdded = _dateRepository.Now();
            code.Id = _guidRepository.NewGuid();
            code.Code1 = _guidRepository.NewGuid().ToString().Substring(0, 5);
            return code;
        }

        #endregion 
    }
}