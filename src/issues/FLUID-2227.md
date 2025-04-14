---json
{
  "title": "FLUID-2227",
  "summary": "Tech. review of Reorderer documents",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-02-12T16:17:02.000-0500",
  "updated": "2009-06-03T13:41:57.000-0400",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-17T13:42:46.000-0500",
      "body": "These docs look good, except for\\\n<http://wiki.fluidproject.org/display/fluid/Layout+Reorderer+Integration+-+Layout> \\\nwhich is out-of-date, and needs an overhaul.\n\nI've put a warning on the page, and will come back to this task when other reviews are complete.\n"
    }
  ]
}
---
A technical review of the Reorderer documentation:\
<http://wiki.fluidproject.org/display/fluid/Reorderer+API>\
<http://wiki.fluidproject.org/display/fluid/List+Reorderer+API>\
<http://wiki.fluidproject.org/display/fluid/Grid+Reorderer+API>\
<http://wiki.fluidproject.org/display/fluid/Layout+Reorderer+API>\
<http://wiki.fluidproject.org/display/fluid/Image+Reorderer+API>\
<http://wiki.fluidproject.org/display/fluid/Advanced+Reorderer+API>\
<http://wiki.fluidproject.org/display/fluid/List+Reorderer+Tutorial>\
<http://wiki.fluidproject.org/display/fluid/Grid+Reorderer+Tutorial>\
<http://wiki.fluidproject.org/display/fluid/Layout+Reorderer+Tutorial>\
<http://wiki.fluidproject.org/display/fluid/Layout+Reorderer+Integration+-+Layout>

* Check pages for correctness against current code base:\
  &#x20;         o function signatures\
  &#x20;         o options (selectors, supported events, styles, etc.)\
  &#x20;         o dependencies\
  &#x20;         o etc.
* Check links between pages, add and update where appropriate.

Bug Parade 0.8 release

0.8-release-process

        