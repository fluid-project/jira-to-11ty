---json
{
  "title": "FLUID-6224",
  "summary": "A recent commit to infusion-docs replaced \"fluid.logLevel\" with \"evel\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2017-11-14T14:33:26.513-0500",
  "updated": "2017-12-05T13:33:15.121-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2017-11-14T15:06:17.664-0500",
      "body": "It looks like the problem is even wider - a few lines down 'fluid.logActivity' was replaced with 'ctivity'\n\n<https://github.com/fluid-project/infusion-docs/commit/7f42092299163b0c7e9007bc7da0a3df507602ee#diff-862eaf745e4662a3578248540964bbc5L645>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2017-11-14T15:38:25.120-0500",
      "body": "Thanks Michelle for finding that. Maybe \"fluid.log?\" (where '?' is any single char) was removed? Or maybe something broader than that.\n\nMaybe we should take another look at the PR?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2017-11-14T17:04:05.470-0500",
      "body": "I took a quick look through the pull request and didn't notice anything else.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-15T04:21:51.732-0500",
      "body": "My bad, I will review and submit a pull.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-15T04:34:41.659-0500",
      "body": "I cloned a separate copy of the repo and checked out the last revision before any of my changes (94efb87dd8cd53caa13600efd7a1f2322bd8e631).  I then searched for all files with any variation on fluid.log, which yielded:\n\n* src/documents/FetchResources.md\n* src/documents/Invokers.md\n* src/documents/ChangeApplierAPI.md\n* src/documents/IoCTestingFramework.md\n* src/documents/UnderstandingInfusionComponents.md\n* src/documents/CoreAPI.md\n\nI suspect most of the goofs are in CoreAPI.md, but will review all shortly.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-15T04:57:49.113-0500",
      "body": "I have submitted a PR for this:\n\n<https://github.com/fluid-project/infusion-docs/pull/130>\n\nThanks to Simon Bates and Michelle D'Souza for catching this, and apologies for the goof.  I found a couple of other small problems while working on this:\n\n1. A couple of Javascript types in function docs were not enclosed in backticks.\n2. A lot of emphasised blocks were not rendered in bold because there was an interstitial space between the asterisks and the text, as in \"\\*\\*\\* should be bold \\*\\*\\*\", which rendered as the literal text including asterisks.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2017-12-01T15:56:48.442-0500",
      "body": "Merged at <https://github.com/fluid-project/infusion-docs/commit/ce42742ce0e283cda9109ccf9bb5ef7ad9882f8c>\n\n \n"
    },
    {
      "author": "Simon Bates",
      "date": "2017-12-05T13:33:15.121-0500",
      "body": "Deployed to <https://docs.fluidproject.org/>\n\n \n"
    }
  ]
}
---
On the Infusion docs site, occurrences of "fluid.logLevel" now read "evel". For example, see:

<https://docs.fluidproject.org/infusion/development/CoreAPI.html#fluidlogloglevel-arg1-argn>

It looks like this change was introduced in:

<https://github.com/fluid-project/infusion-docs/commit/7f42092299163b0c7e9007bc7da0a3df507602ee>

For example, see:

<https://github.com/fluid-project/infusion-docs/commit/7f42092299163b0c7e9007bc7da0a3df507602ee#diff-862eaf745e4662a3578248540964bbc5L586>

Merged as part of:

<https://github.com/fluid-project/infusion-docs/pull/129/files#diff-862eaf745e4662a3578248540964bbc5>

        