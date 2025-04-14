---json
{
  "title": "FLUID-5341",
  "summary": "Add \"Demo Code\" and \"Get Infusion\" links to the overview panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-04-29T14:00:09.073-0400",
  "updated": "2014-05-13T13:23:42.908-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-05-06T13:51:53.879-0400",
      "body": "In pull request #505\\\n<https://github.com/fluid-project/infusion/pull/505>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-13T13:23:36.522-0400",
      "body": "Merge pull request ( <https://github.com/fluid-project/infusion/pull/505> ) into the project repo at 1d0c02de3684d705b63f6b98180983326c848a3b\n"
    }
  ]
}
---
Add a "Demo Code" link and "Get Infusion" link to the overview panel. Specifically:

1\. Remove the "Code" link and icon.\
2\. Add "Demo Code" link and icon. Link URL will be the github URL for the specific demo. i.e.\
<https://github.com/fluid-project/infusion/tree/master/src/demos/uiOptions>\
3\. Add a "Get Infusion" link and icon. Link URL will be the main Infusion project repository on github.

The icon for "Demo Code" will be two curly braces.\
The icon for "Get Infusion" will be the github catsquid.

        