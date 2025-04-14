---json
{
  "title": "FLUID-5008",
  "summary": "fssReset, fssText, fssLayout, fssThemes builds don't work",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2013-05-02T11:54:20.366-0400",
  "updated": "2014-04-02T16:40:52.003-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts",
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:40:51.992-0400",
      "body": "FSS is deprecated\n"
    }
  ]
}
---
According to the wiki ( <http://wiki.fluidproject.org/display/fluid/Custom+Infusion+Builds+With+Ant#CustomInfusionBuildsWithAnt-Modules> ) we should be able to make custom builds with just portions of the fss (fssReset, fssLayout, fssText, fssThemes). However, when you try to run them, an error is thrown stating that the dependency file is missing. I looked through the repo and can't find either the dependency files nor the property in the build.properties file.

        