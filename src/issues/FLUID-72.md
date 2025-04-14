---json
{
  "title": "FLUID-72",
  "summary": "Visual Cues need to be applied to jQuery version of Lightbox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Shaw-Han Liem",
  "date": "2007-10-25T16:23:02.000-0400",
  "updated": "2007-11-15T10:57:24.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-06T16:43:31.000-0500",
      "body": "The orderable-hover style needs to be applied to the image on mouse over.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-06T16:54:20.000-0500",
      "body": "Are these css pseudo classes relevant here?  They are \":hover\", \":active\", and \":focus\".  The w3c documentation is here:\\\n<http://www.w3.org/TR/REC-CSS2/selector.html#dynamic-pseudo-classes>\n\nIt appears that they can be applied to any element, but then, I would think it would apply to all elements of that type (e.g., all \\<li>), not just the ones the Lightbox is interested in.  But, I'm no css expert.\n"
    },
    {
      "author": "Shaw-Han Liem",
      "date": "2007-11-08T15:46:38.000-0500",
      "body": "The \"hover\" pseudo class will work in FF and IE7 but it's only supported on \\<a> elements in IE6. I believe the same is true of \"focus\". I'm not sure about Safari or other browsers but it can be tested here:\n\n<http://www.w3.org/Style/CSS/Test/CSS3/Selectors/20021129/html/full/flat/css3-modsel-18b.html>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-08T16:39:00.000-0500",
      "body": "I used the onmouseover and onmouseout to implement the hover style.&#x20;\n"
    }
  ]
}
---
Some visual cues and UX behaviour needs to be added.

        