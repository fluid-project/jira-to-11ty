---json
{
  "title": "FLUID-1439",
  "summary": "Create CSS styling rules and idiom to allow cursor changes for grab handles to be applied in CSS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Antranig Basman",
  "date": "2008-09-07T18:46:45.000-0400",
  "updated": "2010-03-26T15:41:07.000-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-09-18T15:19:51.000-0400",
      "body": "As reviewed, we can either suggest to people to include a some CSS to set the cursor on their grab handle and leave it up to them, or we can set a CSS class onto designated  grab handles on init - no need to do any cursor work on :hover since you get that for free\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T10:36:26.000-0400",
      "body": "Everything was resolved with css tweaks, except for Erin's reported task (which seemed more like a performance-related issue than a cursor fix.)\n"
    }
  ]
}
---
Several inconsistencies in cursor styling are caused by the fact that we are currently causing cursor changes over grab handles using manual JS event handlers. As well as being inefficient, this makes it hard to impossible to catch all of the many cases where a cursor movement ought to be registered as over the grab handle.&#x20;

However, applying these hover rules via CSS will require some discipline and documentation, as well as presenting a strong implementation risk under IE6, which does not allow CSS hover styles to be implemented on non-a elements.

        