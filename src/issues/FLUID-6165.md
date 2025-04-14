---json
{
  "title": "FLUID-6165",
  "summary": "Prefs Editor Panels that have an enumerated set of options should replace the default array with the value from the primary scheme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-07-04T15:36:38.599-0400",
  "updated": "2017-07-06T09:36:21.928-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-07-06T09:36:18.081-0400",
      "body": "PR ( <https://github.com/fluid-project/infusion/pull/831> ) merged into the project repo at 226ba34255cc6953d032d2a91dc7350dd1850a78\n"
    }
  ]
}
---
For panels such as fluid.prefs.panel.textFont and fluid.prefs.panel.contrast read in a controlValues option from the related primary schema's "enum" property. These arrays should be replaced instead of merged to avoid any conflicts with the default. For example when the primarySchema's enumeration is shorter than the components default. To address this a merge police such as the following can be used:

```java
mergePolicy: {
    "controlValues.theme": "replace"
}
```

        