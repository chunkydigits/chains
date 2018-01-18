using System.Configuration;
using System.IdentityModel.Tokens;
using System.Web.Http;
using Microsoft.Owin;
using Owin;
using Auth0.Owin;
using Chains.API.App_Start;
using Microsoft.Owin.Security.Jwt;
using AuthenticationMode = Microsoft.Owin.Security.AuthenticationMode;

[assembly: OwinStartup(typeof(Chains.API.Startup))]
namespace Chains.API
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            ConfigureAuthZero(app);

            WebApiConfig.Register(config);
            AutoMapperConfiguration.Configure();
            log4net.Config.XmlConfigurator.Configure();


            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            app.UseWebApi(config);

        }

        private void ConfigureAuthZero(IAppBuilder app)
        {
            var domain = "https://" + ConfigurationManager.AppSettings["auth0:Domain"] + "/";
            var apiIdentifier = ConfigurationManager.AppSettings["auth0:ClientId"];

            // Api controllers with an [Authorize] attribute will be validated with JWT
            var keyResolver = new OpenIdConnectSigningKeyResolver(domain);
            app.UseJwtBearerAuthentication(
                new JwtBearerAuthenticationOptions
                {
                    AuthenticationMode = AuthenticationMode.Active,
                    TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidAudience = apiIdentifier,
                        ValidIssuer = domain,
                        IssuerSigningKeyResolver = (token, securityToken, identifier, parameters) => keyResolver.GetSigningKey(identifier)
                    }
                });
        }
    }
}