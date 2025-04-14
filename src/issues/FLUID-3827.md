---json
{
  "title": "FLUID-3827",
  "summary": "Fix PHP unit tests at infusion builder daily build",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2010-11-09T10:42:06.991-0500",
  "updated": "2010-11-11T15:58:38.431-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "The server where infusion builder daily build is located (<http://forge.fluidproject.org/>)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3827/FLUID-3827-1.patch.txt",
      "filename": "FLUID-3827-1.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3827/FLUID-3827-2.patch.txt",
      "filename": "FLUID-3827-2.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2010-11-09T10:48:00.721-0500",
      "body": "\"FLUID-3827-1.patch.txt\" does:\\\n1\\. combined 2 constants used by PHP unit test (TEST\\_INFUSION\\_BUILDER\\_URL, TEST\\_BASE\\_PATH) into one (TEST\\_INFUSION\\_BUILDER\\_URL);\\\n2\\. set the default values of the constants used by PHP unit test to use the daily build configurations.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-09T11:01:15.918-0500",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-09T16:21:30.140-0500",
      "body": "Committed at revision 10203.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-11T10:34:00.517-0500",
      "body": "Michelle's commit also switches .externals from 1.2.1 release trunk to infusion library daily build trunk. This change discovers two issues:\n\n1\\. The version number in the daily build \"1.3-SNAPSHOT\" is not parsed correctly by php script. The characters are skipped, as a result incorrect version number \"1.3\" is given;\\\n2\\. Some php unit tests fail because 1.3 removes \"JQuery Delegate Plugin\" which those test cases test on.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-11T10:41:03.131-0500",
      "body": "\"FLUID-3827-2.patch.txt\" does:\n\n1\\. Corrected the part in the php script to allow all kind of characters in the infusion version number, for instance, - or chars;\\\n2\\. Removed the references to \"JQuery Delegate Plugin\" from php unit tests.\n\nNote that \"FLUID-3827-1.patch.txt\" has been committed. This patch is created on top of the trunk that \"FLUID-3827-2.patch.txt\" has been applied.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-11T15:58:19.071-0500",
      "body": "Michelle reviewed and committed the patch into revision 10216.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-11T15:58:38.428-0500",
      "body": "Issue closed.\n"
    }
  ]
}
---
URL of PHP unit test page @ infusion builder daily build:\
<http://forge.fluidproject.org/infusionBuilder/tests/php/InfusionBuilderTests.php>

This page doesn't get loaded because the constants in a couple of configuration files are incorrect. The solution is to set the default values of these constants to the ones used by infusion builder daily build so that users can easily test the site.&#x20;

Regarding the local builds, these constant values need to be manually adjusted by following the instructions on wiki page "Deploying  the Infusion Builder".

        