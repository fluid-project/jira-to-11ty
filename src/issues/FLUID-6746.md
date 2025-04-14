---json
{
  "title": "FLUID-6746",
  "summary": "Corruption in notifying initial transaction relays where multiple initial model values are merged",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-07-15T06:25:26.159-0400",
  "updated": "2022-12-21T10:11:49.464-0500",
  "versions": [
    "4.3"
  ],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2022-07-15T06:28:50.108-0400",
      "body": "This issue can be demonstrated by checking out <https://github.com/amb26/youme/tree/FLUID-6746> and running demos/midi-console.html\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-12-21T10:11:15.061-0500",
      "body": "Accidentally got closed by <https://github.com/fluid-project/infusion-docs/commit/b37297e84c8964e81929c7f2317ed8f49b8a398c> to infusion docs which mistyped <https://fluidproject.atlassian.net/browse/FLUID-6746#icft=FLUID-6746> for <https://fluidproject.atlassian.net/browse/FLUID-6476#icft=FLUID-6476>\n"
    }
  ]
}
---
In progress in <https://github.com/continuing-creativity/youme/pull/2/files#diff-a133c4af0eace1a751ecd7cc8a393c78a6d11f723172b22386399a38a856705bR37> -&#x20;

There is a use of integral bindings where multiple initial model values are provided - there are the in-component defaults of&#x20;

```java
model: {
            errorString: false,
            editorString: ""
        },
```

and then the subcomponent initial defaults of&#x20;

```java
hex: {
                type: "youme.demos.console.textareaWithError",
                container: "{that}.dom.hex",
                options: {
                    model: {
                        errorString: "{console}.model.hexError",
                        editorString: "{console}.model.hexString"
                    }
```

We see something bizarre happening, that during fluid.notifyInitModelWorkflow  somehow the "new" and "old" model values are reversed - the relays are notified as if the in-component defaults are the upcoming new values, overwritng the subcomponent defaults. However, once the component actually finishes initialising in ChangeApplier.initiate.commit, we see the initial and final models the right way round, and regular model listeners are notified in the ordinary way. This makes integral bindings pretty unusable in this case. #

The workaround is to remove the in-component default values, e.g. editorString: "" in youme.demos.console.textareaWithError and jsonString: "" in youme.demos.console

        