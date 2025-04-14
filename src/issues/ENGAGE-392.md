---json
{
  "title": "ENGAGE-392",
  "summary": "Code entry areas not accessible to VoiceOver",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Sambhavi Chandrashekar",
  "date": "2010-02-16T15:50:07.000-0500",
  "updated": "2017-12-22T09:44:19.320-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Object Code Entry"
  ],
  "environment": "iPhone OS 3.0 with VoiceOver\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/ENGAGE-430/",
      "key": "ENGAGE-430"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-391/",
      "key": "ENGAGE-391"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-392/codeEntryImages.zip",
      "filename": "codeEntryImages.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-392/ENGAGE-392.patch",
      "filename": "ENGAGE-392.patch"
    }
  ],
  "comments": [
    {
      "author": "Sambhavi Chandrashekar",
      "date": "2010-02-17T15:27:28.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Sambhavi Chandrashekar",
      "date": "2010-02-24T12:46:34.000-0500",
      "body": "a11y issue\n"
    },
    {
      "author": "y z",
      "date": "2010-03-02T13:54:21.000-0500",
      "body": "By adding tabindex to the message and the digit fields we should be able to access those fields with VO. However, dynamically updated values are not updated via VO unless focused.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-03-12T11:48:30.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-392#icft=ENGAGE-392>.patch replaces the two code digit fields with images, that are recognized by VoiceOver. The images themselves are not included in the patch and should be added manually. The images are attached as codeEntryImages.zip.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:19.318-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
VoiceOver user does not know that a two-digit number has to be entered for code. The two code entry boxes that afford a visual clue for this are not announced by VO.\
Likewise, when entering a number, invoking a button press (by double-tapping a selected button) does not provide a message to VoiceOver that the selected digit has been entered.

        