---json
{
  "title": "FLUID-2116",
  "summary": "The dropdown inline edit appears in the top left corner when clicked on",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Escalated",
  "reporter": "Justin Obara",
  "date": "2009-01-13T11:20:41.000-0500",
  "updated": "2014-06-25T16:16:10.468-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1966/",
      "key": "FLUID-1966"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-13T11:21:46.000-0500",
      "body": "This appears to be an Opera bug, see the following pages.\n\n<http://groups.google.com/group/comp.infosystems.www.authoring.stylesheets/browse_thread/thread/4b00c8815bfc8c5f>\n\nitem 33 on this page\\\n<http://www.gtalbot.org/BrowserBugsSection/Opera9Bugs/>\n\n* the list is frequently updated leading to change in numbers. The item has name \"New nested absolute positioning\"\n"
    }
  ]
}
---
The dropdown inline edit appears in the top left corner when clicked on

Steps to reproduce:

1\) open the Inline Edit: dropdown page from the manual test page:\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/dropdown.html>

2\) Using the mouse click on the Inline Edit dropdown field

Notice that it appears in the top left corner, instead of remaining where it is on the page.

        