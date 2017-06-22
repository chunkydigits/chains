using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chains.API.Models.ViewModels
{
    public class CheckListItemViewModel
    {
        public System.Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Details { get; set; }
    }
}
