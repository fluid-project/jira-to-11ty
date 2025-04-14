---json
{
  "title": "FLUID-3974",
  "summary": "Default text in dropdown inline edit is not one of the selectable options (bug or feature?)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "James Yoon",
  "date": "2010-12-20T16:10:07.868-0500",
  "updated": "2016-11-15T17:15:34.056-0500",
  "versions": [
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "IE6, IE7, IE8, Chrome 8, FF3.6 in Windows XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T12:46:57.836-0400",
      "body": "I've noticed this before: The default text isn't even in the drop-down list. I think this is just bad design of the demo.\n"
    }
  ]
}
---
Default text in the manual test for dropdown inline editor doesn't show up in the dropdown.

To reproduce:\
1\. Visit <http://build.fluidproject.org/infusion/tests/manual-tests/html/dropdown.html>\
2\. Note the default text, "Apocatastasis"\
3\. Activate the dropdown\
4\. "Apocatastasis" is absent, although "ApoCATTastasis" is present

        