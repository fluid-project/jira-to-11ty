---json
{
  "title": "FLOE-68",
  "summary": "Page enhancer and FSS not added to popup iframe source",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2012-08-01T13:09:37.217-0400",
  "updated": "2012-08-16T11:57:10.027-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-68/no-uio-in-iframe.png",
      "filename": "no-uio-in-iframe.png"
    }
  ],
  "comments": [
    {
      "author": "Alexey Novak",
      "date": "2012-08-16T11:57:10.026-0400",
      "body": "Should be fixed on production.\n"
    }
  ]
}
---
OER Commons uses an iframe for some pop-up stuff. The files can be found in apps/materials/forms/iframe-submission. The UIO page enhancer and the necessary UIO FSS files are not listed in the header of the main HTML file (though MyInfusion.js is). As a result, the popup is not styled accordingly. Since we have access to this iframe source, we should fix it.

To reproduce:\
The only way I know of (so far) to get the popup to show some content is through the "Add OER" bookmarklet button on the front page. If you click it, you should get the popup, allowing you to submit it on the first occurrance, and rate/tag it on the second. But to get the popup to work on a local development environment, you'll need to edit project/templates/include/portlets/bookmarklet.html and replace 'example.com' with your machine's URL (Don't commit this change!!).

        