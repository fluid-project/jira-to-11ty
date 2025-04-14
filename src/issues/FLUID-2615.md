---json
{
  "title": "FLUID-2615",
  "summary": "[Progress] Progress should support an option for custom Progress animations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-04-23T13:21:16.000-0400",
  "updated": "2009-06-01T18:44:36.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently the Progress animations are hard coded as a width animation. It wouldn't be hard to override the default width animation with a custom animation that took the percent value, mapped it to some other attributes of an element and then animated that, either using jQuery's animate function or some other code such as Processing.js or something else.&#x20;

This would allow for effects like:

* progress which used a different graphic for each percentage
* progress that changed color value or opacity
* progress grew larger or smaller in other dimensions than horizontal
* progress added characters to a string

The choices are limitless

        