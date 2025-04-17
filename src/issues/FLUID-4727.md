---json
{
  "title": "FLUID-4727",
  "summary": "The valueMapper transfomer should not throw an error when an inputPath doesn't match and there is no default value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Colin Clark",
  "date": "2012-07-06T17:06:33.575-0400",
  "updated": "2015-06-11T05:36:01.844-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2012-07-07T11:47:15.562-0400",
      "body": "Assigned to Antranig for review and push.\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-03-02T18:01:38.402-0500",
      "body": "Colin Clark perhaps this one can be closed? <http://lists.idrc.ocad.ca/pipermail/commits/2012-July/006484.html>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2014-03-26T15:14:41.651-0400",
      "body": "Can you verify that this issue has been resolve and close if so, Kasper Galschiot Markus?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-10T14:12:36.632-0400",
      "body": "Kasper Galschiot Markus and Antranig Basman can this be closed?\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2015-06-11T05:35:43.893-0400",
      "body": "Fixed with commit <https://github.com/fluid-project/infusion/commit/c65bedcc1709e101dcc015afcca37f2802feeea0>\n"
    }
  ]
}
---
At the moment, fluid.model.transform.valueMapper() will throw an error if:

1\. the specified inputPath resolves to undefined in the source model\
2\. there is no defaultInputValue specified

In the GPII, we have found that it can legitimately be the case that a path simply isn't available in the source model and there's no relevant default value (or it would be extremely tedious to specify a default value of "undefined" for each rule).

valueMapper() should be modified to simply do nothing in the above case.

        