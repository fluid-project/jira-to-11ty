---json
{
  "title": "FLUID-978",
  "summary": "Add the ability to add and remove elements from the list of selectables in the keyboard-a11y plugin",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2008-07-22T18:43:29.000-0400",
  "updated": "2011-02-22T16:27:43.611-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-07-23T15:26:40.000-0400",
      "body": "As part of the resolution of <https://fluidproject.atlassian.net/browse/FLUID-993#icft=FLUID-993>, this functionality is now available since the \"selectables\" element of the \"that\" context for the selectable context is accessible through the new global method $.fn.getSelectableContext() . It is possible that a little tidy-up might be needed to head off some of the more obvious ways of getting the component into an inconsistency (removing the current selectable element? etc.)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:43.610-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Currently, there is no way to modify the list of selectables in the keyboard accessibility plugin. This makes it really hard to have a dynamic list of items, such as the File Queue in the Uploader component. We need an API that allows us to add and remove elements from the list of selectables. Here's the API I'm thinking:

.addSelectable(element, atIndex);\
.removeSelectable(element);

It would be particularly nice if both methods took either a single element or a list of elements (jQueries).

        