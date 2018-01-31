using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Linq.Expressions;
using Chains.API.Models;
using log4net.Repository.Hierarchy;
using RestSharp;
using Newtonsoft.Json;

namespace Chains.API.Repositories
{
    public class AuthorisationRepository : IAuthorisationRepository
    {
        public string GetAccessTokenHeaderForApi()
        {
            var client = new RestClient("https://chains.eu.auth0.com/oauth/token");
            var request = new RestRequest(Method.POST);
            request.AddHeader("content-type", "application/json");
            request.AddParameter("application/json", "{\"client_id\":\"maMeu6hZ6uY88hSI1cBxRgmWThmd8TXT\",\"client_secret\":\"L4N_Kt2MF8YldkjHaK-1W60Y_DYyKx-ZMl7XQ3D29_xTvC2sRIyvTpgZehzSjjsl\",\"audience\":\"urn:auth0-authz-api\",\"grant_type\":\"client_credentials\"}", ParameterType.RequestBody);
            IRestResponse response = client.Execute(request);
            dynamic responseObject = JsonConvert.DeserializeObject<dynamic>(response.Content);
            var accessToken = responseObject.access_token;
            var tokenType = responseObject.token_type;
            return $"{tokenType} {accessToken}";
        }

        public bool VerifyAccessToken(string accessToken)
        {

        }

        public bool SendRequestWithAccessTokenToApi(string authorisationHeader)
        {
            var client = new RestClient("https://chains.eu.auth0.com/oauth/token");
            var request = new RestRequest(Method.GET);
            request.AddHeader("authorization", authorisationHeader);

            try
            {
                IRestResponse response = client.Execute(request);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}