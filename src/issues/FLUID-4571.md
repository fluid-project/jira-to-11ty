---json
{
  "title": "FLUID-4571",
  "summary": "Can't add Tooltip as renderer decorator to renderer component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2012-01-03T14:51:37.074-0500",
  "updated": "2014-03-03T11:48:52.055-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "Tooltip"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4571/FLUID-4571-tooltip-decorator-test.patch.txt",
      "filename": "FLUID-4571-tooltip-decorator-test.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4571/FLUID-4571-tooltip-decorator-test.patch-fixed.txt",
      "filename": "FLUID-4571-tooltip-decorator-test.patch-fixed.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-01-03T14:52:48.851-0500",
      "body": "The attached file (FLUID-4571-tooltip-decorator-test.patch.txt) provides a test case that shows the failure.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2012-01-03T14:56:09.243-0500",
      "body": "Sorry, the first attachment didn't have the actual JIRA number in the tests, just a placeholder. This file (\\*-fixed.txt) has the correction.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T05:08:38.737-0500",
      "body": "This is definitely a bug in the component. All components will be required to supply a valid set of gradeNames in the upcoming framework revision - going further, all components will also be expected to participate in the \"autoInit\" system. All non-compliant components will be upgraded before this revision, currently floated as being \"Infusion 1.9\".\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-06-11T13:15:30.348-0400",
      "body": "A modern framework-compliant tooltip reached trunk last month as 187df86 so hopefully this issue has now been resolved.\n"
    }
  ]
}
---
If the prototree for a renderer component includes a Tooltip as a renderer decorator, the creation of the Tooltip component fails with the message "fluid.container was supplied a non-jQueryable element"

This seems to be happening because the Tooltip has no 'gradeNames' or 'argumentMap' so the framework assumes it's a 'littleComponent' and misinterprets the first (container) argument as the options argument. I'm not sure whether this is a bug in the Tooltip (for not providing gradeName or argumentMap) or the framework (for making the wrong assumption).

        