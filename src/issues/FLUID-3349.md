---json
{
  "title": "FLUID-3349",
  "summary": "Remove the builder.js file, moving any required logic into the component itself.",
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
  "date": "2009-11-03T14:16:25.000-0500",
  "updated": "2009-12-02T13:36:31.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3365/",
      "key": "FLUID-3365",
      "summary": "jqUnit's fetchTemplate() function should load templates synchronously, rather than asynchronously, to be more flexible"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3349/FLUID-3349-1.patch.txt",
      "filename": "FLUID-3349-1.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3349/FLUID-3349-b.patch.txt",
      "filename": "FLUID-3349-b.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-11-05T16:27:33.000-0500",
      "body": "The attached patch represents a partial solution to removing the code from builder.js. Tests are now failing, and the next step is to determine how to load the CustomBuild template into the tests via ajax, so that they are using the same template as the main code.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-11-05T22:29:57.000-0500",
      "body": "Here's a modified version of Laurel's patch that gets about half of the unit tests passing. Other failures likely have to do with one of two things:\n\n1\\. Hard-baked assumptions in tests about selector names that may have changed between the old test markup and the real template\\\n2\\. The fact that the unit tests clean up the DOM after each test run, causing the component to be in an inconsistent state.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-11-06T16:19:48.000-0500",
      "body": "Made a small change to the setup of the tests to recreate the component between each test. This solved the problem.\n"
    }
  ]
}
---
At the moment, all of the logic inside builder.js is either legacy, unnecessary, or more correctly placed in the component itself. Let's do a bit of refactoring and get rid of builder.js entirely.

        