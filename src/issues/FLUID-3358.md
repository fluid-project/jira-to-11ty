---json
{
  "title": "FLUID-3358",
  "summary": "refactor php code to handle contents of build properties better",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-11-04T14:51:37.000-0500",
  "updated": "2014-03-03T11:20:14.184-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3213/",
      "key": "FLUID-3213",
      "summary": "add class to parse build.properties and check for formatting errors"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3356/",
      "key": "FLUID-3356"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:14.183-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
In the infusion builder php code the build properties file is retrieved and parsed several times to obtain various data. The code could be refactored so that this happens less frequently and the retrieved data is stored for use by other parts of the code. Ideally a class could handle this process.

        