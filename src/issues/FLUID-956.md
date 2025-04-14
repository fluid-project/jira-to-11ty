---json
{
  "title": "FLUID-956",
  "summary": "Can only tab to the \"Add Files\" button in the pop-up version of uploader on first tab cycle, using IE",
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
  "date": "2008-07-21T15:57:53.000-0400",
  "updated": "2008-07-28T09:01:55.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE6, IE7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-873/",
      "key": "FLUID-873",
      "summary": "Tabbing through uploader breaks keyboard navigation, using IE6"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-955/",
      "key": "FLUID-955",
      "summary": "Can only tab to the buttons in uploader on first tab cycle, using IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-24T15:19:02.000-0400",
      "body": "This doesn't occur if the Uploader is open\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T09:01:55.000-0400",
      "body": "Appears to be fixed, may have been resolved along with fix to Fluid-873.\n\nVerified using:\n\nIE6, IE7(Win XP)&#x20;\n"
    }
  ]
}
---
Can only tab to the "Add Files" button in the pop-up version of uploader on first tab cycle.

Steps to Reproduce:

1\) Open the pop-up version of the uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

3\) Tap the tab key. Notice that after cycling through all the elements once, you are unable to tab back to the "Add Files" button

        