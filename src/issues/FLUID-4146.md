---json
{
  "title": "FLUID-4146",
  "summary": "\"Backward\" and \"both\" animate option does not produce desired animation direction",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2011-03-16T09:37:31.602-0400",
  "updated": "2015-06-09T13:18:28.035-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T13:18:28.035-0400",
      "body": "Jonathan Hung could you try the progress example for the bidirectional animation. <http://build.fluidproject.org/infusion/examples/components/progress/bidirectionalAnimation/>\n\nI believe the animation direction depends on whether the progress is increasing or decreasing. So I'm not sure if there is really a bug here.\n"
    }
  ]
}
---
Setting the animate "backward" or "both" option does not produce an animation backward or both directions. Instead the progress moves from left to right, and no animations between updates when backward and both are specified.

To test, add animate: "back" to the uploader demo.

        