---json
{
  "title": "FLUID-3775",
  "summary": "Verify dependencies for components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-10-04T15:46:39.600-0400",
  "updated": "2011-01-14T13:27:46.744-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3775/FLUID-3775-patch.txt",
      "filename": "FLUID-3775-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:46:59.069-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-08T12:38:50.738-0500",
      "body": "I think we might want to remove the individual fss dependency files and just have one for all of fss. Initially the individual ones were added so that we could try to support css concatenation. Since we won't be doing that it will likely be less confusing if we just have the one. Also i think there is a bug that will cause all of the css files to be pulled in anyways.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-12-09T14:14:23.427-0500",
      "body": "* removed \"jQuerybgiframePlugin\" from Pager's dependency\n* replaced all dependencies in fssDependencies.json with corresponding cssFiles.\n* Jsonlint-ed all the json files in this patch\n\n- removed the following FSS from build.properties:\\\n  module\\_fssReset=framework/fss\\\n  module\\_fssLayout=framework/fss\\\n  module\\_fssText=framework/fss\\\n  module\\_fssThemes=framework/fss\n\n* remove the following files from file system:\\\n  src/webapp/framework/fss/fssLayoutDependencies.json, \\\n  src/webapp/framework/fss/fssResetDependencies.json, \\\n  src/webapp/framework/fss/fssTextDependencies.json,\\\n  src/webapp/framework/fss/fssThemesDependencies.json\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T11:17:50.412-0500",
      "body": "I've reviewed and committed Harris' patch. I've tested various configurations of custom builds, and it either adds all the css files or none, as appropriate. Other dependencies seem fine.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-13T12:01:24.002-0500",
      "body": "Anastasia reviewed, committed, and tested.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T13:23:30.238-0500",
      "body": "Reopening these issues to add the releasecomponent.&#x20;\n"
    }
  ]
}
---
Ensure that all of the dependencies are correctly listed. This is necessary for proper builds.

        