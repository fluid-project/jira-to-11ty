---json
{
  "title": "FLUID-4515",
  "summary": "The zip file should unpack to an Infusion directory",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-10-11T13:45:19.156-0400",
  "updated": "2014-03-02T14:30:58.005-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-02T14:30:57.986-0500",
      "body": "This has been resolved with <https://fluidproject.atlassian.net/browse/FLUID-5120#icft=FLUID-5120>\n"
    }
  ]
}
---
Currently all of the resources in our release bundle are at the top level. Greg has mentioned that often when you download a release it unpacks with the contents in a folder named after the product. In our case that would be having the resources in an Infusion directory.

        