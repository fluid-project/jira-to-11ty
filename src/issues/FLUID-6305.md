---json
{
  "title": "FLUID-6305",
  "summary": "fluid.fetchResources does not use defaultLocale from an individual resourceSpec entry",
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
  "date": "2018-07-20T15:50:47.585-0400",
  "updated": "2024-07-22T08:57:36.449-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6306/",
      "key": "FLUID-6306"
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
      "date": "2018-07-24T13:50:31.242-0400",
      "body": "Prospective fix in this PR: <https://github.com/fluid-project/infusion/pull/913>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2018-08-02T13:31:10.973-0400",
      "body": "Merged 2018-08-02\n"
    }
  ]
}
---
If fluid.fetchResources is called with a resourceSpec entry which specifies a defaultLocale but not a locale, the defaultLocale is not used when attempting the fetch and fallback process.

On lines 70-74 of FluidRequests.js, the optional override defaultLocale is checked, and if locale is not present, the locale is also overridden. If the optional override is not present, however, there is no further check for setting the locale based on the defaultLocale.

The intention of the code seems to be as follows:

* a defaultLocale can be set on an individual resourceSpec entry and will be used if a locale is not also supplied
* a defaultLocale option can be passed to fluid.fetchResources and will override the defaultLocale of each resourceSpec

The first does not take place; this issue is obscured in the tests (FluidRequestsTests.js) because of lines 176-178:

```javascript
fluid.fetchResources(resourceSpecs, callback, {
            defaultLocale: "en"
        });
```

Because a defaultLocale is set and none of the resourceSpec entries in the tests set a defaultLocale other than en, it hasn't been clear that this is an issue until recent multilingual work.

        