---json
{
  "title": "FLUID-4284",
  "summary": "UI Options: hide \"table of contents\" does not work with fat panel demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-06-03T16:21:35.118-0400",
  "updated": "2011-07-26T10:39:40.236-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Confirmed with ff 3.6, IE8, chrome11 on windows.\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4295/",
      "key": "FLUID-4295",
      "summary": "UI Options error when unchecking \"Show table of contents\" after \"save and apply\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-06-06T09:28:07.293-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-26T10:39:40.234-0400",
      "body": "Appears to have been fixed at 6d6c5ddc4ac62499c026c9d61430459eb73d2e94\n"
    }
  ]
}
---
How to produce:

1\. Run UI Options fat panel demo: src/webapp/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html\
2\. Make sure table of contents is turned off\
3\. Click "show display preference" -> tab "layout and navigation" -> checkbox "show table of contents" to turn on the table of contents\
4\. Click the checkbox "show table of contents" again to hide it\
5\. js error below is thrown:

"Bound data could not be discovered in any node above \[object HTMLDivElement]"

"table of contents" works well if it's turned on initially. This error only happens when it's initially turned off.

        