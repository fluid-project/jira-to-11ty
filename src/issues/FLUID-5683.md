---json
{
  "title": "FLUID-5683",
  "summary": "Inform users of dynamic changes in content frame",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Kaye Mao",
  "date": "2015-06-09T14:08:39.615-0400",
  "updated": "2022-02-03T10:24:40.179-0500",
  "versions": [
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-09-01T13:24:23.932-0400",
      "body": "According to the discussion with Jan, the announcement for the preference change should only happen when the control for that preference loses focus and the announcement can be just \"preference changed\" instead of giving detailed message such as \"text size changed to 1.2 times\" since browsers already support the announcement of changed value for most (or all) controls.\n\nFor example, when users use slider to change text size from 1 to 1.5. The live region doesn't need to be updated when the value moves from 1 -> 1.1 -> ... -> 1.5. Only when users move focus to the next preference, announce \"preference changed\".\n\nThis is a lower priority issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-08-12T13:13:03.089-0400",
      "body": "Perhaps we could use a status region or alert to indicate the type of adjustment made.\n"
    }
  ]
}
---
Suggestions for fixes as part of the WCAG 2.0 accessibility audit of the UI options tools 

* let AT users know live changes are happening in content frame
* add a small aria-live div that includes information such as “Content frame updated.” or more specifically “Text size increased, contrast changed.” Or perhaps just add aria-live to the content frame itself.

        