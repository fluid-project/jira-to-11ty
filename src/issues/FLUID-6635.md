---json
{
  "title": "FLUID-6635",
  "summary": "Orator's domReader does not properly selfVoice and highlight content in Chrome",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-06-28T14:30:01.688-0400",
  "updated": "2021-07-14T12:23:16.537-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "Self Voicing"
  ],
  "environment": "Chrome 91\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-28T17:06:38.925-0400",
      "body": "It seems that chrome is not synthesizing long text ( about 4100+ characters ). It essentially just freezes and doesn't fire any events. Also they don't seem to be firing the boundary events either. \n\nThis can be demonstrated with this codepen example: <https://codepen.io/jobara/full/oNWNwRo> \n\nDemo has been updated to allow for switching the voice used. This shows the Google provided voices have the issue, but the system supplied voices work as expected. \n\nHowever, with Chrome, it returns an empty array of voices on the first invocation. In the codepen example I used an interval and a promise to poll for them.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-29T09:19:15.630-0400",
      "body": "I've filed an issue against Chromium. <https://bugs.chromium.org/p/chromium/issues/detail?id=1224880>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-29T09:31:48.850-0400",
      "body": "To me this seems like an issue with the voices (speech synthesizers) that Google supplies with Chrome. The system supplied ones seem to work fine. That leaves us with a few options: \n\n* Wait for Google to fix the issue\n  * Not sure when this will happen.\n* Chuck text to a size that will be read properly.\n  * Would not fix issue with highlighting, there really isn't a work around for that while using the Google provided voices.\n  * It would be difficult to parse the text as context matters for speech synthesis. For example how do you pronounce \"read\" without context? And chunking rules would also need to be language dependent to try to maintain the proper grammar and context.\n* Do not use any of the default (Google provided) synthesizers\n  * Unfortunately the available synthesizers vary across platforms and browsers. We'd need retrieve the list of voices and then parse through to find one that matches the given language. Synthesizers aren't provided for every possible language, so in some cases we may still need to use a Google supplied one and/or come up with our own fallback rules. Additionally, getVoices() behaves odd in Chrome, as noted in the first comment about how I had to devise my own function using a promise and interval to poll for the voices.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-07-05T13:28:45.260-0400",
      "body": "For now we're waiting on Google to fix the bugs with the voices.\n"
    }
  ]
}
---
While the domReader doesn't work properly, the selection reader doesn't appear to have any issues with playback.

 

Steps to reproduce:

1. Open the [Prefs framework demo](https://build-infusion.fluidproject.org/demos/prefsframework/)
2. Open the prefs editor
3. Enable text-to-speech
4. In the Orator widget click the play button
5. Notice that the play button turns into a pause button but nothing is self voiced

 

1. Open the [Orator demo](https://build-infusion.fluidproject.org/demos/orator/)
2. Click the play button
3. Notice that the content is self voiced but the word highlighting doesn't appear

 

 

        