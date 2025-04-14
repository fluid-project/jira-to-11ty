---json
{
  "title": "FLUID-1659",
  "summary": "OSDPL: Implement a multi-step design pattern entry form",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-10-02T21:57:36.000-0400",
  "updated": "2008-12-15T11:44:25.000-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1659/CCK-tabs-1.png",
      "filename": "CCK-tabs-1.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-10-02T22:04:14.000-0400",
      "body": "Initial research does not look promising.\n\nThis article outlines how multisteps can be done by hacking the core, but there are many limitations.\\\n<http://drupal.org/node/162373>\n\nFieldgroup Tabs holds the most promise. It looks attractive and allows user to step between sections using tabs. \\\n<http://drupalmodules.com/module/cck-fieldgroup-tabs>\n\nHowever, if submitting a form with invalid required fields, focus moves back to first tab even if the required field with error is on another tab. This forces the user to tab through to hunt for the invalid field.\n\nAnother person managed to do this by hacking some code. Sounds promising as each step does validation before proceeding. However, it is unclear how this will work with CCK and our organic workflow (i.e. may not allow the user to jump randomly through the process).\\\n<http://sachachua.com/wp/2008/06/30/hooray-figured-out-drupal-5-multi-step-registration-form-with-validation-and-invites/>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-07T16:12:32.000-0400",
      "body": "Iteration22\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-07T16:25:46.000-0400",
      "body": "Right now multi stepping works with a combination of:\n\n* CCK\n* CCK Fieldgroup Tabs for splitting the entry form into digestible tabs\n* CCK Validation for customized error reporting directing the user to the appropriate tab with the error\n\nError validation is a bit fragile. If the names of the fields change or if the taxonomy IDs change, then the validator will need to be updated. Otherwise the user will not receive an error when there is one.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-09T09:00:24.000-0400",
      "body": "An image of the CCK field using Fieldgroup Tabs in the OSDPL.\\\nSee comments for the issues regarding this solution.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-11-18T09:09:42.000-0500",
      "body": "Done for now until user testing is done at Summit.\n"
    }
  ]
}
---
Currently the CCK form used for creating Design Pattern content types is very long. It presents a usability concern and may discourage users from contributing their patterns.

We should investigate ways to create a multi-step form (in CCK or not) so we can break apart the form.

        