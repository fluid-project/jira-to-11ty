---json
{
  "title": "VULAB-101",
  "summary": "Two Clicks When Finishing Test",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-12-01T12:05:31.000-0500",
  "updated": "2014-03-04T08:27:20.891-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-12-01T12:05:42.000-0500",
      "body": "vulab9\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-08T14:17:28.000-0500",
      "body": "this is due to the jquery plugin that is being used. I'll see if I can kill the overlay that is causing the two clicks.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-08T14:21:41.000-0500",
      "body": "I think I'd have to take out the use of a thickbox (the name of the jquery plugin being used) altogether.\n\nBasically its just centering an iFrame so redoing this could solve some of the iframe positioning issues as well.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-08T14:31:23.000-0500",
      "body": "So I've redone the way the iFrame is shown and hidden (using my own jquery code rather then the jquery plugin)\n\nNow there is only one click and the top grey bar (which contained the start/finish links) disappears as it isn't needed once the finish is clicked.\n"
    }
  ]
}
---
When your finished doing the actual TEST (not a survey) the popup for the website requires you click out and THEN click on the "finished" link. This should only be one click.

        