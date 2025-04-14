---json
{
  "title": "FLUID-6422",
  "summary": "The textNodeParser's hasTextToRead mistakenly thinks containers with floated elements are hidden",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2019-11-01T10:55:01.842-0400",
  "updated": "2019-11-06T10:44:23.892-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2019-11-05T14:16:25.790-0500",
      "body": "@@Justin Obara, could you describe how to reproduce the problem? Thanks.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-11-05T15:56:25.855-0500",
      "body": "@@Cindy Li if using the UIO+ chrome extension, you an go to the morphic.world site and enable the syllabification preference. With the bug, the content in the middle of the page is not syllabified, while the text at the top and bottom is. \n\nIf you want to try in infusion, you could modify the prefs framework demo have a container that only held floating elements.\n\nThe PR includes test cases for the issue, so you could also grab those and try them with master.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2019-11-06T10:44:19.359-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/966) has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/ff0a35500837bbc1e4652c708107e5aed4637dd5).\n"
    }
  ]
}
---
The fluid.textNodeParser.hasTextToRead function attempts to see if text is hidden by checking the elements offsetHeight. However, if the element only contains floated elements, it will have an offsetHeight of 0, even if those child elements are visible. 

A more robust check for visibility needs to be done to determine if the text is actually visible. 

        