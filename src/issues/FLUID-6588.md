---json
{
  "title": "FLUID-6588",
  "summary": "onResourcesLoaded event can fire before createOnEvent component can register its listener",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-01-11T09:06:55.951-0500",
  "updated": "2024-07-17T08:12:34.351-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6588/adtkins-transcript.txt",
      "filename": "adtkins-transcript.txt"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-01-14T16:10:48.888-0500",
      "body": "Diagnosis: The headline described situation is indeed the cause. The missing pieces of the puzzle are - \\\ni) The serverTemplateAware component issued bindings directly from its model into the resources area, which unwittingly enlisted itself into the \"fast path\" of resource fetching (a similar kind of \"future punning\" as when the Astea team managed to source a collection of dynamicComponents from a model field)\\\nii) This had the effect of initiating the resource fetch extremely early and enlisting the entire set of co-instantiating components into a model transaction. However,\\\niii) The timing of the onResourcesLoaded event was left as direct - regardless of the condition of the overall transaction, the event fired the moment that all the resources for any one component were complete. As a result, this then fired the event that was listened to by createOnEvent, which was not listened to since the component had not yet reached concludeComponentObservation.\n\nThis was an unfortunate interaction between \"old world\" and \"new world\" semantics that is sort of unavoidable, and we will have to imagine that such \"old world\" code will cease to exist. In the meantime, faced with the choice of allowing createOnEvent components before onCreate, and special-casing this firing, we choose the latter - since a user who is part of \"old world\" semantics is always going to be surprised by trying to react to or trigger a component construction when the surrounding component tree is partially constructed.&#x20;\n"
    }
  ]
}
---
This bug affects all fairly recent versions of the framework (from the latter half of 2020 or so). In some situation, possibly when I/O resolves synchronously as a result of being cached by the browser from an earlier request, the onResourcesLoaded event of a ResourceLoader component can fire before fluid.bindDeferredComponent via fluid.concludeComponentObservation can register its listener. The following trace was obtained from @@Tony Atkins \[RtF] recent update of fluid-handlebars which is in progress at <https://github.com/fluid-project/fluid-handlebars/pull/38>

```java
bindDeferred instantiation for main of parent component { typeName: "fluid.tests.templateAware.testEnvironment id: 7oh44guo-77" gradeNames: ["fluid.test.testEnvironment","fluid.tests.templateAware.testEnvironment"]} at path testEnvironment-7oh44guo-77 for event {that}.events.createFixtures
testem.js:967 bindDeferred instantiation for contained of parent component { typeName: "fluid.tests.templateAware.testEnvironment id: 7oh44guo-77" gradeNames: ["fluid.test.testEnvironment","fluid.tests.templateAware.testEnvironment"]} at path testEnvironment-7oh44guo-77 for event {that}.events.createFixtures
testem.js:967 

firing onResourcesLoaded for component { typeName: "fluid.tests.templateAware.serverResourceAware id: 7oh44guo-124" gradeNames: ["fluid.resourceLoader","fluid.handlebars.serverResourceAware","fluid.binder","fluid.binder.bindOnDomChange","fluid.baseViewComponent","fluid.handlebars.templateAware","fluid.handlebars.templateAware.serverResourceAware","fluid.tests.handlebars.templateAware.serverResourceAware","fluid.tests.templateAware.serverResourceAware"]} at path testEnvironment-7oh44guo-77.main
testem.js:967 

Added bindDeferred listener to event {fluid.handlebars.serverResourceAware}.events.onResourcesLoaded of component { typeName: "fluid.tests.templateAware.contained id: 7oh44guo-125" gradeNames: ["fluid.resourceLoader","fluid.handlebars.serverResourceAware","fluid.binder","fluid.binder.bindOnDomChange","fluid.baseViewComponent","fluid.handlebars.templateAware","fluid.handlebars.templateAware.serverResourceAware","fluid.tests.handlebars.templateAware.serverResourceAware","fluid.tests.templateAware.serverResourceAware","fluid.tests.templateAware.contained"]} at path testEnvironment-7oh44guo-77.contained:  
fluid.event.firer
testem.js:967 

Added bindDeferred listener to event {fluid.handlebars.serverResourceAware}.events.onResourcesLoaded of component { typeName: "fluid.tests.templateAware.serverResourceAware id: 7oh44guo-124" gradeNames: ["fluid.resourceLoader","fluid.handlebars.serverResourceAware","fluid.binder","fluid.binder.bindOnDomChange","fluid.baseViewComponent","fluid.handlebars.templateAware","fluid.handlebars.templateAware.serverResourceAware","fluid.tests.handlebars.templateAware.serverResourceAware","fluid.tests.templateAware.serverResourceAware"]} at path testEnvironment-7oh44guo-77.main:  
fluid.event.firer
testem.js:967 

firing onResourcesLoaded for component { typeName: "fluid.tests.templateAware.contained id: 7oh44guo-125" gradeNames: ["fluid.resourceLoader","fluid.handlebars.serverResourceAware","fluid.binder","fluid.binder.bindOnDomChange","fluid.baseViewComponent","fluid.handlebars.templateAware","fluid.handlebars.templateAware.serverResourceAware","fluid.tests.handlebars.templateAware.serverResourceAware","fluid.tests.templateAware.serverResourceAware","fluid.tests.templateAware.contained"]} at path testEnvironment-7oh44guo-77.contained
testem.js:967 

bindDeferred instantiation for renderer of parent component { typeName: "fluid.tests.templateAware.contained id: 7oh44guo-125" gradeNames: ["fluid.resourceLoader","fluid.handlebars.serverResourceAware","fluid.binder","fluid.binder.bindOnDomChange","fluid.baseViewComponent","fluid.handlebars.templateAware","fluid.handlebars.templateAware.serverResourceAware","fluid.tests.handlebars.templateAware.serverResourceAware","fluid.tests.templateAware.serverResourceAware","fluid.tests.templateAware.contained"]} at path testEnvironment-7oh44guo-77.contained for event {fluid.handlebars.serverResourceAware}.events.onResourcesLoaded
testem.js:967 

containedRendered event triggered.
```

This should be impossible because of the rather conservative explicit deferral in fluid.fetchResources.checkCompletion

```java
fluid.fetchResources.checkCompletion = function (resourceSpecs, resourceFetcher) {
        var incomplete = fluid.find_if(resourceSpecs, function (resourceSpec) {
            return !resourceSpec.promise.disposition;
        });
        if (!incomplete) {
            // Close over this since it might get re-initialised
            var completionPromise = resourceFetcher.completionPromise;
            // Always defer notification in an anti-Zalgo scheme to ease problems like FLUID-6202
            fluid.invokeLater(function () {
                if (!completionPromise.disposition) {
                    completionPromise.resolve(resourceSpecs);
                }
            });
        }
    };
```

but in any case we observe that concludeComponentObservation is probably an unhelpfully late time to bind these listeners - in the modern framework there are all kinds of events that can fire during construction.

        