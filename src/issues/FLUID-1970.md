---json
{
  "title": "FLUID-1970",
  "summary": "Reorderer \"instructionMessageId\" option unused, should be removed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-12-12T13:36:20.000-0500",
  "updated": "2008-12-15T15:23:22.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1821/",
      "key": "FLUID-1821",
      "summary": "Image Reorderer has incomplete directions (Accessibility)"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-12T13:55:55.000-0500",
      "body": "Bug Parade 0.6 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-12T15:42:04.000-0500",
      "body": "I've removed the use of the intructionMessageId option, and the related IDs in the mark-up.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-15T14:58:29.000-0500",
      "body": "I've reviewed the fix and it looks good.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-15T15:23:22.000-0500",
      "body": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The "instructionMessageId" option that can be set in the reorderer is completely unused. It should be removed from the code and from the Image Reorderer samples and tests that try to accommodate it.

        