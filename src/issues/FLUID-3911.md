---json
{
  "title": "FLUID-3911",
  "summary": "Rich text inline edit demo - keyboard can activate edit on entire field, but mouse activates on Edit link only.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2010-12-15T16:44:48.280-0500",
  "updated": "2014-03-03T13:39:59.378-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3887/",
      "key": "FLUID-3887"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:08:42.438-0400",
      "body": "Currently, clicking in the text does NOT activate the editor: you must click the Edit link.\n"
    }
  ]
}
---
Activating Edit mode for Rich text inline edit demo is different for both keyboard and mouse.

For keyboard, you can enter Edit mode by pressing enter when the paragraph container is highlighted.\
For mouse, you can only enter Edit mode by pressing the Edit link.

        