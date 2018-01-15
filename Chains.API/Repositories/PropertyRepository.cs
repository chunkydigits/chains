using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using AutoMapper;
using Chains.API.Models;
using Chains.API.Models.ViewModels;
using log4net;
using log4net.Core;

namespace Chains.API.Repositories
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly IDatabaseRepository _databaseRepository;
        private readonly IGuidRepository _guidRepository;
        private readonly ILog _logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public PropertyRepository(IDatabaseRepository databaseRepository, IGuidRepository guidRepository)
        {
            _databaseRepository = databaseRepository;
            _guidRepository = guidRepository;
        }

        public List<PropertyInformationViewModel> GetAllProperties()
        {
            using (var context = new ChainsDBEntities())
            {
                var returnList = new List<PropertyInformationViewModel>();
                var propertyList = _databaseRepository.GetAllProperties(context);

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

        public bool AddProperty(PropertyInformationViewModel viewModel)
        {
            try
            {
                using (var context = new ChainsDBEntities())
                {
                    var buyerCode = GetNewCode();
                    _databaseRepository.AddItem(context, buyerCode);
                    var sellerCode = GetNewCode();
                    _databaseRepository.AddItem(context, sellerCode);


                    var propertyToAdd = ConvertPropertyViewModelToDBType(viewModel, buyerCode.Id, sellerCode.Id);

                    // TODO: add standard checklist items 
                    context.Properties.Add(propertyToAdd);
                    
                    _databaseRepository.AddItem<Property>(context, propertyToAdd);
                    return true;
                }
            }
            catch (Exception ex)
            {
                _logger.ErrorFormat("Could not save the property with RMI: {0} \r\n Exception: {1}", viewModel.RightMoveIdentifier, ex.Message);
                return false;
            }
        }

        #region Supporting Methods 

        public Property ConvertPropertyViewModelToDBType(PropertyInformationViewModel viewModel, Guid buyerCodeId, Guid sellerCodeId)
        {
            
            var dbEntity = new Property();
            dbEntity.Id = _guidRepository.NewGuid();
            dbEntity.AddressLine1 = viewModel.AddressLine1;
            dbEntity.AddressLine2 = viewModel.AddressLine2;
            dbEntity.AddressLine3 = viewModel.AddressLine3;
            dbEntity.AddressLine4 = viewModel.AddressLine4;
            dbEntity.AddressLine5 = viewModel.AddressLine5;
            dbEntity.Postcode = viewModel.Postcode;
            dbEntity.RightMoveIdentifier = viewModel.RightMoveIdentifier;
            dbEntity.DateAdded = DateTime.UtcNow;
            dbEntity.DisplayName = viewModel.DisplayName;
            dbEntity.PropertyCheckListitems = new List<PropertyCheckListitem>(); // Get the standard set if checklist items 
            dbEntity.BuyerCodeId = buyerCodeId;
            dbEntity.SellerCodeId = sellerCodeId;

            return dbEntity;
        }

        private Code GetNewCode()
        {
            var code = new Code();
            code.DateAdded = DateTime.UtcNow;
            code.Id = _guidRepository.NewGuid();
            code.Code1 = _guidRepository.NewGuid().ToString().Substring(0, 5);
            return code;
        }

        #endregion 
    }
}