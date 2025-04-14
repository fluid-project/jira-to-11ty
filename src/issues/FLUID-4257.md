---json
{
  "title": "FLUID-4257",
  "summary": "Add \"destruction\" lifecycle point and semantics into component system and IoC",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-05-19T02:35:41.392-0400",
  "updated": "2014-03-03T13:07:26.150-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4722/",
      "key": "FLUID-4722"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4335/",
      "key": "FLUID-4335"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4534/",
      "key": "FLUID-4534"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-08-22T14:30:15.467-0400",
      "body": "Merged into project repo at f7dbbdfec8e3e47dc0a97299da89066f8bbc5d0c\n"
    }
  ]
}
---
Although such resources are generally rare on the client-side, it is necessary to supply an optional lifecycle endpoint on the "destruction" of a component to allow such resources to be freed. For example the image gallery uploader app <https://github.com/colinbdclark/image-gallery/blob/0b4138369b78bda2f160d817194e9b8a17c32d6a/js/uploader.js> reveals that the SWF Uploader implementation requires cleanup of some flash gubbins at the end of its life. \
IoC should operate this lifecycle point automatically on applying "clearComponent" as well as its being surfaced as a conventional method "destroy()"

        