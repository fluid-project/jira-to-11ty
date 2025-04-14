---json
{
  "title": "FLUID-2358",
  "summary": "Changing radio button selection throws an error: using IE 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-03-17T09:41:05.000-0400",
  "updated": "2009-03-20T11:13:32.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2313/",
      "key": "FLUID-2313"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T09:41:18.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T11:13:32.000-0400",
      "body": "Appears to have been fixed with one of the many bug parade fixes\n\nTested using:\n\nIE7 (Win Vista)\n"
    }
  ]
}
---
Changing radio button selection throws an error: using IE

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site

2\) Open the UI Options dialog

3\) Change one of the radio button selections

Notice that an error is thrown (Note that you may have to click somewhere else, before you can see the error thrown)

Error: 'previewEnhancer' is null or not an object\
Line: 219\
File: UIOptions.js

        