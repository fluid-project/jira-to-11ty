---json
{
  "title": "FLUID-6442",
  "summary": "Relocalisation of ResourceLoader blows away external resource completion listener",
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
  "date": "2019-12-16T17:48:32.613-0500",
  "updated": "2024-07-22T10:35:32.880-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "ResourceLoader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-11-02T12:21:47.220-0400",
      "body": "This is not listed in the pull request manifest but believed fixed\n"
    }
  ]
}
---
This is a bug in our <https://fluidproject.atlassian.net/browse/FLUID-6413#icft=FLUID-6413> model-driven relocalisation system for the ResourceLoader which only affects the in-progress FLUID-6148 and <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> branches.

The relocalisation path via resourceLoader.refetchAll displaces any listeners attached directly to the individual resourceSpec promises as it blows the promise itself away via calls to fluid.fetchResources.initOneResource . This hazard is already suggested in some of the code comments, e.g. the current site of attachment of the completion listener in fluid.resourceLoader.makeResourceFetcher in

```java
// Note that we beat the existing completion listener in the fetcher by "sheer luck"
        fluid.each(fetcher.resourceSpecs, function (resourceSpec, key) {
            resourceSpec.promise.then(function () {
                that.resources[key] = resourceSpec;
            }, function (err) {
                that.events.onResourceError.fire(err);
            });
```

and then again at the site of attachment of the surviving listener in fluid.fetchResources.fetchOneResource

```java
// Add these at the last possible moment so that individual resource disposition can beat them
// TODO: Convert all these to "new firers"
resourceSpec.promise.then(function () {
    fluid.fetchResources.checkCompletion(resourceFetcher.resourceSpecs, resourceFetcher);
}, function (error) {
    resourceSpec.fetchError = error;
    resourceFetcher.completionPromise.reject(error);
});
```

The symptoms are that any observers of the resource in "orthochronous time" end up being sent to the late fetch pathway in fluid.resourceFromRecord and end up with a fluid.fetchResources.FetchOne rather than the actual resource attached in that.resources . This is the cause of <https://issues.fluidproject.org/browse/SJRK-318> 

        