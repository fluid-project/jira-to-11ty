---json
{
  "title": "FLUID-4391",
  "summary": "Image Reorderer fails when event listener is supplied as part of initial options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-08-07T21:49:26.998-0400",
  "updated": "2011-08-09T11:01:17.690-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-08-07T22:37:22.583-0400",
      "body": "Bug Parade Infusion 1.4\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-09T11:00:58.207-0400",
      "body": "Pushed the pull request <https://github.com/fluid-project/infusion/pull/131> at 6c4f7a89e4f4e3e804af453319d69c1eaf381a48\n"
    }
  ]
}
---
Reported by harriswong in IRC 05/08/11 -&#x20;

\[12:54] \<harriswong> Justin\_o: i have a question on the imageReorderer.  I keep getting a " ASSERTION FAILED:  Listener registered for event afterMove which is not defined for this component" and i am not sure what i am missing.\
\[12:56] \<Justin\_o> harriswong: sounds like you have a listener that doesn't exist.. like if you passed in options like the following\
\[12:56] \<harriswong> Justin\_o: Looking at <http://wiki.fluidproject.org/display/fluid/Image+Reorderer+API>, listeners; i tried adding the "afterMove" to the listener in the demo (webapp/demos/reorderer/imageReorderer/js/imageReorderer.js)\
\[12:56] \<Justin\_o> listeners: {someEvent: someUndefinedFunction};\
\[12:57] \<harriswong> Justin\_o: that's what i thought, i must be missing something somewhere, here is my code if you have a min, <http://pastebin.com/CcpeLJJH>\
\[12:58] \<Justin\_o> harriswong: what happens if you don't include the listener block at all?\
\[12:58] \<harriswong> Justin\_o: then it's fine, the current demo has no listeners.\
\[12:59] \<Justin\_o> harriswong: but you get the error with this?

This was caused by a framework fix that prohibited adding listeners to non-existent events, as well as the non-standard "wrapper" strategy for this initialise which creates a "fake component".

        