using System;
using System.Collections.Generic;
using System.Linq;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public interface IDatabaseRepository
    {
        // Generic
        void AddItem<T>(ChainsDBEntities context, T item);
        void Update<T>(ChainsDBEntities context, T item, Guid Id);

        // Property
        List<Property> GetAllProperties(ChainsDBEntities context);
        List<PropertyCheckListitem> GetCheckListItemsForProperty(ChainsDBEntities context, Guid propertyId);
        void DeleteProperty(ChainsDBEntities context, Guid id, string username, DateTime now);
    }
}