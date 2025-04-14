---json
{
  "title": "FLUID-2384",
  "summary": "Labels need a \"for\" attribute",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-03-19T12:13:32.000-0400",
  "updated": "2009-03-25T10:46:49.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-19T12:14:15.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-24T02:47:49.000-0400",
      "body": "Fixed at revision 6816.\\\nRequired upgrade to renderer to support basic scr= cases (currently anything other than scr=ignore is treated as scr=null). Special-case recognition of UISelect with HTML select as label target.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-25T10:29:43.000-0400",
      "body": "The fix for this seems to work for the 'for' attributes now in the template.\n\nThere is still the question of how to associated an overall label with a group of controls, for example the \"Links\" label with the set of checkboxes labelled \"bold\", \"underline\" and \"larger\". I've posted to the list for suggestions, and the most likely candidate seems to be using fieldset and legend, but there are styling issues with that. Continuing to seek information.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T10:46:48.000-0400",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5)\n"
    }
  ]
}
---
Labels need a "for" attribute

attribute = for\
value = id&#x20;

This will tell the AT what the label is for.

Another option would be to nest the labelled element inside of the \<Label>\</Label> tags, but this is less prefered

        