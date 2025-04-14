---json
{
  "title": "FLUID-6192",
  "summary": "modelRelay rule with source of \"\" fails with bare diagnostic",
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
  "date": "2017-09-05T12:41:03.563-0400",
  "updated": "2017-09-20T16:10:02.085-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder",
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-09-20T16:09:45.646-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/848) has been merged into the project repo master branch at 3be1824401c55d455fe21b2a1e3c4b45d08d345f\n"
    }
  ]
}
---
A model relay definition as follows:

```javascript
"pcpChannel": {
                "source": "",
                "target": "{flowManager}.pcpChannel.model",
                "singleTransform": {
                    type: "fluid.transforms.identity"
                }
            }
```

will trigger a bare failure in the framework as follows:

```java
17:23:17.570:  FATAL ERROR: Uncaught exception: Cannot read property 'listenerId' of undefined
TypeError: Cannot read property 'listenerId' of undefined
    at Object.fluid.registerDirectChangeRelay (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\DataBinding.js:589:83)
    at Object.fluid.connectModelRelay (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\DataBinding.js:630:19)
    at Object.fluid.parseModelRelay (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\DataBinding.js:786:19)
    at E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\DataBinding.js:882:23
```

This is because of a lazy falsy check in DataBinding.js fluid.parseModelRelay line 171:

```java
fluid.parseModelRelay = function (that, mrrec, key) {
        var parsedSource = mrrec.source ? fluid.parseValidModelReference(that, "modelRelay record member \"source\"", mrrec.source) :
            {path: null, modelSegs: null};
```

        