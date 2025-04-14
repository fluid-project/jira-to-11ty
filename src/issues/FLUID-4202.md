---json
{
  "title": "FLUID-4202",
  "summary": "Provide starter FSS styles for mixed columns where the fixed column is on the right",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-05-04T10:33:55.681-0400",
  "updated": "2011-06-20T15:57:10.481-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4201/",
      "key": "FLUID-4201",
      "summary": "Column styles don't work for right-side fixed-width columns"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-04T13:51:08.076-0400",
      "body": "I've added in styles specific to having mixed columns where the left column is flexible. This can be seen in my <https://fluidproject.atlassian.net/browse/FLUID-4202#icft=FLUID-4202> branch in my github fork of Infusion <https://github.com/jobara/infusion/tree/FLUID-4202>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:11:19.161-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T14:28:24.158-0400",
      "body": "Added styles for mixed columns where the flexible column is on the left. Also added an example to the FSS \"unit tests\".\n\nSent a pull request <https://github.com/fluid-project/infusion/pull/47>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-26T14:07:40.417-0400",
      "body": "Merged into project repo at ff12fb91dbcf578cf731\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-29T11:41:02.906-0400",
      "body": "There's a nasty cut & paste error in the CSS. All the fixed right, flex left styles that have a container size are set only for the fl-col-mixed-100 class. <https://github.com/fluid-project/infusion/blob/master/src/webapp/framework/fss/css/fss-layout.css#L227-249>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-29T12:12:51.911-0400",
      "body": "Sent a new pull request to fix the cut and paste issue: <https://github.com/fluid-project/infusion/pull/56>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-29T12:13:20.709-0400",
      "body": "set the fl-col-mixed- container widths to the correct values\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-29T12:13:34.341-0400",
      "body": "Switching to needs commit\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-30T09:44:04.303-0400",
      "body": "Merged the copy paste error fix into the project repo at 7a17d4e8436855b1d03f79ed591245d77d0430e0\n"
    }
  ]
}
---
There had been some inline comments regarding this, but no actual examples. We should add in some new styles to make fixed columns on the right for the ones that are on the left.&#x20;

This came up on the infusion-users list\
<http://infusion-users.961009.n3.nabble.com/Infusion-users-FSS-columns-td2898283.html>

        