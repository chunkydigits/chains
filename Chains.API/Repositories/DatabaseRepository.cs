using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.Data.Entity.Migrations;
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
        
        public void Update<T>(ChainsDBEntities context, T item, Guid id)
        {
            var entity = context.Set(typeof(T)).Find(id);
            if (entity == null)
            {
                return;
            }

            context.Entry(entity).CurrentValues.SetValues(item);
            context.SaveChanges();
        }

        public void DeleteProperty(ChainsDBEntities context, Guid id, string username, DateTime now)
        {
            var propertyToDelete = context.Properties.Find(id);

            propertyToDelete.DateDeleted = now;
            propertyToDelete.DeletedBy = username;
            propertyToDelete.Deleted = true;

            context.SaveChanges();
        }

        public List<CheckListItem> GetDefaultCheckListItems(ChainsDBEntities context)
        {
            var defaultCollection = context.CheckListItemDefaultCollections.ToList();
            var checkListItems = context.CheckListItems.Where(o => defaultCollection.Any(x => x.CheckListItemId == o.Id));
            return checkListItems.ToList();
        }

        public void AddPropertyCheckListItems(ChainsDBEntities context, List<PropertyCheckListitem> checkListItems)
        {
            context.PropertyCheckListitems.AddRange(checkListItems);
            context.SaveChanges();
        }
    }
}