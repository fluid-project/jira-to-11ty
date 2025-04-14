---json
{
  "title": "FLUID-3863",
  "summary": "Feature request: \"no-wrap\" option for keyboard-a11y plugin",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2010-11-23T15:45:01.018-0500",
  "updated": "2013-08-16T10:54:47.026-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-07-20T18:31:58.635-0400",
      "body": "Thanks for this patch and test cases, Anastasia - I've reviewed and pushed it this afternoon\n"
    }
  ]
}
---
Currently, the keyboard accessibility plugin automatically "wraps" around the list of selectable items as you arrow past one end or the other. In many circumstances, this is quite desirable, but there may be some cases in which it is not (case in point: the five-star widget in the new demo. The designers have asked for no-wrap). It might be nice to have an option to turn this wrapping off.

        