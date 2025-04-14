---json
{
  "title": "FLUID-6728",
  "summary": "A sourcePath into the first element of an array fails to resolve in contexts where expandImmediate is used",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins",
  "date": "2022-05-05T12:07:12.469-0400",
  "updated": "2024-07-22T10:35:07.450-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "4.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
<https://github.com/fluid-project/infusion/pull/1072/files> demonstrates two failures that look like they stem from a common cause. In this case an array is used as the source for a set of dynamic components, and for the first of them, the `{sourcePath`} reference holds a value of Number 0. A lazy falsy check within fluid.expander.fetch <https://github.com/fluid-project/infusion/blob/main/src/framework/core/js/FluidIoC.js#L3462> causes the the interpolation to be skipped - exacerbated by the reference being named "component" in the expectation that the dominant path for resolving bare context references resolved onto components rather than random material in the localRecord.

```java
fluid.expander.fetch = function (deliverer, source, options) {
....
    var component = inLocal ? localRecord[context] : fluid.resolveContext(context, options.contextThat, fast);
    if (component) {
....
```

        