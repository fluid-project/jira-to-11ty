---json
{
  "title": "FLUID-5106",
  "summary": "Builder has not been updated for the new Infusion directory structure",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2013-07-30T14:43:21.682-0400",
  "updated": "2014-03-02T14:29:09.237-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4740/",
      "key": "FLUID-4740",
      "summary": "Remove support for building Java WAR packages of Infusion with Maven"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-07-30T14:47:57.494-0400",
      "body": "Here is the nightly build of the Infusion Builder: <http://build.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>\\\nand the tests for it: <http://build.fluidproject.org/infusionBuilder/tests/html/InfusionBuilder-tests.html>\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-07-30T15:57:08.839-0400",
      "body": "<https://github.com/fluid-project/builder/pull/3>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-06T14:03:20.595-0400",
      "body": "The pull request was merged\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-12-04T13:33:37.271-0500",
      "body": "The tests for the builder are still failing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-02T14:29:09.189-0500",
      "body": "The online builder tool has been taken down. Builds should now be handled by the grunt build script.\n"
    }
  ]
}
---
The Infusion Builder is currently broken because the directory structure changed in <https://fluidproject.atlassian.net/browse/FLUID-4740#icft=FLUID-4740> and the Builder code was not updated. We need to remove all references to the non-existing 'webapp' directory.

        