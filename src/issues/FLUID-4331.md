---json
{
  "title": "FLUID-4331",
  "summary": "Fix up the uiOptions Fat Panel styles including scroll bar always showing, and poor factoring of the css file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2011-07-07T15:51:21.522-0400",
  "updated": "2013-04-11T17:09:55.904-0400",
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
      "type": "Related to",
      "url": "/browse/FLUID-3761/",
      "key": "FLUID-3761"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-08T10:14:00.233-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-07-14T16:40:54.355-0400",
      "body": "Pull req sent <https://github.com/fluid-project/infusion/pull/108>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-15T14:58:26.685-0400",
      "body": "Pull request merged into project repo at e6173becedefaa0d0fb0423dff62529dd35fad54\n"
    }
  ]
}
---
The fat panel UI Options has a scrollbar on the right that should not be there.

The css files should also be split so that the outer and inner pages have their own style sheets.

There are other issues with duplicate styles that have become a bit tangled and etc that should also be taken care of at the same time.

        