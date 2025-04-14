---json
{
  "title": "FLUID-2095",
  "summary": "OSDPL: Customize ImageField text to fit the OSDPL context.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-08T11:33:42.000-0500",
  "updated": "2014-04-02T16:35:54.278-0400",
  "versions": [
    "0.6"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-01-08T12:51:11.000-0500",
      "body": "Though this is a bad usability issue, due to the complexity it may prevent it from being addressed in a timely manner. Thus I recommend we do this only if there aren't other more pressing issues to tackle.\n"
    }
  ]
}
---
Currently the OSDPL uses ImageField module for CCK to allow uploading of images inside our pattern form. However, because ImageField is a 3rd party module, it has a default set of fields and instructions.

We would like to customize this module to fit our context of use better. Specifically:

* Change "Upload" button to say "Upload Image"
* Add more descriptive instructions specifically how to fill in good Alt Text.
* Move the "Upload" button inline with the Browse button.
* Have a single field that populates both Alt text and Title fields.

        