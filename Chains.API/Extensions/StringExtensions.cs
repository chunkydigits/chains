using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chains.API.Extensions
{
    public static class StringExtensions
    {
        public static string RemoveTabsAndLineBreaks(this string value)
        {
            return value.Replace("\r", "").Replace("\n", "").Replace("\t", "");
        }
    }
}