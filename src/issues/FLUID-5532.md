---json
{
  "title": "FLUID-5532",
  "summary": "responsive UIO: Fix the current UIO on mobile",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2014-10-22T10:39:12.159-0400",
  "updated": "2017-04-25T13:05:47.235-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5545/",
      "key": "FLUID-5545"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5774/",
      "key": "FLUID-5774"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6151/",
      "key": "FLUID-6151"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-11-10T10:48:37.741-0500",
      "body": "After going thru the usability and styling issues encountered at fixing the current UIO on mobile in the community meeting on Nov 5, 2014, the decision is, rather than continuing tweaking the desktop version of UIO, create and implement a mobile-first UIO design.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-04-04T14:07:36.210-0400",
      "body": "Because many of our sites are made with Foundation, it may be useful to make our media queries based off of their sizes. (i.e small === any size, medium === 640px/40em or wider, large === 1024px/64em or wider)\n\n<http://foundation.zurb.com/sites/docs/media-queries.html>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-20T10:13:03.912-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/825) has been merged into the project repo master branch at f8d92a56023a3ae6c1c2a20773f7ac44e1514d31\n\nThis pull request implements an intermediate solution that adjuster panels for mobile version require horizontal scrolling to view all of their contents, instead of implementing \"<\" button to go to the previous panel and \">\" button to go to the next panel.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-20T10:38:30.322-0400",
      "body": "[The IRC discussion](https://botbot.me/freenode/fluid-design/2017-04-20/?msg=84277066\\&page=1) about two issues with this intermediate solution:\n\n1. Use the intermediate solution of scrolling the panels until we can implement the arrows/snapping;\n2. Then the issue of what to do with the snapping panels when the content gets too big to fit.\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-04-25T13:05:37.984-0400",
      "body": "The arrows/snapping will be handled in <https://fluidproject.atlassian.net/browse/FLUID-5534#icft=FLUID-5534>\n"
    }
  ]
}
---
To have the current UIO work with mobile devices.

See designs: \
<https://wiki.fluidproject.org/pages/viewpage.action?pageId=137658573>

        