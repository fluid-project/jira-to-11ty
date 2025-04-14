---json
{
  "title": "FLUID-4569",
  "summary": "Setting SlidingPanel 'hideByDefault' to false doesn't work properly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-12-13T12:27:05.280-0500",
  "updated": "2014-03-26T16:18:40.626-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "Sliding Panel",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-18T13:18:17.434-0400",
      "body": "Submitted pull request <https://github.com/fluid-project/infusion/pull/419>\n\nActually this issues is somewhat out of date as the slidingPanel has been model bound for a while. However, steps have been taken to ensure that the initial state is based on the model value.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-26T16:18:38.229-0400",
      "body": "pull request merged at 861d635d56c7546c764d23cf40e7f96e85516b17\n"
    }
  ]
}
---
The fat panel UIO is hidden by default. The Sliding Panel's 'hideByDefault' option is supposed to allow integrators to change this: Setting 'hideByDefault' to false should result in the panel being visibile initially.

In fact, setting 'hideByDefault' to false doesn't work:

* the panel is not visible initially
* the toggleButton is not initialized with the correct text (neither the 'show' text nor the 'hide' text)

The first activation of the toggleButton does set the button text to the "show" text, which is correct, and future use of the panel is as expected.

Looking at the SlidingPanel initialization code, you can see that there is a code block to correctly initialize the panel in its hidden state, but there is no corresponding block to correctly initialize the panel in its visible state.

        