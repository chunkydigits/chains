using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chains.API.Models.ViewModels
{
    public class PropertyInformationViewModel
    {

        public PropertyInformationViewModel (){
            this.PropertyCheckListitems = new List<PropertyCheckListItemViewModel>();
        }

        public System.Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string AddressLine4 { get; set; }
        public string AddressLine5 { get; set; }
        public string Postcode { get; set; }
        public System.Guid SellerCodeId { get; set; }
        public System.Guid BuyerCodeId { get; set; }
        public System.DateTime DateAdded { get; set; }
        public string RightMoveIdentifier { get; set; }
        
        public List<PropertyCheckListItemViewModel> PropertyCheckListitems { get; set; }
    }
}
