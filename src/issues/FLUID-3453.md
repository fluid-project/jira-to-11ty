---json
{
  "title": "FLUID-3453",
  "summary": "rethink the value for postClass->minified in postClass.php in the Infusion Builder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-12-18T15:20:57.000-0500",
  "updated": "2014-03-03T11:20:13.173-0500",
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
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.172-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
The value for postClass->minified is a boolean, true or false value. However throughout the code we often need to use an integer value. So the boolean value is perhaps not as useful as initially anticipated. In fact, it is often confusing, as in the case where you have to use !$mininifiy to represent source. It may be just as easy and less confusing to use the string values defined in PostClass.php (SOURCE and MINIFIED).

        