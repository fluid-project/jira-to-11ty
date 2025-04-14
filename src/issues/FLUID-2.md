---json
{
  "title": "FLUID-2",
  "summary": "Allow Lightbox mark-up to contain non-reorderable nodes such as white space",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2007-06-26T11:39:17.000-0400",
  "updated": "2007-09-06T15:52:28.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-29/",
      "key": "FLUID-29",
      "summary": "Devise a convention for identifying re-orderable items in the markup passed to the Reorderer."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-30/",
      "key": "FLUID-30",
      "summary": "Use a query engine to find and manipulate reorderables."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2007-06-28T05:53:00.000-0400",
      "body": "A secure, simple and fast approach is to exploit the existing naming convention on the rendered nodes - the node set that the Lightbox deals in are precisely those with the ids gallery:::gallery-thumbs:::lightbox-cell::11: etc. (or more simply, namebase:lightbox-cell::11: as it should be made more simply in the template). These can be fetched quickly on demand by a batch of getElementById calls in a loop, the upper index is known since it is passed in as the \"count\" argument to initLightbox.\n\nMain implementation change after the \"childNodes\" assumption was removed would be to replace this single call to \\\ndojo.place(this.activeItem, refSibling, placementPosition);  in \t\t\\\n\\_changeFocusOrMove:\\\nto a loop of changes that \"shuffled\" the nodes about in their existing DOM positions, rather than letting them all \"slide\" forwards as they currently do. But this is just a refinement - main goal is to get rid of the \"destroyWhitespace\" function, after which we can go back to having the \\<script> block inside the lightbox and get rid of lightbox-temp-container:&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2007-06-28T05:56:58.000-0400",
      "body": "PS - the same thing should be done with the \"focus policy\" - rather than specifying by tag name and index (which is somewhat fragile and complex in the current scheme) this should be specified by a \"relative id\", in the way that the current code locates the \"reorder-index\" fields by extension from the cell's base ID.\n\nThis could even be part of the official contract of the lightbox on the \"client cell\", or at least a sensible default, that the link to be focused is given a relative ID of something like \"focus-node\". (currently \"thumbs-link\" in our existing client). Perhaps a bit freer to let this be configurable, but we are acquiring a HECK of a lot of arguments to LightboxProducer now!\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-09-06T15:52:17.000-0400",
      "body": "The Reorderer is now sensitive only to objects classified as \"orderable\" (via CSS) .  As such, removal of non Element nodes from within the thumbnail container is unecessary.\n"
    }
  ]
}
---
Currently, the Lightbox expects that the re-orderable items are stored as a linear form of markup that is rendered in a grid by the browser.

The Lightbox examines the current coordinates of the items to determine the current number of columns in the grid, in order to know which item is "under" or "above" a given item in the grid.

By limiting the DOM nodes to only the re-orderable items, the calculations for this are greatly simplified. However, this approach has disadvantages, including the fact that it removes information from the DOM.

As a first pass, the algorithm should be re-written to not use DOM indices, and use either actual screen coordinates or an internal model of the list of re-orderable items.

Ultimately, a more generalizable solution would be desirable, one which doesn't require linear mark-up (and could handle, for example, re-orderable items in table cells).

        