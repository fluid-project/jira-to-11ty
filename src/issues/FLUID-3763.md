---json
{
  "title": "FLUID-3763",
  "summary": "Implement sketch of inlineEdit fix using describeby",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-09-29T13:55:08.247-0400",
  "updated": "2010-10-14T13:07:51.073-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:00:31.953-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-07T11:30:02.080-0400",
      "body": "The inline edit has been updated to be more ARIA compliant.  An aria-describedby value is added to the inline edit container and a button role is added to the image button.   This branch is currently in use for the Aegis demo in Seville, Spain.   However, this branch will be deleted on the week of Oct. 10.   See <https://fluidproject.atlassian.net/browse/FLUID-2652#icft=FLUID-2652>. &#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-07T13:16:49.822-0400",
      "body": "Need to remove the branch after Jan has finished using it as a demo at the AEGIS confrence\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-14T10:40:13.023-0400",
      "body": "Solution to <https://fluidproject.atlassian.net/browse/FLUID-2652#icft=FLUID-2652> has been merged to trunk.   The incubator describedby branch is no longer needed\n"
    }
  ]
}
---
Implement the inline Edit fix using an aria-describedby for saving instruction while in edit mode.

        