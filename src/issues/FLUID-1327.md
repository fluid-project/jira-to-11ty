---json
{
  "title": "FLUID-1327",
  "summary": "Reorderer - valid/invalid notice based on mouse loc, not avatar loc",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jacob Farber",
  "date": "2008-08-27T14:42:39.000-0400",
  "updated": "2008-09-11T10:05:16.000-0400",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1335/",
      "key": "FLUID-1335"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T17:17:45.000-0400",
      "body": "Fixed at revision 5510\n"
    }
  ]
}
---
When moving the avatar, the notice that the drop is invalid only appears if the mouse is within the locked portlet, not including the avatar.

        