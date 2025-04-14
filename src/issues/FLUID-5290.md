---json
{
  "title": "FLUID-5290",
  "summary": "fluid.version should reflect pre-release state",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2014-03-20T09:20:59.891-0400",
  "updated": "2015-06-26T10:00:52.199-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5449/",
      "key": "FLUID-5449"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5292/",
      "key": "FLUID-5292"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-19T09:15:00.680-0400",
      "body": "We briefly discussed this issue at yesterdays community meeting. It was decided that the fluid.version should include -SNAPSHOT but the namespace shouldn't.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-19T09:16:03.626-0400",
      "body": "This is fixed with pull request for <https://fluidproject.atlassian.net/browse/FLUID-5449#icft=FLUID-5449>\n\n<https://github.com/fluid-project/infusion/pull/536>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-19T14:43:40.645-0400",
      "body": "Merged into the project repo @ 7be53d11b3b7d67ba8eb1ca827801ecf8cca974b\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:57.008-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Currently the value assigned to fluid.version is "Infusion 1.5", however since the code hasn't been released yet, it is not really Infusion 1.5, but rather a pre-release of it. When creating build packages, we refer to them as 1.5-SNAPSHOT. I think we should do something similar for fluid.version as well. Perhaps even for the fluid\_1\_5 namespace. (this applies to all future versions of the code as well).&#x20;

Apart from this generally being more correct. We'd like to be able to use the value stored here for the demoMenu to display on the various demos. This will be really confusing if we have nightly builds that have a release number that doesn't yet exist.

        