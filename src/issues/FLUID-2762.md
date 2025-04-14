---json
{
  "title": "FLUID-2762",
  "summary": "Link options are not obviously related to the title",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-05-22T15:23:41.000-0400",
  "updated": "2014-03-03T14:33:03.198-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-25T08:54:08.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T14:12:19.000-0400",
      "body": "The changes made for this issue and for <https://fluidproject.atlassian.net/browse/FLUID-2761#icft=FLUID-2761> do make the layout much more visibly sensible.\n\nThe actual markup seems odd to me, but I think the \"proper\" solution is an addition to the FSS (which I've requested in <https://fluidproject.atlassian.net/browse/FLUID-2766#icft=FLUID-2766>), and I think that's beyond the scope of the 1.1 release. I think the current fix should be accepted for now, and the markup could be revisited if the requested styles are ever added.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-25T15:53:12.000-0400",
      "body": "The original solution (the proper one outlined above, which already exists in FSS) was the better one, and it has been re-instated\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T16:28:07.000-0400",
      "body": "The latest changes to the markup are good improvements - but some of the \\<label> elements are missing a for attribute.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-26T11:41:37.000-0400",
      "body": "see code review comment above\n"
    }
  ]
}
---

        