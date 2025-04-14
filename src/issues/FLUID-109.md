---json
{
  "title": "FLUID-109",
  "summary": "Cannot tab out of the Lightbox on FF2 on Windows XP",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Simon Bates",
  "date": "2007-11-12T12:31:29.000-0500",
  "updated": "2008-07-10T19:49:49.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "FF 2.0.0.9\\\nWindows XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-13T10:08:04.000-0500",
      "body": "We do not have unit tests for tabbed navigation.  We do have unit tests for arrow and ctrl+arrow, and tests for moving focus programmatically.  We need to simulate tab keystrokes and test that they are doing \"the right thing\".\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-15T15:36:13.000-0500",
      "body": "I tested this on FireFox 2.0.0.9 on Windows XP, both at the link Simon included above and within the Sakai gallery tool. Tabbing out of the Lightbox works for me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-10T19:49:49.000-0400",
      "body": "Verified that you are able to tab out of lightbox using FF2 on Win XP\n\nOn the generic lightbox demo from the daily build site:\\\n<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>\n"
    }
  ]
}
---
To reproduce:

* open <http://build.fluidproject.org:8080/sakai-imagegallery-tool/component-templates/html/Lightbox.html>
* tab to the Lightbox
* neither tab nor shift-tab move focus from the Lightbox

        