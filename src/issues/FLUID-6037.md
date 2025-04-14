---json
{
  "title": "FLUID-6037",
  "summary": "The image reorderer has errors with its use of form, role, gridcell, and role=gridcell",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "David",
  "date": "2016-11-04T15:44:54.526-0400",
  "updated": "2016-11-07T08:38:51.725-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Chrome 54, Windows 10\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6013/",
      "key": "FLUID-6013",
      "summary": "The Grid Reorderer and Image Reorderer are missing ARIA role=row containers"
    }
  ],
  "attachments": [],
  "comments": []
}
---
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/>\
Ran the Demo through the new validator (<https://validator.w3.org/nu/>) and a couple types of issues were shown.

Error: Bad value grid for attribute role on element form.\
From line 106, column 13; to line 106, column 236\
\<form action="#" id="reorder-images-form" class="flc-imageReorderer fl-imageReorderer fl-reorderer-h…" role="grid" aria-multiselectable="false" aria-readonly="false" aria-disabled="false" tabindex="0">↩    &#x20;

Error: Bad value gridcell for attribute role on element a.\
From line 107, column 21; to line 111, column 155\
\<a href="images/Dragonfruit.jpg" class="flc-imageReorderer-item fl-imageReorderer-item fl-reorderer-movable-default ui-draggable ui-draggable-handle" id="fluid-id-a2vz2h1v-75" aria-label=" ↩                        ↩                        ↩                        ↩                     1 of 6 movable" role="gridcell" aria-selected="false" aria-disabled="false" tabindex="-1" aria-grabbed="false" aria-dropeffect="none">↩    &#x20;

Error: An element with role=gridcell must be contained in, or owned by, an element with role=row.\
From line 107, column 21; to line 111, column 155\
\<a href="images/Dragonfruit.jpg" class="flc-imageReorderer-item fl-imageReorderer-item fl-reorderer-movable-default ui-draggable ui-draggable-handle" id="fluid-id-a2vz2h1v-75" aria-label=" ↩                        ↩                        ↩                        ↩                     1 of 6 movable" role="gridcell" aria-selected="false" aria-disabled="false" tabindex="-1" aria-grabbed="false" aria-dropeffect="none">↩    &#x20;

        