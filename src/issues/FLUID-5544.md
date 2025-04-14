---json
{
  "title": "FLUID-5544",
  "summary": "Add new \"all-tests\" files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Anastasia Cheetham",
  "date": "2014-10-30T14:11:09.804-0400",
  "updated": "2024-07-25T14:51:23.790-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5516/",
      "key": "FLUID-5516"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5548/",
      "key": "FLUID-5548"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-25T14:51:23.657-0400",
      "body": "I’m not sure this is necessary and we can re-open if we decide to do it later.\n"
    }
  ]
}
---
We want to add "all-tests" files that will run all unit tests at the following levels:\
i) Renderer\
ii) Framework (all of them)\
iii) Component (all of them)

        