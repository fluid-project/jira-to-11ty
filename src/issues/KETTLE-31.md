---json
{
  "title": "KETTLE-31",
  "summary": "Errors fired from dataSource's JSON parser are unintelligible",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-01-08T20:05:44.555-0500",
  "updated": "2016-05-25T18:56:49.533-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The current JSON parse rejection block in the dataSource's filter chain is faulty. In fact it is already highlighted as untested - reading as follows:

} catch (err) { // TODO: no test for this branch\
togo = fluid.promise();\
togo.reject({\
isError: true,\
error: err\
});\
}

This strategy has several faults - \
i) the "err" object as a whole appears to fail to serialise as JSON, being some native piece of rubbish. In fact when sent to JSON.stringify, it simply becomes {}. If we instead send err.message we at least get its minimal diagnostics rather than nothing at all - \
ii) the minimal diagnostics supplied by JSON.stringify are really no help to users, of the form "Unexpected token \n" etc. We should just declare a dependency on the same version of jsonlint that grunt-jsonlint uses and get some sensible diagnostics out of it by asking it to reparse the data in the event of an error.\
iii) the better diagnostics themselves will be of little help without being told WHICH file has failed to parse.

This is where the standard promise semantics for reporting failure reveal themselves as completely faulty. In the old-fashioned exception handling world, one would have the ability to "catch and rewrap" an exception in order to add detail to it on the way out. In a promise chain, the code which might perform this wrapping has vanished off the stack long ago. In the core framework, we use an "activity stack" for this purpose but of course this also only can handle synchronous root causes of failure. We need to construct a new kind of structure when we are operating fluid.promise.sequence - in that the "task API" really needs to return a composite structure - firstly the promise accepting a value from the previous task, and secondly a "rejection wrapper" which can be used to contextualise any rejection which is emitted by a following task.

There appears to be no native standard for such rejection wrapping semantics, since the promoters of promises are kids who don't care about readable diagnostics - the standard appears to be for a composite promise rejection to simply reject with exactly the same rejection argument as the first rejector.&#x20;

It appears that all of this logic really needs to be baked into fluid.promise.sequence which provides another really good motivation for its current "core + strategy" architecture.

        