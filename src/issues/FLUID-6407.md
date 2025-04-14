---json
{
  "title": "FLUID-6407",
  "summary": "Orator highlighting leaving artifacts in Edge",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Gregor Moss",
  "date": "2019-10-08T17:39:55.074-0400",
  "updated": "2024-07-24T13:21:10.737-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "Windows 10 v.1903\\\nEdge 44.18362.387.0\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6407/2019-10-07 ST Orator highlight partially sticking around in Edge 1.PNG",
      "filename": "2019-10-07 ST Orator highlight partially sticking around in Edge 1.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6407/2019-10-08 ST Orator artifacts in Edge 2.png",
      "filename": "2019-10-08 ST Orator artifacts in Edge 2.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-24T13:21:10.559-0400",
      "body": "Could not reproduce with MS Edge 126 on macOS 14.5\n"
    }
  ]
}
---
The Orator leaves graphical artifacts leftover from highlighting as it progresses through a body of text in MS Edge 44. The bulk of the highlighting is removed, but small elements here and there persist.

To reproduce:

* navigate to the Orator demo page: <https://build.fluidproject.org/infusion/demos/orator/>
* press the Play button to begin playback

Expected:

The highlighting will follow along with what is being read, and will be fully removed from words after they are done being read

Actual:\
Parts of the highlighting (most often the top and left sides) will remain after the word has finished being read aloud. See attached screenshots for examples

        