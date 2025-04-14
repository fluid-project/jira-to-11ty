---json
{
  "title": "FLUID-4262",
  "summary": "The uPortal mockup integration example is throwing errors when using the UI Enhancer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2011-05-24T12:29:37.024-0400",
  "updated": "2011-06-20T15:33:12.268-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-24T12:30:44.302-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-01T11:01:59.568-0400",
      "body": "uiEnhancer.updateModel no longer exists; use uiEnhancer.applier.requestChange instead.  This is a change from <https://fluidproject.atlassian.net/browse/FLUID-4207#icft=FLUID-4207>, <https://github.com/fluid-project/infusion/commit/282ff955ee98a85b63b102852352e3c68d06407b>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-01T11:07:31.585-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/61> on branch <https://github.com/harriswong/infusion/tree/FLUID-4262>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-03T14:46:14.375-0400",
      "body": "Restored uiEnhancer.updateModel, and pushed to <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267> branch, <https://github.com/michelled/infusion/commit/f21c2ab5432ea14a35ac9ca950f6e306aea81cb0>\n"
    }
  ]
}
---
To see the error, select the links in the 'customize my portal' list.&#x20;

It appears that the API for UI Enhancer has changed recently and the integration example was not modified to work with it.

        