---json
{
  "title": "FLUID-4428",
  "summary": "Can't add listeners through options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2011-09-06T14:22:27.911-0400",
  "updated": "2011-09-07T13:23:14.618-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-09-06T15:23:51.206-0400",
      "body": "The change in the merged branch that seems to have precipitated this bug is in UIOptions.js fluid.uiOptions.mapOptions(): The code that processes the user-passed-in options is now wrapped in a test: if (typeof(source) === \"string\").\n\nThe 'source' in this case is the right-hand-side of a config key/value pair. I'm not 100% sure how the options munging works, but from what I can see, requiring the right-hand-side to be a string is reasonable. If this is true, then the problem lies in the fact that the two full-page version of UI Options do not do this in their config: they have full JS objects.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-07T12:13:33.861-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/155> merged into project repo at c998d2b4492aaa6932ad3e0f70f7a64a86729260\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-07T13:23:14.613-0400",
      "body": "A second pull request which allows direct options was merged into the project repo at a29adc3ebd03ea650d67e3e9981f106474713191\n"
    }
  ]
}
---
I am unable to add an 'onSave' listener to uiOptions using the munged options as follows:\
fluid.uiOptions.fullNoPreview("#test", {\
prefix: "yada/yada",\
uiOptions: {\
options: {\
listeners: {\
onSave: function () {\
console.log("onSave event fired");\
}\
}\
}\
}\
});\
The event fires, but it appears that the listener was never registered.

This functionality worked before the FLUID-4409 branch was merged. I tested the project repo immediately before the merge and it worked, and after the merge it didn't.

Bug Parade Infusion

        