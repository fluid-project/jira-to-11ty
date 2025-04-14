---json
{
  "title": "FLUID-5251",
  "summary": "conditional expander causes both options to be evaluated causing problems with the current output model",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Kasper Galschiot Markus",
  "date": "2014-01-12T05:11:04.358-0500",
  "updated": "2014-03-27T16:11:54.426-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5250/",
      "key": "FLUID-5250",
      "summary": "Using an object as the return value for a conditional transform doesn't work"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-01-12T05:28:10.940-0500",
      "body": "Added a test case illustrating the problem here: <https://github.com/fluid-project/infusion/pull/453>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-01-15T03:59:19.754-0500",
      "body": "This can be fixed without altering the output model - we just need to alter the contract of the multiInputTransformFunction transformers. Rather than receiving a map of already resolved inputs, they can receive a map of functions returning them (or, if you like, \"promises\" for them). This means that we can implement the required \"short-circuit\" property of the condition expander and others, by allowing them to only trigger the evaluation of input values that they have determined they will use.\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-01-15T09:06:05.084-0500",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/454>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-03-22T02:26:17.482-0400",
      "body": "Merged into trunk at <https://github.com/fluid-project/infusion/commit/66d2ebbd4df1a731e0fe95fab4b71ccc059b1f3c>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-03-22T02:31:03.506-0400",
      "body": "Actually at 6c8ea3098c80bf4297ae773cda144c4e58939017\n"
    }
  ]
}
---
Our latest output model that says "each transformer EITHER outputs immediately to the document at its current path, OR it makes a return value" has introduced a bug in the conditional expander. The issue is that, the way the transformer is implemented both conditions are evaluated (with ofc. only one returned). This wasn't a problem with our old output model, as only the returned values was output. But with our current model, if the 'true' and/or 'false' blocks contain a statements that outputs to the document, it will ALWAYS be output.. In other words, any output requested in either of the true/false will always be output - disregarding whether the condition evaluates to that case. An example below to illustrate:

model: {\
con: true,\
a: "are furry",\
b: "are barky"\
}

rule: {\
"wisdom": {\
"transform": {\
"type": "fluid.transforms.condition",\
"conditionPath": "con",\
"true": {\
"cats": "a",\
},\
"false": {\
"dogs": "b",\
}\
}\
}\
}

would give the result:

"wisdom": {\
"cats": "are furry",\
"dogs": "are barky"\
}

and while both might be wise statements, we would have expected only to see:

"wisdom": {\
"cats": "are furry"\
}

Whereas we would expect:

"wisdom": {\
"all": "cats"\
}

The fix for this JIRA would be to ensure only the correct block gets evaluated

        