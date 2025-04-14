---json
{
  "title": "FLUID-6481",
  "summary": "Orator not playing after pausing partway (in a certain environment)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-03-19T19:22:57.335-0400",
  "updated": "2020-03-19T21:34:49.050-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "Samsung Galaxy S6\\\nAndroid 7.0\\\nChrome 80\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The Orator component will work as expected, though without highlighting of any kind (see <https://fluidproject.atlassian.net/browse/FLUID-6412#icft=FLUID-6412>), but if playback is paused before it has finished then it will no longer work at all. If playback is allowed to complete on its own, then it can be started once more without issue. Other devices running Chrome 80 (Pixel 3, two PC's with different versions of Windows 10, MacBook) don't exhibit this behaviour.

**To reproduce:**

* Navigate to the Orator demo page: <https://build.fluidproject.org/infusion/demos/orator/>
* Click the Play button to begin self-voicing playback
* Click the Pause button to pause playback
* Click the Play button to resume playback

**Expected:**\
Playback should resume, Play button should turn into a Pause button

**Actual:**\
Playback does not resume, though the Play button does turn into a Pause button as expected

        