---json
{
  "title": "FLUID-1087",
  "summary": "Component: Inline Edit - make yellow highlight of inline edit field configurable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Allison Bloodworth",
  "date": "2008-08-01T18:57:11.000-0400",
  "updated": "2011-02-22T16:28:00.905-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
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
      "date": "2008-11-13T22:03:30.000-0500",
      "body": "This has been possible since early versions of InlineEdit by adjusting the CSS style attached to the selector named \"invitation\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:28:00.904-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
In some additional recent competitive analysis research we've done, we've encountered contexts for inline edit (e.g. large tables where everything is editable, like: <http://developer.yahoo.com/yui/examples/datatable/dt_cellediting.html>) where it doesn't make sense for cells to highlight on rollover to indicate that they are inline editable (e.g. because every cell is editable and it would be too distracting or redundant because there are directions at the top of the page), so we'd like to make whether or not the yellow highlight appears on mouseover/when tabbed to configurable. However, the default should be that the yellow highlight always shows up on rollover/when the element is tabbed to and initially has focus before it is "opened" for editing.&#x20;

        