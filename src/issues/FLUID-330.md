---json
{
  "title": "FLUID-330",
  "summary": "Update reorder docs to make sure there is reference to keyboard instructions that can be displayed in the interface.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Colin Clark",
  "reporter": "Daphne Ogle",
  "date": "2008-03-13T12:50:08.000-0400",
  "updated": "2024-07-31T06:56:08.830-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T14:24:21.000-0400",
      "body": "The Reorderer documentation should explain what the instruction message is intended for.&#x20;\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-05-13T16:26:20.000-0400",
      "body": "futuretask\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-10T14:14:00.836-0500",
      "body": "Checking this after 1.3: I might be missing something, but as far as I can tell, the Reorderer itself doesn't have any internal concept of the keyboard instructions – these seem to be external to the Reorderer. We should double-check if this is intended, and either address it, or close this JIRA.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-31T06:56:00.078-0400",
      "body": "I’m going to close this issue as it isn’t exactly clear what is intended and the related issues have all been closed off already as either fixed or won’t do.&#x20;\n\nThe demos provide instructions for keyboard interactions and serve as an example of how one might want to convey instructions to a user. However, the reordered itself does not provide a UI for these instructions.\n"
    }
  ]
}
---
Many implementations of the reorder will need to let users know how the keyboard interactions work.  By default no instructions are shown.  There is currently reference to the instructions in the docs but we may want to update and be clear about why and when to use them (hmmm...this is sounding very design patternish – I'll check the pattern and create a bug for it if it doesn't mention the instructions).

We may also want to describe an example of what we are thinking here – perhaps we could use the lightbox text as an example.  There is also an oustanding bug to update those instructions, <https://fluidproject.atlassian.net/browse/FLUID-329#icft=FLUID-329>.  	&#x20;

        