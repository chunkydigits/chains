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
    
    public partial class GetChainForPropertyId_Result
    {
        public Nullable<int> ix { get; set; }
        public Nullable<bool> startOfChain { get; set; }
        public Nullable<bool> endOfChain { get; set; }
        public Nullable<System.Guid> sellerId { get; set; }
        public Nullable<System.Guid> sellTransactionId { get; set; }
        public Nullable<System.Guid> sellerTypeId { get; set; }
        public Nullable<System.Guid> sellerBuyPropertyId { get; set; }
        public Nullable<System.Guid> buyerId { get; set; }
        public Nullable<System.Guid> buyTransactionId { get; set; }
        public Nullable<System.Guid> buyerTypeId { get; set; }
        public Nullable<System.Guid> buyerSellPropertyId { get; set; }
    }
}
