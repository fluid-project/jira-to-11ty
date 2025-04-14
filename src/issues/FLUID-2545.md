---json
{
  "title": "FLUID-2545",
  "summary": "Keyboard-a11y plugin doesn't conform to FSS selector naming convention",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jacob Farber",
  "reporter": "Anastasia Cheetham",
  "date": "2009-04-06T15:27:19.000-0400",
  "updated": "2009-05-25T11:40:06.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "FSS",
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-20T14:47:12.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-25T10:02:52.000-0400",
      "body": "This ticket raises questions: \\\n1\\) Since keyboard-a11y is a plugin that can exist outside of Fluid, are our naming conventions appropriate?\\\n2\\) If they are appropriate, and since its not a component, should it follow component-specific class name conventions?&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-25T11:35:53.000-0400",
      "body": "This is by design, and is not a bug. Here's my rationale:\n\n1\\. The jquery.keyboard-a11y plugin is not an Infusion component. It's designed to be used for all kinds of purposes, and by people who don't even know what a component is. As a result, it needn't follow our component conventions.\n\n2\\. The choice of the default selector was intended to be as generic as possible--a likely convention people might like to use for their selectable elements. Our flc- class name conventions, on the other hand, are designed to be as specific as possible.\n\nLet's take this one of the bug parade and close the issue.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-25T11:40:06.000-0400",
      "body": "I'm closing this one, since it's not really a bug.\n"
    }
  ]
}
---
The keyboard a11y plugin defines a default selector for the selectable elements. This selector is defined to be\
".selectable"\
This does not conform to the FSS conventions, which suggest that the name should be\
".flc-selectable"

        