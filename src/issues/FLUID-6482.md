---json
{
  "title": "FLUID-6482",
  "summary": "fluid.getCallerInfo throws exception sometimes on Safari (atDepth exceeds stack.length)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2020-03-26T13:32:43.488-0400",
  "updated": "2024-07-22T10:35:29.142-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "Safari\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-03-26T14:05:01.074-0400",
      "body": "@@Alan Harnum are there reproducible steps that we can perform to trigger this issue, or is it random failures? Is there an example we can test?\n"
    }
  ]
}
---
In some circumstances in Safari on OSX and iOS, it seems to be possible for the **getCallerInfo** function seems to receive an **atDepth** argument that exceeds the size of the **stack** variable. This results in a TypeError ("undefined is not an object") at [https://github.com/fluid-project/infusion/blob/f4086140591a852660abb96f40a5d538be2a93d1/src/framework/core/js/FluidDebugging.js#L141:](https://github.com/fluid-project/infusion/blob/f4086140591a852660abb96f40a5d538be2a93d1/src/framework/core/js/FluidDebugging.js#L141)

`  var element = stack && stack[atDepth][0];`

This issue was found in the use of several custom components to integrate UIO with the Clusive application of the CISL project. Tracing found that the code itself was working, but the **getCallerInfo** function was causing failures due to the issues noted above.

The following additional guard has resolved the issue on my local environment:

`  var element = stack && stack[atDepth] && stack[atDepth][0];`

I will open a pull request for the above fix.

 

 

        