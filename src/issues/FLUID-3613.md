---json
{
  "title": "FLUID-3613",
  "summary": "Image Reorder removes the alt text from img in the markup.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "y z",
  "date": "2010-04-06T16:29:54.000-0400",
  "updated": "2010-08-18T11:15:13.693-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:13:04.631-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-08-06T16:24:53.432-0400",
      "body": "Have discussed this with Cindy, Justin and Joseph.  This is not a bug. &#x20;\n\nThe alt text is replaced by the 'aria-labelledby' attribute in its parent node (the wrapper).  The parent node with the attribute 'role=\"image\"' will be read by the screen reader as an image, and the 'aria-labelled-by' attribute will be read as its alt text.  Example is on the fluid demo site, <http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/demo.html>.  More info about the ARIA role can be found here: <http://www.w3.org/WAI/PF/aria/roles#presentation>.\n\nHaving that said, the ImageReorderer might not be the perfect kit to use for reordering images since not all users want to have text description underneath the photos like the demo.  In that case, users might want to consider using the GridReorderer instead.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-08-18T11:15:13.667-0400",
      "body": "As per previous comment from Harris\n"
    }
  ]
}
---
Image Reorder removes the alt text from img in the markup. The markup for the demo has alt text but after rendering the alt text is missing.

        