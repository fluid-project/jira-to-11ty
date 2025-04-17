---json
{
  "title": "FLUID-4755",
  "summary": "The nightly build of the Infusion Builder is broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Colin Clark",
  "date": "2012-08-13T15:11:31.292-0400",
  "updated": "2012-08-14T13:11:18.149-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2012-08-13T15:54:20.778-0400",
      "body": "I've issued a pull request for this:\n\n<https://github.com/fluid-project/builder/pull/2>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-08-14T13:11:09.119-0400",
      "body": "Merged into the project repo at 09a8eec47abbcdb73ed4c54452604bf87bcbef9d\n"
    }
  ]
}
---
The daily build of the Infusion Builder is located here:

<http://build.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>

And it is not currently working. The page immediately throws this error:

"TypeError: fluid.initView is not a function\
var that = fluid.initView("fluid.infusionBuilder", container, options);"

This appears to be due to the fact that the Builder itself doesn't use an Infusion build file, and instead links to individual files. Somewhere along the way to Infusion 1.5, files were restructured to provide a complete separation between code that requires the DOM and code that does not. fluid.initView() was moved to FluidView\.js, but the Builder does not link to this file.

        