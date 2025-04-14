---json
{
  "title": "FLUID-1943",
  "summary": "License files should be stored in a separate directory in the final build, rather than within the various subdirectories of js/ and flash/",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2008-12-08T12:47:50.000-0500",
  "updated": "2011-02-28T16:45:16.096-0500",
  "versions": [
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2610/",
      "key": "FLUID-2610"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2337/",
      "key": "FLUID-2337"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-27T09:31:18.000-0400",
      "body": "Right now, the general idea with licensing is \"Fluid's license unless otherwise stated\" and the otherwise-stating is accomplished by including the other license file in with the other-licensed code.\n\nIf we move the licenses away from the code, how should we associated the license with the code? Were you imagining that we'd create a sub-folder called \"license\"?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-03-30T10:27:06.000-0400",
      "body": "We shouldn't move the licenses away from code in the repository. This separate licenses folder should be created as a product of the build scripts. I think we can punt this issue until 1.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-12T13:39:20.000-0400",
      "body": "Changed the copySourceToBuild target. 1) Moved in the work of copying over the README.txt 2) exclude LICENSE files from being copied over with all other files 3) Copy licenses into a license directory\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-12T13:39:36.000-0400",
      "body": "Please review\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-13T12:40:41.000-0400",
      "body": "a  slight bit of refactoring is needed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T08:55:23.000-0400",
      "body": "Refactored the copying of the README.txt file, by removing it from a \\<fileset> and placing it within its own \\<copy>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:16.094-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
At the moment, we copy license files into the js/ directory alongside our minified JavaScript. It would be much kinder to implementors to store these license files in a separate directory.

        