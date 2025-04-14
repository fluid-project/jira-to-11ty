---json
{
  "title": "FLUID-2329",
  "summary": "Modify Pager so that the self-rendered version is the default",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2009-03-10T15:24:26.000-0400",
  "updated": "2011-01-28T15:27:04.501-0500",
  "versions": [
    "0.8",
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-808/",
      "key": "FLUID-808",
      "summary": "Create convenience methods for creation of Pager"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2329/FLUID-2329.patch.txt",
      "filename": "FLUID-2329.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2329/FLUID-2329-v2.patch.txt",
      "filename": "FLUID-2329-v2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2329/FLUID-2329-v3.patch.txt",
      "filename": "FLUID-2329-v3.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-27T09:34:56.541-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-2329#icft=FLUID-2329>.patch.txt reconfigures the defaults to use the rendered version of pager as the default.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-27T09:58:55.197-0500",
      "body": "FLUID-2329-v2.patch.txt same as the previous patch, but updated the integration and standalone demos as well.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-28T13:08:46.974-0500",
      "body": "I think it would be better to change the defaults of the pager bar itself and then the pager would not override defaults for it.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-28T13:53:57.919-0500",
      "body": "FLUID-2329-v3.patch.txt updates the fluid.pager.pagerBar defaults to use the rendered version, instead of having the parent component override it's defaults.\n"
    }
  ]
}
---
This should include using the renderedPageList as the default pageList in the pagerBar defaults:

fluid.defaults("fluid.pager.pagerBar", {\
pageList: {\
type: "fluid.pager.renderedPageList"\
}\
...

and providing whatever other defaults would be required by the renderedPageList.

        