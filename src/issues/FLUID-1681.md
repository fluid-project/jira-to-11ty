---json
{
  "title": "FLUID-1681",
  "summary": "OSDPL Styling: Examine the Fluid-Clean theme and implement its use if required",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-10-14T14:11:06.000-0400",
  "updated": "2008-10-29T10:44:47.000-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-595/",
      "key": "FLUID-595",
      "summary": "OSDPL: Remove \"in\" from OSDPL pages that aren't in a category"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-599/",
      "key": "FLUID-599",
      "summary": "OSDPL Styling: Enlarging text size on IE and FF creates unexpected results."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1293/",
      "key": "FLUID-1293",
      "summary": "OSDPL Stlying: Story teaser block renders story titles too large"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1296/",
      "key": "FLUID-1296",
      "summary": "OSDPL Styling: Remove blank lines before and after \"in\" in content page headers."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-10-14T14:11:18.000-0400",
      "body": "Iteration20\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-21T14:34:36.000-0400",
      "body": "After some reviewing, we will go with the Clean theme as it fixes a number of related bugs.\n"
    }
  ]
}
---
Switching to a variation on the Clean theme for Drupal has solved a number of styling problems (FLUID 595, Fluid 599, Fluid 1296, Fluid 1293). We should examine the Clean theme further and decide if it is what we want to use from now on.

Modify the theme as necessary, including adding a Fluid brand to the layout.

        