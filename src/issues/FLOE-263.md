---json
{
  "title": "FLOE-263",
  "summary": "On iOS, tooltips capture first 'tap' - need second tap to activate button",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2015-02-06T12:54:50.093-0500",
  "updated": "2015-11-12T14:47:22.806-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": "Safari in iOS on iPad\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-29T13:31:26.431-0400",
      "body": "I tried the demos from <http://jqueryui.com/tooltip/> on my iPhone and had the same experience.&#x20;\n\ntap 1: activate tooltip\\\ntap 2: activate control\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:47:22.803-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1354> and all activities should be carried on there.\n"
    }
  ]
}
---
Testing the First Discovery tool on the iPad, I see that tapping on the next-back buttons once brings up the tooltip but does not activate the button. A second tap activates the button. When the page changes, the tooltip remains visible, so a single tap will activate the button.

        