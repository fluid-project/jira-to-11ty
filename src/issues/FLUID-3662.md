---json
{
  "title": "FLUID-3662",
  "summary": "UI Options unit tests 3.4 is failing",
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
  "reporter": "Justin Obara",
  "date": "2010-05-31T12:11:43.459-0400",
  "updated": "2013-10-04T10:21:52.353-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-05-31T12:38:22.497-0400",
      "body": "The test is failing because it uses an id selector to pull out a DOM node for testing. The id is under the control of the renderer and the renderer has changed the id that it generates.\n"
    }
  ]
}
---
The UI Options unit tests dies on the third test case  "UIOptions Tests module: Refresh View" at the 4 test with the following result.\
Died on test #4: fontStyleSelection\[0] is undefined

        