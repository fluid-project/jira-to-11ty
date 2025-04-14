---json
{
  "title": "FLUID-945",
  "summary": "Inline Edit assumes there will always be a container element wrapping the display text. For simple scenarios, this is an unnecessary burden for the developer.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-18T17:35:33.000-0400",
  "updated": "2011-01-20T15:09:43.244-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1541/",
      "key": "FLUID-1541"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-844/",
      "key": "FLUID-844",
      "summary": "Inline Edit assumes there will always be a container element wrapping the edit field. For simple scenarios, this is an unnecessary burden for the developer."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-08-04T20:19:30.000-0400",
      "body": "this seems to be related to, or actually superseding, <https://fluidproject.atlassian.net/browse/FLUID-844#icft=FLUID-844>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:45:51.000-0500",
      "body": "See comments on <https://fluidproject.atlassian.net/browse/FLUID-1541#icft=FLUID-1541>. I don't believe this issue should be resolved.\n"
    }
  ]
}
---
At the moment, InlineEdit requires the display text to be contained in an element that is inside the component container. This is required, because the text needs to be hidden when switching into edit mode.

However, for some simple cases, this might be a burden on the developer, as it would be unnatural in the basic markup. For example, making the cells in a table editable: usually, the text in a cell is just in the \<td> element, NOT inside an element inside the \<td> element:\
...\
\<td>Bootsy Collins\</td>\
...\
In this example, the \<td> element cannot be used as the container of an Inline Edit.

We should consider detecting this kind of case, and if necessary wrapping the text in a span ourselves.

        