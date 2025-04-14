---json
{
  "title": "FLUID-2150",
  "summary": "Implement 'Reset' for UI Options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-01-21T08:21:48.000-0500",
  "updated": "2009-02-16T22:46:31.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-11T08:40:01.000-0500",
      "body": "Bug Parade 0.8 release&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-13T14:30:43.000-0500",
      "body": "This code looks good to me.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-13T15:16:50.000-0500",
      "body": "This Reset functionality actually seems to Reset and Save-and-Apply, which it shouldn't.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-13T15:20:47.000-0500",
      "body": "Reset now does NOT save automatically. I've assigned this to Michelle, because I think she should review this, and make sure it seems ok to her.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T21:44:28.000-0500",
      "body": "I've taken a look at Michelle's initial implementation of <https://fluidproject.atlassian.net/browse/FLUID-2150#icft=FLUID-2150> and it looks good. Anastasia's modification is trivial from a code footprint perspective, but does impact the user experience. It seems sensible to me, but Justin should take one more look at this to ensure that it matches our expectations.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T22:46:31.000-0500",
      "body": "The issue appears to be fixed and the behaviour seems to be appropriate using Firefox. For Opera and IE, reseting causes the dialog to close. I am still closing this issue though, as that appears to be more inline with problems trying to get <https://fluidproject.atlassian.net/browse/FLUID-2121#icft=FLUID-2121> resolved.\n"
    }
  ]
}
---
Reset sets the selections back to what they were at the point of integration. There will eventually be mini-resets that will work on individual settings.

        