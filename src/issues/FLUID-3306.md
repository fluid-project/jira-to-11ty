---json
{
  "title": "FLUID-3306",
  "summary": "manage relative include paths for php files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-10-19T15:31:00.000-0400",
  "updated": "2009-12-02T13:37:57.000-0500",
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
      "date": "2009-10-23T16:59:04.000-0400",
      "body": "Both Jacob and I tested scripts to illustrate this problem and could not reproduce. I followed up by revising the install procedure for the builder and tested the pathing issue there. Also could not reproduce the problem.\n"
    }
  ]
}
---
Originally wrote the php code to have a single path to the "secure" php files - named this DISTANT\_PATH (builder.php)\
Assumed the includes for all other files would all be the DISTANT\_PATH directory.\
This seemed to work on my server installation, but then stopped working with a clean install, and instead all of the include paths in the "DISTANT\_PATH" directory were calculated in reference to the original calling code in builder.php.

        