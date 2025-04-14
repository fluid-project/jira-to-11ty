---json
{
  "title": "FLUID-4794",
  "summary": "the framework's progressive enhancement support should include an API for clients to be able to register their own feature checking functions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Alexey Novak",
  "date": "2012-09-12T11:30:05.520-0400",
  "updated": "2013-02-14T08:33:36.556-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-14T03:08:46.178-0500",
      "body": "Thanks for the branch work with this, Justin - now in trunk\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-02-14T08:33:36.449-0500",
      "body": "Merged into the project repo at 585ae84e652099a9f944d0bd8dd3fe342bff411e\n"
    }
  ]
}
---
<https://github.com/fluid-project/infusion/blob/master/src/webapp/framework/enhancement/js/ProgressiveEnhancement.js>&#x20;

Current ProgressiveEnhancement implementation does not allow developers to add their own features or extend an existing feature check (fluid.browser)

Currently videoPlayer has a copy paste code taken from the ProgressiveEnhancement implementation in order to add check for HTML5 and browser full screen support.\
<https://github.com/fluid-project/videoPlayer/blob/master/js/VideoPlayer.js#L28-50>

In this particular example a new set of features is being defined and then merged into staticEnvironment. The proper way is to reuse ProgressiveEnhancement.

        