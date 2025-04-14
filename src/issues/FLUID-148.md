---json
{
  "title": "FLUID-148",
  "summary": "Edge case:  visual position of drop target when droppable is at beginning or end of a row.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-12-17T11:26:15.000-0500",
  "updated": "2017-01-16T09:15:09.899-0500",
  "versions": [
    "0.1",
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
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF 50 (macOS 10.12)\\\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF4, Safari 5 (Mac OS 10.6)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2038/",
      "key": "FLUID-2038"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-100/",
      "key": "FLUID-100",
      "summary": "With mouse-based drag-and-drop, one cannot drop on a position before the first item."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Shaw-Han Liem",
      "date": "2008-01-31T15:38:06.000-0500",
      "body": "This is the behaviour we are deciding on for this case. The basic idea here is to show the drop affordance nearest to where the image will actually appear when dropped (even if this is different from where the mouse cursor is).\n\n1\\. Dragging on the first item in a row (Left half of thumbnail): \\\nWe should show the drop affordance directly to the left of the item.\n\n2\\. Dragging on the last item in a row (Right half of thumbnail):\\\nWe should show the drop affordance to the left of the first item in the NEXT row.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-02-15T10:06:01.000-0500",
      "body": "Actually, the two points described in the previous comment do hold if the item being dragged was not pulled from ahead of the drop target, but the points do not hold if dragged item was pulled from after the drop target location.\n\nConsider the simple case of two rows (for ease of discussion):\n\nIf the dragged item was pulled from the first row, then if it is dropped at the end of the first row or the start of the second row, it will wind up at the end of of the first row.\n\nIf the dragged item was pulled from the second row, then if it is dropped at the end of the first row of the start of the second row, it will wind up at the start of the second row.\n\nThus IF we want to give an indication of where the image will appear after it is dropped, we would need to take into account where it was pulled from in addition to other considerations.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-15T16:42:11.000-0400",
      "body": "Unfortunately, even with the current work on <https://fluidproject.atlassian.net/browse/FLUID-1148#icft=FLUID-1148>, this issue is still not resolved - it is more problematic than it appears, and some of the analysis above isn't quite right.\n\nThe issue arises because we are using \"natural DOM flowing\" for layout. Therefore elements (and indeed also the drop marker!) will naturally tend to appear \"just where there is room for them\". So the current behaviour is actually consistent, and undesirable - there is \"almost always\" room for a drop marker at the end of a row, but there is \"never\" room for a whole cell (since otherwise it would have appeared there). Therefore the drop marker always appears at the end of the \"first row\" (in Anastasia's walkthrough), but the actual item always appears at the start of the second row.\n\nIt's hard to see on the face of it how we could resolve this, except by some rather odd requirements on the way we create drop markers (or the way we conceive of cells). One way to do this would be to create the drop marker **inside** the cell which starts the 2nd row - however, this represents a form of \"DOM fascism\" and may well in some cases create invalid markup (imagine the case where a cell is a \\<tr>).&#x20;\n\nWell, actually, the above issue highlights some further problems - we could never actually have a drop marker within a table that was not itself a \\<tr> element. Therefore it seems the only way out of this is to add a parameterisation for the drop marker placement \"strategy\" as well as its creation.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T10:09:05.000-0400",
      "body": "design-watched\n"
    }
  ]
}
---
Using the lightbox as an example, if one drags an thumbnail to the left of the first item in a row, the drop target appears just after the last item in the previous row.  This position is, in fact, correct.  However, it would provide better feedback if it appeared at the beginning of the row that the user  is dragging "within" (in this example).  If however it was dragged to the right of the last item in a row, then the drop target should appear at the end of that row.

        