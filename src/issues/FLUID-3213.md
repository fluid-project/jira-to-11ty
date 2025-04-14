---json
{
  "title": "FLUID-3213",
  "summary": "add class to parse build.properties and check for formatting errors",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-09-29T15:38:30.000-0400",
  "updated": "2014-03-03T11:20:13.878-0500",
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
      "url": "/browse/FLUID-3358/",
      "key": "FLUID-3358"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3201/",
      "key": "FLUID-3201"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.877-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Currently there are 13 occurrences of using regular expressions to retrieve information from the build.properties file. They are all reliant on build.properties having a specific format - and there is no error checking. So, if someone changes something in build.properties (for instance the format of the fluid\_version line), then the data required will not be found and the Builder might not perform as expected.

Jacob suggests creating a class to perform operations on the build.properties file and incorporate the error checking into that class.&#x20;

        