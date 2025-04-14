---json
{
  "title": "FLUID-3729",
  "summary": "Further recurrence of \"pen.root is undefined\" error within changeApplier",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2010-09-10T03:52:29.914-0400",
  "updated": "2010-10-28T15:03:50.360-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:41:54.009-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-20T00:27:46.280-0400",
      "body": "Fixed at revision 10150 - please review.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-10-28T15:03:50.358-0400",
      "body": "The tests pass and the code looks good.&#x20;\n"
    }
  ]
}
---
Whilst this was thought fixed a while ago, there is another code path via which it can be triggered. See <http://issues.collectionspace.org/browse/CSPACE-2795> - the relevant case is where model is, say:

fields: {\
lenders: \[]\
}

and we receive a change request for "fields.lenders.0.lender". Currently the 2nd branch of fluid.model.applyChangeRequest attempts pen.root\[pen.last] = request.value. However, pen contains \
{ last: "lender",\
root: undefined\
}\
Should almost certainly be using "getPenultimate" with "create = true" so that lender is at least instantiated to an empty object. Make sure to write a test case for this hole to firmly prevent regression.

        