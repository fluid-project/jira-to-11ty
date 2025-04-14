---json
{
  "title": "FLUID-1054",
  "summary": "Uploader dependencies need updating in sample files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-29T10:57:25.000-0400",
  "updated": "2009-06-03T13:43:47.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-08-05T19:47:56.000-0400",
      "body": "The pop-up version needs ui.draggable in order for the dialog to be draggable.&#x20;\n\nAlso noticed that inline/uploader.html still references jquery.tabindex.js\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-08-05T20:03:47.000-0400",
      "body": "Removed references to jquery.tabindex.js and to ui.core.js in uploader/inline/uploader.js\n"
    }
  ]
}
---
Currently, the Uploader sample files include jQuery JS files that are not required for the Uploader to work:

* The inline version (sample-code/uploader/inline/uploader.html) include ui.core.js
* The pop-up version (sample-code/uploader/pop-up/index.html) includes ui.draggable.js

These file references should be removed.

        