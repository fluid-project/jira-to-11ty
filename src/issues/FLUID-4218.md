---json
{
  "title": "FLUID-4218",
  "summary": "Create two new FSS themes for UIO in the yellow/black scheme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "heidi valles",
  "date": "2011-05-11T11:14:37.064-0400",
  "updated": "2011-07-08T16:13:21.687-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4218/blackWhite.zip",
      "filename": "blackWhite.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4218/uioyellowonblackicons.zip",
      "filename": "uioyellowonblackicons.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4218/whiteBlack.zip",
      "filename": "whiteBlack.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4218/yellowBlack.zip",
      "filename": "yellowBlack.zip"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-05-13T14:13:23.166-0400",
      "body": "Mock-ups showing potential yellow/black themes:\\\n<http://wiki.fluidproject.org/display/fluid/User+interface+options+mocked+up+in+Inclusive+Learning+Handbook>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:07:09.885-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "James Yoon",
      "date": "2011-06-06T09:28:08.982-0400",
      "body": "UIO vector file download available at: <http://wiki.fluidproject.org/display/fluid/User+interface+options%2C+Infusion+1.4%2C+draft+1+mockups>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-06-06T11:14:20.566-0400",
      "body": "I have issued a pull request for a code review of the work I've done on this so far:\\\n<https://github.com/fluid-project/infusion/pull/64>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-06-07T10:42:27.436-0400",
      "body": "I have created widget graphics for Yellow Black FSS theme. Includes, More, Gripper, title and button graphics, and Close. See the attached file yellowBlack-widgets.zip\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-09T09:56:45.438-0400",
      "body": "Merged into the project repo at 03c6c3473e9c9a7afedd9ad1c7cd0a9d5544d264.&#x20;\n\nThere is still some work that needs to be done especially regarding the sliders.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-20T15:54:51.449-0400",
      "body": "Reassigning to Anastasia as per irc conversation: <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2011-06-08> \\[13:58:20 CDT(-0500)]&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-06-21T13:15:10.192-0400",
      "body": "Updated widget icons for FSS contrast themes.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-06-21T14:20:35.031-0400",
      "body": "I've issued a pull request for changes that update the themes to use the new icons:\\\n<https://github.com/fluid-project/infusion/pull/81>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-27T12:24:39.358-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/81> merged into project repo at 909a16cb0be457d654f1507b74089990b9d21dec\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-06-27T13:15:58.637-0400",
      "body": "Reopening this issue in order to implement Jonathan's new high-contrast button outlines.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-06-27T13:25:22.996-0400",
      "body": "I've implemented the new button images for the high-contrast themes, and issued a pull request:\\\n<https://github.com/fluid-project/infusion/pull/89>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-30T10:30:01.107-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/89> merged into project repo at 13db839e4f0aa7b44f8415b43e961c1826f5a008\n"
    }
  ]
}
---
re: <http://wiki.fluidproject.org/display/fluid/User+interface+options%2C+Infusion+1.4%2C+draft+1+mockups>

black on yellow & yellow on black

Once these are created for FSS, make sure to add the jquery themeRoller versions for theming jquery components

        