---json
{
  "title": "FLUID-6701",
  "summary": "Idiom for model relay transactions interacts in a faulty way with materialisation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-11-26T08:17:57.426-0500",
  "updated": "2024-07-17T08:08:28.423-0400",
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
      "date": "2021-11-27T18:41:18.313-0500",
      "body": "> We can express this a little better today, as a \"transforming chain\" organised via priorities/namespaces with IoC-resolved arguments.\n\nIn practice this was not appropriate - since the validation occurred at two different sites - i) the text value peering with the markup, ii) the numeric value after conversion - so we fell back instead on a serial use of the \"modelListener with priority of last\" trick that now seems to be appropriate. Note that it ought to be possible to remove this priority since the ChangeApplier should always sort transactional listeners to be notified last.\n"
    }
  ]
}
---
When rewriting the textfield controls components to improve the handling of their validation, as described in <https://wiki.fluidproject.org/display/fluid/Bestiary+of+Reuse+Failures#BestiaryofReuseFailures-Anireemediablynon-integralaction> it was found that our transaction system for resolving model relays interacts in a faulty way with state held in "materialised" fields - such as those in "model.dom.container.value" used with FLUID-6683 integral bindings.

In the ChangeApplier supplied with Infusion 1-5, this materialisation can only be achieved by traditional "model listeners", which execute outside the transaction system which resolves model relays. This causes, for example, a particularly characteristic failure with the "Textfield Range Controller Tests: Test Negative Scale".

These set up a textfield whose range is limited to \[-15, -5], which is then supplied with an initial value of 0. The first firing of the validator, expressed as a classic "model relay to self" as

```java
{
                        target: "value",
                        singleTransform: {
                            type: "fluid.transforms.limitRange",
                            input: "{that}.model.value",
                            min: "{that}.model.range.min",
                            max: "{that}.model.range.max"
                        }
```

clamps this to the value -5. The test case then attempts to set the value of the text field to 56. With a reworked implementation which tries to avoid the non-integral "setModel" implementation, there is a failure. Firstly the materialisation listener assigns 56 to "dom.container.value" via its binding:

```java
fluid.defaults("fluid.textfield", {
    gradeNames: ["fluid.viewComponent"],
    parentMarkup: true,
    modelRelay: {
        textfieldValue: {
            source: "dom.container.value",
            target: "value"
        }
    },
```

Then, within the transaction, the relay rule in the "controller" rewrites this value back to -5. Unfortunately, this agrees with the value at the start of the transaction - and so as the transaction ends, no change at all is propagated out to the markup, which is left with the original value of 56.

This suggests that, the discussion in FLUID-6683 notwithstanding (although it does acknowledge in some sense that transactions need to become "progressive"), the transactional system as a whole is basically flawed.

This had sort of been suggested by other user considerations - for example, in comparing Infusion's user characteristics with Boxer's. A system which responds to failures by simply "cancelling" the evidence of them is essentially user-hostile - which we had essentially already realised by deciding to abandon the Kulkarni model that had originally been advertised in <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>.

It looks like we will attempt to rationalise this by packaging validation logic as a transforming promise chain, as an attempt to mock up the "vertical chains" system that we imagine being part of Infusion 6, but outside our current transaction system - from its point of view embodied as a plain modelListener with a priority of" last" as we already applied with the transitional "validateToNumbers" implementation which currently reads

```java
modelListeners: {
        textfieldValue: {
            path: "value",
            source: "DOM",
            listener: "{that}.validateValue",
            args: "{change}.value",
            priority: "last"
        }
    },
...

    invokers: {
        validateValue: {
            funcName: "fluid.textfield.validateToNumbers",
            args: ["{that}", "{arguments}.0", "{that}.controller.model.value"]
        }
    }
....


fluid.textfield.validateToNumbers = function (that, value, oldValue) {
    var isNumber = !isNaN(Number(value));
    if (!isNumber) {
        that.applier.change("value", oldValue);
    }
};
```

Note that this scheme is remarkably similar to the ancient system of "guards" eliminated in Infusion 1.5 - where this logic used to read

```java
fluid.textfieldSlider.validateValue = function (model, range, changeRequest) {
        var oldValue = model.value;
        var newValue = changeRequest.value;

        if (!isNaN(parseInt(newValue, 10))) {
            if (newValue < range.min) {
                newValue = range.min;
            } else if (newValue > range.max) {
                newValue = range.max;
            }
            changeRequest.value = Number(newValue);
        } else {
            changeRequest.value = oldValue;
        }
    };
```

and look at this funky "init" method:

```java
fluid.textfieldSlider.textfield.init = function (that) {
        that.applier.guards.addListener({path: "value", transactional: true}, function (model, changeRequest) {
            fluid.textfieldSlider.validateValue(model, that.options.range, changeRequest);
        });

        that.container.change(function (source) {
            that.applier.requestChange("value", source.target.value);
        });
    };
```

This was nuts in that it attempted to mutate changeRequest objects directly in-flight. Note that the old "New Notes on the ChangeApplier" page has notes on just this issue - <https://wiki.fluidproject.org/display/fluid/New+Notes+on+the+ChangeApplier#NewNotesontheChangeApplier-Eliminationofold%22guard%22semanticandevents,infavourofuniversaluseofthemodelRelaysystem>

We can express this a little better today, as a "transforming chain" organised via priorities/namespaces with IoC-resolved arguments.

This seems to be the upcoming theme of Infusion 6 should it ever be possible - that "every site of mutation can also be a site of a transforming chain/gyre". Getting rid of transactions in favour of "rolling immutable updates" seems like it will be a help.

        