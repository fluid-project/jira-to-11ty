---json
{
  "title": "FLUID-4001",
  "summary": "Table of Contents shows hidden items",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-21T15:36:14.713-0500",
  "updated": "2011-07-28T09:24:01.936-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4003/",
      "key": "FLUID-4003"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4003/",
      "key": "FLUID-4003"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:29:17.092-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-26T11:18:42.555-0400",
      "body": "Resolved June 20, on commit 795aa19c567e62b38ec058ac58eda28e05cbb820:\\\n<https://github.com/harriswong/infusion/commit/795aa19c567e62b38ec058ac58eda28e05cbb820#src/webapp/tests/component-tests/tableOfContents/js/TableOfContentsTests.js>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T09:23:55.791-0400",
      "body": "This appears to be in the project repo\\\n<https://github.com/fluid-project/infusion/blob/master/src/webapp/components/tableOfContents/js/TableOfContents.js#L43-45>\n"
    }
  ]
}
---
The Table of Contents component will include headers that are actually hidden in the document itself.

        