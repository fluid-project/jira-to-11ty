---json
{
  "title": "FLUID-6301",
  "summary": "Implement persistence of UIO locale as a stored preference",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-07-17T16:47:51.582-0400",
  "updated": "2018-08-07T11:19:39.016-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6198/",
      "key": "FLUID-6198",
      "summary": "Migrate multilingual UIO code from SJRK Storytelling to Infusion"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6299/",
      "key": "FLUID-6299",
      "summary": "Add translated message bundles to UIO"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6300/",
      "key": "FLUID-6300",
      "summary": "Implement client-side rerender of UIO based on locale changes"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6303/",
      "key": "FLUID-6303"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6312/",
      "key": "FLUID-6312"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-07-31T16:48:14.942-0400",
      "body": "Closing in favour of the more informative <https://fluidproject.atlassian.net/browse/FLUID-6312#icft=FLUID-6312>.\n"
    }
  ]
}
---
Much as other pieces of UIO store preferences locally, ensure that the locale changes described in FLUID-6300 are also persisted.

Some prior art in <https://github.com/GPII/first-discovery>, where "Language" is a preference

        