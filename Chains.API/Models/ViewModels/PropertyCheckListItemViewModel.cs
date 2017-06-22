using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chains.API.Models.ViewModels
{
    public class PropertyCheckListItemViewModel
    {
        public Guid Id { get; set; }
        public Guid PropertyId { get; set; }
        public Guid CheckListItemId { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Completed { get; set; }
        public Guid? CompletedUserId { get; set; }
        public CheckListItem CheckListItem { get; set; }
    }
}
