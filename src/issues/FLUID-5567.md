---json
{
  "title": "FLUID-5567",
  "summary": "The ToC header is not localizable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-11-20T08:57:36.724-0500",
  "updated": "2015-06-26T10:10:49.238-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5.1",
    "1.9"
  ],
  "components": [
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5564/",
      "key": "FLUID-5564",
      "summary": "Table of Contents header not internationalizable"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5568/",
      "key": "FLUID-5568"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-11-20T14:03:46.743-0500",
      "body": "Submitted pull requests:\n\n1.5.x: <https://github.com/fluid-project/infusion/pull/574>\n\n2.0: <https://github.com/fluid-project/infusion/pull/573>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-11-24T10:25:06.422-0500",
      "body": "The pull request for 1.5.x (<https://github.com/fluid-project/infusion/pull/574>) has been merged into the infusion-1.5.x branch @ faf39f0c388636a3c7bfbbb2db7727c5d1bd0fbc\n\nThe pull request for 2.0 (<https://github.com/fluid-project/infusion/pull/573>) has been merged into the master branch @ df5f8cfabf815a4086b778e73125c3c952dda4ec\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:16.634-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The heading for the Table of Contents is hard-coded into the HTML template, which means it is not internationalizable through a message bundle. It should be defined in a strings block and inserted by the renderer.

This issue was surfaces in the fluid-tech channel on Nov. 19, 2014 by ashgotti, who is developing a Drupal plugin for UIO

        