---json
{
  "title": "FLUID-3917",
  "summary": "After de-hovering over an in-focus simple inline edit, highlight styling is lost",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "James Yoon",
  "date": "2010-12-16T11:30:00.554-0500",
  "updated": "2014-07-30T15:49:53.782-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Windows XP: Chrome 8, FF 3.6, IE 6, IE 7, IE 8\\\nWindows 7: FF3.6, IE8\\\nFF 30 (Mac OS 10.9)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:00:03.415-0400",
      "body": "James, could you let us know what **should** be happening with the highlights?\n"
    }
  ]
}
---
To reproduce:

1\. With the keyboard, tab to a simple inline edit component.\
2\. With the mouse, hover over the component.\
3\. With the mouse, hover past the component.\
4\. Highlight styling is lost, but outline remains.

\[Also of interest,\
5\. Leave the window (i.e., go to another window)\
6\. Return to the window with simple inline edit.\
7\. Highlight styling is recovered.]

        