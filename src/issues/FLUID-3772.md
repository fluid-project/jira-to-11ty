---json
{
  "title": "FLUID-3772",
  "summary": "In progress component when using progress.hide(), there's no way to know when it's finished hiding.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Golam Chowdhury",
  "reporter": "Golam Chowdhury",
  "date": "2010-10-04T13:41:06.450-0400",
  "updated": "2010-10-18T08:50:02.051-0400",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Progress"
  ],
  "environment": "WinXP:\\\nChrome4\\\nFirefox3.6\\\nFirefox3.0\\\nIE8.0\\\nIE7.0\\\nIE6.0\n\nWin7:\\\nFirefox3.6\\\nIE8.0&#x20;\n\nMac10.5:\\\nSafari 4\n\nMac10.6:\\\nFirefox3.6\\\nSafari 4\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3772/FLUID-3772.patch",
      "filename": "FLUID-3772.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3772/FLUID-3772.v2.patch",
      "filename": "FLUID-3772.v2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3772/FLUID-3772.v3.patch",
      "filename": "FLUID-3772.v3.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3772/FLUID-3772.v4.patch",
      "filename": "FLUID-3772.v4.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3772/FLUID-3772.v5.patch",
      "filename": "FLUID-3772.v5.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T13:51:08.056-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-12T11:20:45.743-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>: This <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.patch added event feature in the progress component. The two new events that we have added are  onProgressBegin and afterProgressHidden. Details on how to use them will be added in the progress API shortly. The unit tests are coming shortly as well.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-14T13:00:30.795-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>: This <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v2.patch added event features in the progress component. This patch contains everything from the previous patch <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.patch and the test cases.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-14T14:03:09.340-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>:This <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v3.patch added event features in the progress component. This patch contains everything from the previous patch <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.patch, <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v2.patch and the test cases.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-14T17:34:12.441-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>: This <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v4.patch contains everything from the previous patchs <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.patch, <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v2.patch, <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v3.patch also includes re-factored codes and the test cases.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-15T16:32:11.318-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>: This <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v5.patch contains everything from the previous patches <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.patch, <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v2.patch, <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v3.patch, and <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v4.patch also includes re-factored codes and the test cases.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-15T16:52:19.274-0400",
      "body": "Committed Golam's patch ( <https://fluidproject.atlassian.net/browse/FLUID-3772#icft=FLUID-3772>.v5.patch ) which adds in events at the start of progress and when progress is hidden. Unit tests and test refactoring were included.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-18T08:50:02.048-0400",
      "body": "Colin, Golam, and myself walked through the code and reviewed the changes.\n"
    }
  ]
}
---
In progress component when using progress.hide(), there's no way to know when it's finished hiding.  The progress component should through an  event when the progress is done and this will help the integrator know about which action to take next.&#x20;

        