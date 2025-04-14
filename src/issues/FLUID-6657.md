---json
{
  "title": "FLUID-6657",
  "summary": "VoiceOver neither indicates position in queue nor total files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-07T08:37:21.024-0400",
  "updated": "2021-07-22T15:47:30.568-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Safari 14.1.1 & VoiceOver (macOS 11.4)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
It is possible to navigate to the file queue using the keyboard and VoiceOver. VoiceOver does announce the file names that are in the queue, but there is no indication how many total files nor the position you are in the queue. This issue is compounded by the fact that navigating beyond the top or bottom will wrap around to the other side of the queue.

Steps to reproduce:

1. Open the [Uploader demo](https://build-infusion.fluidproject.org/demos/uploader/)
2. Add some files to the queue
3. With VoiceOver on, navigate to the file queue
4. Using the up and down arrows, navigate between files in the queue.
5. Notice that the file names are read but not the position in the queue nor the total number of files.
6. Notice that when you reach the top or bottom the next arrow press will wrap around to the other side of the queue.

        