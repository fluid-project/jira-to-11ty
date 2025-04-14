---json
{
  "title": "FLUID-5867",
  "summary": "Revert behaviour of model transforms which automatically assume that nested value is a transform",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-02-22T19:37:43.655-0500",
  "updated": "2016-02-22T19:37:43.655-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Since the beginning of the implementation of the system, this semantic choice has simply caused frustration, surprise, and annoyance. It is simply NEVER the case that the person writing:

```javascript
transform: {
                type: "fluid.transforms.condition",
                condition: {
                    transform: {
....
                    }
                },
                "false": {
                        value: "Congratulations, you are a genius",
                    }
                }
```

expects that the key "value" is intended to be considered a path index into the document. They ALWAYS consider that the argument supplied to "false" etc. is a literal value to be output into the document - UNLESS it is an object beginning with the term "transform". This should become the new default behaviour. We will fix this in modelRelay initially since this explicitly operates a model based on single transforms anyway.

        