---json
{
  "title": "FLUID-5906",
  "summary": "Improve fluid.require so that it can initiate module loading from the client's point of view",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-05-15T16:31:55.995-0400",
  "updated": "2016-07-08T09:08:53.436-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-05-20T11:00:17.325-0400",
      "body": "Note that whilst npm 3 now features support for resolving cyclic groups of modules - see <https://github.com/npm/npm/issues/2063> - we will continue with the node 4.x/npm 2.x ecosystem for a while. Also, for this particular case, we will likely always run into problems due to the lack of transitivity of the \"devDependencies\" model. We should also think about factoring Kettle into several smaller npm modules using the \"monorepo\" pattern.\n"
    }
  ]
}
---
Our "fluid.require" utility is capable of applying path-based interpolation to strings of the form "%kettle" etc in order to resolve paths relative to already-loaded modules. <https://issues.gpii.net/browse/GPII-1795> has exposed a case where we need to do more - we have a pair of modules which are cyclic with respect to each other's "devDependencies" (although not in terms of plain dependencies) - gpii-express makes use of kettle for request fixtures, and kettle makes use of gpii-pouchdb, which depends on gpii-express, in order to operate its CouchDB-semantic DataSource URL tests.

The fix initially suggested on <https://issues.gpii.net/browse/GPII-1795>, of replacing a statement in gpii-express reading `require("kettle")` with `fluid.require("%kettle")`, fixes the situation from kettle's point of view but breaks gpii-express' own tests since this line cannot initiate loading of Kettle if it has not loaded.

It's time to bite the bullet and upgrade fluid.require to a fully-capable replacement for node's "require" - with none of the annoyance of having to supply "require" as a fallback argument.

We can do this via techniques such as these: <http://stackoverflow.com/questions/16697791/nodejs-get-filename-of-caller-function>&#x20;

This is specific to V8 and conforms to an API documented here: <https://github.com/v8/v8/wiki/Stack-Trace-API>

Note that we need this facility anyway, to implement the functionality of our existing debugging API fluid.getCallerInfo <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidDebugging.js#L141> on node.js. We'll make an API-compatible function and deal with the platform detection later.

        