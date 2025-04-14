---json
{
  "title": "FLUID-223",
  "summary": "Add support for 2D navigation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-02-08T00:01:50.000-0500",
  "updated": "2014-06-26T13:01:23.641-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T09:37:48.013-0400",
      "body": "a11y issue\n"
    }
  ]
}
---
The keyboard accessibility plugin currently provides one dimensional navigation: forward and backwards or up and down (exclusive to each other). In order to provide more robust grid-style navigation--and to fully harmonize the code with the Reorderer--we may want to consider adding two dimensional navigation support to the plugin. This would undoubtedly be achieved through the adoption of the Geometric Manager as the low level library for handling spatial navigation.

        