---json
{
  "title": "FLUID-6445",
  "summary": "fluid.promise.fireTransformEvent does not participate in event cancellation",
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
  "date": "2019-12-19T18:19:03.721-0500",
  "updated": "2024-07-22T10:35:22.996-0400",
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
      "date": "2019-12-19T18:21:50.824-0500",
      "body": "As well as, of course, guarding the actual access site in fluid.resolveContext with a suitable comment.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-12-19T19:49:56.580-0500",
      "body": "The situation in <https://github.com/GPII/universal/pull/833> with StartupAPITests.js is much simpler than expected. The harness is destroyed because it is a subcomponent of the \"config\", and there are no extra sequence elements beyond what can be seen in the test cases. In particular, the test fixture makes no attempt to wait for the GPII to actually complete starting up or wait for any of the elements of the \"combinedStartup\" promise chain in the harness before it unceremoniously and synchronously destroys it all. So it is no surprise that the failure occurs, which is actually in the very first asynchronous element of the chain, attempting to determine whether Couch is up via the  \"combinedStartup.isCouchUp\" element.\n"
    }
  ]
}
---
The "pseudo-event" system operated by fluid.promise.fireTransformEvent, given how it sits uneasily in the penumbra between a properly integrated framework facility and an opportunistic addon, hasn't been properly integrated into the event/invoker cancellation system described in <https://fluidproject.atlassian.net/browse/FLUID-5333#icft=FLUID-5333> and FLUID-5790.

This was responsible for the CI failure seen at <https://github.com/GPII/universal/pull/833> . In @@Tony Atkins \[RtF] 's implementation of gpii-couchdb-test-harness, there is a "dockerWorker" which participates in the pseudoevent system with an event "combinedStartup". In this case, one of the listeners to startup actually synchronously triggers the destruction of the entire harness via a synchronous call to gpii.stop() in the test fixture - <https://github.com/GPII/universal/blob/master/tests/StartupAPITests.js#L48>

Unfortunately the framework then continues to service further listeners (we should determine in detail what has happened here since there are a few anomalies - presumably gpii.stop should not actually destroy the harness, and it is not clear what listener is actually in progress when the failed resolution occurs), which triggers a failure within fluid.resolveContext in the unguarded code in this fast path branch:

```java
if (fast) {
                var shadow = instantiator.idToShadow[that.id];
                return shadow.ownScope[context];
            } else {
```

We should adjust fluid.promise.fireTransformEvent so that it forwards the discovery of the cancellation of the base event into cancellation of the promise sequence, which interestingly was just implemented this evening in order to fix an intermittent race in the relocalisation code for FLUID-6442.

        