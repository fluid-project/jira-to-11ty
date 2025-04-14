---json
{
  "title": "FLUID-4210",
  "summary": "Break UI Options sub-component \"controls\" into smaller components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-05-09T13:05:08.682-0400",
  "updated": "2011-05-26T17:13:07.354-0400",
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
      "date": "2011-05-17T10:08:00.040-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-18T12:02:49.794-0400",
      "body": "Merged into project repo at eb26cc2d117d853ee4a35bfa7082914394b4fd58\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-18T12:05:42.008-0400",
      "body": "Closed.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-24T12:57:32.204-0400",
      "body": "Cindy has a minor change that she'd like pushed to the project repo.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-24T13:00:39.360-0400",
      "body": "Merged at 7f0781ce4b538099599b1e3774c50b8bc3edd743\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-26T17:13:07.323-0400",
      "body": "The pull requests were:\\\n<https://github.com/fluid-project/infusion/pull/45>\\\n<https://github.com/fluid-project/infusion/pull/52>\n"
    }
  ]
}
---
According to the new UI Options design (<http://wiki.fluidproject.org/display/fluid/User+interface+options%2C+Infusion+1.4%2C+draft+1+mockups>), break the fluid.uiOptions.controls into 3 sub-components that correspond to each control panel: text & colour, layout, links & buttons.

This break-down is to,\
1\. modularize UI Options' notion of what preferences are available;\
2\. easier for us and users to add/remove/move the preferences in the future;\
3\. reduce the duplication of template code that are for each UIO view.

        