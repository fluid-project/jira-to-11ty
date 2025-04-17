---json
{
  "title": "FLUID-5948",
  "summary": "Think of scheme for \"orthogonal propagation\" of listener namespaces in wide component hierarchies",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-08-24T11:43:21.927-0400",
  "updated": "2021-07-29T01:46:53.944-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6439/",
      "key": "FLUID-6439",
      "summary": "Supply scheme for gradeNames to be supplied as a prioritised hash rather than a simple array"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5209/",
      "key": "FLUID-5209"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-08-24T13:59:04.931-0400",
      "body": "It seems there is scope for solving several problems at once here. Note that <https://fluidproject.atlassian.net/browse/FLUID-5784#icft=FLUID-5784> is still on the table, to remove the irregularity of our \"type -> typeName\" distinguished grade name. If we worked towards a model whereby we accepted a free hash of gradeNames rather than a list (fulfilling the overall trajectory of the framework in numerous areas - e.g. with distributeOptions, etc.) we could then refer to \"names of gradeNames\" as clear labels of their function. A user who just wanted to freely mix in a new gradeName would have to choose a new \"namespace\" for it... or perhaps we would grandfather in existing gradeNames as being \"self-named\".\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-11-29T23:36:23.537-0500",
      "body": "Clearly there are even worse problems than the one described here. In fluid-authoring, we have a situation where one component has multiple children all of the same type, which requires to relay an event (onRefreshView) to all children. What namespace can be given to this event?\n\nIt's no accident that the headline issue here also involves a \"refreshView\" event which suggests that solving this problem is fundamental to a \"new renderer\" architecture. See <https://fluidproject.atlassian.net/browse/FLUID-4260#icft=FLUID-4260>, etc. Note that we currently have no facility to fire events during component construction, due to fundamental framework limitations. See also <https://wiki.fluidproject.org/display/fluid/Plan+to+Abolish+Invokers+and+Events> - which was suggesting even removing the facility for registering listeners with no namespace, our only saving grace here!\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-11-29T23:37:24.632-0500",
      "body": "It is seeming like we would like the facility for namespaces themselves to behave a little like grades - for there to be derivation possible, but with constraints expressible with respect to \"base grades\" such that all listeners attached to it will sort together.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-12-01T23:48:47.548-0500",
      "body": "Note that we had made an abortive attempt in <https://fluidproject.atlassian.net/browse/FLUID-5866#icft=FLUID-5866> to allow namespaces to be resolved hierarchically. The model of \"extremal priorities\" could/should be accommodated into this system, which the reverted <https://fluidproject.atlassian.net/browse/FLUID-5866#icft=FLUID-5866> implementation failed to do. This will be relevant to our work on \"elements\" described at <https://wiki.fluidproject.org/display/fluid/Plan+to+Abolish+Invokers+and+Events> - since we will need a clean way to \"multiply\" priorities (that is, to easily allocate \"nonce\" priorities within an existing class) in a way that we can currently only do with the \"unnamed namespace\".\n\nGiven the existence of component ids as a source of uniqueness within the system, it seems possible that we will end up using references to these as our \"extra source of uniqueness\" - but this doesn't explain how we could retain the semantics of the ancient existing `addListener` scheme which supports old-fashioned uniqueness of listeners. It seems that we will simply end up with divergence between the programmatic and declarative forms of this API. It seems reasonable that a future version of the framework will prohibit the declarative use of listeners without a namespace, and provide sufficiently powerful primitives to compensate for the fact we can no longer address the \"unnamed namespace\" via this route.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-12-13T18:03:41.413-0500",
      "body": "Much like the case outlined in Antranig Basman's second comment, I was attempting to use Options Distribution to attach some listeners to a number of sub-components throughout the component tree, but I saw that only one of them was firing when the listened-to event was fired. I then set up two separate Options Distribution entries to target two such sub-components separately, and still saw that only one of them worked as expected. I eventually realized, with Alan Harnum's help, that the cause of the issue was my use of a namespace in the listener definition. In the first case, the same namespace was assigned to all of the listeners, and I'd forgotten that namespaces are registered to a particular event more or less universally across all components, so they must be unique in order to avoid collisions. In the second case, the two separate records still had the same namespace, producing the same issue.\n\nThe solution was to revert to the original setup of one Options Distribution record /without/ a namespace, so it was able to be registered by all components which matched the target IoCSS expression.\n\nHere is the code I was attempting to use initially (BROKEN):\n\n```javascript\n{\r\n    record: {\r\n        \"{page}.events.onContextChangeRequested\": {\r\n            namespace: \"stopAllVideos\",\r\n            funcName: \"sjrk.storyTelling.page.stopAllVideos\",\r\n            args: [\"{that}.managedViewComponentRegistry\"]\r\n        }\r\n    },\r\n    target: \"{that blockManager}.options.listeners\"\r\n}\n```\n\nHere is the second attempt at a solution (BROKEN):\n\n```javascript\n{\r\n    record: {\r\n        \"{page}.events.onContextChangeRequested\": {\r\n            namespace: \"stopAllVideos\",\r\n            funcName: \"sjrk.storyTelling.page.stopAllVideos\",\r\n            args: [\"{that}.managedViewComponentRegistry\"]\r\n        }\r\n    },\r\n    target: \"{that storyEditor blockManager}.options.listeners\"\r\n},\r\n{\r\n    record: {\r\n        \"{page}.events.onContextChangeRequested\": {\r\n            namespace: \"stopAllVideos\",\r\n            funcName: \"sjrk.storyTelling.page.stopAllVideos\",\r\n            args: [\"{that}.managedViewComponentRegistry\"]\r\n        }\r\n    },\r\n    target: \"{that storyViewer blockManager}.options.listeners\"\r\n}\n```\n\nHere is the code that works (WORKING):\n\n```javascript\n{\r\n    record: {\r\n        \"{page}.events.onContextChangeRequested\": {\r\n            funcName: \"sjrk.storyTelling.page.stopAllVideos\",\r\n            args: [\"{that}.managedViewComponentRegistry\"]\r\n        }\r\n    },\r\n    target: \"{that blockManager}.options.listeners\"\r\n}\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-09-30T07:40:52.914-0400",
      "body": "> If we worked towards a model whereby we accepted a free hash of gradeNames rather than a list&#x20;\n\nNote that this is written up as <https://fluidproject.atlassian.net/browse/FLUID-6439#icft=FLUID-6439>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-10-28T09:23:40.878-0400",
      "body": "Further note on limitations/extensions of the priority scheme - in developing the new renderer we ended up with the following \"sorted workflow cache\" -&#x20;\n\n```java\n0: {namespace: \"enlistModel\", workflowType: \"global\", workflowName: \"enlistModel\", gradeName: \"fluid.modelComponent\", workflowOptions: {…}, …}\r\n1: {namespace: \"resolveResourceModel\", workflowType: \"global\", workflowName: \"resolveResourceModel\", priority: {…}, gradeName: \"fluid.modelComponent\", …}\r\n2: {namespace: \"renderMarkup\", workflowType: \"global\", workflowName: \"renderMarkup\", priority: {…}, gradeName: \"fluid.newRendererComponent\", …}\r\n3: {namespace: \"fetchTemplates\", workflowType: \"global\", workflowName: \"fetchTemplates\", priority: {…}, gradeName: \"fluid.templateResourceFetcher\", …}\r\n4: {namespace: \"evaluateContainers\", workflowType: \"global\", workflowName: \"evaluateContainers\", priority: {…}, gradeName: \"fluid.containerRenderingView\", …}\r\n5: {namespace: \"concludeComponentObservation\", workflowType: \"local\", workflowName: \"concludeComponentObservation\", priority: {…}, gradeName: \"fluid.component\", …}\r\n6: {namespace: \"fetchOldRendererTemplate\", workflowType: \"local\", workflowName: \"fetchOldRendererTemplate\", priority: {…}, gradeName: \"fluid.oldRendererComponent\", …}\r\n7: {namespace: \"initOldRendererComponent\", workflowType: \"local\", workflowName: \"initOldRendererComponent\", priority: {…}, gradeName: \"fluid.oldRendererComponent\", …}\r\n8: {namespace: \"notifyInitModelWorkflow\", workflowType: \"local\", workflowName: \"notifyInitModelWorkflow\", priority: {…}, gradeName: \"fluid.modelComponent\", …}\r\n9: {namespace: \"concludeComponentInit\", workflowType: \"local\", workflowName: \"concludeComponentInit\", priority: {…}, gradeName: \"fluid.component\", …}\r\nlength: 10\n```\n\nThe problem here is that \"renderMarkup\" ended up before \"fetchTemplates\" - because fetchTemplates was \"after:enlistModel\" and renderMarkup was \"after:resolveResourceModel\". We really wanted to specify that renderMarkup depends both on \"resolveResourceModel\" **and** \"fetchTemplates\".\\\nThis increasingly suggests that workflows should be components.... priority namespaces should be components .... everything should be components!\\\nSee Gilad.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-10-28T13:57:04.468-0400",
      "body": "Yet another case, encountered in just the same day - in trying to ensure that the \"rewriting handler\" for an app was mounted after any static handlers in a Kettle app, we merely managed to ensure that it was mounted after its **own** handler - after registering the following set of priorities:\n\n```java\n17:11:46.113:  Registering request handler {\r\n    \"type\": \"kettle.request.http.static\",\r\n    \"options\": undefined,\r\n    \"method\": \"get\",\r\n    \"route\": \"/*\",\r\n    \"prefix\": \"/fluidTocDemoStatic\"\r\n} with key fluidTocDemoStaticHandler\r\n17:11:46.120:  Registering request handler {\r\n    \"type\": \"kettle.request.http.static\",\r\n    \"options\": undefined,\r\n    \"method\": \"get\",\r\n    \"route\": \"/*\",\r\n    \"prefix\": \"/fluidTableOfContentsStatic\"\r\n} with key fluidTableOfContentsStaticHandler\r\n17:11:46.124:  Registering request handler {\r\n    \"type\": \"kettle.request.http.static\",\r\n    \"options\": undefined,\r\n    \"method\": \"get\",\r\n    \"route\": \"/*\",\r\n    \"prefix\": \"/newRendererDemoStatic\"\r\n} with key newRendererDemoStaticHandler\r\n17:11:46.127:  Registering request handler {\r\n    \"type\": \"kettle.request.http.static\",\r\n    \"options\": undefined,\r\n    \"method\": \"get\",\r\n    \"route\": \"/*\",\r\n    \"prefix\": \"/infusionStatic\"\r\n} with key infusionStaticHandler\r\n17:11:46.130:  Registering request handler {\r\n    \"type\": \"fluid.renderer.rewriting.request\",\r\n    \"route\": \"/*.html\",\r\n    \"prefix\": \"\",\r\n    \"options\": {\r\n        \"mountedRoot\": \"%fluid-toc-demo/\"\r\n    },\r\n    \"method\": \"get\",\r\n    \"priority\": \"after:fluidTocDemoStaticHandler\"\r\n} with key fluidTocDemoRewritingHandler\n```\n\nwe ended up with the following ordering\n\n```java\nsortedHandlers: Array(5)\r\n0: {namespace: \"fluidTocDemoStaticHandler\", method: \"get\", type: \"kettle.request.http.static\", route: \"/*\", prefix: \"/fluidTocDemoStatic\", …}\r\n1: {namespace: \"fluidTocDemoRewritingHandler\", method: \"get\", type: \"fluid.renderer.rewriting.request\", route: \"/*.html\", prefix: \"\", …}\r\n2: {namespace: \"fluidTableOfContentsStaticHandler\", method: \"get\", type: \"kettle.request.http.static\", route: \"/*\", prefix: \"/fluidTableOfContentsStatic\", …}\r\n3: {namespace: \"newRendererDemoStaticHandler\", method: \"get\", type: \"kettle.request.http.static\", route: \"/*\", prefix: \"/newRendererDemoStatic\", …}\r\n4: {namespace: \"infusionStaticHandler\", method: \"get\", type: \"kettle.request.http.static\", route: \"/*\", prefix: \"/infusionStatic\", …}\n```\n\nwith the rewriting handler in position 2 - a request for the fluidTableOfContentsStaticHandler then ended up hitting it.\n"
    }
  ]
}
---
An interesting question about listener namespacing was raised in #fluid-work at <https://botbot.me/freenode/fluid-work/2016-08-24/?msg=71866852&page=1>

In the following snippet, intended to appear in a base panel grade, we want to bind a panel's refresh generically to an event held in the core prefs editor:

```java
listeners: {
            "{fluid.prefs.prefsEditor}.events.onPrefsEditorRefresh": "{fluid.prefs.panel}.refreshView",
            namespace: "someNameSpace"
        },
```

The namespace cannot be named statically since all the contributed listeners would collapse. Architecturally, it seems that this situation of wide-scale multicast listeners would best be treated at the model level of the architecture. However, this provides no recommendation for developers who don't have the opportunity to refactor in such a substantial way.

In the past we have had stopgaps based on various kinds of "singleTypeName"s. e.g. see the implementation of "resolveRoot" which allows a particular one of a component's gradeNames to be singled out as serving as "identity for a particular purpose": <http://docs.fluidproject.org/infusion/development/Contexts.html#global-components-fluid-resolveroot-and-fluid-resolverootsingle-> - we are getting to the point where this pattern has recurred enough times that we need to think of some scheme for structuring grade hierarchies in a generalised way that allow these names to emerge naturally. Then we could imagine a scheme for automatically deriving namespaces via expansion - such that, say, a panel SelfVoicing would register a listener namespaced SelfVoicing-refreshView etc.

        