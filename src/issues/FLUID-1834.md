---json
{
  "title": "FLUID-1834",
  "summary": "Handle empty anchors with background images (icons).",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Michelle D'Souza",
  "date": "2008-11-25T13:47:44.000-0500",
  "updated": "2013-10-04T10:37:12.810-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:20:18.338-0400",
      "body": "UIO no longer supports removing background issues. This problem is no longer present.\n"
    }
  ]
}
---
When applying the high contrast skin all background images are removed. The uPortal example has several anchors with no text where information was conveyed solely by the background images.&#x20;

One solution could be to insert the title or alt text when the background image was removed.

        