---json
{
  "title": "FLUID-6410",
  "summary": "Queuing a zero-element sequence causes \"hybrid time\" algorithm to leave workflow incomplete",
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
  "date": "2019-10-09T08:31:10.899-0400",
  "updated": "2024-07-22T10:35:29.478-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This was found in the original attempt to fix FLUID-6408 via "hybrid time" - the Captions Enactor goes through a somewhat dodgy initialisation sequence in <https://github.com/amb26/infusion/blob/FLUID-6148/src/framework/preferences/js/CaptionsEnactor.js#L83> which currently reads

```java
fluid.prefs.enactor.captions.initPlayers = function (that, getYtApi, videos) {
        var promise = fluid.promise();
        var ytAPINotice = getYtApi();

        promise.then(function () {
            $(videos).each(function (index, elm) {
                that.events.onVideoElementLocated.fire($(elm));
            });
        });

        fluid.promise.follow(ytAPINotice, promise);
        return promise;
    };
```

This fires itself in an onCreate listener and then issues a onVideoElementLocated which then schedules the construction of a createOnEvent youTubePlayer component:

```java
fluid.defaults("fluid.prefs.enactor.captions", {
        gradeNames: ["fluid.prefs.enactor", "fluid.viewComponent"],
        dynamicComponents: {
            player: {
                type: "fluid.prefs.enactor.captions.youTubePlayer",
                createOnEvent: "onVideoElementLocated",
                container: "{arguments}.0",
                options: {
                    model: {
                        captions: "{captions}.model.enabled"
                    }
                }
            }
        },
```

It seems that this is enough to kick off the bug whereby fluid.commitPotentiae attempts to reuse an already resolved sequence and the test fixture

```java
fluid.tests.captionsTester.verifyDynamicComponentsModel = function (that, componentNames, state) {
        fluid.each(componentNames, function (name) {
            jqUnit.assertEquals("The \"" + name + "\" dynamic component model is set correctly.", state, that[name].model.captions);
        });
    };
```

ends up seeing the 2nd youTubePlayer as permanently partially initialised since the remainder of the workflow queue is lost.

        