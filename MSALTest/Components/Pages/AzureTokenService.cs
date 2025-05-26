using Microsoft.Identity.Client;

public class AzureTokenService
{
    private readonly IConfidentialClientApplication _app;

    public AzureTokenService(IConfiguration config)
    {
        _app = ConfidentialClientApplicationBuilder.Create(config["AzureAd:ClientId"])
            .WithClientSecret(config["AzureAd:ClientSecret"])
            .WithAuthority(new Uri($"https://login.microsoftonline.com/{config["AzureAd:TenantId"]}"))
            .Build();
    }

    public async Task<string> GetAccessTokenAsync()
    {
        var scopes = new[] { "https://management.azure.com/.default" };
        var result = await _app.AcquireTokenForClient(scopes).ExecuteAsync();
        return result.AccessToken;
    }
}
