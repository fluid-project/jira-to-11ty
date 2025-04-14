---json
{
  "title": "FLUID-4683",
  "summary": "Simple Inline Edit throws Element is not defined exception",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Nicholas Mayne",
  "date": "2012-04-02T16:41:16.294-0400",
  "updated": "2014-03-03T12:58:39.724-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-08-26T03:38:16.840-0400",
      "body": "Resolved by commit of <https://fluidproject.atlassian.net/browse/FLUID-4684#icft=FLUID-4684> at 1f04a2\n"
    }
  ]
}
---
Upgrading <http://build.fluidproject.org/infusion/demos/inlineEdit/simple/demo.html> to use jQuery v1.7 throws a 'Element is not defined exception'

InlineEdit.js (line 753)\
element is undefined\
var nodeName = element.nodeName.toLowerCase();

It appears the the underlying code is not correctly getting the selector back and hence the 'element' is null

        