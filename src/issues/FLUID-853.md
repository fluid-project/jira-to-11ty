---json
{
  "title": "FLUID-853",
  "summary": "Make Inline Edit 'invitation text' visually different than regular text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-03T21:12:29.000-0400",
  "updated": "2009-06-03T13:43:46.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-852/",
      "key": "FLUID-852",
      "summary": "Implement pluggable \"invitation text\" for Inline Edit"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-853/FLUID-853.patch.txt",
      "filename": "FLUID-853.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-04T18:32:01.000-0400",
      "body": "I've attached a path file that adds an 'invitationText' style that is applied to the invitation text when it is visible. This is on top of the patch applied for <https://fluidproject.atlassian.net/browse/FLUID-852#icft=FLUID-852>.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-15T20:32:54.000-0400",
      "body": "Fixed, and merged from the branch back into trunk.\n"
    }
  ]
}
---
The invitation text should be dimmed, or other wise different in appearance than 'normal' text.

dev-iteration38

        