---json
{
  "title": "FLUID-2649",
  "summary": "json files to include listing of css files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-05-05T21:43:07.000-0400",
  "updated": "2009-05-11T09:01:33.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2649/FLUID-2639-2",
      "filename": "FLUID-2639-2"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-05-05T21:45:48.000-0400",
      "body": "This is a patch.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-08T12:29:45.000-0400",
      "body": "Committed Laurel Williams' FLUID-2639-2 patch with some changes. 1) The majority of the patch was good, but there were some naming issues regarding the fss modules that caused it to not work. The module names specified in the properties file did not match the actual module names, and the key within the fss dependency json files should have been the same as the module name. (I have corrected these issues). 2) In order for the build scripts properly concatenate the files an overall FSS dependency file was added; this points at the other fss modules. This will allow a user to specify all FSS modules at once, or just the ones needed. Also to ensure that the FSS css files were in the first position of the concatenated file, the fss module was hardcoded into the build.js file at the first position, when building InfusionAll. This will need to be looked at in the future.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-11T09:01:33.000-0400",
      "body": "This seems complete.\n"
    }
  ]
}
---
Json files must list css dependencies.\
Split FSS json into 4 (reset, layout, text and themes) each with own set of css dependencies

        