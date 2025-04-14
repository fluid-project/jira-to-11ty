---json
{
  "title": "FLUID-4250",
  "summary": "Comment any \"unsupported\" functions/variables/etc for the 1.4 release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2011-05-17T12:24:37.312-0400",
  "updated": "2013-04-11T17:26:02.863-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T12:30:15.673-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-29T11:15:31.179-0400",
      "body": "Antranig, please take a quick look and see if all the unsupported functions have been documented in the code.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-30T16:23:28.807-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/179> merged into project repo at 93d9c88694631c3bee7c091ac0ca2ddd53617463\n"
    }
  ]
}
---
Anything in our code that is "unsupported" (i.e. not meant for public use despite the fact that technically it is public) needs to be indicated as such in the comments in the code. This covers:&#x20;

* public free functions i.e. functions in the public namespace, such as fluid.inlineEdit.foo()
* methods and instance variables on an object returned by a creator function
* options defined in a defaults block or otherwise processed in the code but not for public use
* return values

Please a comment in the code mentioning that the method/function/option/argument/return value is unsupported, and perhaps an explanation of why. Anything unsupported will not be publicly documented.

        