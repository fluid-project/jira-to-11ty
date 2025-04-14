---json
{
  "title": "STUDIO-31",
  "summary": "Back link throws javascript error at IE8",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-12-14T10:03:52.941-0500",
  "updated": "2014-03-03T13:01:22.716-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": "Only with IE8. \\\nFF, Chrome, Safari, IE9 work fine.\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-12-15T13:41:50.522-0500",
      "body": "Normalization of the javascript will be taken care @ <https://fluidproject.atlassian.net/browse/STUDIO-30#icft=STUDIO-30>\n"
    }
  ]
}
---
Clicking on the "Back" link on the sidebar gets "syntax error at line 1, char 7".

        