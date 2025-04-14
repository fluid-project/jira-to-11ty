---json
{
  "title": "FLUID-2767",
  "summary": "Concatenated css file does not take image locations into account",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "Justin Obara",
  "date": "2009-05-25T16:10:50.000-0400",
  "updated": "2013-09-06T14:00:05.676-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-25T16:11:02.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-25T16:56:27.000-0400",
      "body": "For the time being, have removed css concatenation from the build process. Post 1.1 will determine a strategy to handle the image paths.\n"
    }
  ]
}
---
Concatenated css file does not take image locations into account.

The concatenated css file builds correctly, but the relative paths to images that it may pull in are broken, as the images remain in their original location.

        