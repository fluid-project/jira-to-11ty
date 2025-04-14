---json
{
  "title": "FLUID-5904",
  "summary": "Component which throws exception triggering self-destruction during creation will fail during cleanup",
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
  "date": "2016-05-09T20:28:53.942-0400",
  "updated": "2016-05-11T11:22:25.546-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-05-09T20:46:45.740-0400",
      "body": "This is actually a regression since in commit <https://github.com/fluid-project/infusion/commit/0bfd51b310d7c10f01104460f09a00f40bd9d98b#diff-eb23eba7203e400016bc578a4faf8ddb> of Aug 7, 2015 we removed the utility \"fluid.fireEvent\" as part of \"General tidying\" which used to give us resistance to such problems (it was previously classed as an \"optimisation\" for firing to uninstantiated lifecycle events which had no listeners, of which we no longer legitimately have/had any)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-05-11T11:22:19.646-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/711> ) into the project repo at 78d75841a6d6305b11f3ac8ca1b2b66fc67e4c22\n"
    }
  ]
}
---
A component which throws an exception before its events are constructed - for example, from an expander which is used to initialise an option - will be left in a condition which cannot properly go through the cleanup lifecycle of "doDestroy" since the line that.events.onDestroy.fire() in fluid.doDestroy (currently Fluid.js line 2597) references a nonexistent event.

This was discovered whilst testing Kettle's "static middleware" error handling, which appears like this:

```javascript
fluid.defaults("kettle.middleware.static", {
    gradeNames: ["kettle.plainMiddleware"],
...
    // Remember that we write this kind of rubbish because of the crummy pre-FLUID-4982 ginger world
    middleware: "@expand:kettle.middleware.static.createMiddleware({that}.options.root, {that}.options.terms, {that}.options.middlewareOptions)"
});

kettle.middleware["static"].createMiddleware = function (root, terms, middlewareOptions) {
    if (!root) {
        fluid.fail("Static middleware must have a root path configured to serve options - got ", root);
    }
...
};
```

This is a class of error we will have to be particularly aggressive at tackling in the post FLUID-4982 world where component construction will have to be fully transactional and Nexus-ready.

        