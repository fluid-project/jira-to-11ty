---json
{
  "title": "FLUID-466",
  "summary": "Possible to drag higher precedence portlet above lower precedence portlet",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2008-04-07T15:53:37.000-0400",
  "updated": "2008-04-08T15:23:55.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP,  IE7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-399/",
      "key": "FLUID-399",
      "summary": "Elements with a precedence can be placed below those with none."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-08T15:23:55.000-0400",
      "body": "Duplicates <https://fluidproject.atlassian.net/browse/FLUID-399#icft=FLUID-399>\n"
    }
  ]
}
---
At \
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>\
I dragged the prec 50 portlet to the rightmost column; I was then able to drag the prec 60 portlet right below it, an illegal operation according to the test specs....\
I accomplished a similar illegal ordering using the crtl-tab approach to moving the portlets.

This is an addiiton to and related to bug report 399 which reported the ability to drag precedence rated portlets below those with no precedence.

        