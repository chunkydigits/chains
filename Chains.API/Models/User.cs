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
    
    public partial class User
    {
        public System.Guid Id { get; set; }
        public string UserIdentifier { get; set; }
        public System.DateTime RegisteredDate { get; set; }
        public string Companies { get; set; }
        public string Branches { get; set; }
        public string Groups { get; set; }
    }
}