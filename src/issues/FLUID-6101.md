---json
{
  "title": "FLUID-6101",
  "summary": "UI Options ToC should use <nav> element instead of <div>",
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
  "date": "2016-12-21T10:23:53.868-0500",
  "updated": "2024-07-22T10:59:35.411-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Tech. Documentation",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "YashJipkate",
      "date": "2020-04-08T10:03:49.672-0400",
      "body": "If I understand correctly, this is regarding the use of \\<div> element in the ToC placeholder instead of \\<nav> elements in the infusion-docs. Upon inspection of the pages. It seems that the ToC nav is not used to display any content and it remains unrendered. I removed the ToC element and saw that the generated site had no regressions.\n\nI think we should remove the ToC placeholder altogether instead of modifying it. \n\nWhat do you think?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-03-14T13:27:02.116-0400",
      "body": "Addressed in PR [FLUID-6420/GH-219: Update UIO and docs for Infusion 4.x (Resolves #219)](https://github.com/fluid-project/infusion-docs/pull/220)\n"
    }
  ]
}
---
In UI Options, the Table of Contents placeholder container should be a \<nav> element instead of a \<div> element to be more semantically correct.

[See W3C \<nav> guideline](https://www.w3.org/wiki/HTML/Elements/nav)

        