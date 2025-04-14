---json
{
  "title": "FLUID-4431",
  "summary": "\"Add more\" button keeps focus style after adding files with keyboard, focus on \"Upload\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2011-09-07T13:13:22.657-0400",
  "updated": "2024-07-22T14:10:04.326-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF 6,  Mac 10.6\\\nFF 50 ( macOS 10.12)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-26T15:22:27.248-0400",
      "body": "I was able to reproduce this bug when using the keyboard to focus the 'Browse files' button but I could not reproduce it with the mouse.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:10:04.189-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
1\. Load <http://build.fluidproject.org/infusion/demos/uploader/html/uploader.html> and tab to "Browse files" button\
2\. Add files \
3\. Both "Add more" and "Upload" appear focused (upload actually has focus)

        