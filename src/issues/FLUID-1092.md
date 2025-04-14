---json
{
  "title": "FLUID-1092",
  "summary": "OSDPL Form: Review and comment on OSDPL pattern data entry form help text for each data element",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-08-05T00:31:12.000-0400",
  "updated": "2008-12-17T10:07:49.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-924/",
      "key": "FLUID-924",
      "summary": "OSDPL Architecture: Review OSDPL Navigation, Content Structure for usability"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1740/",
      "key": "FLUID-1740"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1660/",
      "key": "FLUID-1660"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-08-05T00:31:23.000-0400",
      "body": "Iteration23\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-12-10T16:13:31.000-0500",
      "body": "* On the first tab, Examples should appear below fields, and instructions preceding the field.\n* Help text for synonyms and keywords should be clarified. If I want to enter \"inline edit\" \"edit\" and \"edit in place\" do I enter them with spaces in between, quotes, commas or what?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-12-12T13:03:28.000-0500",
      "body": "The Delete and Submit buttons can not be relabeled because Drupal relies on it being called \"Delete\" and \"Submit\". So an alternative to this would be to group the buttons in a fieldset and label that field to indicate the scope. See <https://fluidproject.atlassian.net/browse/FLUID-1969#icft=FLUID-1969>.\n\nFor now, not going to worry about making instructions and examples being inconsistent for keywords, category, and synonyms. The fix would require adding fieldsets and modifying the template. For now, the help text has been improved to give better instruction.\n"
    }
  ]
}
---
This is a shared task between Daphne, Allison, Erin, Jonathan, Paul and anyone else who would like to participate. Please send comments to the fluid-talk list. Please pay special attention to and give suggestions for the "Rationale" help text, as we would like to make sure we have a shared understanding and definition of "Rationale" (as folks had somewhat different interpretations of it at the last OSDPL meeting).

Update:\
After some user testing, the following elements were confusing and can use some clarification:

* "Delete" - not clear what this deletes.
* "Upload" - does it upload just an image, or does it submit the pattern? Will my form data be preserved?
* "Image Sources" - can be mistaken for URLs only
* "Contributors" - not clear if this means the current user or other people too.

Also unclear:

* Images will be resized upon uploading and what sizes are appropriate

        