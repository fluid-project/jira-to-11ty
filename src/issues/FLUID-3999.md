---json
{
  "title": "FLUID-3999",
  "summary": "\"Add more\" button in uploader is not disabled while uploading",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "James Yoon",
  "date": "2010-12-21T14:58:00.939-0500",
  "updated": "2011-07-08T16:35:49.337-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF4/Win7\\\nFF3.6/WinXP\\\nFF3.6/OSX10.6\\\nSafari5/OSX10.6\\\nChrome8/Win7\\\nChrome8/WinXP\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3999/FLUID-3999-a.patch",
      "filename": "FLUID-3999-a.patch"
    }
  ],
  "comments": [
    {
      "author": "Erin Yu",
      "date": "2010-12-21T15:11:48.450-0500",
      "body": "In the simulated upload demo, adding more files while uploading other files change the Stop upload button to Upload.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-14T11:54:28.322-0500",
      "body": "Here's a patch that correctly specifies the merge policy for several options in the HTML5 Strategy. The entire Uploader code base should be reviewed for other errors like this.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-16T16:00:39.056-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-05-19T11:04:52.109-0400",
      "body": "Now working in FF and Chrome.   Waiting for <https://fluidproject.atlassian.net/browse/FLUID-4238#icft=FLUID-4238> to test in IE8 and IE9.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-06-24T12:43:34.681-0400",
      "body": "Unable to reproduce with Cindy Li's new image gallery.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-06-27T10:59:04.925-0400",
      "body": "mlam suggested I reopen this issue as it's closely related to a bug I've found in uploader:  When the max # of files is reached, \"Add More\" is greyed out, but still functional (a file dialog opens)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-08T16:35:49.333-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/96> merged into project repo at 50ce86fec5b47534868d1c951b35c4278fa809e1\n"
    }
  ]
}
---
In the simulated upload demo, "Add more" appears disabled but users can still click on it to bring up the file system browser\
In the server upload demo, "Add more" both appears and behaves enabled

        