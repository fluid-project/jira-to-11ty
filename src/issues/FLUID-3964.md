---json
{
  "title": "FLUID-3964",
  "summary": "Rich Text Inline Edit fails W3C Validation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2010-12-20T11:43:46.572-0500",
  "updated": "2015-06-17T10:32:29.410-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-30T15:31:01.687-0400",
      "body": "The test page (now at <http://build.fluidproject.org/infusion/tests/manual-tests/components/inlineEdit/dropdown/>)  now passes (with one warning).\n"
    }
  ]
}
---
Validate <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/html/inlineEdit.html>\
There are currently 4 errors - "rows" and "cols" haven't been defined for \<textarea> - not sure if switching to transitional would change that.

[http://validator.w3.org](http://validator.w3.org/)

        