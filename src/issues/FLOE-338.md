---json
{
  "title": "FLOE-338",
  "summary": "Not all punctuation is read correctly by the self voicing keyboard input",
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
  "date": "2015-05-14T17:07:02.586-0400",
  "updated": "2015-11-12T14:43:18.134-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-312/",
      "key": "FLOE-312",
      "summary": "Add TTS support to keyboard assistance screens"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:43:18.132-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1413> and all activities should be carried on there.\n"
    }
  ]
}
---
Not all punctuation is read correctly by the self voicing keyboard input.

For example: ",", "!", ";"

To reproduce:

* navigate to the First Discovery Keyboard panel
* focus the input box
* type ","

Some possible solutions:

* Use SSML <http://www.w3.org/TR/speech-synthesis/> to mark up punctuation so that they are read as their character names – a problem with this solution is that it looks like Chrome does not implement SSML <http://stackoverflow.com/questions/21952736/the-right-way-to-use-ssml-with-web-speech-api>
* Implement a lookup table so that when the user types "," we send "comma" to the speech API – the downside to this is the need to make and maintain tables for all supported languages

        