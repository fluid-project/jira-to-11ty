---json
{
  "title": "FLUID-5123",
  "summary": "Remove onIframeVisible event as the reapplication of text size and line-space in the iframe no longer seems necessary.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-09-03T15:53:04.943-0400",
  "updated": "2013-10-08T13:39:34.684-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5171/",
      "key": "FLUID-5171"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-08T08:47:44.351-0400",
      "body": "Seems that this is needed after all. (see: <https://fluidproject.atlassian.net/browse/FLUID-5171#icft=FLUID-5171>)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-08T11:29:05.667-0400",
      "body": "Seems that it isn't actually related, as <https://fluidproject.atlassian.net/browse/FLUID-5171#icft=FLUID-5171> was fixed by making the invokers dynamic.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-08T13:01:44.489-0400",
      "body": "Addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-5161#icft=FLUID-5161>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-08T13:39:34.682-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/414> ) into the project repo at b4422d732612a84ba429f3866b97786e627d8fb1\n"
    }
  ]
}
---
Remove onIfameVisible event and listener as it no longer seems necessary to reapply the text size and line-space values in the iframe.

// Re-apply text size and line space to iframe content since these initial css values are not detectable\
// when the iframe is hidden.\
iframeEnhancer.events.onIframeVisible.addListener(function () {\
iframeEnhancer.applier.requestChange("", iframeEnhancer.model);\
});

Should also update the unit tests if needed.

Can remove the following blocks:\
<https://github.com/fluid-project/infusion/blob/master/src/components/uiOptions/js/FatPanelUIOptions.js#L112-L114>\
<https://github.com/fluid-project/infusion/blob/master/src/components/uiOptions/js/FatPanelUIOptions.js#L224>\
<https://github.com/fluid-project/infusion/blob/master/src/components/uiOptions/js/FatPanelUIOptions.js#L244-L248>

        