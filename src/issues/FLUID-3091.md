---json
{
  "title": "FLUID-3091",
  "summary": "Need to click twice to active TinyMCE rich text inline edit for the second time in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Michelle D'Souza",
  "date": "2009-08-11T14:00:41.000-0400",
  "updated": "2014-07-11T15:05:54.050-0400",
  "versions": [
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 3.2, Safari 4 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-11T15:05:54.048-0400",
      "body": "Couldn't reproduce with Safari 7.\n"
    }
  ]
}
---
To recreate the bug:

1\. Open the inline edit quick start example in Safari\
2\. Select the "Example 4" and activate the rich text inline edit\
3\. Select cancel or save to deactivate the inline edit\
4\. Select the "Example 4" again and try to reactivate the inline edit

The inline edit will not be activated. You will need to select "Example 4" again in order to activate the inline edit.&#x20;

        