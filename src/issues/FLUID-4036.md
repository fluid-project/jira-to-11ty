---json
{
  "title": "FLUID-4036",
  "summary": "Pager dependent on rsf:ids for sortable columns",
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
  "reporter": "Anastasia Cheetham",
  "date": "2011-01-20T11:27:27.291-0500",
  "updated": "2014-05-13T15:33:15.765-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4035/",
      "key": "FLUID-4035",
      "summary": "Update the Pager to use IoC"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4036/FLUID-4036-v1.patch.txt",
      "filename": "FLUID-4036-v1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-20T11:29:18.076-0500",
      "body": "I'm not sure whether or not we should fix this rsf:id issue right away, or wait until we completely re-write the Pager to use IoC (<https://fluidproject.atlassian.net/browse/FLUID-4035#icft=FLUID-4035>).\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-25T12:54:36.851-0500",
      "body": "We should fix the Pager as-is, and not depend on the task of converting Pager to IoC, which may not happen for a while.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-26T11:27:38.752-0500",
      "body": "FLUID-4036-v1.patch.txt is a first pass at allowing the pager to use cutpoints. I have added a simple unit test and updated the demo to use selectors instead of rsf:ids. Everything seems to be working, but the code to get it to work could definitely use some cleanup, if not an entirely different approach.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-02-07T15:39:55.028-0500",
      "body": "I've done some more work in a branch in my github account ( <https://github.com/jobara/infusion/tree/FLUID-4036> ). I've started making use of rendererCompoents. Still a bunch of work to be done though.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-07-22T21:13:36.564-0400",
      "body": "Merged into trunk at revision acf4633 - Page now uses standard (old-style) RendererComponents throughout\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-03-03T11:47:10.826-0500",
      "body": "The Pager demo HTML still has rsf:id attributes throughout. Since these demos serve as examples of how to use the components, we should clean the HTML up to reflect recommended practice.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-04T15:25:02.391-0400",
      "body": "For 2.0 we should remove all references to rsf:id in the entire codebase.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-08T10:46:29.683-0400",
      "body": "Submitted a pull request to remove the use of ref:id's from the pager demos and tests.\\\n<https://github.com/fluid-project/infusion/pull/514>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-05-12T11:47:34.760-0400",
      "body": "Merged at 60b0f8ba37d58f6767039da2ccda900a96fcc94e\n"
    }
  ]
}
---
The Pager currently requires rsf:ids on column headers and the column row in order to use sortable columns. We need to re-do this to use general selectors instead.

        