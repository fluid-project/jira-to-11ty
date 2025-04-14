---json
{
  "title": "FLUID-5736",
  "summary": "The next link should be disabled when on the last page, same as the previous link",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2015-08-07T16:26:26.314-0400",
  "updated": "2021-07-15T08:31:12.211-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Safari 10, FF 49 (macOS 10.12)\\\nIE 11, FF 44 (Win 10)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3921/",
      "key": "FLUID-3921",
      "summary": "When on first or last page, \"previous\" and \"next\" links, respectively, aren't grayed out"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2016-02-10T15:41:37.873-0500",
      "body": "Tested on IE11 and FF 44 on Windows 10 - issue still present.\n"
    }
  ]
}
---
The pager test plan (<https://wiki.fluidproject.org/display/fluid/Pager+QA+Test+Plan>) says:&#x20;

If on Page 1, the "previous" link should now be disabled, otherwise is should be enabled\
If on the last page, the "next" link should now be disabled, otherwise is should be enabled

Right now, both links on the pager demo (demos/pager/) are still clickable and look like enabled even the current page is the first or the last page.

        