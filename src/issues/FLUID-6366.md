---json
{
  "title": "FLUID-6366",
  "summary": "IoC Testing Framework's \"task\" idiom requires locutions when yielded value needs further use",
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
  "date": "2019-01-24T06:31:17.252-0500",
  "updated": "2019-01-24T06:31:17.252-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Whilst the IoC testing framework makes small concessions to usability in the form of the "task" construct which yields a promise, the scoping of the values yielded from the promise suffers from all of the problems that led us to imagine that methods and invokers should be abolished. Here is a section of the GPII Preferences server tests:

```java
sequence: [{
    func: "gpii.tests.invokePromiseProducer",
    args: ["{preferencesService}.createPreferences", [gpii.tests.preferencesServer.preferencesService.testData.preferencesToCreate], "{that}"]
}, {
    listener: "gpii.tests.invokePromiseProducer",
    args: ["{preferencesService}.getPrefsSafeByGpiiKey", ["{arguments}.0.gpiiKey"], "{that}"],
    event: "{that}.events.onResponse"
}, {
    listener: "gpii.tests.preferencesServer.preferencesService.verifyFetchedPrefsSafe",
    args: [gpii.tests.preferencesServer.preferencesService.testData.preferencesToCreate, "{arguments}.0"],
    event: "{that}.events.onResponse"
}]
```

The author has been obliged to create not only a utility but a synthetic event, "onResponse", whose only purpose is to mediate the transmission of the yielded promise value. The implementation of gpii.tests.invokePromiseProducer is as follows:

```java
gpii.tests.invokePromiseProducer = function (producerFunc, args, that) {
    var promise = producerFunc.apply(null, args);
    promise.then(function (response) {
        that.events.onResponse.fire(response);
    }, function (err) {
        that.events.onError.fire(err);
    });
};
```

This is ingenious but ought to be entirely unncessary. Unfortunately it doesn't seem like any lightweight, localised improvement to the IoC Testing Framework itself is likely to improve this problem very much, and we should subsume it into the general capabilities of "gyres" suggested in FLUID-6365. As well as the existing constructs that deal with methods, invokers, and promises, once this was a core framework feature, IoC Testing Framework features would then also be able to construct fixtures representing a "localised gyre".

 

        