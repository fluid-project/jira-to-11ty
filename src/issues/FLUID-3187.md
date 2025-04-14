---json
{
  "title": "FLUID-3187",
  "summary": "Wrong charset in html page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "joan garcia",
  "date": "2009-09-16T15:06:08.000-0400",
  "updated": "2014-07-14T07:03:41.941-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Release"
  ],
  "environment": "Ubuntu Jaunty 9.04 i686 + ( Firefox 3.0.4 or Firefox 3.5.2)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3187/fluid_bug.png",
      "filename": "fluid_bug.png"
    }
  ],
  "comments": [
    {
      "author": "joan garcia",
      "date": "2009-09-16T15:09:24.000-0400",
      "body": "screen capture\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-21T09:30:26.000-0400",
      "body": "moved from the Engage Jira space to the Infusion one, as this seems to be in regards to the final report\n"
    }
  ]
}
---
<http://build.fluidproject.org:8095/finalreport/html/index.html>

wrong page encoding charset header: says iso-8859-1 but the content is correctly displayed when forcing UTF-8 in the browser

        