---json
{
  "title": "FLUID-2039",
  "summary": "Springboard:  Keyboard doesn't work in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Daphne Ogle",
  "date": "2008-12-17T21:28:10.000-0500",
  "updated": "2008-12-18T08:41:39.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Mac OSX 10.5, Safari 3.1.2\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-942/",
      "key": "FLUID-942",
      "summary": "Keyboard navigation for the keyboard-a11y examples is broken, using safari"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T08:41:30.000-0500",
      "body": "This is because Safari only supports tab focus of form elements\n"
    }
  ]
}
---
The keyboard doesn't seem to do anything.  I can tab but it never tabs into the page.  It just moves through the control in the browser.    Even if I move the focus onto the page (select an object), I get nothing when I try to use tab, arrows, j and k.

        