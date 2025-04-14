---json
{
  "title": "FLUID-6208",
  "summary": "Model shrinkage is not relayed - failure to clear target model when change is not of type DELETE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-10-04T08:42:44.946-0400",
  "updated": "2021-12-14T08:37:27.975-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5585/",
      "key": "FLUID-5585",
      "summary": "Removals from model are never relayed using model relay system"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-04-24T10:44:58.065-0400",
      "body": "Encountered again when writing a relay rule that looks so:\n\n```java\nfluid.defaults(\"hortis.mapWithSunburst\", {\r\n    modelRelay: {\r\n        mapFocusedTooltipToSunburst: {\r\n            target: \"{sunburst}.model.rowFocus\",\r\n            singleTransform: {\r\n                type: \"fluid.transforms.free\",\r\n                func: \"hortis.mapBlockToFocusedTaxa\",\r\n                args: [\"{map}.model.mapBlockTooltipId\", \"{map}\", \"{sunburst}\"]\r\n                \r\n            }\r\n        }\r\n    },\n```\n\nand\n\n```java\nhortis.mapBlockToFocusedTaxa = function (mapBlockTooltipId, map, sunburst) {\r\n    var togo = {};\r\n    if (mapBlockTooltipId) {\r\n        var bucket = map.toPlot[mapBlockTooltipId];\r\n        if (bucket) {\r\n            fluid.each(bucket.byTaxonId, function (obs, taxonId) {\r\n                togo[taxonId] = true;\r\n            });\r\n        }\r\n    }\r\n    return togo;\r\n};\n```\n"
    }
  ]
}
---
Whilst <https://fluidproject.atlassian.net/browse/FLUID-5585#icft=FLUID-5585> covered a wide range of cases of relaying partial or complete DELETE changes, we've failed to cover an obvious case of "removal through ADD" - it is perfectly possible that a relay rule on receiving an ADD change at some terminal may relay this to its target as a shrinkage of previously visible model material - requiring a DELETE of some kind in order to honour it.

This was encountered in work on at <https://github.com/GPII/universal/pull/549> for <https://issues.gpii.net/browse/GPII-2556>. Here we had a complex free transform which relayed a preference set onto a collection of visible controls.&#x20;

```javascript
gpii.pcpChannel.sessionToPCP = function (model, transformSpec) {
    var schemas = transformSpec.ontologyMetadata.flat.schemas;
    var outModel = fluid.filterKeys(model, ["userToken", "activeContextName"]);
    var settingControls = {};
    var activePreferences = fluid.get(model, ["preferences", "contexts", model.activeContextName, "preferences"]);
    fluid.each(activePreferences, function (prefsVal, prefsKey) {
        if (prefsKey.startsWith("http://registry.gpii.net/applications")) {
            var solKey = prefsKey.substring("http://registry.gpii.net/applications/".length);
            var solution = model.solutionsRegistryEntries[solKey];
            if (solution) {
                fluid.each(prefsVal, function (innerPrefsVal, innerPrefsKey) {
                    gpii.pcpChannel.emitSettingControl(settingControls, schemas[innerPrefsKey], innerPrefsVal, [prefsKey, innerPrefsKey], solution.name);
                });
            }
        } else {
            gpii.pcpChannel.emitSettingControl(settingControls, schemas[prefsKey], prefsVal, [prefsKey]);
        }
    });
    outModel.settingControls = settingControls;
    fluid.set(outModel, "preferences.contexts", fluid.transform(fluid.get(model, "preferences.contexts"), function (contextVal) {
        return fluid.filterKeys(contextVal, ["name"]);
    }));
    return outModel;
};
```

Depending on the exact order in which model changes occurred within the ContextManager, it was possible for this rule to leave the output model as&#x20;

```java
{
    "path": [],
    "type": "ADD",
    "value": {
        "userToken": "context1",
        "activeContextName": "bright",
        "settingControls": {
            "http://registry\\.gpii\\.net/common/magnification": {
                "value": 2,
                "schema": {
                    "title": "Magnification",
                    "description": "Level of magnification",
                    "type": "number",
                    "min": 1,
                    "divisibleBy": 0.1
                }
            },
            "http://registry\\.gpii\\.net/common/volume": {
                "value": 0.5,
                "schema": {
                    "title": "Volume",
                    "description": "General volume of the operating system",
                    "type": "number",
                    "min": 0,
                    "max": 1
                }
            }
        },
        "preferences": {
            "contexts": {
                "gpii-default": {
                    "name": "Default preferences"
                },
                "bright": {
                    "name": "bright"
                },
                "noise": {
                    "name": "noise"
                },
                "brightandnoise": {
                    "name": "bright and noise"
                }
            }
        }
    }
}
```

a combination of the old and new model state, rather than the expected contents of&#x20;

```java
{
    "path": [],
    "type": "ADD",
    "value": {
        "userToken": "context1",
        "activeContextName": "bright",
        "settingControls": {
            "http://registry\\.gpii\\.net/common/magnification": {
                "value": 2,
                "schema": {
                    "title": "Magnification",
                    "description": "Level of magnification",
                    "type": "number",
                    "min": 1,
                    "divisibleBy": 0.1
                }
            }
        },
        "preferences": {
            "contexts": {
                "gpii-default": {
                    "name": "Default preferences"
                },
                "bright": {
                    "name": "bright"
                },
                "noise": {
                    "name": "noise"
                },
                "brightandnoise": {
                    "name": "bright and noise"
                }
            }
        }
    }
}
```

which just includes one control output.

        