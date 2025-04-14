---json
{
  "title": "FLUID-6424",
  "summary": "Material arriving through contextualised relay rule does not trigger model listener in init transaction",
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
  "date": "2019-11-05T17:03:03.685-0500",
  "updated": "2024-07-22T10:35:20.567-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-11-05T18:58:08.026-0500",
      "body": "Note that this issue only actually affects \"contextualised\" relays such as the fluid.transform.free block shown - direct or implicit relays get played through the relay system live, whereas contextualised relays such as above only get played after the conclusion of a \"half-transaction\" triggered by modelTransaction.commit().\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-11-06T07:07:50.180-0500",
      "body": "Looks like this was not an issue in the old framework because of the old crude \"initModelEvent\" system which always notified via creating a fresh blank transaction with the original model value.\n"
    }
  ]
}
---
This is only an issue affecting the work in progress FLUID-6148 branch. During our reimplementation of fluid.notifyInitModel we have managed to swap the order of effects so that any material arriving in a component's model purely via relays does not end up triggering modelListeners. This was found when continuing to modernise the gpii-app code which contains definitions like so:

```java
fluid.defaults("gpii.qss.buttonPresenter", {
    ...
        modelRelay: {
            title: {
                target: "title",
                singleTransform: {
                    type: "fluid.transforms.free",
                    func: "gpii.qss.buttonPresenter.getTitle",
                    args: [
                        "{gpii.qss}.model.isKeyedIn",
                        "{that}.model.item.schema.title"
                    ]
                }
            }
        },
        modelListeners: {
            title: {
                "this": "{that}.dom.title",
                method: "text",
                args: ["{change}.value"]
            },
```

        