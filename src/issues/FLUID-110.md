---json
{
  "title": "FLUID-110",
  "summary": "Tab moves focus through all Lightbox images on IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Simon Bates",
  "date": "2007-11-12T12:35:04.000-0500",
  "updated": "2007-11-20T15:44:59.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "IE7\\\nWindows XP\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-121/",
      "key": "FLUID-121"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-14T18:04:05.000-0500",
      "body": "Removed the anchors in the thumbnails from the tabindex.&#x20;\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-15T10:12:19.000-0500",
      "body": "Adding a tabindex attribute with a value of \"-1\" does fix the problem.  However, it does not gracefully degrade in the case where JavaScript is turned off.  That is, there is no keyboard access to the links when JavaScript is disabled since the tabindex will continue to disallow it.  This suggests that negative tabindex values should be added dynamically.\n\nAn issue is that the elements that need the negative tabindex are not constant across orderable situations.  In the Lightbox, the required elements are a pair of anchors within the thumbnails.  In the uPortal tabbed navigation example, it is a single anchor.  In the vertical list example, no element needs a negative tabindex.  It is conceivable that within a form containing orderables that some of the form fields (inputs, buttons) should be taken out of the tab order.  What should be removed is different in each case.\n\nAll this suggests that there needs to a way to inform the Reorderer which elements, if any, require a negative tabindex – another parameter to its operation.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-20T14:21:02.000-0500",
      "body": "Graceful degradation is now in place. The anchors are removed from the taborder in the initLightbox function.&#x20;\n"
    }
  ]
}
---
To reproduce:

* open <http://build.fluidproject.org:8080/sakai-imagegallery-tool/component-templates/html/Lightbox.html>
* repeatedly press tab

Expected:

* the Lightbox to act as one tab stop in the document

Actual:

* tab moves through all images: first the image, then the label for the image, then the next image, and so on

        