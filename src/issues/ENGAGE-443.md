---json
{
  "title": "ENGAGE-443",
  "summary": "When using voice over in iphone More/Less toggle in artifact description is redundant and description is announced fully.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "y z",
  "date": "2010-02-23T15:25:21.000-0500",
  "updated": "2017-12-22T09:44:17.688-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-02-23T15:26:12.000-0500",
      "body": "a11y issue\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-23T15:35:08.000-0500",
      "body": "This is an interesting issue where we have to balance the usability between sighted and VO users.\n\nFor the VO user, my feeling is that we should allow the description to be fully readable (whether it's visually collapsed or expanded), and prevent swiping over the \"more\" and \"less\" buttons/links. The fact that the description can be fully read without surrendering screen real estate is an affordance VO users have over other users.\n\nBut I can see a boundary use case where the device's primary user is a VO user, and he/she has listened to the description and wants to show it to his/her sighted friend to read. How, then, would the VO user expand the description for his/her friend?\n\nThe middle-of-road solution would be to force VO users to read a truncated description (just like sighted users), and expand it to read the rest (again, just like sighted users).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:17.686-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Because the part of the description is hidden using max-height and not display none, the hidden part is actually accessible by the screen reader on artifact page even if the description is collapsed.

        