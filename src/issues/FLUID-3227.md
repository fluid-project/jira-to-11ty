---json
{
  "title": "FLUID-3227",
  "summary": "ARIA live region attributes are added to the Undo component in markup, causing them to be incorrect on Firefox 2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Benjamin",
  "reporter": "Colin Clark",
  "date": "2009-10-05T17:15:40.000-0400",
  "updated": "2014-03-03T14:22:36.360-0500",
  "versions": [
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Undo"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3227/FLUID-3227.txt",
      "filename": "FLUID-3227.txt"
    }
  ],
  "comments": [
    {
      "author": "Alison Benjamin",
      "date": "2009-10-22T16:15:56.000-0400",
      "body": "Adds ARIA using jquery. Works fine with JAWS, & unit tests pass in FF2 & FF3.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-24T14:06:57.000-0500",
      "body": "Code Review Comments:\\\n\\===================&#x20;\n\nThe live region itself doesn't work in FF 2, but the markup does appear to be correct. Did you experience this as well?\n\nA bit off topic, what is your opinion on this. Since the undo/redo buttons will change the text of the content (the view mode text for inline edit), should these also be declared as live regions. Also should the undo and redo buttons describe what they are doing for example \"undo edit\".\n"
    }
  ]
}
---
In the Undo component, we create an ARIA live region like this, directly in the markup:

var markup = "\<span class='flc-undo' aria-live='polite' aria-relevant='all'>" + \
"\<span class='flc-undo-undoContainer'>\[\<a href='#' class='flc-undo-undoControl'>undo\</a>]\</span>" + \
"\<span class='flc-undo-redoContainer'>\[\<a href='#' class='flc-undo-redoControl'>redo\</a>]\</span>" + \
"\</span>";

This markup is hard-baked to the newer Firefox 3-style syntax, which causes it not to work in Firefox 2. The unit tests also fail on Firefox 2 as a result.

We should always add ARIA attributes using jQuery rather than directly in markup, since it does this normalization for us.

Note that we're no longer formally testing against Firefox 2, so this isn't a huge deal but is something we should try to fix if we can find the time.

        