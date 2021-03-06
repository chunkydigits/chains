﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class ChainsDBEntities : DbContext
    {
        public ChainsDBEntities()
            : base("name=ChainsDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<CheckListItem> CheckListItems { get; set; }
        public virtual DbSet<Code> Codes { get; set; }
        public virtual DbSet<CustomDefaultCheckList> CustomDefaultCheckLists { get; set; }
        public virtual DbSet<CustomDefaultCheckListItem> CustomDefaultCheckListItems { get; set; }
        public virtual DbSet<Property> Properties { get; set; }
        public virtual DbSet<PropertyCheckListitem> PropertyCheckListitems { get; set; }
        public virtual DbSet<PublicUser> PublicUsers { get; set; }
        public virtual DbSet<PublicUserType> PublicUserTypes { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }
        public virtual DbSet<TransactionType> TransactionTypes { get; set; }
        public virtual DbSet<Feedback> Feedbacks { get; set; }
        public virtual DbSet<CheckListItemDefaultCollection> CheckListItemDefaultCollections { get; set; }
    
        public virtual ObjectResult<GetChainForPropertyId_Result> GetChainForPropertyId(Nullable<System.Guid> sourcePropertyId)
        {
            var sourcePropertyIdParameter = sourcePropertyId.HasValue ?
                new ObjectParameter("sourcePropertyId", sourcePropertyId) :
                new ObjectParameter("sourcePropertyId", typeof(System.Guid));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetChainForPropertyId_Result>("GetChainForPropertyId", sourcePropertyIdParameter);
        }
    }
}
