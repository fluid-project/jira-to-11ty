---json
{
  "title": "FLUID-5368",
  "summary": "Using \"fluid.transforms.arrayToSetMembership\" with any other transformations in modelRelay option causes the source array value disappear",
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
  "reporter": "Cindy Li",
  "date": "2014-05-12T11:01:10.101-0400",
  "updated": "2014-05-28T09:14:03.649-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Data Binder",
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5371/",
      "key": "FLUID-5371",
      "summary": "Model relay system should support conditional operation of forward and backward relays"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-05-15T03:30:26.897-0400",
      "body": "I've resolved this by providing a new facility for modelRelay governed by new fields \"forward\" and \"backward\" since the relay you have set up is ambiguous as it stands. Without a hint from the user the framework can't tell in which direction synchronisation is required. In the absence of the hint, the relay system is picking a sychronisation direction at random based on its condition when it encounters the relay.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-05-28T09:13:58.244-0400",
      "body": "The pull request (<https://github.com/fluid-project/infusion/pull/520>) has been merged into the project repo @ f77fac2d2d8ecd7fe5ffd2f497cf404e8f13814b\n"
    }
  ]
}
---
In a component with the default model and the modelRelay option as this:

...\
model: {\
forArrayToSetMembership: \["value1"],\
forIdentity: \["value2"]\
},\
modelRelay: \[{\
source: "{fluid9999}.model.forIdentity",\
target: "{fluid9999}.model.modelInTransit.forIdentity",\
singleTransform: {\
type: "fluid.transforms.identity"\
}\
}, {\
source: "{fluid9999}.model.forArrayToSetMembership",\
target: "{fluid9999}.model.modelInTransit",\
singleTransform: {\
type: "fluid.transforms.arrayToSetMembership",\
options: {\
"value1": "value1"\
}\
}\
}]\
...

The expected model structure after instantiating this component is:

{\
forArrayToSetMembership: \["value1"],\
forIdentity: \["value2"],\
modelInTransit: {\
value1: true,\
forIdentity: \["value2"]\
}\
}

However, in the result model, the default value "value1" in the source array element "forArrayToSetMembership" for "fluid.transforms.arrayToSetMembership" disappears that causes the relay generates the wrong target model value that looks like:

{\
forArrayToSetMembership: \[],\
forIdentity: \["value2"],\
modelInTransit: {\
value1: false,\
forIdentity: \["value2"]\
}\
}

To produce it, two things to pay attention:

1\. The source array element for "fluid.transforms.arrayToSetMembership" has at least one array value;\
2\. Must have at least another relay in the modelRelay option besides "fluid.transforms.arrayToSetMembership".

Note that once removing other relays from modelRelay option and having "fluid.transforms.arrayToSetMembership" as the only transformation in there, the relay works fine with keeping the source array value intact and creating the correct target model.

        