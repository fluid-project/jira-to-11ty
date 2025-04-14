---json
{
  "title": "FLUID-5249",
  "summary": "Rationalise handling of \"instantiators\" to produce by default only one per Fluid context",
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
  "date": "2014-01-10T00:36:53.442-0500",
  "updated": "2017-02-27T15:49:09.300-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5283/",
      "key": "FLUID-5283"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5264/",
      "key": "FLUID-5264"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5495/",
      "key": "FLUID-5495"
    },
    {
      "type": "Dependence",
      "url": "/browse/VP-295/",
      "key": "VP-295"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-09-28T19:51:58.827-0400",
      "body": "Note that this work is actually essential to move to a world where instantiators don't leak. Right now, for example, every test case which constructs a component using plain code, will have both the component instance and its instantiator leak indefinitely. Once we move to a single instantiator, we also need to add further instrumentation to jqUnit so that it can note and tear down every constructed component during teardown of the fixture.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T14:28:07.220-0400",
      "body": "pull request <https://github.com/fluid-project/infusion/pull/591>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T09:59:17.028-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
Once the <https://fluidproject.atlassian.net/browse/FLUID-3674#icft=FLUID-3674> work for the new ChangeApplier is merged in, we will have the task of updating all existing Fluid components to the new standard before ditching the old ChangeApplier implementation. One of the most significantly lagging and sizable implementations is the VideoPlayer which is currently living in its own repository at <https://github.com/fluid-project/videoPlayer> . In fact, one of the main goals of the ModelRelay system was to subsume all of our existing "sketch" ModelRelays, of which the one designed for the VideoPlayer-UIOptions integration is the most significant.

In practice, we can't succeed in upgrading the VideoPlayer to new ModelRelay without a significant change to the framework. The new <https://fluidproject.atlassian.net/browse/FLUID-3674#icft=FLUID-3674> ModelRelay makes significant use of the "instantiator", an IoC record-keeping system, to keep its own records of outstanding model transactions and their progress. Therefore, unless we can guarantee that all participating components share the same instantiator, the implementation will fail.

This is an opportunity to correct several outstanding awkwardnesses that the current "instantiator" system has forced on us. When we create "contextual" components, for example, such as a PageEnhancer, we have to go through a strange manual rigmarole of sticking it in a special place in the "staticEnvironment" so that it can be found by all other components. Very obviously, this should be replaced by some kind of declarative system which can be operated just via the component's options.

In order to resolve these issues, we need to change our semantic so that every instantiated Fluid component, formerly considered "at top level" will in fact share the same instantiator, and will be placed "at top level" with it. This "default instantiator" will be global then, to an entire Fluid context (such as a web page, or a node V8 context). In order to avoid dangerous visibility leakage (the standard visibility rules would make every such component capable of resolving IoC expressions onto every other such top-level component), we should by default protect visibility by placing these as children of a special sub-root (this might require revival of the ancient IoC "fireBreak" system) unless a special grade is used, perhaps "fluid.resolveRoot"

The thinking behind the original "instantiator" system was perhaps peculiar - partially, perhaps influenced by considerations of "safety", where a corrupt instantiator and its component tree could be ditched entirely, and partially perhaps influenced by a Java-like model of "insulated worlds" as seen in structures such as ClassLoaders. I think we are now confident enough in the reliability of the instantiator implementation, as well as in our general principles of "global visibility" which are applied in so many other systems, that we can make the plunge into a "single instantiator system." This will also be an aid to debugging since this vital record-keeping structure will be global and readily at hand.

        