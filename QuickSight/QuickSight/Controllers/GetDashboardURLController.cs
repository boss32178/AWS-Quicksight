using System;
using Amazon.QuickSight.Model;
using Amazon.QuickSight;
using Microsoft.AspNetCore.Mvc;

namespace QuickSight.Controllers
{
    [Route("api/")]
    public class GetDashboardURLController : Controller
    {
        private static readonly string accessKey = ""; //need your accessKey to run 
        private static readonly string secretAccessKey = ""; //need your secetAccessKey to run
        private static readonly string accountID = ""; //need your accountID to run
        private static readonly string dashboardId = ""; //add the dashboardID of the dashboard you want to embed
        private static readonly IdentityType identityType = IdentityType.IAM;

        [Route("GetDashboardURL")]
        public string GetDashboardURL()
        {
            var client = new AmazonQuickSightClient(
                accessKey,
                secretAccessKey,
                Amazon.RegionEndpoint.USEast1
            );

            try
            {
                var embed_url_result =
                    client.GetDashboardEmbedUrlAsync(new GetDashboardEmbedUrlRequest
                    {
                        AwsAccountId = accountID,
                        DashboardId = dashboardId,
                        IdentityType = identityType,
                        SessionLifetimeInMinutes = 60,
                        ResetDisabled = true,
                        UndoRedoDisabled = true
                    }).Result;
                string url = embed_url_result.EmbedUrl.ToString();
                return url;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
}
    }
}