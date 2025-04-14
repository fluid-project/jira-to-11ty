---json
{
  "title": "FLUID-5363",
  "summary": "Review converted documentation for broken links",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2014-05-07T06:30:37.037-0400",
  "updated": "2015-06-17T10:30:00.917-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5452/",
      "key": "FLUID-5452",
      "summary": "Review the converted docs for links to framework API wiki pages"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2014-06-23T10:50:21.077-0400",
      "body": "When reviewing the links for <http://issues.fluidproject.org/browse/FLUID-5452> I made a list of all the broken links that existed at that time.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-10-17T12:54:50.394-0400",
      "body": "This has been taken care of as part of <https://fluidproject.atlassian.net/browse/FLUID-5511#icft=FLUID-5511>\n"
    }
  ]
}
---
When converting pages from the wiki to Markdown, we have been preserving the links. If there are linked pages which are not carried over, we will have broken links.

Once we have the first batch of pages converted for the 1.5 Infusion release, we should review for broken links and fix.

<https://github.com/fluid-project/infusion-docs>

        