---json
{
  "title": "FLUID-1584",
  "summary": "Inline editable text in example 2 on springboard flashes between being highlighted and not highlighted.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-18T11:31:29.000-0400",
  "updated": "2011-01-14T09:53:23.488-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF2 on Mac OS X 10.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:59:50.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-22T14:07:13.000-0400",
      "body": "Inline Edit stuck in perpertual loop due to stylistic changes on mouseover/mouseout. Removed changes causing the loop.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T15:27:08.000-0400",
      "body": "Verified fix using:\n\nFF2 on Mac OS X 10.5\n"
    }
  ]
}
---
Mouse over inline edit example 2 - customized edit field, when placing mouse over the 's' of the bold text in the word 'dogs' the the inline editable text flashes between highlighted and not highlighted.&#x20;

Steps to reproduce:&#x20;

1\. Open url: <http://build.fluidproject.org/fluid/fluid-components/html/InlineEdit.html>

2\. Mouse over inline edit example 2 on the 's' of the bolded word 'dogs.&#x20;

3\. The inline editable text flashes between being highlighted and not highlighted.&#x20;

        