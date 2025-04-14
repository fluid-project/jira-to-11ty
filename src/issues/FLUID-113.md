---json
{
  "title": "FLUID-113",
  "summary": "Keyboard drag-and-drop does not scale",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-11-15T16:36:58.000-0500",
  "updated": "2008-12-02T15:06:28.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-16T13:48:07.000-0500",
      "body": "To determine if scaling speed is due to repeated calls of the orderable finder function within the Reorderer, I placed a console.debug() at the top of that  function to print out whenever it is called.  I tested with Lightbox.html.\n\nWith respect to the keyboard, the finder function is called every time a cursor key is pressed, regardless of whether it is for navigation or moving a thumbnail.  See <http://issues.fluidproject.org/browse/FLUID-113>).\n\n(WIth respect to drag-and-drop, the orderable finder function is called once, ever.  See <http://issues.fluidproject.org/browse/FLUID-71>).\n"
    }
  ]
}
---
Even when turning off drag-and-drop, when using the abstract example "grid-big.html"  (1000 orderables), keyboard navigation and re-ordering is very slow.  The orderable finder function was defined thus:

function bigGridOrderableFinder (containerEl) {\
return dojo.query ("

<!-- media: file UNKNOWN_MEDIA_=box -->

", containerEl);\
}

The Reorderer was instantiated thus:

new fluid.Reorderer ("large-grid-container", {\
orderChangedCallback: function() {},\
layoutHandler: new fluid.GridLayoutHandler (bigGridOrderableFinder),\
orderableFinder: bigGridOrderableFinder\
});

Drag-and-drop was disabled by commenting out the call to \_enableDragAndDrop() a the bottom of the Reorderer constructor.

        