---json
{
  "title": "FLUID-5114",
  "summary": "Improve model relay component to interpret model transformation rules",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-08-15T11:02:23.524-0400",
  "updated": "2020-07-15T11:42:37.076-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5024/",
      "key": "FLUID-5024",
      "summary": "UIOptions modelRelay needs to support value transformation"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5115/",
      "key": "FLUID-5115"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-22T15:50:09.459-0400",
      "body": "Closed as duplicate of <https://fluidproject.atlassian.net/browse/FLUID-5024#icft=FLUID-5024>\n"
    }
  ]
}
---
The current model relay component only accepts direct one-to-one model path mapping such as:

```java
rules: {
    [shared/external model path]: [internal model path]
}
```

However the discovery tool displays the need to be able to do transformation from one model structure to another during this translation. For example, in the discovery tool the model for the highContrast panel is {enabled: true} which really corresponds to a shared model of

```java
{ 
     theme: "bw", 
     links: true, 
     inputsLarger: true, 
     textFont: "arial" 
}
```

The modelRelay's rules block should actually take in model transformation instructions and perform these on outgoing and incoming (using the inverse rules) model updates.

see: \
<http://wiki.gpii.net/index.php/Architecture_-_Available_transformation_functions> \
<http://wiki.fluidproject.org/display/docs/fluid.model.transformWithRules>

for the case of the one-to-many changes, look at the valueMapper

        