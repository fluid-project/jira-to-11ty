---json
{
  "title": "FLUID-2440",
  "summary": "dropdown inline editor - no cursor change",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Herb Wideman",
  "date": "2009-04-01T12:20:32.000-0400",
  "updated": "2014-07-09T09:49:39.304-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.6  (Win XP, Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2270/",
      "key": "FLUID-2270"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2441/",
      "key": "FLUID-2441"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T10:03:43.392-0500",
      "body": "Doesn't seem to affect Opera 12 in Win7.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-09T09:49:39.292-0400",
      "body": "Can no longe reproduce the issue. Although it is a bit confusing about where the issue is as the description mentions safari and the environments mention opera. Safari 7 is working. Opera is no longer supported.\n"
    }
  ]
}
---
The cursor icon does not chcnage from a pointer to a hand when you move the cursor over the an inline edit dropdown menu.

To test:\
1\. Open in Safari: <http://build.fluidproject.org/infusion/tests/manual-tests/html/dropdown.html>\
2\. Hover over editable text.

        