using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using Chains.API.Extensions;
using Chains.API.Models;
using Chains.API.Models.ViewModels;
using HtmlAgilityPack;

namespace Chains.API.Repositories
{
    public class RightMoveRepository : IRightMoveRepository
    {
        private const string PROPERTY_PAGE_URL = @"http://www.rightmove.co.uk/property-for-sale/property-{0}.html";

        public string GetImageUrl(string rightMoveIdentifier)
        {
            var web = new HtmlWeb();
            var doc = web.Load(GetRightMoveUrl(rightMoveIdentifier));

            string imageUrl = doc.DocumentNode
                .SelectSingleNode("//img[@class='js-gallery-main']")
                .Attributes["src"].Value;

            return imageUrl;
        }

        public string GetRightMoveUrl(string rightMoveIdentifier)
        {
            return string.Format(PROPERTY_PAGE_URL, rightMoveIdentifier);
        }

        public string GetPropertyAskingPrice(string rightMoveIdentifier)
        {
            throw new NotImplementedException();
        }

        public RightMoveDetailViewModel GetAllDetails(string rightMoveIdentifier)
        {
            var web = new HtmlWeb();
            var doc = web.Load(GetRightMoveUrl(rightMoveIdentifier));

            string imageUrl = doc.DocumentNode
                .SelectSingleNode("//img[@class='js-gallery-main']")
                .Attributes["src"].Value;

            var askingPrice = doc.DocumentNode
                .SelectSingleNode("//p[@id='propertyHeaderPrice']/strong").InnerText;

            return new RightMoveDetailViewModel
            {
                Identifier = rightMoveIdentifier,
                AskingPrice = askingPrice.RemoveTabsAndLineBreaks().Replace("&pound;", "£"),
                ImageUrl = imageUrl
            };
        }
    }
}