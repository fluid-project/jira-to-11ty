---json
{
  "title": "FLUID-2322",
  "summary": "Content rendered slowly: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-03-09T09:21:15.000-0400",
  "updated": "2013-09-06T12:26:06.520-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Pager",
    "Renderer"
  ],
  "environment": "IE 7 (Win Vista)\\\nIE 6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2577/",
      "key": "FLUID-2577",
      "summary": "Renderer performance can be slow on IE 6 and 7 in some contexts."
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2415/",
      "key": "FLUID-2415"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2487/",
      "key": "FLUID-2487"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-06T12:26:06.508-0400",
      "body": "IE6 and IE7 are no longer supported browsers.\n"
    }
  ]
}
---
Content rendered slowly

Steps to reproduce:

1\) Open the sakai site setting demo from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/site_setting_members.html#>

Notice that you have to wait several seconds before the content renders. It starts with only 3 page links and then jumps to 19.

2\) Click on one of the page links

Notice that it takes a few seconds before the paged content changes

        