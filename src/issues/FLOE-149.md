---json
{
  "title": "FLOE-149",
  "summary": "Radio button groups are not properly structured - they should appear in a fieldset with a legend, and labels for each radio.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Dana",
  "date": "2014-01-07T16:02:09.188-0500",
  "updated": "2014-01-20T11:46:37.353-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-142/",
      "key": "FLOE-142"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-01-14T09:41:49.008-0500",
      "body": "Here's a good description of how this should be marked up.\\\n<http://webaim.org/techniques/forms/controls#radio>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-14T11:04:40.796-0500",
      "body": "Submitted a pull request <https://github.com/fluid-project/metadata/pull/18>\\\nNote that this doesn't change the behaviour found in <https://fluidproject.atlassian.net/browse/FLOE-142#icft=FLOE-142>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-01-20T11:46:32.718-0500",
      "body": "Merged into the project repo @ a4c3121c46905a616d1905fc2a2a2fb604eb58c8\n"
    }
  ]
}
---
The radio buttons in the metadata panels are not properly structured and labelled - thus the radio button group label is not being read by VO (FF, Safari).

To fix this, the radio button group should appear in a fieldset with a legend, and labels for each radio.

        