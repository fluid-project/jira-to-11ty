---json
{
  "title": "FLUID-2379",
  "summary": "[Uploader] The total file progress bar no longer has ARIA roles and states applied to it.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-03-18T12:11:25.000-0400",
  "updated": "2009-03-24T18:32:43.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2373/",
      "key": "FLUID-2373",
      "summary": "switch from using jAria to aria support built into ui.core"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2379/FLUID-2373&2379.a.patch",
      "filename": "FLUID-2373&2379.a.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-03-18T13:03:27.000-0400",
      "body": "Patches purges the ARIA plug-in for ui-core.js\\\nand fixing the missing ARIA from total progress.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-18T15:55:16.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-18T17:24:19.000-0400",
      "body": "add aria labelledby property to the flash button as well.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-19T18:58:32.000-0400",
      "body": "upgraded to the ui.core.js implementation and added back in the selector for the ariaElement to progress\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-03-24T18:25:12.000-0400",
      "body": "I've reviewed Eli's changes for the issue and they look fine. +1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-24T18:32:43.000-0400",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5)\n"
    }
  ]
}
---
Some time in the last few builds, the total-progress bar lost all it's ARIA feedback. This was probably because a className changed.&#x20;

Anyway, the fix is to explicitly set the ariaElement selector in the options for the Uploader.&#x20;

        