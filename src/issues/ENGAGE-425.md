---json
{
  "title": "ENGAGE-425",
  "summary": "In VoiceOver, navigation list items are announced as three separate links instead of one",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-02-19T16:51:44.000-0500",
  "updated": "2017-12-22T09:44:32.080-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-02-19T17:02:27.000-0500",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-01T15:43:36.000-0500",
      "body": "Currently there is a single anchor with several elements inside. VoiceOver seems to be reaching and reading each of these elements and reading them as link, instead of reading all of them together as one.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:32.079-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Each item in a navigation list (used under Exhibitions Browse, etc.) is a single link, but it's announced in VoiceOver as three separate links. For instance, in Exhibitions Browse, we get: 1) the image, 2) the exhibition name, 3) the exhibition dates. The accessibility of this can be improved because right now VO users do not know that going to an exhibition date link goes to the same place as the exhibition name link.

        