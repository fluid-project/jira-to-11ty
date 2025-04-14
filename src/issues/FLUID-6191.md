---json
{
  "title": "FLUID-6191",
  "summary": "Improve diagnostic when indirect model reference fails to resolve",
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
  "reporter": "Antranig Basman",
  "date": "2017-09-05T12:18:11.242-0400",
  "updated": "2017-09-19T11:08:11.388-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-09-19T11:08:07.454-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/846) has been merged into the project repo master branch at 1f32a0ca284686adb5e9c067de5d9be931fc153a\n"
    }
  ]
}
---
fluid.parseValidModelReference currently uses a sleazy workflow to resolve indirect model references, which looks as follows:

```javascript
if (parsed.contextSegs) {
                target = fluid.getForComponent(target, parsed.contextSegs);
            }
```

If this reference does not resolve, it triggers a bare diagnostic on the following line of the following form:

```java
17:06:17.440:  FATAL ERROR: Uncaught exception: Cannot read property 'applier' of undefined
TypeError: Cannot read property 'applier' of undefined
    at Object.fluid.parseValidModelReference (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\DataBinding.js:464:24)
    at Object.fluid.parseModelRelay (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\DataBinding.js:773:34)
    at E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\DataBinding.js:882:23
```

with the additional indignity that the value of "target" is no longer available for inspection. We should move this to a proper workflow as well as triggering a readable diagnostic about which reference failed to resolve.

        