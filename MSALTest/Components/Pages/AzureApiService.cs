using System.Net.Http.Headers;
using System.Text.Json;
using System.Text;

public class AzureApiService
{
    private readonly AzureTokenService _tokenService;
    private readonly HttpClient _httpClient;

    public AzureApiService(AzureTokenService tokenService, HttpClient httpClient)
    {
        _tokenService = tokenService;
        _httpClient = httpClient;
    }

    public async Task<HttpResponseMessage> SendPutRequestAsync(string resourceUrl, object payload)
    {
        var token = await _tokenService.GetAccessTokenAsync();
        var request = new HttpRequestMessage(HttpMethod.Put, resourceUrl);
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

        var json = JsonSerializer.Serialize(payload);
        request.Content = new StringContent(json, Encoding.UTF8, "application/json");

        return await _httpClient.SendAsync(request);
    }
}
