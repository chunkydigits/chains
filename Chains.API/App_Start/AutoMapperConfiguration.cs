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
           /* Mapper.Initialize(cfg => cfg.CreateMap<PropertyCheckListitem, PropertyCheckListItemViewModel>()
                                    .ForSourceMember(src => src.Property, dest => dest.Ignore()));
            Mapper.Initialize(cfg => cfg.CreateMap<CheckListItem, CheckListItemViewModel>()
                                    .ForSourceMember(src => src.CustomDefaultCheckListItems, dest => dest.Ignore())
                                    .ForSourceMember(src => src.PropertyCheckListitems, dest => dest.Ignore()));*/
        }
    }
}