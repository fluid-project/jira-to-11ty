---json
{
  "title": "FLOE-430",
  "summary": "Forward prefs from the tool on to GPII auth server with OAuth2 credentials.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-10-26T15:02:40.183-0400",
  "updated": "2015-11-12T14:32:26.632-0500",
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
      "author": "Cindy Li",
      "date": "2015-11-12T14:31:09.833-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1337> and all activities should be carried on in there.\n"
    }
  ]
}
---
Forward prefs from the tool on to GPII auth server with OAuth2 credentials.\
On anything other than 200 from post to auth server, show the token page with a generic error message in place of the token\
JSON config for OAuth

* client ID
* secret

See: <https://wiki.gpii.net/w/GPII_OAuth_2_Guide#Client_Credentials_Grant>

        