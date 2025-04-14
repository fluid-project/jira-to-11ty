---json
{
  "title": "FLUID-6514",
  "summary": "Simplify the process to override default values from UIO primary schema",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2020-06-04T16:46:13.116-0400",
  "updated": "2020-06-05T10:01:51.195-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When changing the default values defined in the primary schema of the preferences framework, for example, to set the minimum value of the line space to 1, the current working approaches are:

1\. Rewrite and override "fluid.prefs.schemas.lineSpace":

```java
fluid.defaults("fluid.prefs.schemas.lineSpace", {
  gradeNames: ["fluid.prefs.schemas"],
  schema: {
    "fluid.prefs.lineSpace": {
      "type": "number",
      "default": 1,
      "minimum": 1,
      "maximum": 2,
      "multipleOf": 0.1
    }
  }
});
```

2\. Override transformed options at instantiate "fluid.uiOptions":

```java
fluid.uiOptions(".flc-prefsEditor-separatedPanel", {
  schema: {
    properties: {
      "fluid.prefs.lineSpace": {
        "minimum": 1
      }
    }
  }
});
```

Either of above requires knowledge of the internal implementation of the preferences framework.

It would be more integrator friendly to simplify the API, such as:

```java
fluid.uiOptions(".flc-prefsEditor-separatedPanel", {
  "fluid.prefs.lineSpace": {
    minimum: 1
  }
});
```

Reference: This issue is initially discovered with [a WeCount website requirement](https://github.com/inclusive-design/wecount.inclusivedesign.ca/issues/253). See discussions in [its pull request](https://github.com/inclusive-design/wecount.inclusivedesign.ca/pull/261).

        