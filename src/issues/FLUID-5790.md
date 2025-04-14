---json
{
  "title": "FLUID-5790",
  "summary": "Implement support for \"nullable promises\" matching facilities for that in events",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-10-08T14:15:21.232-0400",
  "updated": "2024-07-22T10:35:11.883-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4890/",
      "key": "FLUID-4890",
      "summary": "Firing an event to a listener registered by a destroyed component should trigger an error immediately"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5333/",
      "key": "FLUID-5333",
      "summary": "Create support for \"abortable events\" in the framework, to deal with cases where the holding component is destroyed"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-10-08T14:31:43.619-0400",
      "body": "Some relevant lore - this is more standardly known as \"cancellation:\"\n\n<https://esdiscuss.org/topic/cancelable-promises>\\\n<https://github.com/petkaantonov/bluebird/issues/415>\n\nIt seems that we should implement a new \"disposition\" for promises of \"cancelled\" - and an attempt to use a cancelled promise is a noop, not a failure. We can also improve our DataSources to allow propagation of cancellation back to the infrastructure that is performing the I/O.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-10-08T14:39:05.971-0400",
      "body": "<http://webreflection.blogspot.co.uk/2015/09/on-cancelable-promises.html> uses the name \"abort\" rather than \"cancel\" and considers that it should be equivalent to a rejection, which seems suspect to me - in the light of the very particular semantics we have for \"destruction\" of the surrounding superstructure of components. Note that for event firers we simply called this method \"destroy\". It might indeed be a helpful feature to produce a standard component factory for promises - and in fact to start properly bridging the gap between events and promises. See ancient discussion on \"latched events\" at <https://fluidproject.atlassian.net/browse/FLUID-4883#icft=FLUID-4883> - but these \"promise factories\" differ from those since in theory there can be numerous such promises in flight. However, note that the original use case for this JIRA could have been handled by a \"latched event\" attached to the request.\n\nTo avoid confusing people we might well start speaking of, say, \"component promises\" or \"component-bound promises\" rather than \"latched events\".\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-10-20T13:31:09.035-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/730> has been merged into the master branch at 2ae5da176294899a2c73b333aa27bdefeaa33b80 to support nullable invokers.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-10-20T19:12:17.417-0400",
      "body": "Reopening since <https://github.com/fluid-project/infusion/pull/730> still only represents partial support for the full feature set imagined. We now have nullable events and invokers, but still not cancelable promises\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-08-08T17:24:03.215-0400",
      "body": "Some further lore developed in the 4 years since then - \\\n<https://github.com/tc39/proposal-cancelable-promises/issues/70> - the sad story of an ES proposal that got trashed through opposition from Google, but the thread shows widespread support and appreciation for such a feature, and all the objections are pretty esoteric.\n\n<https://medium.com/@benlesh/promise-cancellation-is-dead-long-live-promise-cancellation-c6601f1f5082> - treatment by the author of \"Observable\" showing why the promises ecosystem is from his viewpoint suspect. The fact that there are so many \"live/asynchronous value\" idioms crowding into this space shows that all of them must be wrong.\n"
    }
  ]
}
---
The framework's behaviour in cases of receiving invocations directed at destroyed components is now somewhat inconsistent.

In order to resolve <https://fluidproject.atlassian.net/browse/FLUID-5333#icft=FLUID-5333> we implemented "abortable" or "nullable" events - events whose parent component is destroyed will now abort notifying any listeners still left in the chain instantly.

However, our facility for invokers doesn't match this - an attempted resolution of an invoker argument from a destroyed component will trigger a hard failure. Still further, our promises lie outside this scheme completely. In reviewing <https://github.com/GPII/universal/pull/393/files> for GPII-529, I ran into a further problem of this kind - test which will fail in sequence because a fixture has torn down the entire tree before some I/O that it issued could complete. Specifically,&#x20;

```java
18:55:24.025:  Sending a GET request to: /device on port 8081
18:55:24.034:  jq: FAIL: Module "development.all.local tests" Test name "Device Reporter fails on corrupt JSON file" - Message: Assertion failure (see console.l
og for expanded message): Cannot resolve reference {arguments}.0 from component { typeName: "kettle.requests.request.handler" gradeNames: ["kettle.requests.requ
est.handler.preferencesGet","kettle.requests.request.handler","{request}.handlerContext","fluid.applyGradeLinkage"] id: 5lgv2e5q-52760} which has been destroyed

18:55:24.036:  jq: Source:     at jqUnit.nodeFailureHandler (E:\source\gits\gpii\node_modules\universal\node_modules\jqUnit\lib\jqUnit-node.js:30:15)
    at Object.fluid.fail (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\Fluid.js:184:13)
    at Object.fetcher (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:726:23)
    at fetch (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:2038:32)
    at Object.fluid.resolveContextValue (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:2046:20)
    at Object.fluid.expandSource (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:2143:34)
    at Object.options.expandSource (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:2219:26)
    at Object.fluid.makeExpandOptions (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:2234:42)
    at Object.fluid.expand (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:2244:35)
    at Object.fluid.embodyDemands (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:1211:37)
    at Array.invokeInvoker [as 0] (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:1640:40)
    at Object.that.complete (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:65:25)
    at Object.that.resolve (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:49:22)
    at Array.0 (E:\source\gits\gpii\node_modules\universal\gpii\node_modules\preferencesServer\src\preferencesServer.js:107:25)
    at Object.that.complete (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:65:25)
    at Object.that.resolve (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:49:22)
    at Function.fluid.promise.resumeSequence (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:133:26)
    at Function.fluid.promise.progressSequence (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:128:23)
    at Function.fluid.promise.resumeSequence (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:143:31)
    at Function.fluid.promise.progressSequence (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:128:23)
    at Array.0 (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:138:35)
    at Object.that.complete (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:65:25)
    at Object.that.resolve (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidPromises.js:49:22)
    at onEnd (E:\source\gits\gpii\node_modules\universal\node_modules\kettle\lib\dataSource.js:334:29)
    at applyCallback (E:\source\gits\gpii\node_modules\universal\node_modules\kettle\lib\utils.js:55:33)
    at E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:1865:20
    at Object.fluid.tryCatch (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\Fluid.js:219:24)
    at Object.fluid.withEnvironment (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:1860:22)
    at IncomingMessage.wrapCallback (E:\source\gits\gpii\node_modules\universal\node_modules\kettle\lib\utils.js:52:26)
    at IncomingMessage.emit (events.js:117:20)
    at _stream_readable.js:944:16
    at process._tickCallback (node.js:448:13)
18:55:24.043:  ASSERTION FAILED: Cannot resolve reference {arguments}.0 from component { typeName: "kettle.requests.request.handler" gradeNames: ["kettle.requests.request.handler.preferencesGet","kettle.requests.request.handler","{request}.handlerContext","fluid.applyGradeLinkage"] id: 5lgv2e5q-52760} which has been destroyed
18:55:24.044:  Current activity:
    while resolving context value {arguments}.0
    while expanding context value {arguments}.0 held at path ""
18:55:24.049:  FATAL ERROR: Uncaught exception: Cannot resolve reference {arguments}.0 from component { typeName: "kettle.requests.request.handler" gradeNames:
["kettle.requests.request.handler.preferencesGet","kettle.requests.request.handler","{request}.handlerContext","fluid.applyGradeLinkage"] id: 5lgv2e5q-52760} which has been destroyed
```

The code in question is the following:

```java
gpii.preferencesServer.get.getRawPreferences = function (that, preferencesServer, request) {
        var promise = preferencesServer.getRawPreferences(request.req.params.userToken);
        promise.then(that.buildReturnPayload, request.events.onError.fire);
    };
```

where buildReturnPayload has&#x20;

```java
buildReturnPayload: {
                funcName: "gpii.preferencesServer.get.buildReturnPayload",
                args: [ "{arguments}.0", "{preferencesServer}.ontologyHandler", "{request}"]
            }
```

Seemingly harmless, you say!

The only current resolution is an explicit and ugly "isDestroyed" check in the first promise.then branch.

We need to either

i) make invoker behaviour consistent with events and simply silently abort (we really do need a warning-grade message here though - developers might very easily be puzzled about where their method invocation went)

ii) implement a variety of "component-bound promises" which become nulled out when their parent is destroyed.

perhaps both.

ii) is interesting/problematic - it looks like the requirement is for "scoped promises in general". In this case we imagine the shortest scoped relevant component is the REQUEST. This implies that users will call something like request.promise() rather than fluid.promise(). Note that in this particular failure case the component which triggers the error on access after destruction is different to the one where the promise is constructed.

        