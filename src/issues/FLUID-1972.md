---json
{
  "title": "FLUID-1972",
  "summary": "Portlet avatar containers have the incorect size: using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2008-12-12T22:32:18.000-0500",
  "updated": "2017-01-16T09:41:45.224-0500",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Safari 3.2 (Mac OS 10.5)\\\nSafari 5 (Mac OS 10.6)\\\nSafari 7 (Mac OS 10.9)\\\nSafari 10 (macOS 10.12)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1201/",
      "key": "FLUID-1201",
      "summary": "Reorderer avatar's style should be extracted through computed style"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Dana",
      "date": "2016-12-19T17:28:11.046-0500",
      "body": "what do you mean by \"the size of the avatars are all different\"?\n"
    }
  ]
}
---
Portlet avatar containers have the incorect size

Steps to reproduce:

1\) Open the uportal mock-up from the daily build site\
<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/>

2\) Attempt to drag a few of the portals (blocks) around

Notice that the size of the avatars are all different

        