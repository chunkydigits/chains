using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http.Dependencies;
using Autofac;
using Autofac.Integration.WebApi;
using Chains.API.Repositories;

namespace Chains.API.Autofac
{
    public static class AutofacConfiguration
    {
        public static IDependencyResolver ConfigureAutofac()
        {
            var builder = new ContainerBuilder();

            AutofacDependencies.AddRequiredDependencies(ref builder);

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            
            return new AutofacWebApiDependencyResolver(builder.Build());
        }
    }
}