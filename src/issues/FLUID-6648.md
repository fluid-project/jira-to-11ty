---json
{
  "title": "FLUID-6648",
  "summary": "Switch slider temporarily disappears when clicked or activated with space",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2021-06-29T17:22:18.028-0400",
  "updated": "2024-07-24T14:04:49.249-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Switch"
  ],
  "environment": "Safari 14.1.1 (macOS 11.4)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-24T14:04:49.249-0400",
      "body": "Could not reproduce with Safari 17.5 on macOS 14.5\n"
    }
  ]
}
---
Note that this doesn't happen in the UIO when a contrast theme is applied.

Steps to reproduce:

1. Open the [switch demo](https://build-infusion.fluidproject.org/demos/switch/)
2. Activate the switch using the space key
3. Activate the switch by clicking on the slider with the mouse
4. Notice that the slide briefly goes invisible until the state flips. Sometimes the whole switch disappears if the active state is applied to the entire underlying button. 

        