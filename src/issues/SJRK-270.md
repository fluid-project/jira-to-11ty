---json
{
  "title": "SJRK-270",
  "summary": "storySpeaker stops working in Edge after running tests",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-08-29T16:08:41.840-0400",
  "updated": "2019-09-12T18:45:55.027-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Edge 44 on Windows 10 Pro v.1903\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-08-30T07:43:40.190-0400",
      "body": "@@Gregor Moss maybe cancel the speech synthesis during the cleanup. We do something like that in the TTS tests in Infusion.\n\n<https://github.com/fluid-project/infusion/blob/master/tests/component-tests/textToSpeech/js/TextToSpeechTests.js#L39-L43>\n\n \n\nIf you are using Infusion's TTS, you can call `cancel`\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-09-12T18:45:55.025-0400",
      "body": "This is no longer an issue after @@Justin Obara switched the storySpeaker out for the orator component in <https://fluidproject.atlassian.net/browse/SJRK-274#icft=SJRK-274>\n"
    }
  ]
}
---
The storySpeaker component (a fluid.textToSpeech) stops working in Microsoft Edge if the browser tests are run first. This issue does not occur in Chrome 76 or Firefox 68 in the same environment.

To reproduce:\
1\. Run the webserver\
2\. Run the browser tests to their completion (close any file upload dialogs): <http://localhost:8081/tests/>\
3\. Open the example story: <http://localhost:8081/storyView.html?id=storyExample>\
4\. Click the "Listen to my story" button (the green loudspeaker icon)

Expected:\
The title, author, keywords and contents of the story are read aloud

Actual:\
Silence, nothing happens

Commenting out the "volume: 0" specification in the page tests will solve the issue, but then the tests may be briefly audible, which is not ideal. Explore alternative solutions.

        