---json
{
  "title": "FLUID-2496",
  "summary": "Inline Edit activatable text dissappears when filled with only spaces",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jacob Farber",
  "date": "2009-04-02T17:05:50.000-0400",
  "updated": "2009-04-14T10:17:47.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2018/",
      "key": "FLUID-2018",
      "summary": "An inline edit field containing only a space character is niether discoverable nor activatable using the mouse"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-14T10:16:20.000-0400",
      "body": "linked to wrong jira, will relink\n"
    }
  ]
}
---
Go to <http://build.fluidproject.org/infusion/standalone-demos/quick-start-examples/inlineEdit/html/InlineEdit.html>\
click on one of the themed inline edit examples\
empty it, and fill it with spaces, then hit enter\
the activatable region is gone.

        