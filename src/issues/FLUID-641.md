---json
{
  "title": "FLUID-641",
  "summary": "Clicking white space should unselect the reorderable item",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2008-05-27T12:25:39.000-0400",
  "updated": "2024-07-22T11:12:18.248-0400",
  "versions": [
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "IE 11 (Windows 7)\\\nChrome 35, FF 30, Safari 7 (Mac OS 10.9)\n\nSafari 5 ( Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-04T14:05:24.181-0500",
      "body": "Confirmed the issue on Mac OS 10.6 with Safari 5. There hadn't been any environments listed before so I am not sure where else this is a problem. One thing to note, is that the issue only seems to occur when clicking on the whitespace inside the reorderer's container.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-26T13:14:53.577-0400",
      "body": "Updated environments, description, and affects version.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the grid reordered demo\
<http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/>

2\) Use the mouse to select a reorderable item

3\) Click on the whitespace between reorderable elements.\
Notice that the selected reordererable element isn't unselected. However, if you click anywhere outside of the reorderers container, it will deselect the element.

In discussions with Erin, there is no need to have a keyboard equivalent to unselect because keyboard interaction (almost) always has a selection.

        