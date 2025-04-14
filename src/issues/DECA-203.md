---json
{
  "title": "DECA-203",
  "summary": "Research DPI calculation and its usefulness in Decapod",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2012-01-11T14:18:24.406-0500",
  "updated": "2012-09-07T11:42:14.356-0400",
  "versions": [],
  "fixVersions": [
    "Future"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
DPI is used as a metric for discerning resolution / fidelity. Currently in Decapod we do not have a strategy for using DPI since it is difficult to calculate DPI from an image captured with a camera.

Some questions to answer:

* Is a DPI calculation needed for Decapod and will it be useful?
* How should this DPI information be displayed?
* If a poorly framed image of a book at 10MP still yield a DPI higher than 600?

        