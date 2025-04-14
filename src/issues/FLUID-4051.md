---json
{
  "title": "FLUID-4051",
  "summary": "Add a \"flash plugin required\" OR \"switch to HTML5 browser\" msg to IE users w/o flash",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2011-02-03T16:53:05.505-0500",
  "updated": "2017-01-16T14:08:06.227-0500",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Win, IE\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:26:44.902-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>. However we could still add a message to use a browser that supports HTML5 upload.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-16T14:08:06.225-0500",
      "body": "HTML5 Uploading now works on all supported browsers.\n"
    }
  ]
}
---
I set up a VM with IE6 which didn't have flash on it, and got the no-js basic version of Uploader. Took me a bit to realise it was cos of not having flash - would be nice to have a message that says the plugin is required, or, instead of encouraging flash usage, to switch to an html5 supporting browser.

        