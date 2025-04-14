---json
{
  "title": "FLUID-5551",
  "summary": "Set up a downloadable built infusion bundle",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2014-11-11T11:01:23.635-0500",
  "updated": "2016-12-08T16:05:01.154-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Infrastructure",
    "Release",
    "Tech. Documentation",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-11-12T11:52:19.873-0500",
      "body": "We'll probably need to start a conversation on the fluid-work about where to put the packages on the CDN. Currently the CDN uses a directory structure that starts with the websites url as the base. We could put the packages under the fluidproject.org or have a specific infusion directory.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2016-08-17T15:46:17.191-0400",
      "body": "These days, Github Releases is probably the best option for this. Users should be encouraged to use npm for most uses, but a downloadable zip file is always nice.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-12-08T16:05:01.152-0500",
      "body": "Builds of Infusion are included on the Infusion 2.0 release page on GitHub and a version is published to NPM.\n\nsee:&#x20;\n\n* <https://github.com/fluid-project/infusion/releases/tag/infusion-2.0>\n* <https://www.npmjs.com/package/infusion>\n"
    }
  ]
}
---
Currently (i.e. for the 1.5 code), there is no way to download a built version of Infusion. We should create a ready-to-go bundle, post it (probably to the CDN) and add a link to it somewhere on the new fluidproject.org site. This might require a bit of design input.

        