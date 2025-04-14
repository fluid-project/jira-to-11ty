---json
{
  "title": "FLUID-6052",
  "summary": "All demo content should be responsive",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2016-11-08T16:28:35.979-0500",
  "updated": "2016-11-08T16:28:35.979-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Particularly as we implement mobile-friendly versions of components such as UIO and the Overview Panel, we will need to make sure any demo pages become responsive as well.

A notable issue of non-responsive demos is that mobile browsers (such as Chrome on Android) are beginning to offer "make this page mobile-friendly" options when encountering a non-responsive page with substantial text content. Chrome/Android does this on the Preferences Framework demo, as one example. Clicking this opinion linearizes the page content (including that of the Overview Panel) and removes any access to UIO. (it's "reader mode", essentially)

        