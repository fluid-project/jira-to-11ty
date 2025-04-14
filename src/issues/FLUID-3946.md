---json
{
  "title": "FLUID-3946",
  "summary": "Tab order inconsistent in layout reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Golam Chowdhury",
  "reporter": "James Yoon",
  "date": "2010-12-17T14:59:03.801-0500",
  "updated": "2011-02-15T14:34:58.176-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Chrome 6, FF 3.6, IE 8 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3946/FLUID-3946.patch",
      "filename": "FLUID-3946.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3946/FLUID-3946.v2.patch",
      "filename": "FLUID-3946.v2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3946/FLUID-3946.v3.patch",
      "filename": "FLUID-3946.v3.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3946/FLUID-3946.v4.patch",
      "filename": "FLUID-3946.v4.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3946/FLUID-3946.v5.patch",
      "filename": "FLUID-3946.v5.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3946/FLUID-3946.v6.patch",
      "filename": "FLUID-3946.v6.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-01-20T12:01:14.549-0500",
      "body": "The Reorderer should not allow individual elements to be focusable with the Tab key. The container should accept focus with the Tab key, and a second press of it should move focus to the next element past the Reorderer's container.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-01-25T12:41:02.649-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3946#icft=FLUID-3946>.patch to fix the tabbing issues with layout reorder.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-02-01T15:23:28.263-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3946#icft=FLUID-3946>.v2.patch contains more tests for checking tab indexes within the container and it's elements.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-02-01T17:23:00.114-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3946#icft=FLUID-3946>.v3.patch made some changes to the test cases.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-02-04T15:09:00.206-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3946#icft=FLUID-3946>.v4.patch made some code changes and it passes using both IE8 and FireFox3.6.13.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-02-07T15:50:25.421-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3946#icft=FLUID-3946>.v5.patch made code changes to test with both default and custom options.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-02-09T15:45:24.226-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3946#icft=FLUID-3946>.v6.patch made code changes to test with both default and custom options. Also re-factored some codes.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-02-14T16:22:59.365-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3946#icft=FLUID-3946> patch can be found on <https://github.com/gchowdhury/infusion/tree/FLUID-3946>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-15T14:34:58.173-0500",
      "body": "Patch committed at commit 50e048d028639b2d344d327fd4d155e33998c7dc.&#x20;\n"
    }
  ]
}
---
Tabbing backwards will go individually through each layout element; tabbing forward will only do so sometimes

        