---json
{
  "title": "FLUID-5464",
  "summary": "OverviewPanel is missing some styles which would override Foundation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-07-09T14:35:50.694-0400",
  "updated": "2024-07-23T07:58:03.699-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": "Zurb Foundation 5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T07:58:03.532-0400",
      "body": "Foundation is no longer used.\n"
    }
  ]
}
---
The OverviewPanel is missing some styles, which left unspecified is defaulting to Foundation's styling in some demos (i.e. Metadata demo). This is causing text appear in the incorrect colour and to not lay out properly.

Specifically, the OverviewPanel should declare:

* font-family RobotoSlab for the panel header
* line-height 1.6rem for the instructions and description
* Instruction H2 colour

Since we expect to use Foundation more often, we will likely run into this issue more often.

        