---json
{
  "title": "FLOE-390",
  "summary": "When some preferences are changed, focus remains on the control, while on others, focus is lost",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Simon Bates",
  "date": "2015-06-05T14:10:32.358-0400",
  "updated": "2015-11-12T14:37:56.765-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:37:56.762-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1460> and all activities should be carried on there.\n"
    }
  ]
}
---
Example of focus remaining:

* Go to the theme panel
* Tab to the theme selector (original, black on white, white on black)
* Change the theme using the keyboard arrow keys
* When we change the theme, focus remains on the control

Example of losing focus:

* Go to the text-to-speech speed panel
* Tab to the "+" or "-" buttons
* Press Return
* Focus is lost from the page

        