---json
{
  "title": "FLUID-3867",
  "summary": "Blue border around inline edit persists after going into edit mode. ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "James Yoon",
  "reporter": "Michelle D'Souza",
  "date": "2010-11-30T16:29:28.942-0500",
  "updated": "2014-07-30T15:37:32.685-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari and Firefox\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3861/",
      "key": "FLUID-3861"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2010-12-01T11:10:49.443-0500",
      "body": "I believe this issue is fixed in <https://fluidproject.atlassian.net/browse/FLUID-3861#icft=FLUID-3861>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-11T10:51:50.437-0500",
      "body": "Tested by James. Appears to still be an issue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:24:14.082-0400",
      "body": "James, I'm not sure this is still an issue but that's probably because I can't quite tell what I should be looking for. Could you double-check, and if it's still an issue maybe attach some screenshots, and a description of what should be happening? If not, please resolve.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-30T15:37:32.663-0400",
      "body": "The blue border is the browser's default focus styling.\n"
    }
  ]
}
---
In Safari, a blue border around the inline edit persists after going into edit mode. In Firefox, the same is true, but only for the first inline edit on the demo. \
This issue was found by James while testing FLUID-3801

        