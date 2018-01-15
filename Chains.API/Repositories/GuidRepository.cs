using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public class GuidRepository : IGuidRepository
    {
        public Guid NewGuid()
        {
            return Guid.NewGuid();
        }

        public Guid EmptyGuid()
        {
            return Guid.Empty;
        }
    }
}