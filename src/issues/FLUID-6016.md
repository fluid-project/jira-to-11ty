---json
{
  "title": "FLUID-6016",
  "summary": "Focus not on an element after making a selection in dropdown inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-01T17:01:46.902-0400",
  "updated": "2017-01-11T12:31:19.550-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 10 ( macOS 10.12 )\n",
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

1\. Open the [dropdown inline edit manual test](http://build.fluidproject.org/infusion/tests/manual-tests/components/inlineEdit/dropdown/)\
2\. Using the keyboard focus the dropdown inline edit\
3\. Press the "enter" key to go into edit mode\
4\. Select an option\
5\. Press the "enter" key to save the selection&#x20;

Notice that no elements appear to have focus. If you were to cancel the selection instead of saving it. The dropdown would close and focus would remain.&#x20;

        