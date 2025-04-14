---json
{
  "title": "FLUID-3803",
  "summary": "Tweak the instruction text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-10-18T14:17:02.431-0400",
  "updated": "2010-10-25T15:28:50.880-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3803/fluid-3803.patch.txt",
      "filename": "fluid-3803.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-18T14:17:38.634-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Jen Chow",
      "date": "2010-10-25T14:54:08.725-0400",
      "body": "attached a patch (fluid-3803.patch.txt) to fix all instruction texts as per email thread on in-line edit (<http://old.nabble.com/Inline-Edit-pre-1.3%3A-Instruction-text-changes-to30010625.html>)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-25T15:28:50.877-0400",
      "body": "Committed Jen's patch ( fluid-3803.patch.txt ) which updates the instruction text for the inlineEdit component and demo. Made one small change which was to remove all of the string overrides from the demo. I ran the unit test, which are all still passing and tried the demos which also seem fine.\n"
    }
  ]
}
---
Tweak the instruction and tooltip text to be more user friendly.

        