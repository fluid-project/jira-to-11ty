---json
{
  "title": "ENGAGE-398",
  "summary": "Reading list and grid views with VoiceOver after switching requires tapping on a list or grid item.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Sambhavi Chandrashekar",
  "date": "2010-02-17T15:26:11.000-0500",
  "updated": "2017-12-22T09:44:33.857-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": "iPhone 3GS with OS 3.0 and VoiceOver.\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/ENGAGE-426/",
      "key": "ENGAGE-426"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-427/",
      "key": "ENGAGE-427",
      "summary": "In VoiceOver, when a change to screen UI occurs, labels and layout for swiping do not update"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Sambhavi Chandrashekar",
      "date": "2010-02-24T12:45:01.000-0500",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:33.855-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
When the view on a catalogue screen is switched from list to grid and the page is read using VoiceOver, the reading continues to happen in list format until and unless one item in the grid is tapped. Thereafter the reading happens in grid format.

        