using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public class DateRepository : IDateRepository
    {
        public DateTime Now()
        {
            return DateTime.UtcNow;
        }

        public DateTime NullDate()
        {
            return new DateTime();
        }
    }
}