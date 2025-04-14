---json
{
  "title": "FLUID-3450",
  "summary": "in Infusion Builder the apache logs are recording errors when running the js unit tests",
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
  "date": "2009-12-18T11:53:00.000-0500",
  "updated": "2014-03-03T11:20:13.805-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "IE 8 on XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-01-04T16:08:58.000-0500",
      "body": "Likely an IE issue where it is evaluating the head of the fetched template as part of the implementation of jquery's load function\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.804-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
The errors are as follows:

File does not exist: /home/continuum/website/docs/infusionBuilder/tests/infusion, referer: <http://forge.fluidproject.org/infusionBuilder/tests/html/InfusionBuilder-tests.html>\
File does not exist: /home/continuum/website/docs/infusionBuilder/tests/css, referer: <http://forge.fluidproject.org/infusionBuilder/tests/html/InfusionBuilder-tests.html>

To test this further, I added a directory under tests called css and then checked the error logs again. The files that were not found were the css files referred to in html/InfusionBuilder.html. This implies errors were cause by links in the header of the "fetched template" - even though the html template that was fetched did not encompass the header section.&#x20;

It may be worth exploring this further with other components that use fetchTemplate.

The advantage of fixing this problem is to cut down on errors in the apache error logs so that we can track down real problems.

        