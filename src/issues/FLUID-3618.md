---json
{
  "title": "FLUID-3618",
  "summary": "When updating something in UI Options and then saving the selection, next time you try opening the UI Options it takes 2 clicks or keyboard strokes to open it again.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "y z",
  "date": "2010-04-08T11:58:34.000-0400",
  "updated": "2013-10-04T10:22:24.459-0400",
  "versions": [
    "1.2beta1",
    "1.2",
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "IE 8, Chrome 4, FF 3.6 / XP\\\nMac OS 3.6, FF 3.6 and Safari 5&#x20;\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4085/",
      "key": "FLUID-4085"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4115/",
      "key": "FLUID-4115"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-17T14:15:06.325-0500",
      "body": "I'm still noticing this issue while testing for the 1.3 release.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-03-10T13:50:31.216-0500",
      "body": "I have resolved this issue in the <https://fluidproject.atlassian.net/browse/FLUID-2616#icft=FLUID-2616> branch of my Github fork and submitted a pull request to Michelle.\\\n<https://github.com/fluid-project/infusion/pull/23>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T11:51:10.331-0400",
      "body": "pushed into the project repo at 1bf29cc5b032cd5ca1f623ac04b13b7e28f6f96d\n"
    }
  ]
}
---
When updating something in UI Options and then saving the selection, next time you try opening the UI Options it takes 2 clicks or keyboard strokes to open it again.

        