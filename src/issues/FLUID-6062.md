---json
{
  "title": "FLUID-6062",
  "summary": "Assess whether we should apply a particular docs style and workflow for features which are new in a particular Infusion release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "assignee": "Jonathan Hung",
  "reporter": "Antranig Basman",
  "date": "2016-11-11T12:14:06.991-0500",
  "updated": "2022-03-14T13:29:48.078-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Docs platform",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6096/",
      "key": "FLUID-6096"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6062/Styling flag for FLUID-6062.pdf",
      "filename": "Styling flag for FLUID-6062.pdf"
    }
  ],
  "comments": [
    {
      "author": "Dana",
      "date": "2016-11-17T14:04:13.519-0500",
      "body": "As we discussed at the crit – something like this Justin Obara, Simon Bates, Jonathan Hung, Antranig Basman (see attachment)? I added some highlighting to the text as it sounded like part of the problem is that it's too easy to miss the changes. I don't think the text alone would solve that.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-12-06T13:35:55.112-0500",
      "body": "Quick example of the styles in the \"Styling flag for <https://fluidproject.atlassian.net/browse/FLUID-6062#icft=FLUID-6062>.pdf\" <https://jsfiddle.net/wgknohuj/3/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-12-12T15:47:21.317-0500",
      "body": "We discussed this at the Floe Planning meeting today. The decision is that we will start adding the \"new/changed in\" flags after the Infusion 2.0 release.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-03-14T13:22:40.360-0400",
      "body": "Migrated to Infusion Docs [Issue #224](https://github.com/fluid-project/infusion-docs/issues/224)\n"
    }
  ]
}
---
As part of the review for pull <https://github.com/fluid-project/infusion-docs/pull/103> documenting some features which are new for the Infusion 2.0 release, @jobara suggested that we might want to adopt a particular styling for features which are new in a particular framework release, together with a workflow for removing this styling once the subsequent release has appeared.

In general we need to start versioning our docs properly as well (this was always the plan, given our URL structure, but has never been implemented) so that docs for each historical release can be accessed cleanly, as with, for example, historical versions of the node.js API at links like <https://nodejs.org/docs/v4.6.2/api/>

We should take up the styling issues with the design team, and work on the improvements to our scripts together with the work required on our docs platform at <https://issues.fluidproject.org/browse/FLUID-5823>

        