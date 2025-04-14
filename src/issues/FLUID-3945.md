---json
{
  "title": "FLUID-3945",
  "summary": "Pager next/prev links cause scroll when in portal (in Safari)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-17T14:40:37.853-0500",
  "updated": "2014-07-30T15:34:00.717-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": "Safari 5 on Mac OS 10.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-30T15:34:00.716-0400",
      "body": "We no longer have the demo portal. The pager demo seems to behave just fine.\n"
    }
  ]
}
---
When viewing the Pager demo within the demo portal, clicking on the "Next" or "Previous" links causes the page to jump up so that the top of the iframe is at the top of the browser window. It doesn't happen with any of the page number links or the column header sort links, just the Next/Previous.

Minor, but a bit annoying.

It doesn't happen in FF3.6, just Safari5.

        