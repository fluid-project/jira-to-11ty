---json
{
  "title": "FLUID-6531",
  "summary": "Orator not reading selected text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Justin Obara",
  "reporter": "Gregor Moss",
  "date": "2020-07-16T18:34:57.805-0400",
  "updated": "2020-07-20T07:48:04.190-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "Windows 10 Pro v1909;\\\nChrome 84, Firefox 78\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6523/",
      "key": "FLUID-6523",
      "summary": "Selection Reader appears when empty areas are selected"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6531/2020-07-16 Orator not reading bug 1.png",
      "filename": "2020-07-16 Orator not reading bug 1.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-07-20T07:48:04.190-0400",
      "body": "I believe this occurs for the same underlying reason that <https://fluidproject.atlassian.net/browse/FLUID-6523#icft=FLUID-6523> does or at least that issue suffers from the same problem.\n"
    }
  ]
}
---
The Selection Reader component of the Orator does not read text in certain cases

**To reproduce:**

1. Go to <https://build.fluidproject.org/infusion/demos/orator/>
2. Click and hold with the mouse to select any part of the left-side panel's title to the beginning of the word "Orator" below, but not any part of the word "Orator" itself (see the attached screenshot "2020-07-16 Orator not reading bug 1.png" for an example of this)
3. Click "PLAY"

**Expected:**

The Selection Reader should read all of the selected text aloud and the button should change to "STOP" while it's reading

**Actual:**

The Selection Reader does not read anything and the button stays the same

        