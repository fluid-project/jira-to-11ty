---json
{
  "title": "FLUID-3452",
  "summary": "The logic for determining minified or not minified build is incorrect in postProcessor.php for the Infusion Builder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-18T12:40:30.000-0500",
  "updated": "2009-12-18T16:03:50.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3452/FLUID-3452-1.patch.txt",
      "filename": "FLUID-3452-1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-18T12:49:28.000-0500",
      "body": "The attached patch fixes the logic for packaging a source or minified build\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-18T16:03:50.000-0500",
      "body": "This is no longer an issue now that <https://fluidproject.atlassian.net/browse/FLUID-3437#icft=FLUID-3437> has been fixed.\n"
    }
  ]
}
---
The logic in postProcessor.php for determining if the build should be minified or not is incorrect. Instead of building one minified and one source zip file, it builds either two minified or two source zips. This error was probably missed previously in the development and QA process because each person either build a minified or source build and checked only the requested zip and not it's "partner".

This is a very simple fix, but as it is very late in the QA process and we may no longer reach the end of day deadline for release, it may be advisable to address this issue by making the fix required for <https://fluidproject.atlassian.net/browse/FLUID-3437#icft=FLUID-3437> and release in the new year.

        