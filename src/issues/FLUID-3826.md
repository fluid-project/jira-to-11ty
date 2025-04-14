---json
{
  "title": "FLUID-3826",
  "summary": "Provide a means for supporting backwards API compatibility when component options change from version to version.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-11-05T12:18:36.929-0400",
  "updated": "2011-01-17T10:49:14.148-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3750/",
      "key": "FLUID-3750",
      "summary": "Refactor and tidy up the Uploader in preparation for porting it to HTML 5"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-11-05T12:19:52.760-0400",
      "body": "This feature is required by the refactored Uploader in order to provide backwards compatibility to existing users of Infusion.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-17T10:48:39.246-0500",
      "body": "The new framework APIs in ModelTransformations.js provide a tool for transforming objects arbitrarily, and has been implemented in the Uploader to provide backwards compatibility for options.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-17T10:49:14.147-0500",
      "body": "Implemented and released in Infusion 1.3\n"
    }
  ]
}
---
At the moment, it's difficult for us to freely change component options without breaking backwards compatibility with older versions of Infusion. Fortunately, options are just JSON data, so we should be able to provide some automatic framework features for transforming old component options into the new formats.

The idea here is to take Engage's prototype model transformation features and move them into Infusion core.

        