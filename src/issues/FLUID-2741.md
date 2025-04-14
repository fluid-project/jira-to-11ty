---json
{
  "title": "FLUID-2741",
  "summary": "JAWS does not read labels associated with radio buttons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Benjamin",
  "reporter": "Alison Benjamin",
  "date": "2009-05-15T15:48:28.000-0400",
  "updated": "2011-02-28T16:45:15.589-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF3 / Win XP \\\nIE 8 / Win XP&#x20;\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2399/",
      "key": "FLUID-2399"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2741/FLUID-2399+FLUID-2738.patch",
      "filename": "FLUID-2399+FLUID-2738.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2741/fluid-2741.txt",
      "filename": "fluid-2741.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-16T13:25:00.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-16T13:25:08.000-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-05-20T10:13:22.000-0400",
      "body": "patch uses fieldset & legend tags. Tested & works with JAWS.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-20T10:31:50.000-0400",
      "body": "I committed Alison's patch\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-20T21:26:24.000-0400",
      "body": "Note that the current markup violates the XHTML DTD, since \"legend\" is not a legal occupant of \"label\". However, the opposite combination is still legal: \\\n<http://www.december.com/html/x1/element/legend.html>\\\nCould we check that swapping \"legend\" and \"label\" still leaves the labels readable by JAWS and if so do that? Clearly if that combination does not work we will regrettably have to violate XHTML, but we should try to comply if we can.\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-05-21T11:05:51.000-0400",
      "body": "This patch, which Jacob committed, corrects how 2741 didn't have valid HTML. Note that <https://fluidproject.atlassian.net/browse/FLUID-2399#icft=FLUID-2399> duplicates 2741 and has been closed. I am re-testing with JAWS to evaluate the accessibility.&#x20;\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-05-22T11:19:02.000-0400",
      "body": "I've just been testing with JAWS, and experimented with some different strategies (using text hidden in offscreen spans, adding titles to inputs, and using aria-labelledby). In JAWS forms mode, the legend/fieldset combination was most successful across browsers (IE 6,7,8 & FF3). The caveat is I don't know how other screen-readers will deal with this problem. User testing with users who use diverse ATs could offer more insight.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:15.587-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
Under "Easier to see" there are two sets of radio buttons:&#x20;

JAWS does not read the label associated with the buttons (e.g. "Background Images" & "Simplified Layout" ). &#x20;

        