---json
{
  "title": "FLUID-6051",
  "summary": "Reorderer - item \"shadow\" does not align correctly when zooming in",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2016-11-08T15:51:18.050-0500",
  "updated": "2016-11-08T15:51:18.050-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Chrome from Android\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
On Chrome for Android, the reorderer "shadow" for items being moved (by touching and dragging them with a finger) does not align correctly item movement if the browser has been zoomed in by "pinching" the screen (common when viewing desktop-only sites in mobile browsers).

This easiest to see on <http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/> by opening in Chrome for Android, zooming in, then moving some of the images around by touch and drag.

Speculatively, the reorderer's calculations for where the "ghosts" should be appear may be based on screen width calculations, and it doesn't recalculate on a zoom under mobile.

        