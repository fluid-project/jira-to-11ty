---json
{
  "title": "FLUID-1698",
  "summary": "OSDPL Functionality: custom error checking malfunctions when editing design pattern",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-10-21T15:16:02.000-0400",
  "updated": "2008-10-29T10:45:04.000-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-10-21T15:16:10.000-0400",
      "body": "Iteration20\n"
    }
  ]
}
---
If editing an existing design pattern, submitting a valid pattern can give error messages for required fields even though the required field already has valid information previously entered.

To duplicate:

* edit a valid design pattern.
* don't modify anything and Submit.
* error messages will appear at top.

To fix, look at the error handling code for the Design Pattern content type and add a check for existing values as part of the validation.

        