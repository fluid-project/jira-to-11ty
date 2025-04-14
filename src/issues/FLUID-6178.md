---json
{
  "title": "FLUID-6178",
  "summary": "fluid.prettyPrintJSON fails to properly guard against exploding synthetic properties",
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
  "date": "2017-08-02T18:22:59.675-0400",
  "updated": "2024-07-22T09:04:50.247-0400",
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
      "author": "Simon Bates",
      "date": "2017-09-26T10:21:00.187-0400",
      "body": "Merged at <https://github.com/fluid-project/infusion/commit/c86c007e392986fdd6441ad188225548b7a58cfd>\n\n \n"
    }
  ]
}
---
Our fluid.prettyPrintJSON utility, used notably within the fluid.js fluid.renderLoggingArg monkey-patch which is used in the node environement, has code which attempts to guard against triggering synthetic properties which throw, but which is not completely effective.

In the pull request <https://github.com/GPII/universal/pull/515> for GPII-2333, Steve Grundell triggered a collateral failure in a test case as a result of issuing the configuration

```java
fluid.logObjectRenderChars = 0xffffff
```

This caused enough of an Infusion component to be rendered as a result of a fluid.describeActivity dump in the case of an expected test case failure that it tried to render a node "IncomingMessage" request object which had a faulty synthetic property for which the definition read

```java
defineGetter(req, 'protocol', function protocol() {
  var proto = this.connection.encrypted
    ? 'https'
    : 'http';
```

In the case connection is not set, this property will throw on read access. We end up triggering this because the implementation of fluid.prettyPrintJSON invokes fluid.keys, which as the implementation comment indeed notes, "is not as clever as we think it is" and ends up unnecessarily evaluating all the values as well as the keys.

We can just replace this with Object.keys() which has been supperted in JS since IE9 - we may as well deprecate fluid.keys() whilst we are at it.

        