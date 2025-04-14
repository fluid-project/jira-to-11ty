---json
{
  "title": "FLUID-2285",
  "summary": "Integrate doc-generation process into build and deploy processes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2009-02-23T11:27:25.000-0500",
  "updated": "2011-01-20T15:09:48.300-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2283/",
      "key": "FLUID-2283",
      "summary": "Evaluate alternatives and select a solution"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2286/",
      "key": "FLUID-2286",
      "summary": "Make generated documenation publicly available"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2286/",
      "key": "FLUID-2286"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The documentation-generation process should be integrated into the build process. This will likely involve installing the generation software on the continuum server and adding the generation process to our nightly (or hourly?) build scripts, and deploying the html to its home.

        