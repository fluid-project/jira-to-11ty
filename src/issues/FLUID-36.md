---json
{
  "title": "FLUID-36",
  "summary": "Reorderer._findReorderableParent() causes a \"getAttribute() is not a function\" error message.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-08-31T11:56:42.000-0400",
  "updated": "2007-10-22T17:10:25.000-0400",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Firefox/Firebug\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-09-14T15:29:53.000-0400",
      "body": "Recent refactoring of the GridLayoutHandler and the creation of a ListLayoutHandler have led to a better way calling of Reorderer.\\_findReorderableParent().  Now the caller passes \\_findReorderableParent() a list of \"orderables\" within the grid, instead of all the immediate child elements of the grid,  \\_findReorderableParent() no longer makes use of \"getAttribute()\" in its dom traversal.\n\nThe result is there is no longer an attempt to call \"getAttribute()\" on the document object when a click occurs outside of the all of the thumbnails, but still inside the grid (the lightbox \\<div>).\n\nUnfortunately, this does not remove the bug.  The search still continues up the DOM tree to the parent of the Document object, which is null, and, for some reason, this null object is passed to the drag-and-drop handlers with an eventual message that \"null\" has no properties.\n\nSo: partially fixed, but more research needs to be done.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-22T17:10:17.000-0400",
      "body": "Since the recent move to using jQuery UI's drag and drop this is no longer an issue.\n"
    }
  ]
}
---
The \_findReorderableParent() function assumes that the click occurred on a thumbnail or an element inside a thumbnail \<div>.  It then seeks to find the thumbnail \<div> by recursively inspecting the parent element and stopping when it finds a parent with an aria role of "grid".

However, when clicking in white space outside the lightbox, the click occurs on an element higher in the DOM than any thumbnail, and no grid role will ever be found. The search recurses all the way up to the Document object, which does not have a "getAttribute()" method, and the error is reported.

A quick fix would be to check if getAttribute() is available on the "element" currently being investigated, and quit the search if it isn't, returning null.  Note that, as written, if the "element" equals null, null is returned.

A better fix would be to determine why a click event outside of all the thumbnails invokes \_findReorderableParent(), and to rewire the event handling such that these clicks are ignored.

        