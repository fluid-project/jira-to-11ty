---json
{
  "title": "FLUID-5293",
  "summary": "The model relay using \"fluid.transforms.arrayToSetMembership\" isn't transformed properly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2014-03-20T14:57:41.025-0400",
  "updated": "2014-06-25T16:16:10.402-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5303/",
      "key": "FLUID-5303",
      "summary": "Review and possibly remove \"link counting system\" for preventing oscillation in model relay"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5294/",
      "key": "FLUID-5294",
      "summary": "Review ambiguous status of \"value\" and \"input\" which are both acceptable as input for a standardInputTransform"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-04T15:19:27.258-0400",
      "body": "There is a pull request for this issue: <https://github.com/fluid-project/infusion/pull/484>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-04-08T20:00:23.005-0400",
      "body": "This headline issue has accumulated several subcases, each of which exhibited different failures in different parts of the framework. Other issues raised during this process include <https://fluidproject.atlassian.net/browse/FLUID-5294#icft=FLUID-5294> and <https://fluidproject.atlassian.net/browse/FLUID-5303#icft=FLUID-5303>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-05-13T15:19:17.128-0400",
      "body": "Merged into project repo at 2f678db1c38960c902f14afc725d1a77ae70c08a\n"
    }
  ]
}
---
When using "fluid.transforms.arrayToSetMembership" in the model relay, the model relay seems not happening and the target model is not populated.

A pull request with a unit test has been issued to demonstrate it: <https://github.com/fluid-project/infusion/pull/483>

This issue is a blocker for proceeding with the <https://fluidproject.atlassian.net/browse/FLOE-171#icft=FLOE-171> (<http://issues.fluidproject.org/browse/FLOE-171>) for the metadata demo.

        