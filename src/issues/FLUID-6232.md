---json
{
  "title": "FLUID-6232",
  "summary": "Update the UI Options documentation to include the npm install method of acquiring Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2017-12-04T10:02:15.785-0500",
  "updated": "2021-05-18T13:20:41.747-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6447/",
      "key": "FLUID-6447",
      "summary": "Add install methods for npm and git to UIO tutorial"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2017-12-04T10:04:36.066-0500",
      "body": "For example, this wiki page has some existing documentation. Perhaps it can be re-used:\n\n<https://wiki.fluidproject.org/display/fluid/Installing+and+Getting+Started+with+UI+Options>\n\n \n\n\"\n\n1. Get Infusion by typing \"`npm install infusion`\" in the command line and pressing Enter. The process will run and a new directory called `node_modules` will be created as a result.\n2. Using the command line, change directory into the infusion directory that's been created within `node_modules`.\n   1. On Windows type: \"`cd node_modules\\infusion`\" (without quotes) and press Enter.\n   2. On Mac type: \"`cd node_modules/infusion`\" (without quotes) and press Enter.\n3. Now build Infusion by typing \"`npm install`\" (without quotes) and press Enter. Once that is done, type \"`grunt`\" without quotes and press Enter. This will create a \"`products`\" directory in the Infusion directory.\n4. Within the `my-project/temp/node_modules/infusion/products` directory, there is now a ZIP file called \"`infusion-all-2.0.0.zip`\" (the exact filename may be a little different depending on the release of Infusion available at the time you download it). Unzip this file using your preferred Unzipping program.\n5. Now copy (or move) the resulting \"`infusion`\" directory into your project's root directory.\n\n\"\n"
    },
    {
      "author": "Mohamed Shadab",
      "date": "2018-03-24T08:54:42.908-0400",
      "body": "Hey, I am currently working on this,\n\nShould there be detailed explanation on how to acquire node.js then launch a terminal or powershell etc. or should it be condensed on the assumption that the user already has node/npm and has basic knowledge of how to use it.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2018-03-28T10:15:01.107-0400",
      "body": "Mohamed Shadab I'd assume that they already have node/npm and basic knowledge - you can provide a link out to documentation at <https://nodejs.org/en/> or similar as a courtesy, but it's reasonable to assume that someone interested in using npm has node/npm/basic CLI. \n"
    },
    {
      "author": "Mohamed Shadab",
      "date": "2018-03-28T14:38:55.143-0400",
      "body": "I have made a PR for this issue: <https://github.com/fluid-project/infusion-docs/pull/135>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-04-19T09:41:04.058-0400",
      "body": "Re-opened the issue because we still need to document installing through the npm via package.jon. This would involve copying over the necessary UIO distribution, as well as any templates, messages, and other assets needed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-05-18T13:20:41.744-0400",
      "body": "PR ( <https://github.com/fluid-project/infusion-docs/pull/198> ) merged into the project repo\n"
    }
  ]
}
---
Currently the UI Options documentation only includes the ZIP download method for acquiring Infusion.

See: <https://docs.fluidproject.org/infusion/development/tutorial-userInterfaceOptions/UserInterfaceOptions.html#download-and-install-the-ui-options-library>

This documentation should be updated to also include the npm install method.

        