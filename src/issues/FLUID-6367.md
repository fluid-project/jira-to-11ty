---json
{
  "title": "FLUID-6367",
  "summary": "createOnEvent subcomponent constructed during component's onCreate should be fully constructed on the spot",
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
  "date": "2019-01-28T11:57:13.956-0500",
  "updated": "2024-07-22T10:35:32.726-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
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
This problem didn't appear in any "released" version of the framework, but emerged as a hidden expectation by framework users as part of the <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982> "asynchronous ginger world work" in <https://github.com/fluid-project/infusion/pull/824> . In the implementation of the InlineEdit component, there is the following implementation:

```java
fluid.inlineEdit.initializeEditView = function (that, initial) {
        if (!that.editInitialized) {
            fluid.inlineEdit.renderEditContainer(that, !that.options.lazyEditView || !initial);            if (!that.options.lazyEditView || !initial) {
                that.events.onCreateEditView.fire();                if (that.textEditButton) {
                    fluid.inlineEdit.bindEditFinish(that);
                }
                fluid.inlineEdit.bindBlurHandler(that);
                that.editView.refreshView(that);
                that.editInitialized = true;
            }
        }
    };
```

The purpose here to enable lazy initialisation of the edit view in the case where its construction is something very expensive, e.g. a rich text editor. This function may be called both from the component's "onCreate" as well as being triggered by the "edit" operation.

In practice this is a terrible, old-fashioned reliance on long scads of imperative code and conditionals, but whilst we are continuing to build supports for the bridges between imperative and declarative modes of rendering and initialisation, we will have to do our best to support this idiom even though it will require a fair amount of special-casing in the promise sequencing in the new framework's commitPotentiae implementation.

Once "imaged components" and the new renderer are established and mature, we would be able to kick away the special-casing as a result of the reduced expectation of observability of the framework internals at odd workflow points. At this point we would ideally just remove the entire facility for "createOnEvent" components in favour of their model-driven alternatives.

        