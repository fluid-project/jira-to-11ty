---json
{
  "title": "FLUID-2017",
  "summary": "Cannot click on links in a rich text inline edit field because it changes into edit mode.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2008-12-17T14:56:59.000-0500",
  "updated": "2009-02-16T22:56:44.000-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:04:22.000-0500",
      "body": "Bug Parade  0.8 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-16T18:26:29.000-0500",
      "body": "Fixed at revision 6510\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T22:31:22.000-0500",
      "body": "I've reviewed this fix, along with the associated change to fluid.findAncestor(), and it looks good. +1 for inclusion in Infusion 0.8.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T22:56:44.000-0500",
      "body": "Verified fix using:\n\nFF3, FF2, Opera 9.5, Safari 3.1 (Mac OS 10.5)\\\nIE 6, FF3 (Win XP)\n\nNote that you still can't use the keyboard to activate links, <https://fluidproject.atlassian.net/browse/FLUID-2243#icft=FLUID-2243>.\n"
    }
  ]
}
---

        