---json
{
  "title": "FLUID-4292",
  "summary": "Increasing font size does not expand input selectors to accommodate text in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2011-06-16T14:13:01.010-0400",
  "updated": "2014-06-25T16:01:17.574-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": "IE8 - Win7 - affected\\\nFF4 - Win7 - not affected\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4292/uio-non-scaling-input-selector-IE8.PNG",
      "filename": "uio-non-scaling-input-selector-IE8.PNG"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:01:17.562-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
Increasing the text size doesn't increase the input selector box in IE8 causing the selector's text to be cropped at the edge of the input container.

Seems to affect Fat Panel only.

        