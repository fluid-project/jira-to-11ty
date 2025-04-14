---json
{
  "title": "FLUID-3797",
  "summary": "Remove deprecated callbacks from progress component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-10-14T15:11:24.861-0400",
  "updated": "2016-03-09T09:58:30.723-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Neel Dalsania",
      "date": "2016-03-05T02:06:53.700-0500",
      "body": "Do you mean replacing showAnimation and hideAnimation with fadeIn and fadeOut\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-09T09:58:20.718-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/679> ) into the project repo at 9f515ec9ed448e1f7f0c6380b1209a20eb398647\n"
    }
  ]
}
---
The progress component has two deprecated callbacks for showAnimation and hideAnimation. These should be removed as of Infusion 1.5.&#x20;

        