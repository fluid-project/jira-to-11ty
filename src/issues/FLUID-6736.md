---json
{
  "title": "FLUID-6736",
  "summary": "SelfVoicing not working in Safari ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2022-05-16T08:13:57.547-0400",
  "updated": "2024-07-22T11:00:07.822-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "Safari 15.4 (macOS 12.3.1)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/C2LC-668/",
      "key": "C2LC-668",
      "summary": "Announcements are not working on Safari on Mac"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-05-16T08:17:22.353-0400",
      "body": "I submitted feedback to Apple, but it's unlikely I'll hear back from them.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-07-19T09:58:51.803-0400",
      "body": "Ned Zimmerman pointed out that the [Speech Synthesis demo from MDN](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) is still working in Safari. It's probably useful as a comparison to see if there is something actually wrong with the Orator's implementation or a work around that could be employed.\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2022-07-20T14:22:36.739-0400",
      "body": "Looks like the linked issue is fixed in Safari 15.5.\n\nAlso, I found this which may be of interest: <https://jankapunkt.github.io/easy-speech/>\n\nIt's basically a zero-dependency wrapper for the SpeechSynthesis API which ensures that it's properly initialized across various browsers.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2022-07-28T14:09:48.890-0400",
      "body": "cc Ned ZimmermanJustin ObaraAntranig Basman\n\nSelf voicing stops working in Safari due to [a webkit bug](https://bugs.webkit.org/show_bug.cgi?id=243055).\n\n[A pull request](https://github.com/fluid-project/infusion/pull/1089) is issued to work around the Safari bug by always assigning a speech synthesis voice at speaking instead of leaving the voice option to \\`null\\`. This change breaks some tests because the \"fluid.textToSpeech.utterance\" mock was not complete since it did nothing to override the construction of [the native “utterance” member](https://github.com/cindyli/infusion/blob/FLUID-6736/src/components/textToSpeech/js/TextToSpeech.js#L482). We made a mock Utterance and found that the tests hang through expecting the “onStop” event to be fired at the expected time. To save the time spent on this, we made [the mock getVoices()](https://github.com/cindyli/infusion/blob/FLUID-6736/src/components/textToSpeech/js/MockTTS.js#L165) return actual speech synthesis voice list instead of a list of objects. This fixed broken tests.\n\nMoreover, Ned will not use orator from infusion, and SelfVoicing is not configured as part of the out of the box configuration of UIO on any of our supported sites, so we can punt on this issue until we come to make the UIO 2 release - in the meantime Safari may have resolved their bug.\n\nThe PR is mothballed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T10:54:41.054-0400",
      "body": "I re-tested this with Safari 17.5 and am not able to reproduce the issue.\n"
    }
  ]
}
---
SelfVoicing ( Text-to-Speech ) is no longer working in Safari 15.4. It seems like it may be related to this version of Safari returning an empty array when speechSynthesis.getVoices() is called. 

See:

<https://stackoverflow.com/questions/71727048/window-speechsynthesis-getvoices-returns-empty-array-on-macos-safari-15-4>

        