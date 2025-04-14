---json
{
  "title": "FLUID-2037",
  "summary": "Springboard:  Very difficult to \"pick up\" an object in the semi-sortable list in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Daphne Ogle",
  "date": "2008-12-17T21:22:31.000-0500",
  "updated": "2013-04-11T17:53:02.912-0400",
  "versions": [
    "0.6beta1",
    "0.6"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "Mac OSX 10.5, Safari 3.1.2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-19T09:15:33.000-0500",
      "body": "I believe this is because some of them aren't sortable. The issue may be that the pointer changes still over all elements instead of just the sortable ones\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-19T13:05:43.000-0500",
      "body": "The cursor for the orderable elements is now different from the non-orderable ones. I cannot test the cursor on a Safari for the Mac, but the cursor shows up in Safari for XP. Since nobody seems to be reading the context anyways, I think it may be time for 2 explicitly different examples of this functionality.\n"
    }
  ]
}
---
The mouse changes to crosses as if I could pick up the object but when I try it highlights rather than pick up.  I was able to pick up about 1 in 12 times.  Doesn't seem to be the case with tabs or the grid.

        