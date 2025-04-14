---json
{
  "title": "FLUID-2465",
  "summary": "Pager not showing proper status of previous/next buttons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Herb Wideman",
  "date": "2009-04-02T09:46:04.000-0400",
  "updated": "2009-05-13T10:55:52.000-0400",
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
      "date": "2009-05-12T11:09:24.000-0400",
      "body": "Fixed at revision 7161 - fl-pager-disabled has to be a top-level style, fl-pager-current is not used.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-13T10:55:51.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE7, IE8 (Win Vista)\n"
    }
  ]
}
---
For Sakai test page only (<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#):> When on first or last page, the previous and next buttons respectively are not in black rather than blue text to show they are inactive (invalid choices). This is not the case with the renderer page, it works properly.

        