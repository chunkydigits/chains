using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Autofac;
using Chains.API.Repositories;

namespace Chains.API.Autofac
{
    public static class AutofacDependencies
    {
        public static void AddRequiredDependencies(ref ContainerBuilder builder)
        {
            builder.RegisterInstance<IPropertyRepository>(new PropertyRepository(new DatabaseRepository(), new GuidRepository(), new DateRepository()));
            builder.RegisterInstance<IRightMoveRepository>(new RightMoveRepository());
        }
    }
}