---json
{
  "title": "FLUID-5711",
  "summary": "The Infusion core framework doesn't work when run in a Web Worker",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2015-07-20T22:56:14.815-0400",
  "updated": "2017-02-27T15:49:11.457-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9",
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": "All browsers\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:59:43.685-0400",
      "body": "Merged into trunk at revision 16861cf384179cb647327d58affad216e409814b\\\nand merged into branch 1.9.x at revision 92a8bd92496407d921134f4f56661c0659a359e0\n"
    }
  ]
}
---
Currently, the core "standalone" Infusion framework can't be run in a Web Worker. This is due to the fact that we've still got a few stray references to the the global "window" variable in the code. In a Worker, there is no window, but the "self" variable is the equivalent global (with some of same functions available).

My worker includes the following portions of the Infusion core framework:

* jquery.standalone.js
* Fluid.js
* DataBinding.js
* FluidDebugging.js
* FluidIoC.js

Here's a list of the references to "window" that cause failures in a Worker:

<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/Fluid.js#L45>\
<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/jquery.standalone.js#L34-L36>

I also noticed that this function will pass in a Worker when its argument is "self" (which is probably a good thing):

<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/jquery.standalone.js#L71-L73>

I was able to quickly hack up a fix for this issue while testing. For reference, here's the diff:

<https://gist.github.com/colinbdclark/3fbfa7e82b85cb9915fa>

This, of course, still needs to be worked up into a viable pull request.

        