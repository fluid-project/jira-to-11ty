---json
{
  "title": "FLUID-3892",
  "summary": "Move ProgressiveEnhancement into its own module",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-10T14:37:40.629-0500",
  "updated": "2011-01-15T15:37:37.646-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3892/FLUID-3892.patch.txt",
      "filename": "FLUID-3892.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-10T14:42:00.754-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-10T17:00:45.706-0500",
      "body": "This patch (<https://fluidproject.atlassian.net/browse/FLUID-3892#icft=FLUID-3892>.patch.txt) moves ProgressiveEnhancement.js into its own module, and adds a check for the existence of swfobject. I've tested various custom build configuration, and it seems to correctly include or not include the new module as appropriate. The Uploader demo and template still work, tests still pass.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-10T17:01:52.974-0500",
      "body": "Colin, I've attached a patch for this. I've tested it on a machine that **has** Flash, but not one that doesn't, so that should probably be checked.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-11T13:26:58.924-0500",
      "body": "Reopening in order to change resolution after committing a modified version of Anastasia's patch.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-11T13:29:33.642-0500",
      "body": "I committed a modified version of Anastasia's patch to trunk at r10391. Changes to the patch included: 1) using \"enhancement\" as the module name for improved brevity, 2) creating a cleaner implementation of the flash check, 2) removing ProgressiveEnhancement.js from the framework dependency file. I've tested this in several ways, but Anastasia can you look over my changes, test, and close this issue if you're happy with the modified fix?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T10:24:38.004-0500",
      "body": "Colin's commit works fine with all the test scenarios I've tried. His version of the Flash test is much better.\n"
    }
  ]
}
---
The inclusion of ProgressiveEnhancement.js in the framework causes a dependency on swfobject that breaks with InfusionAll.js because of the order of inclusion of the files. After a discussion in the channel\
<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2010-12-10>\
we decide to move ProgressiveEnhancement.js into its own module, fix it to check for the existence of swfobject before using it, and to make Uploader dependent on this module.

"Bug Parade Infusion 1.3"&#x20;

        