---json
{
  "title": "FLUID-6395",
  "summary": "Relay system unnecessarily thrashes updates when large numbers of models are connected",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-08-23T08:30:42.959-0400",
  "updated": "2024-07-19T08:04:17.051-0400",
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
      "author": "Antranig Basman",
      "date": "2022-05-25T10:46:05.027-0400",
      "body": "@@Tony Atkins has commited an example where relaying a model between 100 components causes significant lag to <https://github.com/duhrer/launchpad-sonamatic-universe/tree/infusion-4-laggy> . Relaying a single focus change takes about 150ms and reveals that 400 relay listeners are activated in this process.\n\nIt seemed that this resulted from a similar cause to the headline JIRA. It had been hoped that there might be some crude \"work amplification\" blunder in the relay system which was causing work to grow quadratically with the number of relayed components as was seen in the covid data monitor app, but this didn't seem to be responsible here. The problem is that the entire component model is relayed to each of 100 subcomponents and so needs to be cloned and copied each time. There isn't a straightforward means of improving the current design, although we could possibly get a factor of 2 improvement by only passing material through information-preserving relays once. A good workaround could be to not relay the model at all and instead bind to it \"in place\" from the 100 pad subcomponents.\n"
    }
  ]
}
---
In the GPII Chrome extension, there is a layout where a "domSettingsApplier" is connected to a large number of "portBinding" components which mirror its model. One portConnection component is created for every frame or iframe which is visible to the applier. The layout, implemented at <https://github.com/GPII/gpii-chrome-extension/blob/master/extension/src/lib/domSettingsApplier.js#L24> , is as follows:

```java
fluid.defaults("gpii.chrome.domSettingsApplier", {
....
    dynamicComponents: {
        port: {
            type: "gpii.chrome.portConnection",
            createOnEvent: "onConnect",
            options: {
                model: "{domSettingsApplier}.model",
                port: "{arguments}.0"
            }
        }
    },
```

In a trial of connecting UIO+ to cnn.com a collection of 44 portConnection components were observed, and any model update resulted in the following error:

```java
Error in model relay specification at component [object Object] - operated more than 100 relays without model value settling - current model contents are
{"panelIndex":1,"settings":{"fontSize":0.25,"lineSpace":1,"wordSpace":1,"contrastTheme":"default","characterSpace":1,"selectionTheme":"default","captionsEnabled":false,"selfVoicingEnabled":false,"inputsLargerEnabled":false,"simplifiedUiEnabled":false,"clickToSelectEnabled":false,"syllabificationEnabled":false,"tableOfContentsEnabled":false}}
```

This issue has been discussed in IRC <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-08-21.log> and <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-08-22.log>

The ChangeApplier's idiom for propagating updates is quite inefficient, and copies the material involved several times. In particular, the problem is exacerbated by the update site looking as follows:

```java
gpii.chrome.portConnection.updateModel = function (that, model) {
    console.log("handling model write - requested model:", model);
    var transaction = that.applier.initiate();
    transaction.fireChangeRequest({path: "", type: "DELETE"});
    transaction.change("", model);
    transaction.commit();
    console.log("handling model write - written model:", that.model);
    return that.model;
};
```

This is a standard idiom which has emerged for applying updates which may "shrink" the model, but makes this problem worse since each relay rule needs to react to both the delete and the update.

One scheme for easing the problem was to make the relay rule unidirectional via a definition like the following <https://gist.github.com/amb26/3b23709e90de48a6b7675a05b615fb56>\
but this is not useful for the long term since it seems that in time that updates may be directed at the portBinding models. In fact this scheme did not work since it seems that for some reason the current design already relies on the portBinding models being writeable (to be investigated).\
The soundest long-term route for resolving this issue is to move the ChangeApplier system over to immutable application as described in <https://fluidproject.atlassian.net/browse/FLUID-6396#icft=FLUID-6396>.\
Note that it would also be helpful to introduce new primary ChangeEvents ADD, MERGE which would allow updates such as updateModel to be expressed without needing to explicitly open a transaction.&#x20;

Note also that the current model where all changes in a transaction get propagated through all relays might well not be right - the user's expectation is that changes should only start to propagate once the transaction is committed - this suggested we have improperly crosslinked the implementation of user transactions to the "half-transactions" operated by the relay system.

        