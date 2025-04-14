---json
{
  "title": "FLUID-6013",
  "summary": "The Grid Reorderer and Image Reorderer are missing ARIA role=row containers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Simon Bates",
  "date": "2016-10-28T14:15:45.122-0400",
  "updated": "2021-06-22T13:37:03.275-0400",
  "versions": [
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6037/",
      "key": "FLUID-6037"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2016-10-28T15:33:36.874-0400",
      "body": "Using the image reorder as the test case, the a11y tree has this parent/child structure:\n\n* grid&#x20;\n  * gridcell\n  * gridcell\n  * gridcell\n  * gridcell\n  * ...\n\nThe above is the structure relayed to ATs regardless of how it is rendered on screen – a grid with some number of gridcell children. As Simon noted, by resizing the window, the display can re-render as two rows of cells, or three rows, and so on.  The sighted user is aware of the number of rows and columns in the grid, and can use the arrow keys to move up/down and left/right among the cells.  The lack of a corresponding structure in the a11y tree means the AT user has no idea which cell is above/below/left/right of another cell, and cannot navigate effectively among the cells using the cursor keys.\n\nIf the window shows two rows, then the a11y tree should have this structure:\n\n* grid\n  * row\n    * gridcell\n    * gridcell\n    * gridcell\n  * row\n    * gridcell\n    * gridcel\n\nAs the window changes size, and changes the number of rows, the reorderer should update the DOM to:\n\n1. remove rows that no longer exist,\n2. add new rows as necessary,\n3. determine which gridcells belong to which row, and move gridcells out of one row and into the other.\n\nThis entails dynamically modifiying the DOM by adding and/or removing container elements with role=\"row\", and moving the elements with role=\"gridcell\" into their proper row element parent, while keeping the gridcells in the same next/previous order.\n"
    }
  ]
}
---
The Grid Reorderer and Image Reorderer components use the ARIA roles "grid" and "gridcell". In the current implementation, "gridcell" elements are direct children of "grid" elements. However the ARIA 1.0 spec states that:

"Authors MUST ensure that elements with role gridcell are owned by elements with role row, which in turn are owned by an element with role rowgroup, grid or treegrid."

<https://www.w3.org/TR/2014/REC-wai-aria-20140320/roles#grid>

Our implementation of Grid Reorderer and Image Reorderer is missing one or more intermediate layers between "grid" and "gridcell".

We had thought to simply add a single row container for the gridcells but this is not a satisfactory solution. The Reorderers reflow the grid layout dynamically. For example 1 row if all items fit and then broken into 2 rows, and then 3 rows as the width of the container is reduced. See: <http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/>

Our keyboard navigation adheres to the reflowed layout. If the Reorderer is displaying 2 or more rows, cursoring to the right or left stops at the edge of the grid and does not wrap.

If we simply wrapped all the gridcells in a single row, we would be misrepresenting the structure.

It would seem like an implementation of role=row would require dynamic modification of the document structure as the grid reflows: adding or removing rows, moving cells.

        