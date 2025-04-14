---json
{
  "title": "FLUID-3831",
  "summary": "Make the tooltip work with the screen reader ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Golam Chowdhury",
  "date": "2010-11-11T13:13:20.554-0500",
  "updated": "2014-03-03T13:40:41.204-0500",
  "versions": [
    "1.2.1",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": "WinXP:\\\nChrome4\\\nFirefox3.6\\\nFirefox3.0\\\nIE8.0\\\nIE7.0\\\nIE6.0\n\nWin7:\\\nFirefox3.6\\\nIE8.0&#x20;\n\nMac10.5:\\\nSafari 4\n\nMac10.6:\\\nFirefox3.6\\\nSafari 4\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3595/",
      "key": "FLUID-3595"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3831/FLUID-3831-aegisTesting.patch.txt",
      "filename": "FLUID-3831-aegisTesting.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3831/FLUID-3831-tooltipWrapper.patch.txt",
      "filename": "FLUID-3831-tooltipWrapper.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3831/FLUID-3831-tooltipWrapper-withTests.patch",
      "filename": "FLUID-3831-tooltipWrapper-withTests.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3831/FLUID-3831-tooltipWrapper-withTests.v2.patch.txt",
      "filename": "FLUID-3831-tooltipWrapper-withTests.v2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3831/jquery.tooltip.css",
      "filename": "jquery.tooltip.css"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3831/jquery.tooltip.js",
      "filename": "jquery.tooltip.js"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3831/tooltipExperimentPatch.txt",
      "filename": "tooltipExperimentPatch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-11T13:17:51.723-0500",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-15T11:39:26.064-0500",
      "body": "The tooltipExperimentPatch contains the tooltip plugin from the git hub repo&#x20;\n\n<https://github.com/jquery/jquery-ui/tree/tooltip>\\\ncommit  48a5977d3325869abd7b\\\ntree    43fd0cda4af2cdcd33f5\\\nparent  bdd815e8dcdeace8be6d\n\nThere is also an example field in the sakai demo that seems to work for our needs but it is not being used properly in the Pager. It's possible that there is a bug that we'll need to fix - an error is thrown if I click on my example field and then move focus away.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-15T15:29:11.691-0500",
      "body": "uploading the js and css files for the tooltip plugin we are trying since the patch seems to have mangled the files.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-17T18:06:13.408-0500",
      "body": "FLUID-3831-aegisTesting.patch.txt updates to the new tooltip plugin from jquery. The inlineEdit and Pager components have been updated to use it. This patch is really only ready for the aegis demos and still needs more work before going into trunk.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-17T18:31:11.995-0500",
      "body": "FLUID-3831-aegisTesting.patch.txt updates to the new tooltip plugin from jquery. The inlineEdit and Pager components have been updated to use it. This patch is really only ready for the aegis demos and still needs more work before going into trunk.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-25T17:16:55.695-0500",
      "body": "Committed changes to update the tooltip pluging to the prerelease version from jquery ui. I've updated inlineEdit and Pager to make use of the new tooltip and have added unit tests against the pager's usage of the tooltip. There are some api changes because of this. For inlineEdit the tooltipid is no longer supported. This, however, could have resulted in multiple include issues so it seems safe to remove. For Pager, the tooltip styling, delay, and id options have all been removed, in favour of exposing the entire options structure from the tooltip plugin. This was based on the FLUID-3831-aegisTesting.patch.txt patch, but has been improved to make it ready for trunk\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-08T19:13:46.067-0500",
      "body": "FLUID-3831-tooltipWrapper.patch.txt is a start at wrapping the tooltip, needs unit tests  still\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-09T16:35:02.948-0500",
      "body": "FLUID-3831-tooltipWrapper-withTests.patch contains the changes from /Users/justin/Desktop/FLUID-3831-tooltipWrapper.patch.txt but with the unit tests.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-09T18:32:51.341-0500",
      "body": "FLUID-3831-tooltipWrapper-withTests.v2.patch.txt is a continuation of FLUID-3831-tooltipWrapper-withTests.patch, with changes from Antranig's suggestions. (new public functions for open, close, and destroy, default delay of 300ms, and removed tabs).\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-10T14:14:17.604-0500",
      "body": "I have reviewed the \"v2\" version of this patch and it looks good\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-17T10:53:29.525-0500",
      "body": "Implemented a simple wrapper around jQuery's pre-release tooltip plugin. The wrapper currently merely helps us preserve backwards compatibility with most of the options that we had been using from the previous tooltip plugin.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:39:23.142-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1.\n"
    }
  ]
}
---
The tooltip currently doesn't get read by the screen reader when hover page link. We will be looking at how the inline edit have implemented the tooltip.

        