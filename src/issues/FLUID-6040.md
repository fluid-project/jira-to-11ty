---json
{
  "title": "FLUID-6040",
  "summary": "NVDA does not automatically change to forms mode when entering an inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-07T15:50:49.786-0500",
  "updated": "2017-01-11T12:31:18.435-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 11 ( Win 8.1, NVDA 2016.2.1)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\. Ensure NVDA is enabled\
2\. Open the [Inline Edit demo](http://build.fluidproject.org/infusion/demos/inlineEdit/)\
3\. Using the keyboard navigate to an inline edit\
4\. Press the "Enter" key to change to edit mode

Notice that you are not able to add any text because NVDA is still in browse mode. Pressing the NVDA+Space key combination will manually switch modes and allow you to enter text.

        