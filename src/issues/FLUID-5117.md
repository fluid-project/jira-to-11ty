---json
{
  "title": "FLUID-5117",
  "summary": "Functions that use an expander as an argument have the expander itself in the resolved expander return",
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
  "reporter": "Cindy Li",
  "date": "2013-08-16T11:00:42.618-0400",
  "updated": "2014-03-03T11:29:38.159-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-09-12T13:54:47.949-0400",
      "body": "Merged into project repo at d9f59f76fa3e8afeaf671e7be14eb1deeca0eb7d\n"
    }
  ]
}
---
If a declarative listener or invoker uses an expander as one argument:

onCreate: {\
listener: "fluid.tests.fluid5120.init",\
args: \["{that}", {expander: {func: "{that}.getObject"}}]\
}

And, the expander "getObject" returns an object: \
{\
"key1": "value1"\
}

Once the expander is resolved, the output contains not only the expected object content but also the expander itself:\
{\
"expander": {\
"func": {}\
},\
"key1": "value1"\
}

A test case is create @ <https://github.com/cindyli/infusion/blob/FLUID-5117/src/tests/framework-tests/core/js/FluidIoCTests.js#L3131-3163>

        