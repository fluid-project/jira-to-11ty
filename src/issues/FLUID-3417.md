---json
{
  "title": "FLUID-3417",
  "summary": "Alter builder deploy and build process to use new targets in ant script.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-07T16:20:23.000-0500",
  "updated": "2010-01-05T12:26:34.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-07T16:21:04.000-0500",
      "body": "Bug Parade Builder 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-07T16:24:16.000-0500",
      "body": "The  infusionBuilder deploy script will need to call ant deployInfusionBuilder from the infusion ant script.\n\nThe php postProcessor.php will need to call the new ant script \"ant infusionBuilder\". In addition it must use the new directory location to copy files into the cache.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-16T09:46:06.000-0500",
      "body": "added a new target to the deploy script which runs the pretreatMinify script to pre-minify files for download later. Drastic change to postProcessor.php to run the builderBuild target twice to create a src and minified zip file to download. Needed to change the order of the code from copying the files just before download, to copying just after building (since the second command cleans the results of the first command).\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-16T12:53:50.000-0500",
      "body": "This fixes for this issue are fine for now. After the release, we need to change to doing a single build when a person asks for one instead of building both the minified and unminified packages every time.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-05T12:26:34.000-0500",
      "body": "Closed as per previous comment. The additional error noted was also correct in <https://fluidproject.atlassian.net/browse/FLUID-3437#icft=FLUID-3437>\n"
    }
  ]
}
---

        