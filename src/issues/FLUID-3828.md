---json
{
  "title": "FLUID-3828",
  "summary": "Provide feedback on which page the user is on after the page loads",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Golam Chowdhury",
  "date": "2010-11-09T12:11:42.584-0500",
  "updated": "2010-12-13T16:34:31.796-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": "WinXP:\\\nChrome4\\\nFirefox3.6\\\nFirefox3.0\\\nIE8.0\\\nIE7.0\\\nIE6.0\n\nWin7:\\\nFirefox3.6\\\nIE8.0&#x20;\n\nMac10.5:\\\nSafari 4\n\nMac10.6:\\\nFirefox3.6\\\nSafari 4\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID_3828_heidi.patch",
      "filename": "FLUID_3828_heidi.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID_3828_heidi2.patch",
      "filename": "FLUID_3828_heidi2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828.v2.patch",
      "filename": "FLUID-3828.v2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828.v3.patch",
      "filename": "FLUID-3828.v3.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828.v4.patch",
      "filename": "FLUID-3828.v4.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828.v5.patch",
      "filename": "FLUID-3828.v5.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828.v6.patch",
      "filename": "FLUID-3828.v6.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828.v7.patch",
      "filename": "FLUID-3828.v7.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828.v8.patch",
      "filename": "FLUID-3828.v8.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828-AND-3829.patch",
      "filename": "FLUID-3828-AND-3829.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828-AND-3829-Test-Results.v2.xls",
      "filename": "FLUID-3828-AND-3829-Test-Results.v2.xls"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3828/FLUID-3828-AND-3829-Test-Results.xls",
      "filename": "FLUID-3828-AND-3829-Test-Results.xls"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-10T09:48:53.357-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-11T12:45:00.067-0500",
      "body": "FLUID-3828-AND-3829.patch contains the fix for providing better feedback to the user using screen readers. Note: this is not the final patch and this patch was provided to help designers test the pager component.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-11T16:14:24.079-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828>.v2.patch contains fix for <https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828> and <https://fluidproject.atlassian.net/browse/FLUID-3829#icft=FLUID-3829>.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-12T16:21:30.661-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828>.v3.patch contains everything from previous versions. Note: this is not the final version and work is in progress. This version is for testing purpose only.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-16T15:25:08.596-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828>.v4.patch contains everything from previous patches and test cases. Please note this patch is for both Fluid-3828 and <https://fluidproject.atlassian.net/browse/FLUID-3829#icft=FLUID-3829>.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-17T13:09:47.826-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828> test results for the current page feedback and page summary feedback.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-17T15:54:24.071-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828>.v5.patch which contains everything from the previous versions and css changes to the Comments heading in the demo page.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-17T17:17:49.559-0500",
      "body": "FLUID-3828-v6.patch contains some changes to the demo html and Pager changes.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-17T18:25:13.445-0500",
      "body": "A couple of comments on the version 6 patch. \\\n1\\. I would rename \"optionARIA\" to \"summaryARIA\" unless you plan to use it elsewhere.\\\n2\\. The setup for the tests seems overly complex and I'm concerned that they will not be easily maintainable. It would be good to take another look at the tests and see if we can simplify and clarify them.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-18T09:58:46.437-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828>.v7.patch contains everything from previous patches and method name change for setting the aria attributes in summary.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-18T10:24:15.803-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828>.v7.patch ready for aegis-deom. Just a note, we will be rewriting the test cases in the future.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-18T10:40:44.894-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828>.v8.patch contains everything from previous changes. Modified messages for test cases.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-18T16:43:56.005-0500",
      "body": "FLUD-3828 and <https://fluidproject.atlassian.net/browse/FLUID-3829#icft=FLUID-3829> test results with different screen readers and browsers such as XP, Ubuntu, NVDA, JAWS, Fire Fox 3.6.3, 3.6.12, and IE 8.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-08T15:16:20.368-0500",
      "body": "using aria-describedby here is incorrect. switching to aria-label\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-09T13:53:33.468-0500",
      "body": "I talked to Heidi in the channel and she will rewrite the tests that are now failing. She's also going to remove the hardcoded string for 'Current page' and use the options string instead.&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-09T15:14:17.689-0500",
      "body": "fixes up hard-coded text and unit test\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T16:34:31.768-0500",
      "body": "I can confirm that the changes for this are in trunk, and the screen reader experience is appropriate: when the page loads, and when a new 'page' of data is selected, the summary is re-read, updating the user about which page they're currently on. <https://fluidproject.atlassian.net/browse/FLUID-3829#icft=FLUID-3829> will be commented on there.\n"
    }
  ]
}
---
Give users feedback about which page they are on, the range of the data available.

The fix: make the "summary" a live region so that it is read whenever it changes

        