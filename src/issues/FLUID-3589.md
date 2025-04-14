---json
{
  "title": "FLUID-3589",
  "summary": "Reorderering with line to indicate new position should be different than with a big box",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "James Yoon",
  "date": "2010-04-01T15:25:39.000-0400",
  "updated": "2010-04-01T15:29:11.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3589/reorderer_largebox_1.jpg",
      "filename": "reorderer_largebox_1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3589/reorderer_largebox_2.jpg",
      "filename": "reorderer_largebox_2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3589/reorderer_sliver_1.jpg",
      "filename": "reorderer_sliver_1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3589/reorderer_sliver_2.jpg",
      "filename": "reorderer_sliver_2.jpg"
    }
  ],
  "comments": []
}
---
If the new position indicator (NPI) is a line:

* The pivot element should remain static, but its ghost should move around with the NPI.
* NPI should not appear if the "new position" would not affect any positioning (i.e., there shouldn't be a NPI to the left or right of the pivot element)
* This is to avoid the issue shown in the attached images where NPIs are appearing, but the position is not affected

If the new position indicator is a large rectangle:

* The pivot element should be removed, replaced with a combination of the NPI and its ghost.
* This is to avoid the issue shown in the attached images where NPIs are appearing, but the position is not affected

A more consistent interaction might be to "move" the pivot element when reordering. i.e., no need for an NPI, but rather previewing what the reordering would look like before letting go of the mouse button and "confirming" the reordering.

        