---json
{
  "title": "FLUID-4293",
  "summary": "fluid.stringTemplate multiple token replacement",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "lahabana",
  "date": "2011-06-17T04:47:33.810-0400",
  "updated": "2014-03-03T13:07:03.912-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": "any\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "lahabana",
      "date": "2011-06-17T04:53:20.298-0400",
      "body": "here is a correction of the issue:\\\n<https://github.com/lahabana/infusion/blob/master/src/webapp/framework/core/js/Fluid.js#L1715-1726>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-05-22T00:22:47.478-0400",
      "body": "This has been corrected some time ago in trunk and has test cases\n"
    }
  ]
}
---
fluid.stringTemplate doesn't do multiple token replacement that is a lack that should be solved.\
For example:\
fluid.stringTemplate("%token %token", {token: "test"});\
is replaced by:\
"test %token" \
however, "test test" would be a more logical result.

The code of fluid.stringTemplate is her:\
<https://github.com/fluid-project/infusion/blob/master/src/webapp/framework/core/js/Fluid.js#L1715-1722>

        