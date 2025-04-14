---json
{
  "title": "FLUID-6054",
  "summary": "The locked portlet error message is not announced by JAWS when trying to move a portlet above a locked one",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-09T12:25:42.845-0500",
  "updated": "2016-11-09T12:25:42.845-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 11 (Win 7, JAWS 17)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\. Ensure JAWS is enabled\
2\. Open the [layout reorderer demo](http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/)\
3\. Using the keyboard, attempt to move a portlet above a locked portlet

Notice that the error message about the locked portlet is not announced by JAWS.

        