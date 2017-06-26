using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Chains.API.Models;
using Chains.API.Models.ViewModels;

namespace Chains.API.Repositories
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly IDatabaseRepository _databaseRepository;

        public PropertyRepository(IDatabaseRepository databaseRepository)
        {
            _databaseRepository = databaseRepository;
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
    }
}