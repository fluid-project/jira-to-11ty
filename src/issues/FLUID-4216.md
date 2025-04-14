---json
{
  "title": "FLUID-4216",
  "summary": "Fix UIO model and functionality to use the new 1.4 controls",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "heidi valles",
  "date": "2011-05-11T10:59:21.450-0400",
  "updated": "2011-06-02T09:54:21.068-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:07:40.545-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-18T14:28:22.502-0400",
      "body": "Work for this issue was started under the <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782> branch ( <https://github.com/heidiv/infusion/tree/FLUID-3782> ). New work should branch off from there and be continued under a branch specific to this jira.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-20T15:40:24.232-0400",
      "body": "The work for this jira is done in branch: <https://github.com/cindyli/infusion/tree/FLUID-4216>\n\nHowever, the branch cannot be merged into project repo because only one of the UI Options view \"full page with preview\" is implemented but not others. This branch will be merged into <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230> ( <https://github.com/heidiv/infusion/tree/FLUID-4230>  ) and the work will be continued from there.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-20T15:47:42.093-0400",
      "body": "The work for this jira is done but not merged into project repo. It will be continued in <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230> (<http://issues.fluidproject.org/browse/FLUID-4230>).\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-05-24T16:53:12.994-0400",
      "body": "* text size & line spacing need default #s in the slider input boxes\n* text-size should use px instead of pt\n* values should be x times the default value (instead of the old incremental way), needs to be calculated&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-31T11:01:30.889-0400",
      "body": "The issues that heidi discovered has been pushed into the UI Options merging branch (<https://github.com/michelled/infusion/commits/FLUID-4267>) with commit# 8010b01799e3d6b660e0\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-01T11:57:48.359-0400",
      "body": "One more change is needed:\\\nApply the css style to the options on the dropdown list of \"text style\" and \"colour & contrast\" to the specific style that each option targets.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-01T14:31:38.303-0400",
      "body": "Commit a87ecf64aaf40354573c has been pushed into <https://github.com/michelled/infusion/tree/FLUID-4267> that includes the implementation of \"fluid.uiOptions.selectDecorator\" for styling the select options.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-02T09:54:05.122-0400",
      "body": "Resolved\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-02T09:54:21.067-0400",
      "body": "Issue closed.\n"
    }
  ]
}
---
Controls for UIO have been changed, old ones removed, and new ones added. The component needs to be updated to use these.

        