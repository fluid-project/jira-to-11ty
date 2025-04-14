---json
{
  "title": "FLUID-4168",
  "summary": "Renderer component decorator that has a parent component dependent protoTree needs to properly get its protoTree resolved.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2011-03-30T16:53:44.233-0400",
  "updated": "2014-03-03T13:11:46.031-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-03-31T03:39:38.152-0400",
      "body": "The particular form of tree pasted cannot be supported - the expansion process operated by the \"repetition expander\" cannot cross between the domains of the external protoTree and the protoTree argument attached to the decorator, since that inner protoTree will be expanded by an unrelated expansion process only initiated once the component begins to construct. In fact, protoTrees should not appear as \"decorator arguments\" in this way - the protoTree attached to a component is not expected to vary with respect to the data processed by the application - this function is reserved for the component's model. This tree and also the design of the structured date component would be simplified a great deal if its protoTree were considered static, and the information held in $`row` were in fact passed through the model of the component. I have just now written test case to verify that this process works as expected - please take a look at RendererUtilitiesTests.js line 602. The tree in question looks like this:&#x20;\n\nexpander: {\\\ntype: \"fluid.renderer.repeat\",\\\ncontrolledBy: \"vector\",\\\npathAs: \"elementPath\",\\\nvalueAs: \"element\", \\\nrepeatID: \"link\",\\\ntree: {\\\ndecorators: {\\\ntype: \"fluid\",\\\nfunc: \"fluid.tests.repeatDecorator\",\\\noptions: {\\\nmodel: {\\\nvalue: \"$`element`\"\\\n}  \\\n}\\\n}  \\\n}\\\n}\n\nNote that the test case also exercises two new \"bonus\" features - the new grade, \"fluid.IoCRendererComponent\" which removes the tedious necessity to muck about with instantiators and renderer arguments, and a helpful utility fluid.renderer.getDecoratorComponents();\n"
    }
  ]
}
---
This is an example of the prototree that will destroy the structuredDate component decorator's protoTree:

".csc-collection-object-objectProductionDates": {\
"decorators": \[\
{\
"func": "cspace.makeRepeatable",\
"type": "fluid",\
"options": {\
"elPath": "fields.objectProductionDates",\
"protoTree": {\
"expander": {\
"tree": {\
"expander": {\
"repeatID": "repeat:",\
"tree": {\
".csc-object-production-date": {\
"value": "${{row}.dateText}",\
"decorators": \[\
{\
"func": "cspace.structuredDate",\
"type": "fluid",\
"options": {\
"protoTree": {\
"dateText": "${{row}.objdateText}",\
"association": "${{row}.association}",\
"datePeriod": "${{row}.datePeriod}",\
"dateEarliestDate": "${{row}.dateEarliestDate}",\
"dateEarliestCertainty": "${{row}.dateEarliestCertainty}",\
"dateEarliestQualifier": "${{row}.dateEarliestQualifier}",\
"dateEarliestQualifierValue": "${{row}.dateEarliestQualifierValue}",\
"dateLatestDate": "${{row}.dateLatestDate}",\
"dateLatestCertainty": "${{row}.dateLatestCertainty}",\
"dateLatestQualifier": "${{row}.dateLatestQualifier}",\
"dateLatestQualifierValue": "${{row}.dateLatestQualifierValue}" \
}\
}\
}\
]\
}\
},\
"type": "fluid.renderer.repeat",\
"pathAs": "row",\
"controlledBy": "fields.objectProductionDates" \
} \
},\
"type": "fluid.noexpand" \
} \
} \
} \
} \
] \
}

        