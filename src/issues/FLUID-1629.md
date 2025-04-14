---json
{
  "title": "FLUID-1629",
  "summary": "Hovering over the border of the active tab when it is in either the first or last position, while dragging an avatar, causes it to flash",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-26T11:27:56.000-0400",
  "updated": "2010-12-09T09:35:07.064-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF3 (Mac OS 10.4)\\\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:41:37.484-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-09T09:35:07.057-0500",
      "body": "Closed because demo has been removed from the repository. See Fluid-3731.\n"
    }
  ]
}
---
Hovering over the border of the active tab when it is in either the first or last position, while dragging an avatar, causes it to flash

Steps to reproduce:

1\) Open the sortable jQuery Tabs demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) With the active tab in either the first or last position pick up another tab

3\) Drag the avatar, and hover the pointer over the black border of the active tab

Notice that is quickly flashes on the screen

        