---json
{
  "title": "FLUID-1074",
  "summary": "Update Reorderer APIs to make them consistent with the API style guide",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Colin Clark",
  "date": "2008-07-31T16:36:10.000-0400",
  "updated": "2011-02-22T16:27:55.590-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1073/",
      "key": "FLUID-1073",
      "summary": "Create an API style guide for all Fluid components to follow"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-327/",
      "key": "FLUID-327"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-04T16:09:29.000-0400",
      "body": "At revision 5315, the Reorderer and LayoutManagers are fully that-ised, make use of fluid.defaults and fluid.initialiseThat. Still to do - overall use of DOM binder, general sanitising\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-07T14:33:21.000-0400",
      "body": "This work is ongoing, with a number of major refactorings over the last few days (to revision 5335)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:56:31.000-0400",
      "body": "In terms of the \"current\" state of the API spec, I belive this work was completed with Michelle's adjustments for <https://fluidproject.atlassian.net/browse/FLUID-1048#icft=FLUID-1048>. However, the spec is itself evolving, and a recent decision was to normalise our set of callbacks and event idiom, which now needs to be done and documented.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-11T15:11:31.000-0400",
      "body": "As part of this task a couple of the options should be updated to use selectors to specify bits of the DOM. Both the drop warning and the instruction message should are currently specified as ids instead of selectors. Actually, since the instruction message is never used it should probably just be removed from the options.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-12T16:59:22.000-0400",
      "body": "Drop warning is now \"selectorised\". The instruction message will take further thought, since we will need a more generalised I18N strategy.... As of revision 5530, our event architecture is now generalised and is sort of at \"prototype stability\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-18T00:04:40.000-0400",
      "body": "As of this evening's changes, relating to generalised use of \"initComponents\" and also cleanup of LayoutCustomiser, the Reorderer is now in accordance with the style guide recommendations for this release.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:55.586-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Since Reorderer is our oldest component, is has fallen a bit out of sync with our emerging conventions for component APIs. It should be updated to match the API style guide.

dev-iteration43

        