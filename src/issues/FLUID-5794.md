---json
{
  "title": "FLUID-5794",
  "summary": "The README for fluid-publish has some malformed syntax in the options table",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-10-21T11:28:41.614-0400",
  "updated": "2016-07-08T09:03:55.902-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-10-21T11:31:12.968-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/fluid-publish/pull/3>\n"
    }
  ]
}
---
The options table contains "\`" for inline code instead of \<code> and there are some invalid closing tags.

        