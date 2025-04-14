---json
{
  "title": "FLUID-5248",
  "summary": "fluid.transforms.arrayValue are failing when having nested expanders",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Kasper Galschiot Markus",
  "date": "2014-01-09T16:47:50.454-0500",
  "updated": "2016-02-22T19:28:19.115-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5247/",
      "key": "FLUID-5247",
      "summary": "arrays of transformations will not produce an array if the new key contains a dot"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-01-09T18:52:24.795-0500",
      "body": "Strictly speaking, by our current rules, this test case is invalid. As you may remember, we designed the system so that \"each transformer EITHER outputs immediately to the document at its current path, OR it makes a return value\". In this case, the extra layer of \"value\" wrapping causes the first rule to trigger - which implies that fluid.transforms.arrayValue gets no input, and so has no action, and so returns nothing. For the time being I've adjusted the test case so it at least tests something - that is, removing the layer of \"value\" produces b: \\[ 0.5 ] as expected, satisfying the terms of the headline JIRA that \"arrayValue should work with a nested expander\" - it does, but not in the case that expander tries to output to the document. We should probably leave this JIRA open in case we want to revisit our original design decision, but thankfully at least I think Justin's use case can be met by the fix which I have issued simultaneously for <https://fluidproject.atlassian.net/browse/FLUID-5247#icft=FLUID-5247>.\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-01-12T04:44:24.325-0500",
      "body": "From a quick look at this, I think that in this case our model with \"\"each transformer EITHER outputs immediately to the document at its current path, OR it makes a return value\" might still hold up. Our model relies on the output path being modified as we're going through the transformation tree. The problem is that this doesn't happen when hitting an arrayValue - instead that just transforms the value before returning it. I think a potential solution would be to, when we hit the arrayValue transformer, to modify the \"outputPath\" to denote that we're now in an array... I do have a creepy feeling though that this would force us to consider the arrayValue a forced outputter - always outputting to the document - but that might just be my brain on meltdown.&#x20;\n"
    }
  ]
}
---
fluid.transforms.arrayValue seem to have problems when having complex objects passed as inputs. It works fine when wrapping simple values in arrays, but when you attempt to pass it an input value that is a transformation that needs further expansion, it fails.

For example:\
A rule set of:

```javascript
{
            "b": {
                "transform": {
                    "type": "fluid.transforms.arrayValue",
                    "value": {
                        "transform": {
                            "outputPath": "value",
                            "type": "fluid.transforms.linearScale",
                            "value": 5,
                            "factor": 0.1
                        }
                    }
                }
            }
        }
```

yields:

```javascript
{
  "b": {
    "value": 0.5
  }
}
```

        