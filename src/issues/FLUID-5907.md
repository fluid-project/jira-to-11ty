---json
{
  "title": "FLUID-5907",
  "summary": "Regression in model transformation support for arrayToSetMembership, empty path and escaping",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2016-05-18T21:31:50.321-0400",
  "updated": "2024-07-22T09:25:43.313-0400",
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
<https://fluidproject.atlassian.net/browse/FLUID-5133#icft=FLUID-5133> and <https://fluidproject.atlassian.net/browse/FLUID-5867#icft=FLUID-5867>, whilst they have improved the model transformation system in important respects, have some implementation flaws which caused several failures when upgrading GPII's "universal" to the newer framework. Several transformations of type fluid.arrayToSetMembership and fluid.setMembershipToArray which were encoded in the solutions registry and the "inverse capabilities" document had their meaning change or broke. There are two issues:

Firstly, and seemingly inadvertently, the interpretation of such transforms for which "inputPath" or "outputPath" is not set, has changed. Interestingly there has been a long-standing comment within `fluid.model.transform.getValue` which reads:

```java
if (inputPath !== undefined) { // NB: We may one day want to reverse the crazy jQuery-like convention that "no path means root path"
```

without meaning to, the <https://fluidproject.atlassian.net/browse/FLUID-5867#icft=FLUID-5867> fix has indeed reversed this convention - any transform which has neither inputPath nor input set will behave as if it has an input of undefined and hence not act.\
The old implementation read:

```javascript
fluid.model.transform.getValue = function (inputPath, value, transform) {
        var togo;
        if (inputPath !== undefined) { // NB: We may one day want to reverse the crazy jQuery-like convention that "no path means root path"
            togo = fluid.get(transform.source, fluid.model.composePaths(transform.inputPrefix, inputPath), transform.resolverGetConfig);
        }
        if (togo === undefined) {
            togo = fluid.isPrimitive(value) ? value : transform.expand(value);
        }
        return togo;
    };
```

The new implementation reads

```javascript
fluid.model.transform.getValue = function (inputPath, value, transformer) {
        var togo;
        if (inputPath !== undefined) { // NB: We may one day want to reverse the crazy jQuery-like convention that "no path means root path"
            togo = fluid.get(transformer.source, fluid.model.composePaths(transformer.inputPrefix, inputPath), transformer.resolverGetConfig);
        }
        if (togo === undefined) {
            // FLUID-5867 - actually helpful behaviour here rather than the insane original default of expecting a short-form value document
            togo = fluid.isPrimitive(value) ? value :
                ("literalValue" in value ? value.literalValue :
                (value.transform === undefined ? value : transformer.expand(value)));
        }
        return togo;
    };
```

It's still not clear how this regression has actually happened. For example, here is a transformation from `inverseCapabilities.json` which used to be effective and has now broken:

```java
{
                "type": "fluid.transforms.setMembershipToArray",
                "outputPath": "http://registry\\.gpii\\.net/common/trackingTTS",
                "presentValue": true,
                "missingValue": false,
                "options": {
                    "reviewCursor\\.followFocus": "focus",
                    "reviewCursor\\.followCaret": "caret",
                    "reviewCursor\\.followMouse": "mouse"
                }
            }
```

Adding `inputPath: ""` into its block causes it to work again.

Similarly a forward leg from `win32.json` with missing `outputPath`:

```java
{
                            "type": "fluid.transforms.arrayToSetMembership",
                            "inputPath": "http://registry\\.gpii\\.net/common/trackingTTS",
                            "presentValue": true,
                            "missingValue": false,
                            "options": {
                                "focus": "reviewCursor\\.followFocus",
                                "caret": "reviewCursor\\.followCaret",
                                "mouse": "reviewCursor\\.followMouse"
                            }
                        },
```

This is the site of the 2nd bug. In the course of improving inversion support for <https://fluidproject.atlassian.net/browse/FLUID-5133#icft=FLUID-5133>, the arrayToSetMembership implementation was broken by swapping fluid.set without configuration for the existing fluid.transform.setValue:

<https://github.com/fluid-project/infusion/commit/9a87a98be6f5c2f680696b50b3cc9e4d6482cfe7#diff-b850758894970110e0af05626affc2e7L373>

This change fails to apply any EL escaping rules and so the output document is corrupted. The output SHOULD consist of a document whose keys are "reviewCursor.followFocus" etc.

Note that the existing pull request in review for model transformation docs doesn't properly specify this behaviour: <https://github.com/fluid-project/infusion-docs/pull/86/files>

        