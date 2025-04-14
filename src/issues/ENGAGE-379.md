---json
{
  "title": "ENGAGE-379",
  "summary": "Warning icon does not appear when users enter an invalid object code on the Object Code Entry screen",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Colin Clark",
  "date": "2010-02-12T14:29:01.000-0500",
  "updated": "2017-12-22T09:44:26.697-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Object Code Entry"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-379/ENGAGE-379.patch",
      "filename": "ENGAGE-379.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-379/ENGAGE-379b.patch",
      "filename": "ENGAGE-379b.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-379/fe_mobile_icon_warning.png",
      "filename": "fe_mobile_icon_warning.png"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:29:24.000-0500",
      "body": "Here's the warning icon\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:29:57.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-15T07:53:44.000-0500",
      "body": "Warning icon displayed along the warning text when an incorrect code has been entered. Again the warning icon should be added separately as the patch doesn't include it. There are also a couple of new strings that should be internationalized.\\\nI have made an attempt to make the component more accessible with the aria-label attribute for the code entry fields.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-25T09:53:05.000-0500",
      "body": "ENGAGE-379b.patch adds the warning icon to the code entry screen.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-25T10:42:34.000-0500",
      "body": "So I've added the string translation into the patch.\\\nForgot to mention that my second attempt to include the icon in the patch failed, so this one should be added manually, sorry for the troubles.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:26.696-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, we don't include the warning icon when displaying the invalid object code message to the user.

        