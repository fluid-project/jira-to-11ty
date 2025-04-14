---json
{
  "title": "FLUID-5063",
  "summary": "Simplify UIO model by removing \"selections\" layer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2013-06-20T14:06:53.165-0400",
  "updated": "2013-08-15T07:44:21.966-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4907/",
      "key": "FLUID-4907",
      "summary": "Create the UIO builder responsible for mapping from UIO Schema to enactors and settingsPanels"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-07-18T15:29:05.386-0400",
      "body": "Will be resolved with work for <https://fluidproject.atlassian.net/browse/FLUID-4907#icft=FLUID-4907>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-15T07:44:16.234-0400",
      "body": "Addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-4907#icft=FLUID-4907>\n"
    }
  ]
}
---
The current UIOptions component has a model structure as:

model: {\
selections: {\
textSize: 1,\
toc: false,\
...\
}\
}

It can be simplified by having the model contain the settings directly without "selections" layer:

model: {\
textSize: 1,\
toc: false,\
...\
}

        