using System;
using Amazon.QuickSight.Model;
using Amazon.QuickSight;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace QuickSight.Controllers
{
    [Route("api/")]
    public class GetQuickSightUsersController : Controller
    {
        private static readonly string accessKey = ""; //need your accessKey to run 
        private static readonly string secretAccessKey = ""; //need your secetAccessKey to run
        private static readonly string accountID = ""; //need your accountID to run
        private static readonly string Namespace = "default";  // leave this as default

        [Route("GetQuickSightUsers")]
        public List<User> GetQuickSightUsers()
        {
            var client = new AmazonQuickSightClient(
                accessKey,
                secretAccessKey,
                Amazon.RegionEndpoint.USEast1);

            var listUsersRequest = new ListUsersRequest
            {
                AwsAccountId = accountID,
                Namespace = Namespace
            };
            try
            {
                var userList = client.ListUsersAsync(listUsersRequest).Result.UserList;
                return userList;
            }
            catch (Exception ex)
            {
                return null;
            }
            

        }

        [Route("GetQuickSightGroups")]
        public List<Group> GetQuickSightGroups()
        {
            var client = new AmazonQuickSightClient(
                accessKey,
                secretAccessKey,
                Amazon.RegionEndpoint.USEast1);

            var listGroupsRequest = new ListGroupsRequest
            {
                AwsAccountId = accountID,
                Namespace = Namespace
            };

            try
            {
                var groupsList = client.ListGroupsAsync(listGroupsRequest).Result.GroupList;
                return groupsList;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}