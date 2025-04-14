---json
{
  "title": "FLUID-3960",
  "summary": "Filename on Safari is being cut off at the '.'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2010-12-20T10:21:38.796-0500",
  "updated": "2014-03-03T11:20:14.131-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "Safari 5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:14.130-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
The file name for the downloaded zip file on Firefox contains the version number of infusion including the dot. In Safari the dot and everything following gets removed ending up with a filename that is misleading. Instead of 'infusion-1.3.zip' I get 'infusion-1'.&#x20;

        