---json
{
  "title": "FLUID-6299",
  "summary": "Add translated message bundles to UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-07-17T16:39:59.516-0400",
  "updated": "2018-09-04T15:36:08.575-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6311/",
      "key": "FLUID-6311"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-113/",
      "key": "SJRK-113",
      "summary": "Review and/or migrate multilingual UIO implementation"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6198/",
      "key": "FLUID-6198",
      "summary": "Migrate multilingual UIO code from SJRK Storytelling to Infusion"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6305/",
      "key": "FLUID-6305",
      "summary": "fluid.fetchResources does not use defaultLocale from an individual resourceSpec entry"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6306/",
      "key": "FLUID-6306",
      "summary": "fluid.resourceLoader will not use the defaultLocale when trying to load resources if no locale is set"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6197/",
      "key": "FLUID-6197"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6301/",
      "key": "FLUID-6301"
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
      "date": "2018-07-27T14:50:00.449-0400",
      "body": "We have added a top-level option (\"defaultLocale\") to UIO to set the default locale for the entire component.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-09-04T15:36:04.649-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/917> ) into project repo at 780f34d7b213d43a9d2bd4ba561f23c74a47aaa9\n"
    }
  ]
}
---
Migrate the translated message bundles from SJRK to Infusion. What we know we have available to us already:

* existing EN
* SJRK-90 ES (translation confirmed by Juliana)
* FLUID-6198 FR (translation by Gregor)
* FLUIR-6198 FA (translation by Sepideh)

Ensure that the current localization behaviour (no client-side reload) as demonstrated by the initial FLUID-6198 pull works. Fix any bugs in code or errors in documentation around this.

        