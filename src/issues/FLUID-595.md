---json
{
  "title": "FLUID-595",
  "summary": "OSDPL: Remove \"in\" from OSDPL pages that aren't in a category",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Allison Bloodworth",
  "date": "2008-05-13T18:03:36.000-0400",
  "updated": "2013-04-11T17:45:52.198-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1681/",
      "key": "FLUID-1681"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1296/",
      "key": "FLUID-1296"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-05-13T18:03:50.000-0400",
      "body": "Iteration20\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-14T14:12:58.000-0400",
      "body": "Can be solved by using the Fluid-Clean theme. See this task:\\\n<http://issues.fluidproject.org/browse/FLUID-1681>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-21T14:33:16.000-0400",
      "body": "Fixed with Fluid-1681.\n"
    }
  ]
}
---
On OSDPL pages that aren't part of a category (taxonomy), in the page body the word "in" appears by itself. This is confusing, and appears because this page is not "in" any category. This occurs on the home page as well as News pages, or any other page which doesn't have a category. I'm not sure which module is creating this "in" and am hoping there is a configuration option somewhere that can just turn this off.&#x20;

        