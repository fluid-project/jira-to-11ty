---json
{
  "title": "FLUID-3344",
  "summary": "The jQuery selectbox plugin used by the dropdown Inline Edit doesn't support noConflicts() mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Colin Clark",
  "date": "2009-11-01T17:15:53.000-0500",
  "updated": "2017-03-10T09:03:22.239-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-03-10T09:02:59.589-0500",
      "body": "The original repo no longer exists, but we've found a later version on the web and have preserved it in a GitHub repo ( <https://github.com/fluid-project/jquery.selectbox> ). We could make the no conflicts fix there.\n"
    }
  ]
}
---
We currently use a third-party jQuery plugin called "selectbox." It is available here:

<http://www.brainfault.com/jquery-plugins/jquery-selectbox-replacement/>

We're using an older version. The newest version claims support for noConflicts() mode, but a quick look through the source code suggests otherwise. The code always binds against the "jQuery" symbol instead of wrapping itself in an anonymous closure. I'm thinking perhaps the author didn't fully understand how noConflicts() mode works.

If we're committed to this particular plugin, we should offer a fix back to the author.

        