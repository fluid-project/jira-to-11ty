---json
{
  "title": "FLUID-5523",
  "summary": "Prefs Frameword demo overlay has broken link to demo code",
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
  "reporter": "Anastasia Cheetham",
  "date": "2014-10-09T10:26:24.254-0400",
  "updated": "2016-07-08T08:44:21.658-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos",
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-10-10T10:20:57.592-0400",
      "body": "This problem actually seems to be present in most – if not all – demos.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-10-10T10:53:53.489-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/563> ) into the project repo at fde96fce6fd6683cbdbb82d0c0bad69ddc180e88\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:53.472-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The prefs framework demo\
<http://build.fluidproject.org/infusion/demos/prefsFramework/>\
has a broken link for the 'demo code' link in the overlay. It is currently referencing\
<https://github.com/fluid-project/infusion/tree/master/src/demos/prefsFramework>\
This wasn't properly updated when we restructured the code, and it should point to\
<https://github.com/fluid-project/infusion/tree/master/demos/prefsFramework>

        