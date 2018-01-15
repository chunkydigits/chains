using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public class DatabaseRepository : IDatabaseRepository
    {
        public List<Property> GetAllProperties(ChainsDBEntities context)
        {
            return context.Properties.Include("PropertyCheckListitems")/*.Include("PropertyCheckListitems.CheckListItem")*/.ToList();
        }

        public List<PropertyCheckListitem> GetCheckListItemsForProperty(ChainsDBEntities context, Guid propertyId)
        {
            return context.PropertyCheckListitems.Where(o => o.PropertyId == propertyId).ToList();
        }

        public void AddItem<T>(ChainsDBEntities context, T item)
        {
            context.Set(typeof(T)).Add(item);
            context.SaveChanges();
        }
    }
}