---json
{
  "title": "FLUID-5920",
  "summary": "Add default handler to global uncaught exception handler in node to trigger system exit",
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
  "date": "2016-06-17T20:51:50.916-0400",
  "updated": "2024-07-22T10:35:02.987-0400",
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
      "date": "2017-08-31T16:32:21.831-0400",
      "body": "Merged into trunk at revision 392b2f8\n"
    }
  ]
}
---
<https://issues.gpii.net/browse/GPII-1852> revealed an awkward scenario where a test case run which triggers a fatal exception can appear to execute successfully if the logs are not read carefully.

Perhaps anticipating primarily use of Infusion's node.js configuration within Kettle, we did not add any built-in handler in the "fail" namespace which is clearly planned for in the core framework. In fact, this area is visibly incomplete since there is a remaining comment waiting on FLUID-5506 which was resolved some time ago. From fluid.js line 115:

```javascript
// This registry of priorities will be removed once the implementation of FLUID-5506 is complete
fluid.handlerPriorities = {
    uncaughtException: {
        log: 100, // high priority - do all logging first
        logActivity: "after:log",
        fail: "last"
    }
};
```

A "fail" handler is currently only added within Kettle - which has the behaviour of aborting any current request with a readable diagnostic. Oddly, this functionality is duplicated between the "uncaught exception handler" and the "fluid.fail" handler.

Right now we consider a fluid.fail has the same semantic as an uncaught exception, but this will change in the future when we use fluid.fail (or some new utility) to signal transactional failures.

We worry about the risk of an infinite circle of failures if we forward the "fail" action of an uncaught exception to fluid.fail. The former seems to definitely represent a more serious class of failures. However, we do want the behaviour to be in parallel for the present - which implies we should add the same "exit" behaviour to both fluid.fail and uncaught - Kettle will override them both one way, and jqUnit will override them both another way, and finally kettle.loadTestingSupport() will override both of these. Note that the system.exit behaviour **is** present, but only in this arrangement once we have got as far as being able to execute kettle.loadTestingSupport:

<https://github.com/fluid-project/kettle/blob/master/lib/test/KettleTestUtils.js#L29>

This change will cause a lot of upheaveal since node-jqUnit and Kettle will have to be updated in step. It will also be very hard to test.

        