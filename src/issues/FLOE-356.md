---json
{
  "title": "FLOE-356",
  "summary": "For many screens, only the tooltip gets read aloud on Chrome on Android",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2015-05-27T11:25:30.690-0400",
  "updated": "2015-11-12T14:42:41.784-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": "Nexus 7 (2012)\\\nAndroid 5.1.1\\\nChrome\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-05-28T16:21:46.426-0400",
      "body": "The android platform doesn't provide a way to deal with tooltips like what ipad does. With ipad, the first click on the buttons shows the tooltip and the next click triggers the button click behavior while Android does this two things in one single click. This ends up only one message, either the tooltip content or the panel instruction, gets read aloud depending on which one gets queued last.\n\nI was playing with android accessibility settings to find a potential fix. Turning on \"switch access\" in some cases will get the panel instruction  announced, however in that case the tooltip content would not be announced. Moreover, this behavior is inconsistent that, some clicks leads to the announcing of the panel instruction while other clicks announcing the tooltip content.\n\nOverall, no ideal solution for this issue yet.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:42:41.782-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1428> and all activities should be carried on there.\n"
    }
  ]
}
---
Using Chrome on Nexus 7 when moving between screens often only the tooltip is read aloud. However, there are rare times when the text of the screen is read aloud.

See this video for a demonstration.\
<https://drive.google.com/file/d/0BxzmBMhbP3nGcUVaQ1JvS2NGZGc/view?usp=sharing>

        