---json
{
  "title": "FLUID-5209",
  "summary": "ensure that listeners in the preference framework are properly namespaced",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-11-11T09:44:40.353-0500",
  "updated": "2016-08-30T13:03:34.722-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5948/",
      "key": "FLUID-5948",
      "summary": "Think of scheme for \"orthogonal propagation\" of listener namespaces in wide component hierarchies"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-08-30T12:56:36.104-0400",
      "body": "Did not namespace listeners that are bound to events of other components using IoC. These have not be namespace due to <https://fluidproject.atlassian.net/browse/FLUID-5948#icft=FLUID-5948>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-08-30T13:03:27.630-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/742> has been merged into the project master branch at b11549a25f77fc83d5d989f77fbec1f396d474e2\n"
    }
  ]
}
---
Currently there are listeners like the onReset defined in the fullNoPreview preference editor that aren't properly namespaces.\
<https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/FullNoPreviewPrefsEditor.js#L33-L37>

This means that if you want to use the fullNoPreview prefs editor but want a reset that doesn't save, you won't be able to use this base grade. There is no way to override this event, as providing new configuration will just merge.&#x20;

The entire preference framework should be examined to resolve similar issues.

        