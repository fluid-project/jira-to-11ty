---json
{
  "title": "FLUID-5671",
  "summary": "Memory exhaustion is possible during fluid.fail on node.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-05-28T11:12:17.108-0400",
  "updated": "2017-02-27T15:49:16.998-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:18:49.588-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
Today we observed an "FATAL ERROR: JS Allocation failed - process out of memory" whilst debugging a node.js infusion (gpii-express - common terms registry) app. Eventually the fault was traced to the object rendering code triggered by the patched "fluid.doLog" implementation in fluid.js - this was formerly improved for <https://fluidproject.atlassian.net/browse/FLUID-5475#icft=FLUID-5475>, but it clearly needs to be improved further:

// Convert an argument intended for console.log in the node environment to a readable form (the\
// default action of util.inspect censors at depth 1)\
fluid.renderLoggingArg = function (arg) {\
var togo = arg && fluid.isPrimitive(arg) ? arg : fluid.prettyPrintJSON(arg);\
if (typeof(togo) === "string" && togo.length > fluid.logObjectRenderChars) {\
togo = togo.substring(0, fluid.logObjectRenderChars) + " .... \[output suppressed at " + fluid.logObjectRenderChars + " chars - for more output, increase fluid.logObjectRenderChars]";\
}\
return togo;\
};

// Monkey-patch the built-in fluid.doLog utility to improve its behaviour within node.js - see <https://fluidproject.atlassian.net/browse/FLUID-5475#icft=FLUID-5475>\
fluid.doLog = function (args) {\
args = fluid.transform(args, fluid.renderLoggingArg);\
console.log(args.join(""));\
};

Whilst fluid.prettyPrintJSON does indeed resist rendering circular objects, and we truncate its output to avoid flooding the console, it is still possible for extremely highly tangled objects, of the kinds found within node-express, to cause memory exhaustion when we try to render them. A sample of these is rendered in the following gist - <https://gist.github.com/amb26/e343c89980d6d9be39ec>&#x20;

we should improve fluid.prettyPrintJSON so that it can apply an output limit whilst streaming.

        