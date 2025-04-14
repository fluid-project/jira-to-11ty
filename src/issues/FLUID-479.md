---json
{
  "title": "FLUID-479",
  "summary": "Drop marker incorrect when avatar is dropped in white space at end of row.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Jonathan Hung",
  "date": "2008-04-09T16:18:57.000-0400",
  "updated": "2008-11-13T13:29:45.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-478/",
      "key": "FLUID-478",
      "summary": "Edge Case: In IE6 and 7, drop marker is wrong if mouse pointer is near edge of another thumbnail."
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-482/",
      "key": "FLUID-482"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-407/",
      "key": "FLUID-407",
      "summary": "Nested drop targets sometimes display the drop marker in the wrong place."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-538/",
      "key": "FLUID-538"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-479/bad drop marker.gif",
      "filename": "bad drop marker.gif"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-10T10:21:14.000-0400",
      "body": "The underlying issue is that we don't hide the drop marker when we get an 'out' for the current drop target. This is because of the issue where we get 'over' and 'out' in the wrong order which causes great user confusion especially when we have nested drop targets. &#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-05-13T13:22:03.000-0400",
      "body": "Possible solution: Modify the mouse move tracker to use the currentDroppable property if there is nod target. This will result in the item being dropped wherever the drop marker was last displayed.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T08:53:23.000-0400",
      "body": "This issue is very complex - the main constraints are \\\ni) We have a requirement to compute drop targets \"manually\" - since the default algorithm in JQuery UI cannot account for the \"top half/bottom half\" requirements when dragging things to between positions in lists, \\\nhowever\\\nii) We are constrained also by the JQuery UI algorithm in that it will **not** give us drop notifications if the drop occurs outside any droppable target (in its opinion).\n\nHowever, the algorithm is valuable, in that it does some useful work for us quickly (determining which of the set of droppable targets we are \"within tolerance\" for a drop), which we must make use of via tracking of its over/out events which are sent.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T10:27:27.000-0400",
      "body": "Resolved as part of comprehensive drag and drop reorganisation at rev 5338 (\"DragManager\" created)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:29:45.000-0500",
      "body": "appears to have been  fixed\n"
    }
  ]
}
---
If browser window is resized so there is a lot of white space at the end of a row. Dragging and dropping an item in that white space will "snap" the dragged item back to its original position despite a drop marker being displayed at the end of the row.

Unrelated to Fluid-148.\
Possibly related to Fluid-478.

        