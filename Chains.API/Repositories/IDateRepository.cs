using System;
using System.Collections.Generic;
using System.Linq;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public interface IDateRepository
    {
        DateTime Now();
        DateTime NullDate();
    }
}