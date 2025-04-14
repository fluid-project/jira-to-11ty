---json
{
  "title": "FLUID-6134",
  "summary": "Add the ability to disable removing of backgrounds in contrast modes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2017-02-27T09:49:26.021-0500",
  "updated": "2017-02-27T09:49:26.021-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
For a web designer, it would be useful to be able to tell UI Options to not remove the background images from a container.

For example, Google Maps uses background images to display its map information - turning on a contrast theme will make it disappear. In this case, the web designer will need to create a specific rule (with !important) to override UIO. It would be better if there was a class we can apply to such containers instead of resorting to an !important arms race.

i.e.\
\<div id="map" class="uioc-keep-background">...\</div>

        