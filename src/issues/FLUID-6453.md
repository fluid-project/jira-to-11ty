---json
{
  "title": "FLUID-6453",
  "summary": "Implement \"unhandled rejection\" behaviour for Fluid promises",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-02-04T12:17:28.047-0500",
  "updated": "2021-06-21T11:30:04.423-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6534/",
      "key": "FLUID-6534"
    }
  ],
  "attachments": [],
  "comments": []
}
---
A useful courtesy exposed by several promise libraries (e.g. node's, Bluebird, etc.) is to provide some custom behaviour when detecting that a promise rejection has gone unhandled. As with similar courtesies such as cancellation, the exact semantic for these features can be very contentious, and the following github issue for node <https://github.com/nodejs/node/issues/830> contains hundreds of comments over several years debating the merits of different models. Again as usual, any such contentious issues end up being elided when the feature reaches the level of a language spec - ES6 promises contain nothing other than an abstract specification that the host platform may choose to do "something" in the face of an unhandled rejection in the spec at <https://tc39.es/ecma262/#sec-host-promise-rejection-tracker>

However it is clear from the point of view of usability that now we have FLUID-6148 style asynchronously constructing components that we must have some kind of concrete helpful behaviour in this situation. As it stands, someone can issue some component defaults and construct an instance as follows:

```java
fluid.defaults("fluid.tests.FLUID4982badJSON", {
        gradeNames: "fluid.resourceLoader",
        resources: {
            initModel: {
                dataType: "json",
                url: "/badJSON"
            }
        }
    });

    var that = fluid.tests.FLUID4982badJSON();
```

In this snippet, the issuer of the constructor asks for a component which depends on some I/O which fails for some reason, but the default result in the case they don't make some specific efforts to observe the completionPromise inside the component's resourceFetcher, or some other not terribly convenient internal, is for the construction to fail silently.

We should do something to improve this situation, whether it involves implementing an unhandled rejection handler for all promises, or some other wise.

        