using System.Configuration;
using System.Linq;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace WebApi.Controllers
{
    public class PermissionAuthoriseAttribute : AuthorizeAttribute
    {
        private readonly string _permission;
        private readonly string _namespace = ConfigurationManager.AppSettings["Auth0:Namespace"];

        public PermissionAuthoriseAttribute(string permission)
        {
            _permission = permission;
        }

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            base.OnAuthorization(actionContext);

            // Get the Auth0 domain, in order to validate the issuer
            var domain = $"https://{ConfigurationManager.AppSettings["Auth0:Domain"]}/";

            // Get the claim principal
            ClaimsPrincipal principal = actionContext.ControllerContext.RequestContext.Principal as ClaimsPrincipal;
            
            // Get the scope clain. Ensure that the issuer is for the correcr Auth0 domain
            var permissionClaim = principal?.Claims.FirstOrDefault(c => c.Type == $"{_namespace}/permissions" && c.Issuer == domain);
            if (permissionClaim != null)
            {
                // Split scopes
                var permissions = permissionClaim.Value.Split(' ');

                // Succeed if the scope array contains the required scope
                if (permissions.Any(s => s == _permission))
                    return;
            }

            HandleUnauthorizedRequest(actionContext);
        }
    }
}