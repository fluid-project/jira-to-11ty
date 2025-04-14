---json
{
  "title": "FLUID-4982",
  "summary": "Implement \"globally asynchronous ginger world\" aka \"wave of promises\" allowing arbitrarily asynchronous progress through the ginger algorithm",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2013-04-18T06:44:53.654-0400",
  "updated": "2022-02-03T10:23:32.059-0500",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5750/",
      "key": "FLUID-5750"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4260/",
      "key": "FLUID-4260"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5047/",
      "key": "FLUID-5047"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4883/",
      "key": "FLUID-4883",
      "summary": "Implement new event type of \"latched events\" which represent \"promise/deferred\" type events which may fire only once"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4925/",
      "key": "FLUID-4925",
      "summary": "Implement \"wave of explosions\", eagerly instantiating all component shells before their contents"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4978/",
      "key": "FLUID-4978",
      "summary": "Implement circularity detection for the ginger algorithm used in options evaluation"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5333/",
      "key": "FLUID-5333"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5513/",
      "key": "FLUID-5513"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-05-08T13:45:43.525-0400",
      "body": "This work, when it occurs, will also be combined with \"shape-based\" optimisations combining chains of immutable options blocks - since the \"new renderer\" will not be viable unless many thousands of small components can be constructed within minimal allocation costs (we need to recover at the very least the level of performance of the 2011-era \"CSpace optimisation framework\" leading to <https://issues.fluidproject.org/browse/FLUID-4563> , and then to considerably exceed it). Another crucial requirement in order to resolve awful potholes such as <https://fluidproject.atlassian.net/browse/FLUID-5668#icft=FLUID-5668> will be support for \"local mergePolicies\" discussed in IRC on <https://botbot.me/freenode/fluid-work/2015-09-11/?msg=49513398&page=1>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-03-04T18:24:10.058-0500",
      "body": "An interesting use case for this facility is in the GPII PSP's \"dialogManager\" which can display various kinds of dialogs, some of which need to be entered into an asynchronous queue and others of which can be shown immediately. Without the ability for \"partial evaluation\" the implementation's best choice is to make a crude up-front type-based check: <https://github.com/GPII/gpii-app/pull/39/files#diff-c3468ee90de930178dd3c6b8c359f53dR280>\n\nWe need to make sure that the new \"workflow grades\" are easy enough to use that they would seem like a better choice even in lightweight and \"ad hoc\" situations like this.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2021-01-12T10:04:24.336-0500",
      "body": "A partial implementation for this has landed as part of the <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> work. It falls short of asynchronising all workflow since this would require a wholesale rewrite of the options merging pipeline which has now been deferred to <https://fluidproject.atlassian.net/browse/FLUID-5304#icft=FLUID-5304>. In particular, issues referring to this one suggest that this work requires \"local mergePolicies\" which have not yet been implemented.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2021-11-30T11:23:15.760-0500",
      "body": "As a historical note, we have determined that implementing a 'generalised evaluation engine suitable for \"arbitrary parallelisation of irregular algorithms\"' is incompatible with the goals of user programming. These algorithms act on the basis that the task in question is static and that any execution site is interchangeable with any other - whereas each site of user activity is distinct and a source of vital data that must never be lost from the system (e.g. through the cancellation of a transaction)\n"
    }
  ]
}
---
Following on from the "wave of explosions" for FLUID-4925, we need to lift the final restrictions in the IoC framework on the order of operations during component expansion, merging, and instantiation, allowing the component construction process to "suspend" at any arbitrary point where we discover asynchrony (in general I/O) is required.

This is a very long-standing restriction in the Infusion framework - since the very beginning, it has been a global assumption that every component construction will conclude synchronously. This primarily has been an obstacle to finishing our renderer component architecture, and has led to numerous annoying and onerous restrictions, in particular on dealing with the workflow for template fetching. Discussion recently in fluid-work led to us itemising the two rather unsatisfactory models that we currently have for this:

<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-04-15>

The model used in CSpace uses the provisional utility function "fluid.primeCacheFromResources" which is able to expand some component default material in a non-contextual way, and immediately initiate I/O which may then be blocked for later using a "resource class". This is very unsatisfactory since the resource URL cannot be properly IoC contextualised, and the use of "resource classes" is very unnatural for the developer.

The model used in UIOptions supplied a dedicated "template fetching component" as a supercomponent of the entire panel, which centralises all of the template URLs used in one place, which again blocks subcomponents. This is similarly a weak model since this creates a central point of dependency and forces developers to an unnatural component architecture.

It should be possible for any number of cooperating components in a tree to reveal the URLs for templates they require at any suitable point in the ginger process, which may then cause the parts of their instantiation which depend on them (for example, their DOM binder, if it lies within the rendered material) to block, whilst at the same time allowing the ginger process to make good use of its time by progressing through component material which is not so blocked.

This will require adoption of a framework-wide standard on "promises" - similar to the "special values" held in the tree for <https://fluidproject.atlassian.net/browse/FLUID-4978#icft=FLUID-4978>, these "partially evaluated trees" will hold promises at the points where evaluation is currently blocked - any further references dispatched into these promises before they are resolved will likewise block, resulting in a "chain of promises" to be resolved in a wave when the I/O completes.

A very simple implementation of promises will suffice, since we do not expect this API to be exposed to end users - and all of the algorithms expressed relative to promises are already embodied within the framework. The "unscriptable" team responsible for cujo/wire etc. have produced a suitably minimal implementation at <https://github.com/unscriptable/promises/blob/master/src/Tiny2.js> - even these 40 lines may implement more functionality than required. We should take the opportunity at this point to deal with FLUID-4883 and implement the new event type, implemented in terms of this new promises abstraction, for "latched events" as described there. At the same time we should reimplement fluid.fetchResources so that it is both a consumer and producer of promises.

Having proceeded to this implementation, we will be in possession of a generalised evaluation engine suitable for "arbitrary parallelisation of irregular algorithms" as described in the PhD thesis of Milind Kulkarni ( <https://engineering.purdue.edu/~milind/docs/dissertation.pdf> ) and as implemented in "The Galois System". Although JavaScript is single-threaded, our system will be able to take advantage of arbitrary parallelism by dispatching work to other cores or machines using a "message-passing model" similar to Erlang's, since our model implies (although does not generally enforce) that the operation of "invokers" is as pure functions (side-effect free) - all update of state is managed within the core framework within the "fits and waves" of the ginger process.

        