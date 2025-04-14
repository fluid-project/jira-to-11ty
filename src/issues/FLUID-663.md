---json
{
  "title": "FLUID-663",
  "summary": "Buttons do not have enough contrast when keyboard focused",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2008-05-28T16:06:11.000-0400",
  "updated": "2008-09-16T14:46:57.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-892/",
      "key": "FLUID-892",
      "summary": "Not enough focus contrast for Uploader in IE"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-666/",
      "key": "FLUID-666",
      "summary": "Enhance Uploader accessibility"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-663/663-btn-hilite.png",
      "filename": "663-btn-hilite.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-663/Fluid-663.PNG",
      "filename": "Fluid-663.PNG"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-05-29T19:14:58.000-0400",
      "body": "Added the proper focus formatting for the buttons\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-03T14:29:34.000-0400",
      "body": "Confirmed fixed.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-03T14:30:46.000-0400",
      "body": "Was too hasty in closing this bug. IE7 has issues.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-03T14:32:26.000-0400",
      "body": "Not enough contrast in IE7. Cancel button is in focus.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-06-17T12:53:09.000-0400",
      "body": "File 663-btn-hilite.png shows new button highlight for keyboard interaction under IE6. Should be the same for IE7 but I haven't tested it\n"
    }
  ]
}
---
If using the keyboard to navigate the uploader, focusing the buttons does not provide enough contrast. Hard to tell which button will be activated visually.

        