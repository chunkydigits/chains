//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Chains.API.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Feedback
    {
        public System.Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Details { get; set; }
        public System.DateTime AddedOn { get; set; }
        public string UserId { get; set; }
        public bool Viewed { get; set; }
        public bool Actioned { get; set; }
        public string Comment { get; set; }
        public Nullable<System.DateTime> ContactedOn { get; set; }
        public string ContactedBy { get; set; }
        public string ContactReason { get; set; }
        public bool Deleted { get; set; }
        public string DeletedBy { get; set; }
        public Nullable<System.DateTime> DeletedOn { get; set; }
    }
}
