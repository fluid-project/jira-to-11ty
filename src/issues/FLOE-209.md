---json
{
  "title": "FLOE-209",
  "summary": "Logo missing on \"Preference Editing Tools\" page",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2014-07-29T11:07:29.359-0400",
  "updated": "2015-04-23T13:35:33.438-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "FLOE Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-29T11:22:58.690-0400",
      "body": "Pull request issued: <https://github.com/fluid-project/floeproject.org/pull/13>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-07-29T13:50:05.574-0400",
      "body": "Merged into project repo at c39c61147498a784072b20e4fa95efef7827f6b7\n"
    }
  ]
}
---
The floe logo at the top of <http://www.floeproject.org/prefsEditors.html> is missing. The page is trying to load the logo from <http://www.floeproject.org/images/logo.png>, but the main page is using a font-icon.

        