---json
{
  "title": "FLUID-3810",
  "summary": "Simple Inline Edit Demo: Button images not appearing in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-10-18T15:27:34.205-0400",
  "updated": "2010-12-01T16:58:42.142-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3817/",
      "key": "FLUID-3817"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3810/inline-edit-IE8-caption-position.png",
      "filename": "inline-edit-IE8-caption-position.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-21T08:53:54.672-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-21T10:30:42.897-0400",
      "body": "This appears to have happened because the extensions on  the images were changed from png  to jpeg, without converting the files.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-02T14:28:52.836-0400",
      "body": "Committed Mike's patch ( patchRefactored.txt ) from <https://fluidproject.atlassian.net/browse/FLUID-3821#icft=FLUID-3821>. This patch also fixed the icons used.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-01T16:58:42.136-0500",
      "body": "I code reviewed this with a whole group of Inline Edit JIRA issues for 1.3 and it is fine.&#x20;\n"
    }
  ]
}
---
In IE 8, the images for the Edit, Undo, and Redo buttons are not appearing for Simple Inline Edit demo.

        