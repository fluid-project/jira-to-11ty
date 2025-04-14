---json
{
  "title": "FLUID-6184",
  "summary": "The textfield stepper demo is broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-08-10T11:06:23.020-0400",
  "updated": "2017-08-10T12:27:47.846-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Demos",
    "Textfield Control"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-08-10T12:27:36.568-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/842) has been merged into the project repo master branch at 3629b94b63ec0a8d104322fced2b4c5d1b93694b\n"
    }
  ]
}
---
The textfield control demo is broken because there is a typo in the names of the js and css files.

<http://build.fluidproject.org/infusion/demos/textfieldControl/>

 

Should reference TextfieldStepper.css and TextfieldStepper.js

        