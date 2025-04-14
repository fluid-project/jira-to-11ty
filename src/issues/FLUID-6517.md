---json
{
  "title": "FLUID-6517",
  "summary": "Model relays sometimes cause model material provided in construction options to be discarded",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Philip Tchernavskij",
  "date": "2020-06-10T12:51:32.845-0400",
  "updated": "2021-07-27T11:55:06.618-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-06-12T07:36:40.212-0400",
      "body": "This is a rather tough issue that I have feared for a while - the issue is that options merging occurs for each component separately, meaning that by the time the merged model specification reaches the beginning of the model transaction, it is too late to determine that one component's model is derived from material which should have higher priority than another (e.g. that it arose from a subcomponent override). In general our architecture for this is very bad and old, leading to issues like <https://issues.fluidproject.org/browse/FLUID-6219> - there won't be a comprehensive solution to this until the work involving <https://fluidproject.atlassian.net/browse/FLUID-5304#icft=FLUID-5304>. On the other hand, we have been increasingly subverting the options merging machinery and at least for problems like this one, there is a possibility we could fish the information about the model's provenance back out again using an elaborated version of the \"deferringMergePolicy\" that we use for most sensitive options these days as seen at <https://github.com/amb26/infusion/blob/FLUID-6145/src/framework/core/js/Fluid.js#L2799> or else we could go whole hog and simply have DataBinding inspect the raw \"mergeBlocks\" as they sit inside the merging machinery.\n\nYou've spotted that using an explicit model relay can influence the problem - this appears to give a workaround in your case although as written this is probably indeterminate and likely just due to its disturbing the application order of the initial models. To make this reliable, you could use an annotation in your explicit model relay such as \n\n```java\nbackward: {\r\n                excludeSource: \"init\"\r\n            },\n```\n\nas found at <https://github.com/amb26/infusion/blob/FLUID-6145/tests/framework-tests/core/js/DataBindingTests.js#L730>\n\nto prevent the model sloshing in the wrong direction, together with an appropriate comment : P\n"
    }
  ]
}
---
In general, it should be possible for options provided at component construction to override any options in the defaults of the constructed component. However, in some cases, using (implicit) model relays in components causes construction options to be discarded in favor of default options.

 

In the below example, the constructed modelRelayConflictsImplicit component will end up with the model value "grade defaults value", while modelRelayConflictsExplicit will end up with the model value "construction options value":

```
fluid.defaults('fluid.tests.modelRelayConflicts', {
    gradeNames: 'fluid.modelComponent',
    model: {
        value: 'grade defaults value'
    }
});

var modelRelayConflictImplicit = fluid.construct('implicitParentComponent', {
    type: 'fluid.tests.modelRelayConflicts',
    model: {
        value: '{that}.subComponent.model.value'
    },
    components: {
        childComponent: {
            type: 'fluid.modelComponent',
            options: {
                model: {
                    value: 'sub-component construction options value'
                }
            }
        }
    }
});

var modelRelayConflictsExplicit = fluid.construct('explicitParentComponent', {
    type: 'fluid.tests.modelRelayConflicts',
    model: {
        value: 'construction options value'
    },
    components: {
        subComponent: {
            type: 'fluid.modelComponent',
            options: {
                model: {
                    value: 'sub-component construction options value'
                }
            }
        }
    },
    modelRelay: {
        source: '{that}.subComponent.model.value',
        target: 'value',
        singleTransform: {
            type: 'fluid.transforms.identity'
        }
    }
});
```

        