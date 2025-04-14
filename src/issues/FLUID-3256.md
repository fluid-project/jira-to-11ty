---json
{
  "title": "FLUID-3256",
  "summary": "Image reorderer - not able to test the keyboard on a Mac environment",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Tona Monjo",
  "date": "2009-10-08T11:44:12.000-0400",
  "updated": "2009-10-20T10:12:12.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Safari 3.2 - Mac OS 10.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-10-20T10:12:12.000-0400",
      "body": "Unfortunately Keyboard accessibility in Safari 3 was very limited.\n"
    }
  ]
}
---
Tasks that seem to fail (unless I've done something wrong during the test):\
State Tests > 5-6-7 (keyboard related tasks) \
Boundary Tests > 3-4 (keyboard related tasks)

The first task (Using the keyboard, tap the 'tab' key until one of the images has focus) doesn't focus any image. Each tap on the tab key moves the cursor from the URL field (1) to the search field (2), and then (3) the cursor disappears. A new tap on the tab focuses again on the URL field (1).&#x20;

        