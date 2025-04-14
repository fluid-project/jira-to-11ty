---json
{
  "title": "ENGAGE-30",
  "summary": "Create a flip picture artifact view",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "y z",
  "reporter": "Armin Krauss",
  "date": "2009-07-21T15:07:26.000-0400",
  "updated": "2009-11-03T14:30:08.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Armin Krauss",
      "date": "2009-08-18T15:12:50.000-0400",
      "body": "Picture flipping is a copy of the artifact.html with some adoptions to make the flipping work.\n\nGoal is to merge artifact.html and artifact\\_picflip.html into one html file.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-09T18:41:58.000-0400",
      "body": "Yura, I'm assigning this one to you, but I think we're probably not going to do it for this release. Justin and Yura, can you look at it and verify that we will/won't fix for 0.1? If not, we can probably take it off the bug parade.\n"
    },
    {
      "author": "y z",
      "date": "2009-10-10T08:59:19.000-0400",
      "body": "I don't think there is an alternative view in the latest draft 8 of the wireframes so I think it indeed can be taken off the bug parade.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T16:28:36.000-0400",
      "body": "Picture flipping is no longer a part of the latest mobile wireframes. Let's retire the preliminary code we have in the repository and not implement anything further until this feature is required.\n"
    }
  ]
}
---
According to the wireframes (<http://wiki.fluidproject.org/display/fluid/Mobile+wireframes>) there should\
be an alternative artifact view.

This view is basically a picture with a button in a corner. Once the button is pressed the picture flips\
over and shows the details of the artifact.

        