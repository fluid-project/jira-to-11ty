---json
{
  "title": "FLUID-5697",
  "summary": "There should be an easy way for Table of Contents to ignore certain content",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2015-06-24T10:33:18.690-0400",
  "updated": "2016-07-08T08:47:13.390-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5699/",
      "key": "FLUID-5699"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-24T13:52:27.539-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/614>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-24T13:56:14.223-0400",
      "body": "The explicit include has been filed under <https://fluidproject.atlassian.net/browse/FLUID-5699#icft=FLUID-5699>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-07-06T15:23:32.093-0400",
      "body": "I've updated the documentation on the wiki. I don't think it's been ported to the infusion-docs space yet.\\\n<https://wiki.fluidproject.org/display/docs/Table+of+Contents+API>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-07-13T11:52:27.360-0400",
      "body": "Merged into project trunk at  revision 5e9413cf34caa5d25bdbaf33c5d9e9581391b6e0 - we should try to move our existing component documentation out of the wiki as soon as we can\n"
    }
  ]
}
---
There should be an easy way to ignore elements in the markup to prevent it from appearing in the Table of Contents. For example, add a "flc-toc-tocContainer-ignore" class to elements and any headers contained within will be excluded.

Conversely, we may want to consider a way to explicitly include an element if its parent is excluded.

        