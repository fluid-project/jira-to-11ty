---json
{
  "title": "FLUID-6404",
  "summary": "Calling destroy() during onDestroy listener of createOnEvent component with subcomponents causes corruption of framework records",
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
  "date": "2019-09-27T10:53:28.673-0400",
  "updated": "2024-07-22T10:35:30.453-0400",
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
  "comments": []
}
---
This issue only affects the in-progress FLUID-6148 branch.

The following situation arose in updating the GPII electron app code to the upcoming framework. There is a survey dialog component, "gpii.app.surveyDialog" which by virtue of inherting from gpii.app.resizable, has a child component as follows:

```java
fluid.defaults("gpii.app.resizable", {
    gradeNames: ["fluid.component"],
.... 
    components: {
        refreshDialogTimeout: {
            type: "gpii.app.timer",
            options: {
                listeners: {
                    onTimerFinished: {
                        func: "gpii.app.resizable.refreshDialog",
                        args: "{resizable}"
                    }
                }
            }
        }
    },
}
```

This component is mounted in a "gpii.app.survey" as follows:

```java
fluid.defaults("gpii.app.survey", {
    gradeNames: "gpii.app.dialogWrapper",
    components: {
        dialog: {
            type: "gpii.app.surveyDialog",
            options: {
                config: {
                    destroyOnClose: true,
                    surveyUrl: "{arguments}.0",
                    closeOnSubmit: "{arguments}.1",
                    attrs: "{arguments}.2"
                }
            }
        }
    },
```

where the "createOnEvent" annotation is added in by 

```java
fluid.defaults("gpii.app.dialogWrapper", {
    gradeNames: "fluid.modelComponent",    components: {
        dialog: {
            type: "gpii.app.dialog",
            createOnEvent: "onDialogCreate"
        }
    },
```

Repeated invocation of "gpii.app.survey.show" as follows:

```java
gpii.app.survey.show = function (that, options) {
    that.events.onDialogCreate.fire(options.url, options.closeOnSubmit, options.window);
};
```

Causes an unfortunate problem because of the following piece of initialisation, listening to the native dialog "close" event

```java
gpii.app.dialog.positionOnInit = function (that) {
    if (that.options.config.positionOnInit) {
        that.setPosition();
    }    if (that.options.config.destroyWithWindow) {
        that.dialog.on("closed", function () {
            // ensure there isn't some inconsistency
            // it might be the case that the component is destroyed before
            // the BrowserWindow itself
            if (!fluid.isDestroyed(that)) {
                that.destroy();
            }
        });
    }
};
```

which, in turn, is triggered by an "onDestroy" listener for the dialog as follows:

```java
fluid.defaults("gpii.app.dialog", {
    gradeNames: ["gpii.app.localisedMessagesReceiver", "gpii.app.resizable"],
....
     listeners: {
....
        "onDestroy.cleanupElectron": {
            this: "{that}.dialog",
            method: "destroy",
            priority: "last"
        }
    }
}
```

What happens is, since the destruction process is only in its first stages, the dialog component passes the "isDestroyed()" check and we then proceed to issue a fresh potentia for the component's destruction, which begins to execute synchronously.

Unfortunately we are partway through the workflow in instantiator.clearComponent 

```java
that.clearComponent = function (component, name, child, options, nested, path) {

....
            if (created) {
                fluid.visitComponentChildren(child, function (gchild, gchildname, segs, i) {
                    var parentPath = that.composeSegments.apply(null, segs.slice(0, i));
                    that.clearComponent(child, gchildname, null, options, true, parentPath);
                }, options, that.parseEL(childPath));
                fluid.doDestroy(child, name, component); // call "onDestroy", null out events and invokers, setting lifecycleStatus to "destroyed"
                options.destroyRecs.push({child: child, childShadow: childShadow, name: name, component: component, shadow: shadow});
            } else {
                fluid.remove_if(childShadow.injectedPaths, function (troo, path) {
                    return path === childPath;
                });
            }
....
            delete that.pathToComponent[childPath];
            delete shadow.childComponents[name];
            if (!nested) {
                delete component[name]; // there may be no entry - if creation is not concluded
                // Do actual destruction for the whole tree here, including "afterDestroy" and deleting shadows
                fluid.each(options.destroyRecs, that.clearConcreteComponent);
            }
        };
        return that;
```

at the point of "fluid.doDestroy". Once this returns, we have actually recreated fresh components in the place of the old ones as a result of the recreation potentia queued by "createOnEvent" and so when we end up calling "delete that.pathToComponent\[childPath];" when back on this stack frame we end up destroying the shadow records for the new component, creating a horrific "hole" in the component map.

The soundest way of tackling this is to probably introduce a new component lifecycle stage "destroying" to match the existing one "constructing" which will also pave the way for asynchronous destruction which has been a framework feature requested for a while. 

We can then strengthen the checks in fluid.doDestroy and fluid.isDestroyed to take in this new lifecycle condition, whilst retaining the old strength in sites, e.g. that check whether invokers and listeners should be nulled out.

        