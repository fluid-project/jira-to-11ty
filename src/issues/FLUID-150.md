---json
{
  "title": "FLUID-150",
  "summary": "Drag and drop is slow in IE6, but not IE7.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Jonathan Hung",
  "date": "2007-12-17T16:52:33.000-0500",
  "updated": "2008-04-09T10:25:08.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Windows XP with IE6 and IE7 (not dual-loading on a single machine).\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-12-17T16:53:27.000-0500",
      "body": "I've never noticed this being an issue on machines that are \"dual-loading\" IE6 and IE7.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-09T10:25:08.000-0400",
      "body": "Appears to be fixed on the original hardware used in this bug.\n"
    }
  ]
}
---
Drag and drop is very slow using the Lightbox.html page in IE6 despite having more than sufficient hardware specifications (T7600 Core 2 Duo, 1.5GB RAM).\
In contrast, IE7 is very responsive on a much slower and older machine.

        