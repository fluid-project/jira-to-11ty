---json
{
  "title": "FLUID-1286",
  "summary": "Inline Edit - text editor ('.editContainer') is placed too far from actual editable text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jacob Farber",
  "date": "2008-08-21T10:21:31.000-0400",
  "updated": "2008-09-09T11:02:48.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-09-09T11:02:20.000-0400",
      "body": "changed \\\nthat.container.append(editContainer);\\\nto\\\nthat.viewEl.after(editContainer);\n\nto immediately append the input container\n"
    }
  ]
}
---
The container for the inline editor is appended to the end of the content, when it should be appended immediately after the piece of editable text

        