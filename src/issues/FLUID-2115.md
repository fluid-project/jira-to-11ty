---json
{
  "title": "FLUID-2115",
  "summary": "Delete key mapped to go back a page, cannot kbd delete an uploader queue file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Gonzalo David Silverio",
  "date": "2009-01-13T11:16:27.000-0500",
  "updated": "2009-01-19T14:41:07.000-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 (OSX10.5) Flash 9\\\nFF3 (OSX10.5) Flash 9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-19T14:41:07.000-0500",
      "body": "On a Mac keyboard there are two concepts of delete.&#x20;\n\n1\\) one is similar to the backspace on a pc keyboard&#x20;\n\n2\\) one is similar to the delete key on a pc keyboard\n\nthe later is what is refered to in the test plan. If you have a keyboard that doesn't  have two delete keys, I believe you can perform this act with a modifier key such as command-delete\n"
    }
  ]
}
---
If the delete key referenced in the test plan is the "Delete" key - the later goes back a page instead of removing a file from the queue. Server and Demo versions.

        