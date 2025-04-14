---json
{
  "title": "FLUID-1774",
  "summary": "Change the signature of the afterFinish event",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Anastasia Cheetham",
  "date": "2008-11-05T16:30:39.000-0500",
  "updated": "2009-06-03T13:45:30.000-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1774/FLUID-1772-74.patch",
      "filename": "FLUID-1772-74.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-11-05T18:21:42.000-0500",
      "body": "Added FLUID-1772-74.patch file which resolves <https://fluidproject.atlassian.net/browse/FLUID-1772#icft=FLUID-1772>, <https://fluidproject.atlassian.net/browse/FLUID-1773#icft=FLUID-1773>, <https://fluidproject.atlassian.net/browse/FLUID-1774#icft=FLUID-1774>. Patch only changes InlineEdit.js. There are also changes to the Section Info InlineEdit sample code that go along with this, that have not yet been checked in.&#x20;\n\nAll current InlineEdit jqUnit automated tests pass.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-06T14:21:02.000-0500",
      "body": "I have incorporated this patch as well as the one for <https://fluidproject.atlassian.net/browse/FLUID-1772#icft=FLUID-1772>, although I have gone with the signature (newValue, oldValue, editField, viewElement) with the middle two arguments interchanged, for greater consistency with the current modelChanged - also the editField/viewElement arguments become more arguable with different varieties of InlineEdit, which might not have a single well-defined value-bearing node (e.g. if the editable view consisted of radio buttons, etc.) - we should discourage \"sharing\" these outside the component itself.&#x20;\n\nAlso note that \"afterFinished\" itself has become \"afterFinishEdit\" in accordance with <https://fluidproject.atlassian.net/browse/FLUID-1778#icft=FLUID-1778>.\n\nRevision 5965\n"
    }
  ]
}
---
The InlineEdit afterFinish signature should change to:\
afterFinished(newValue, editField, oldValue, viewElement)

dev-iteration46

        