---json
{
  "title": "FLUID-5387",
  "summary": "Random failure of tests run in all-tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2014-06-02T10:09:31.446-0400",
  "updated": "2015-06-26T10:10:30.867-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": "IE 8 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-02T13:23:38.377-0400",
      "body": "This issue seems to have arisen with this merge <https://github.com/fluid-project/infusion/commit/f77fac2d2d8ecd7fe5ffd2f497cf404e8f13814b>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-06-09T13:40:59.230-0400",
      "body": "GIven that this is only in IE8, perhaps we shouldn't worry too much about it?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-06-11T10:16:01.875-0400",
      "body": "This issue results from a timing issue (race condition) in the IoC testing framework. I believe it will require an upgrade to qunit in order to resolve it but I haven't had time to investigate it in detail. I have seen these failures on several browsers and not just IE8, especially if the machine is running slowly. The workaround is to run the failing tests individually and verify that they run. We should push this out for Infusion 2.0 since it will take a lot of diagnosis to resolve.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-11T10:17:13.913-0400",
      "body": "Spoke with @@Antranig Basman in the channel today about this. It seems there is a timing issue, that may require a fix in qunit. This seems to be out of the scope for the 1.5 release, and should be addressed afterwards.\n\n<https://botbot.me/freenode/fluid-work/2014-06-11/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T14:56:31.722-0400",
      "body": "Could not reproduce with IE 11 (which is currently the latest version of IE supported)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:17.190-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
There appears to be some tests failing randomly in the all-tests.html. However, when they are run individually they pass. Different tests are failing on different runs, so it is hard to track down what is causing it exactly. It seems that it could be the case where elements that are needed for the test are destroyed before the test completes.&#x20;

        