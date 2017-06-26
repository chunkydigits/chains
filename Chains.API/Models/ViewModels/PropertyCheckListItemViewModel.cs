using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chains.API.Models.ViewModels
{
    public class PropertyCheckListItemViewModel
    {
        public PropertyCheckListItemViewModel(PropertyCheckListitem propertyCheckListItem)
        {
            Id = propertyCheckListItem.Id;
            CheckListItemId = propertyCheckListItem.CheckListItemId;
            Created = propertyCheckListItem.Created;
            Completed = propertyCheckListItem.Completed;
            DisplayName = propertyCheckListItem.CheckListItem.DisplayName;
            Details = propertyCheckListItem.CheckListItem.Details;
        }

        public Guid Id { get; set; }
        public Guid CheckListItemId { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Completed { get; set; }
        public Guid? CompletedUserId { get; set; }
        public string DisplayName { get; set; }
        public string Details { get; set; }
    }
}
