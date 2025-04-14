---json
{
  "title": "FLUID-845",
  "summary": "Pass the text view to the finishedEditing callback so that user has more context about what changed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-07-01T14:51:17.000-0400",
  "updated": "2011-02-22T16:28:00.098-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T13:20:40.000-0500",
      "body": "A full set of arguments are now passed to the \"finish\" family and \"modelChanged\" notifications. Note that \"finishedEditing\" itself will be removed from the framework as per <https://fluidproject.atlassian.net/browse/FLUID-1770#icft=FLUID-1770>. At revision 5965\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:28:00.097-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
When we prepared the Announcements Widgets example for Fearless JavaScript, we found it was inconvenient to have only the edit field--code was required to walk back up the hierarchy to find the text view, which had a unique id identifying the record that changed.

This points to the fact that we need a more robust model for data binding, but in the interim it will be much more convenient for our users if we provide them with both elements.

        