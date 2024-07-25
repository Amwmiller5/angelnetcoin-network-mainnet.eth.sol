Install-Package Auth0.AspNetCore.Authentication
  config appsettings.jsonFile: ASP.NET
      "Auth0":{
        "Domain": "dev-zvuurcc3hmh6m58z.us.auth0.com"
        "ClientId": "CBD3OXOtvUiQAbKBKbLQzhSKcKK5rIsy"
  }
  StartupConfigure{
    ...
    app.UseAuthentication();
    app.UseAuthorization();
    ...
      addAuth0WebAppAuthentication
 StartupConfigureServices
services.AddAuth0WebAppAuthentication(options
  {
      options.Domain = Configuration["Auth0:Domain"];
      options.ClientId = Configuration["Auth0:ClientId"];
SetAppDomainURL as: "https://angelnetcoin_mainnet.io"
  }
  
AppName= "AngelNetCoin_Mainnet"
  Domain= "dev-zvuurcc3hmh6m58z.us.auth0.com"
  ClientId= "CBD3OXOtvUiQAbKBKbLQzhSKcKK5rIsy"
  AppWebURL= "https://AngelNetCoin_Mainnet.io"

  curl --request PATCH \
    --url 'https://AngelNetCoin_Mainnet.io/api/v2/clients/CBD3OXOtvUiQAbKBKbLQzhSKcKK5rIsy' \
    --header 'authorization: Bearer API2_ACCESS_TOKEN' \
    --header 'cache-control: no-cache' \
    --header 'content-type: application/json' \
    --data '{"initiate_login_uri: "<login_url>"}'

  curl --request POST \
    --url 'https://AngelNetCoin_Mainnet.io/api/v2tickets/password-change' \
    --header 'authorization: Bearer MGMT_API_ACCESS_TOKEN' \
    --header 'content-type: application/json' \
    --data '{ "user_id": "A_USER_ID" , "client_id": A_CLIENT_ID" }'

public async Task Login(string returnUrl = "dev-zvuurcc3hmh6m58z.us.auth0.com/https://angelnetcoin_mainnet.io")
{
    var authenticationProperties = new LoginAuthenticationPropertiesBuilder()
        .WithRedirectUri(returnUrl)
        .Build();

   await HTTPContext.ChallengeAsync(Auth0Constants.AuthenticationScheme, authenticationProperties);
}

[Authorize]
  public async Task Logout()
{

    var authenticationProperties = new LogoutAuthenticationPropertiesBuilder()
        //allowedLogoutUri = "https://angelnetcoin_mainnet.io"
        .WithRedirectUri(Url.Action("Index", "Home"))

  await HttpContext.SignOutAsync(Auth0Constants.AuthenticationScheme, authenticationProperties);
  await HttpContext.SignOutAsync(CookiesAuthenticationDefaults.AuthenticationScheme);
}


Auth0 by Okta

  
