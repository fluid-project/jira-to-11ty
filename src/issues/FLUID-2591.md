---json
{
  "title": "FLUID-2591",
  "summary": "Sorted column loses sorted class after changing the page",
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
  "date": "2009-04-13T13:25:21.000-0400",
  "updated": "2009-04-14T09:14:35.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-13T15:30:58.000-0400",
      "body": "Interim fix at revision 7110. However, we need to review this overall architecture - right now there is the situation that the header is being rerendered along with the body - even though there is no account taken of the only state which may change in it!\\\nRight now the \"direct selector\", that is the rsf:id elements within the header, refer to the renderable elements, rather than referring to the overall cells, which are the target of the styling for sort.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-14T09:14:35.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Sorted column loses sorted class after changing the page&#x20;

Steps to reproduce:

1\) Open the sakai site settings example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>

2\) Click on one of the column headers to change the sort method

At this point a class indicating the sort is placed on the header

3\) Click on another pager link

Notice that the class that was on the header for sorting, is now removed

        