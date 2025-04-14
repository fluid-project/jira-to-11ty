---json
{
  "title": "FLUID-1047",
  "summary": "Inline Edit: caret is put at beginning or end of the edit field depending on mouse or keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Eli Cochran",
  "date": "2008-07-28T13:45:43.000-0400",
  "updated": "2008-08-14T14:54:44.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE7, XPs2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-14T14:52:24.000-0400",
      "body": "The caret appears to be placed in the same location when using either the mouse or the keyboard.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-08-14T14:54:44.000-0400",
      "body": "Issues has be regressed and can no longer be reproduced.\n"
    }
  ]
}
---
Do: Mouse-over some inline editable text, and click.\
Observe: The insertion point is put at the beginning of the editable field.

Do: Using the keyboard, tab to the editable text, and press Enter (or spacebar).\
Observe: The insertion point is put at the end of the editable field.

I believe that the current design specification currently says that the default should be the end of the text.

        