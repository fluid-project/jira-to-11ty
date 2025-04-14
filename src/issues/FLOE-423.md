---json
{
  "title": "FLOE-423",
  "summary": "Accept a POST request containing preferences in the first discovery server",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2015-09-25T11:31:33.863-0400",
  "updated": "2015-11-12T14:34:31.012-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-09-25T13:47:37.545-0400",
      "body": "Perhaps making the endpoint \"/user/\" would be good to match the api of the flow manager. <https://wiki.gpii.net/w/Flow_Manager_API#User_Preferences>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-28T13:03:00.601-0400",
      "body": "The response should return a JSON object in the response.\n\nsuccess:\n\n{\\\ntoken: \"some token\"\\\n}\n\nfailure:&#x20;\n\n{\\\nerror: \"some error message\"\\\n}\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-10-07T10:11:08.824-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery-server/pull/2>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:34:31.010-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1479> and all activities should be carried on there.\n"
    }
  ]
}
---
The first discovery server should be able to accept a POST request containing the preferences that a user would like to save. Ultimately this should be wired up to the Security Server which will intern contact the preferences server to save the preferences and return a token for the user to retrieve them. This token will be passed along to the first discovery tool to hand off to the user. In the case of any error, an error will be returned instead of the token.

Because the infrastructure for connecting to the security server has not yet been implemented. For now this request should just mock out that portion of the request.

        