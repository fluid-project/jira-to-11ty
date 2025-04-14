---json
{
  "title": "FLUID-5593",
  "summary": "After speaking has finished, the model is reset, and wipes out any custom model properties.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-02-06T11:17:42.123-0500",
  "updated": "2015-06-26T09:59:11.905-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-02-09T11:03:53.756-0500",
      "body": "Merged the pull request <https://github.com/fluid-project/infusion/pull/585> into the master branch @ 9d6d22b8cc7489d78b22b5cf7e1d58338e94c080\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:52.616-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The handleEnd method, which is called after speaking has finished, resets the model by replacing it with false values. However since this replaces the model, if there are custom properties added to the model (e.g. enabled used by the enactor), they will be removed.

current method.

fluid.textToSpeech.handleEnd = function (that) {\
if (!that.queue.length) {\
that.applier.change("", {\
speaking: false,\
pending: false,\
paused: false\
});\
}\
};

The correct action should be to only change the values it cares about. Perhaps by merging these values with the current model and passing this into to the applier call.

fluid.textToSpeech.handleEnd = function (that) {\
var resetValues = {\
speaking: false,\
pending: false,\
paused: false\
};

if (!that.queue.length) {\
var newModel = $.extend({}, that.model, resetValues);\
that.applier.change("", newModel);\
}\
};

        