---json
{
  "title": "FLUID-3860",
  "summary": "IE styling off for inline edit areas when defaultViewText = \"\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2010-11-22T12:21:52.335-0500",
  "updated": "2010-12-08T17:36:39.296-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3860/FLUID-3860.patch",
      "filename": "FLUID-3860.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3860/Picture 12.png",
      "filename": "Picture 12.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3860/Picture 9.png",
      "filename": "Picture 9.png"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2010-12-07T14:48:04.948-0500",
      "body": "overrides fss-reset which puts a 1em bottom margin on all p elements\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-07T14:53:44.899-0500",
      "body": "note : needs <https://fluidproject.atlassian.net/browse/FLUID-3635#icft=FLUID-3635> fix&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-08T17:27:02.659-0500",
      "body": "Combined Heidi's patch with the patch on <https://fluidproject.atlassian.net/browse/FLUID-3635#icft=FLUID-3635>.   The original patch on <https://fluidproject.atlassian.net/browse/FLUID-3635#icft=FLUID-3635> has been refactored so that we are not introducing new hard-coded CSS into the code. &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-08T17:36:39.290-0500",
      "body": "Reviewed and committed!\n"
    }
  ]
}
---
IE7 & IE8

When defaultViewText="", the underline for the inline edit area is too low, and therefore unclickable. Need to click pencil to edit area. See image.

        