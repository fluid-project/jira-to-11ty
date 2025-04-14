---json
{
  "title": "FLUID-4344",
  "summary": "UIOpions test and demo pages don't use iframes properly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2011-07-18T10:04:17.693-0400",
  "updated": "2011-07-18T14:03:08.036-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4341/",
      "key": "FLUID-4341",
      "summary": "UI Options: sakai integration demo fails"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-18T12:33:59.626-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/110> merged into project repo at b391e95f60784c65c25dd957bd2f8202189724d7\n"
    }
  ]
}
---
Various UIOptions test and demo pages weren't updated to use the new iFrame work  done for the live preview for fat-panel UIOptions:

* tests/manual-tests/html/SomeKindOfNews.html)&#x20;
* integration-demos/sakai/html/ui-options-fss-sakai.html

Bug Parade Infusion

        