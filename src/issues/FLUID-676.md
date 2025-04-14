---json
{
  "title": "FLUID-676",
  "summary": "Styling not applied to 'selectables'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2008-05-29T19:36:41.000-0400",
  "updated": "2008-09-30T11:26:44.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-18T13:00:35.000-0400",
      "body": "Fixed at revision 5586\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-30T11:26:44.000-0400",
      "body": "Verified using:\n\nFF2 (Mac OS 10.5)\n"
    }
  ]
}
---
When using the Reorderer API that takes a map of finder functions, selectable items that are not movable are initialized without the appropriate style.&#x20;

This can be seen in the 'list' manual test:\
<http://build.fluidproject.org/sakai-imagegallery-tool/tests/fluid-tests/manual/list/list.html>

Upon first load of the page, the second list in this example has list items that are not movable and do not have a 'default' style. If you tab to the list and arrow through the items, you will see that the non movable list items receive a 'selected' style upon selection and a 'default' style once it is no longer selected.&#x20;

There is an automated test in ReorderListTests that has been commented out due to this bug.

        