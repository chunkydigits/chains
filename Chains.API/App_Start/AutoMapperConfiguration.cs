using AutoMapper;
using Chains.API.Models;
using Chains.API.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chains.API.App_Start
{
    public static class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<Property, PropertyInformationViewModel>()
                                    .ForMember(src => src.PropertyCheckListitems, dest => dest.Ignore()));
        }
    }
}