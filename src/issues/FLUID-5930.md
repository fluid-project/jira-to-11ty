---json
{
  "title": "FLUID-5930",
  "summary": "Framework clears injected subcomponents before onDestroy",
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
  "date": "2016-07-20T08:37:02.695-0400",
  "updated": "2016-10-20T13:31:31.986-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-10-20T13:31:25.557-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/730> has been merged into the master branch at 2ae5da176294899a2c73b333aa27bdefeaa33b80\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-5812#icft=FLUID-5812> has improved the fluid.clearComponent workflow somewhat, but the current implementation is still capable of "surprising" the user. The general contract should be that at the time of an "onDestroy" event handler, no effects from destruction of the component's tree should yet be visible. However, in the case where a component has subcomponents which have been injected, these are aggressively cleared first - here is the current relevant section from fluid.clearComponent:

```java
1026:            if (created) {
1027:                // Clear injected instance of this component from all other paths - historically we didn't bother
1028:                // to do this since injecting into a shorter scope is an error - but now we have resolveRoot area
1029:                fluid.each(childShadow.injectedPaths, function (troo, injectedPath) {
1030:                    var parentPath = fluid.model.getToTailPath(injectedPath);
1031:                    var otherParent = that.pathToComponent[parentPath];
1032:                    that.clearComponent(otherParent, fluid.model.getTailPath(injectedPath), child);
1033:                });
1034:                fluid.visitComponentChildren(child, function (gchild, gchildname, segs, i) {
1035:                    var parentPath = that.composeSegments.apply(null, segs.slice(0, i));
1036:                    that.clearComponent(child, gchildname, null, options, true, parentPath);
1037:                }, options, that.parseEL(childPath));
1038:                fluid.doDestroy(child, name, component);
1039:                fluid.clearDistributions(childShadow);
1040:                fluid.clearListeners(childShadow);
1041:                fluid.fireEvent(child, "afterDestroy", [child, name, component]);
1042:                delete that.idToShadow[child.id];
1043:            } else {
1044:                fluid.remove_if(childShadow.injectedPaths, function (troo, path) {
1045:                    return path === childPath;
1046:                });
            }
```

This implementation has become a bit "belt and braces" in that there are two distinct sites where "injectedPaths" may be cleared - once at line 1029 where other paths at which **this** (concrete) component has been injected are cleared, and again at line 1044 where non-concrete child paths of a concrete component have their path records cleared out.

We need to take the block at line 1029 and move it below the "doDestroy" call at line 1038.

This emerged whilst refactoring the LifecycleManager for GPII-580. We implemented the proto-framework "DynamicComponentIndexer" which looks as follows:

```java
fluid.defaults("gpii.indexedDynamicComponent", {
        gradeNames: "fluid.component",
        components: {
            // This reference needs to be overridden by the concrete grade user
            // TODO: Enhance "notImplemented" scheme to support custom messages when user has not overridden material
            // which requires to be overridden
            dynamicIndexTarget: "{fluid.notImplemented}.mustBeOverridden",
        },
        // The path of the collection/member at which the index is to be held
        dynamicIndexTargetPath: "{fluid.notImplemented}.mustBeOverridden",
        // The path in this component at which the key is to be found
        dynamicIndexKeyPath: "{fluid.notImplemented}.mustBeOverridden",
        listeners: {
            "onCreate.indexedDynamicComponent": "gpii.indexedDynamicComponent.onCreate",
            "onDestroy.indexedDynamicComponent": "gpii.indexedDynamicComponent.onDestroy"
        }
    });

    gpii.indexedDynamicComponent.onCreate = function (that) {
        var key = fluid.getForComponent(that, that.options.dynamicIndexKeyPath);
        var ourPath = fluid.pathForComponent(that);
        var memberName = ourPath[ourPath.length - 1];
        var index = fluid.get(that.dynamicIndexTarget, that.options.dynamicIndexTargetPath);
        index[key] = memberName;
    };

    gpii.indexedDynamicComponent.onDestroy = function (that) {
        var key = fluid.getForComponent(that, that.options.dynamicIndexKeyPath);
        var index = fluid.get(that.dynamicIndexTarget, that.options.dynamicIndexTargetPath);
        delete index[key];
    };
```

In the sample usage, we have

```java
fluid.defaults("gpii.lifecycleManager.sessionIndexer", {
        gradeNames: "gpii.indexedDynamicComponent",
        components: {
            dynamicIndexTarget: "{gpii.lifecycleManager}"
        },
        dynamicIndexTargetPath: "sessionIndex",
        dynamicIndexKeyPath: "options.userToken"
    });
```

During the destruction of `gpii.lifecycleManager`, its injected paths are cleared out early - then when we come to destroy the session, we have a failure during `onDestroy` where index becomes undefined.

        