---json
{
  "title": "FLUID-2164",
  "summary": "OSDPl: investigate conditional validation for CCK form",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-27T11:26:35.000-0500",
  "updated": "2014-04-02T16:35:54.200-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2294/",
      "key": "FLUID-2294"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-01-27T14:16:20.000-0500",
      "body": "Using CCK Validation, it is possible to implement conditional validation on a CCK form.\n\nDepending on which workflow option is selected on the CCK form, the validation code checks the value and validates only the fields required for that state in the workflow.\n\nCurrently this is working for test data.\n\nTo roll out completely for the ui design pattern type:\\\n1\\. change the custom validation to check for the uidp type.\\\n2\\. remove the \"Required\" parameter for all fields except for Title and Category since the requirement implementation is carried out in the custom validation.\\\n3\\. Make sure the form UI communicates what is required during the workflow. (i.e. \"Solution Description (required for Publishing), \"Title (mandatory)\").\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2009-03-05T14:49:35.000-0500",
      "body": "iteration30\n"
    }
  ]
}
---
Investigate whether it is possible to have a conditional validation of the pattern entry form. We should allow authors to submit incomplete patterns unless they Publish.

When conditional form validation is implemented, consider putting the submit button on every tab. With conditional validation, it's easier to edit and save frequently and not be barraged with error messages. Implementing this feature will greatly help usability of the pattern entry form and make workflow less painful.

        