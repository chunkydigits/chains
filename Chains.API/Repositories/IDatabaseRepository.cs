using System;
using System.Collections.Generic;
using System.Linq;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public interface IDatabaseRepository
    {
        List<Property> GetAllProperties(ChainsDBEntities context);
       List<PropertyCheckListitem> GetCheckListItemsForProperty(ChainsDBEntities context, Guid propertyId);
    }
}