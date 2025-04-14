---json
{
  "title": "FLUID-3324",
  "summary": "re-arrange directory structure to aid release process",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-10-22T16:07:43.000-0400",
  "updated": "2009-12-02T13:36:43.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-22T16:14:08.000-0400",
      "body": "created the structure as described.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-11-06T16:26:50.000-0500",
      "body": "move the infusion-builder directory into a docs directory to aid in the release process.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-11-09T11:28:14.000-0500",
      "body": "moved infusion-builder directory into a parent directory called docs to facilitate release. Removed docs/infusion-builder/php/builder-local.php. Updated .externals to point to new infusion location.\n"
    }
  ]
}
---
Currently the builder's file structure does not reflect the structure required to release and implement the builder.

A proposed structure might be

infusion-builder

* css
* html
* js
* php
* infusion (fixed version)

infusion-builder-secure

* tmp
* cache
* php

infusion-builder-install

* scripts

        