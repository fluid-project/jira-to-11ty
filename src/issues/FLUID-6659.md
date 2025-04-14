---json
{
  "title": "FLUID-6659",
  "summary": "JAWS ctrl-up/down arrows not working for grid reordering",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-07T10:23:41.840-0400",
  "updated": "2021-07-07T10:23:41.840-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "Chrome 91 & JAWS 2021 (Win 10)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When JAWS is enabled, it isn't possible to use the ctrl-up/down arrow keys to move items. The ctrl-i/m keys can be used instead. Interestingly, the ctrl-up/down arrow keys work for the vertical list reordering.

Steps to reproduce:

1. Open the [Grid Reorderer demo](https://build-infusion.fluidproject.org/demos/reorderer/gridreorderer/)
2. With JAWS enabled, move focus to one of the reorderable grid items
3. Using the keyboard attempt to use the ctrl-up/down keyboard combinations to move the items.
4. Notice that nothing happens, however, the ctrl-left/rigth keyboard combinations work, as do ctrl-i/m

        