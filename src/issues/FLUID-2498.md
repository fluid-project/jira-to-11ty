---json
{
  "title": "FLUID-2498",
  "summary": "Changing the sort order should switch to the first page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-03T10:04:21.000-0400",
  "updated": "2009-04-14T09:41:58.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2466/",
      "key": "FLUID-2466",
      "summary": "Sorting column on later page does not then display page 1"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-13T15:45:03.000-0400",
      "body": "Fixed at revision 7111\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-14T09:18:06.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Changing the sort order should switch to the first page. Currently it just stays on the same page and all the content changes.

Steps to reproduce:

1\) Open the sakai site settings example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>

2\) Click on one of the middle page links

3\) Change the sort order by clicking on one of the table headers

Notice that the content on the page changes, but you are not moved back to the first page.&#x20;

        