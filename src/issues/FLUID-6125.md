---json
{
  "title": "FLUID-6125",
  "summary": "string - number transformations should allow for specifying decimal precision ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2017-02-07T15:19:32.600-0500",
  "updated": "2017-03-06T09:41:53.672-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-03-06T09:41:47.264-0500",
      "body": "The infusion pull request <https://github.com/fluid-project/infusion/pull/807> has been merged at 94997916acd56b4073eec50b8e4266c5ddfc9bac\n\nThe corresponding infusion-docs pull request <https://github.com/fluid-project/infusion-docs/pull/116> has been merged at 03b14860fdfd8286accb3a4d7ca982fda8511642\n"
    }
  ]
}
---
Due to floating point precision, if a number includes a decimal point, the rendered output is not always what you'd expect. While implementing the textfield steppers in the prefs framework, 1.2 was being displayed as 1.2000000000000002 instead.&#x20;

See channel conversation: <https://botbot.me/freenode/fluid-design/2017-02-07/?msg=80593842&page=1>

To work around this, the numberToString transformation should take in options to specify how many decimal places to display.

A potential implementation can be seen on stack overflow ( <http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places/12830454#12830454> )

        