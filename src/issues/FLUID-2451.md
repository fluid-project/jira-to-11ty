---json
{
  "title": "FLUID-2451",
  "summary": "meta data in hover text does not update imediately after the number of items per page is changed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-04-01T13:35:30.000-0400",
  "updated": "2009-05-25T15:12:12.000-0400",
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
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2451/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-01T13:37:49.000-0400",
      "body": "'screenshot-1' shows the erroneous meta data. Notice that the page is displaying 40 items. The hover text shows a distribution of only 10 students\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:33:12.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-21T15:52:40.000-0400",
      "body": "Fixed at revision 7203 - expanded signature to onRenderPageLinks\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T12:40:50.000-0400",
      "body": "I've reviewed the changes made for this fix. They look good, and the page link hover text now updates properly.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-25T15:12:12.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE7, IE8 (Win Vista)\n"
    }
  ]
}
---
meta data in hover text does not update imediately after the number of items per page is changed

Steps to reproduce:

1\) Open the sakai site settings example&#x20;

2\) Hover over one of the page links and notice the meta data provided in the hover text

3\) Change the number of items displayed per page

4\) Hover over the same page link, notice that the meta data hasn't changed

The meta data will be corrected after you click on one of the page links

        