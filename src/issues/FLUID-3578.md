---json
{
  "title": "FLUID-3578",
  "summary": "After first reorder with keyboard, all subsequent reorders require two arrow presses (Safari 4/OS X 10.5)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "James Yoon",
  "date": "2010-04-01T09:57:12.000-0400",
  "updated": "2010-04-13T12:50:41.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3288/",
      "key": "FLUID-3288",
      "summary": "Moving an item with the keyboard \"loses\" the \"ctrl-key is down\" status"
    }
  ],
  "attachments": [],
  "comments": []
}
---
To replicate:\
1\. Tab to desired element to reorder\
2\. Hold ctrl, press arrow in desired direction (element should move successfully and reorder the list/grid)\
3\. Do not let go of ctrl\
4\. Press arrow again (the bug: nothing happens)\
5\. Press arrow yet again (element should move successfully and reorder the list/grid)

        