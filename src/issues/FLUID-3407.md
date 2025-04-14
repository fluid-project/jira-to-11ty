---json
{
  "title": "FLUID-3407",
  "summary": "Refactor the Infusion Ant build scripts to avoid the need for minifying during each build.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Laurel Williams",
  "date": "2009-12-04T09:57:28.000-0500",
  "updated": "2013-09-06T14:03:59.533-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-218/",
      "key": "ENGAGE-218"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3431/",
      "key": "FLUID-3431"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3432/",
      "key": "FLUID-3432"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3407/FLUID-3407-1.patch.txt",
      "filename": "FLUID-3407-1.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3407/FLUID-3407-2.patch.txt",
      "filename": "FLUID-3407-2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3407/FLUID-3407-3.patch",
      "filename": "FLUID-3407-3.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3407/FLUID-3407-4.patch",
      "filename": "FLUID-3407-4.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3407/FLUID-3407-5.patch",
      "filename": "FLUID-3407-5.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3407/FLUID-3407-6.patch",
      "filename": "FLUID-3407-6.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3407/FLUID-3407-7.patch",
      "filename": "FLUID-3407-7.patch"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-04T09:59:26.000-0500",
      "body": "The builder currently uses the ant scripts to do minification as part of the building process. It may be possible to move the minification step into the deploy process, which would mean a single minification step rather than minification during every build.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-04T18:00:10.000-0500",
      "body": "Bug Parade Builder 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-07T16:19:08.000-0500",
      "body": "Attached is patch FLUID-3407-1.patch.txt which addresses this issue. It required quite a bit of re-factoring of the build scripts and should be tested by the reviewer. I have tested in a windows environment, but will need to test again in a unix environment. Am posting the patch so this can happen at the same time.\n\nIn addition, several tasks will result if this patch is accepted. I will create issues for these and linked them to this issue.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-08T11:03:06.000-0500",
      "body": "I corrected a typo that was making the dailyBuild target fail.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-10T14:16:00.000-0500",
      "body": "We decided that we should use this opportunity to improve our build scripts. I'm reworking the structure of the build files - the top level targets won't change.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-10T14:20:44.000-0500",
      "body": "FLUID-3407-3.patch is the start of the refactoring of the build scripts. The customBuild target is working except for minify.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-10T17:23:23.000-0500",
      "body": "FLUID-3407-4.patch continues the refactoring of the build scripts. the main parts of customBuild, builderBuild and dailyBuild work but the results need to be tested.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-13T15:26:24.000-0500",
      "body": "FLUID-3407-5.patch has the releaseBuilds target working. I also started some clean up of the build file.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-14T11:02:01.000-0500",
      "body": "FLUID-3407-6.patch has the infusion all target working. Still need to clean up the patch and test properly.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-14T13:52:29.000-0500",
      "body": "FLUID-3407-7.patch is cleaned up and ready for testing\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-15T11:09:01.000-0500",
      "body": "We also need to create a 1.1.2.x maintenance branch for the upcoming 1.1.2.1 \"un-release.\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-16T12:24:20.000-0500",
      "body": "This issue is ready for review. There are bugs relating to the refactoring but they don't affect the needs of the builder.&#x20;\n"
    }
  ]
}
---
At the moment, the Infusion ant build scripts require the minification step mid-way through the build process, meaning that we need to minify the source code every time someone asks for a custom build. To support a more performant Builder, we need to move the minification step out so that it can be done once upon deployment of the Builder, rather than each time a build is requested.

This will require substantial refactoring to the Infusion ant build scripts, which will we release as a micro 1.1.2.1 version.

        