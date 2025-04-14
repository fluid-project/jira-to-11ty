---json
{
  "title": "FLUID-5474",
  "summary": "UI Options doesn't pass the ToC Template to the separated panel's page enhancer.",
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
  "date": "2014-07-16T12:21:09.940-0400",
  "updated": "2015-06-26T09:53:59.693-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5.1",
    "1.9"
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
      "date": "2014-07-16T14:31:30.306-0400",
      "body": "Submitted pull requests:\n\n1.5.x:\\\n<https://github.com/fluid-project/infusion/pull/548>\n\n2.0:\\\n<https://github.com/fluid-project/infusion/pull/547>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-07-17T09:31:05.071-0400",
      "body": "The pull request for 2.0, the master branch, is merged @ f3ae72f4a3ac3700693a0e3954af46c1ecdd5f15\n\nThe pull request for 1.5.x branch is merged @ 41b9a821f61bd01187d00e7b8217cb27b46ad262\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:44.982-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Steps to Reproduce:

1\) Open the UI Options demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/>

2\) Open the display preferences and enable Table of Contents\
The Table of Contents should display correctly on the page

3\) Hide and re-open the display preferences\
Notice that there is an error in the console because the ToC template couldn't be found

UIO has a tocTemplate option that works for the main content, but doesn't seem to be passing it along to the enhancer used in the separated panel.

        