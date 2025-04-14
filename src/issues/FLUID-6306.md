---json
{
  "title": "FLUID-6306",
  "summary": "fluid.resourceLoader will not use the defaultLocale when trying to load resources if no locale is set",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-07-20T16:03:36.033-0400",
  "updated": "2018-08-07T11:19:38.835-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6305/",
      "key": "FLUID-6305",
      "summary": "fluid.fetchResources does not use defaultLocale from an individual resourceSpec entry"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6299/",
      "key": "FLUID-6299"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-07-24T13:50:47.909-0400",
      "body": "Prospective fix in this PR: <https://github.com/fluid-project/infusion/pull/913>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2018-08-02T13:31:34.218-0400",
      "body": "Merged 2018-08-02\n"
    }
  ]
}
---
When fluid.resourceLoader attempts to load its specified resources, it will not take into account the value of defaultLocale if the locale is not also specified.

This appears to be because of the bug in fluid.fetchResources, as documented in FLUID-6305.

        