---json
{
  "title": "FLUID-4513",
  "summary": "FullPreviewUIOptions unit test fails in FF6 and Chrome",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2011-10-11T09:59:35.822-0400",
  "updated": "2013-10-04T09:38:10.897-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Table of Contents",
    "UI Options"
  ],
  "environment": "Mac 10.6 & Win XP FF6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-10-11T10:16:19.719-0400",
      "body": "I believe the correct fix for this issue will be to remove the dependence on the setTimeout completely. From the comments, it seems that the issue is the event is buried too deeply, perhaps this could be exposed at a higher level.\n\n\" // TODO: Very unsatisfactory - the TOC resources are the final thing we wait on, and the\\\n// event for this is very deeply buried\"\n"
    }
  ]
}
---
Test #2 "ToC links created" fails&#x20;

Appears to be a timing issue in src/webapp/tests/component-tests/uiOptions/js/FullPreviewUIOptionsTests.js line 54&#x20;

        