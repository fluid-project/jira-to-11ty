---json
{
  "title": "FLUID-4126",
  "summary": "Add a jslint comment containing the jslint options to each js file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-03-01T15:08:00.644-0500",
  "updated": "2011-05-17T11:28:56.093-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T11:28:56.092-0400",
      "body": "This has been addressed and changes are pushed into the project repo. All js files should now have the fluid variant of the jslint comment at the top of the file.\n"
    }
  ]
}
---
We can specify the options we want to use in jslint by adding in a comment at the top of the js file.&#x20;

// JSLint options\
/\*jslint white: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 50, indent: 4 \*/

This will enable us to run jslint without having to specify the options everytime, and to more easily run it from the command line.

        