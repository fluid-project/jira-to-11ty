---json
{
  "title": "FLUID-3813",
  "summary": "NVDA reads out document filename twice before reading edited text in IE8",
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
  "reporter": "Jonathan Hung",
  "date": "2010-10-18T15:40:23.422-0400",
  "updated": "2010-12-08T16:43:30.083-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win7, IE8, NVDA 2010.1\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3815/",
      "key": "FLUID-3815"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-20T10:06:05.086-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    }
  ]
}
---
In IE8, after performing an edit, NVDA would repeat the document's filename twice before reading out the new value of the text.

Example:

"Inline Edit document. Inline Edit document. \<New edit text>..." (v1.3 demo).\
"CD database example. CD database example. \<New edit text> ..." (v1.2.1 demo).

        