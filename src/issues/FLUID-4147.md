---json
{
  "title": "FLUID-4147",
  "summary": "Deprecate the Simple Inline Edit API doc",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Jonathan Hung",
  "date": "2011-03-16T12:28:52.063-0400",
  "updated": "2024-07-31T07:25:59.329-0400",
  "versions": [
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Inline Edit",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5328/",
      "key": "FLUID-5328",
      "summary": "Convert the Component API documentation to Markdown and add to infusion-docs"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-31T07:25:52.856-0400",
      "body": "I’m not seeing separate pages for Inline Edit API and Simple Inline Edit API in either the [docs site](https://docs.fluidproject.org/infusion/development/to-do/InlineEditAPI) nor the [wiki](https://fluidproject.atlassian.net/wiki/spaces/docs/pages/7079510/Inline+Edit+API). So perhaps this was already done.\n"
    }
  ]
}
---
The Simple Inline Edit API doc is nearly identical to the Inline Edit API doc.\
The Simple Inline Edit doc should probably be deprecated and relevant information added to the Inline Edit page (i.e. the section about multiple inline edits should be added to Inline Edit API).

        