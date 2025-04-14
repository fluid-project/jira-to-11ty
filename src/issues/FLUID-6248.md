---json
{
  "title": "FLUID-6248",
  "summary": "ValueMapper inputPaths are not collected from defaultInput values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2018-02-14T15:12:36.051-0500",
  "updated": "2018-06-07T06:56:10.919-0400",
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
While working on GPII-1230, I found that the collectInputPaths functionality of the valuemapper does not collect the paths of any nested transformations inside "defaultInput".So a transformation like this:

 

 

```java
"dictionaryEnabled": {
    "transform": {
        "type": "fluid.transforms.valueMapper",
        "match": [{
            "inputValue": {
                "dictionaryEnabled": true
            },
            "outputValue": true
        }],
        "noMatch": {
            "outputValue": false
        },
        "defaultInput": {
            "transform": {
                "type": "fluid.transforms.arrayToSetMembership",
                "inputPath": "http://registry\\.gpii\\.net/common/supportTool",
                "options": {
                    "dictionary": "dictionaryEnabled"
                }
            }
        }
    }
```

 

does not find the input path: "`http://registry\\.gpii\\.net/common/supportTool`"

 

        