---json
{
  "title": "FLUID-4352",
  "summary": "When there are no headings on the page the table of contents generates an empty UL",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2011-07-25T14:50:28.438-0400",
  "updated": "2014-03-03T13:05:07.976-0500",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-26T14:41:13.197-0400",
      "body": "Bug Parade Infusion&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-28T16:44:18.789-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/122>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-03T12:29:01.967-0400",
      "body": "Pull request merged into c8a4ac29f481556dddcb65267dc4a4c982c230da\n"
    }
  ]
}
---
If there are no headings on a page, table of contents should be completely empty instead on the empty UL which is now created.

        