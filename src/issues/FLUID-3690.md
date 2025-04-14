---json
{
  "title": "FLUID-3690",
  "summary": "Demo portal has broken script tags",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "James Yoon",
  "reporter": "Justin Obara",
  "date": "2010-08-27T08:56:34.809-0400",
  "updated": "2014-07-14T10:30:09.294-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-08-27T10:25:00.963-0400",
      "body": "The failed get request are coming because the portal will try to pull in files related to a demo(html, css, js, and data), whether or not they exist. This is to display them in the tabbed panel to the right. The failed get for the build.xml file is because this is used to test the same origin policy. The path and demo name are set in the demo.html file specific to a demo. We may want to rethink our strategy here as it may appear to users that there is a problem.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-10T14:46:08.844-0500",
      "body": "Justin, I'm not able to reproduce this (though I might not be clear on how to do so). Could you double-check if this is still an issue and if so, set the 'affects' version? Even if so, it might become moot once we redesign the demo portal.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-14T10:30:09.278-0400",
      "body": "The demo portal was removed as of 1.5\n"
    }
  ]
}
---
If you look at the demo portal in a debugger like firebug, you can see that it is trying to pull in resources for which the URL's are incorrect.

The demos themselves appear to be working fine, so I'm not sure what all these URL's are for.

        