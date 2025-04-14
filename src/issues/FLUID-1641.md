---json
{
  "title": "FLUID-1641",
  "summary": "Can't keyboard activate inline edit after pressing up or down arrow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2008-09-30T10:59:00.000-0400",
  "updated": "2011-01-06T12:54:35.577-0500",
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
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1641/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-28T11:01:48.000-0400",
      "body": "You are able to edit the inline edit fields by tabbing to them or clicking on them with your mouse. In the case described above, I believe what is happening is that the caret is moving away from the inline edit field and can be placed on any text in the page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:08:45.194-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T12:54:35.190-0500",
      "body": "Does not seem to be an issue with the 1.3 Inline Edit. Closing.\n"
    }
  ]
}
---
After editing an Inilne Edit field and applying changes using the Enter key, pressing up or down arrow moves a blinking text cursor around the page. Can't activate and edit an inline edit field once in this state.

Moving focus off the page (i.e. by changing windows) fixes this.&#x20;

This happens in both bSpace Section Info and Sakai Announcements demos.

        