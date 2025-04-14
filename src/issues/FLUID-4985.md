---json
{
  "title": "FLUID-4985",
  "summary": "Sliders for \"text size\" and \"line spacing\" are not slidable on the touch screen",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2013-04-23T13:46:18.657-0400",
  "updated": "2013-06-27T16:20:27.198-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-06-03T15:00:50.805-0400",
      "body": "merged in pull request ( <https://github.com/fluid-project/infusion/pull/332> ) into the project repo at b6ea32a4b4c91b0c2b8bf1ac16d81bca9e2760e8\n"
    }
  ]
}
---
1\. Open UI Options demo with a device that has the touch scree;\
2\. Try sliding the slider of "text size" or "line spacing" to change its value;

The sliding handler does get the focus with the focus styling but cannot slide.&#x20;

The values for "text size" and "line spacing" still can be modified via text fields that are linked with sliders.

        