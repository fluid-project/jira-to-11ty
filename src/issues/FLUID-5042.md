---json
{
  "title": "FLUID-5042",
  "summary": "Reorderer components compatibility with touch screens",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Mike Osterman",
  "date": "2013-06-05T17:41:55.972-0400",
  "updated": "2016-10-18T10:36:45.810-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Sakai CLE 2.9, Fluid version unknown\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-10-18T10:36:41.645-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/762> has been merged into the master branch at f36167b2fb5481a405643cc79c67ee76d67b3eab\n"
    }
  ]
}
---
In a BOF at Apereo 2013, we're viewing a demo of the Lesson Builder tool (<https://confluence.sakaiproject.org/display/LB/Contrib+-+Lesson+Builder>), which I believe is using the shared Fluid components of the core Sakai. I can dig up more detail if that would be help.

One issue that came up is whether the reorder function would work on a touch device like an iPad. It was said that it would not.

At Antranig's suggestion, I'm filing a general Jira for touch screen support for reorder and can provide more detail/background/use cases if needed. Just wanted to make sure the functional requirement gets on Fluid's radar.

        