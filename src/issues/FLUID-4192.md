---json
{
  "title": "FLUID-4192",
  "summary": "Improve handling of cases with \"broken trees\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-04-27T01:48:22.994-0400",
  "updated": "2014-03-03T13:11:00.929-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4626/",
      "key": "FLUID-4626"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-02-29T00:33:44.905-0500",
      "body": "Note that IoCRendererComponent was abolished (or rather, made the default) in order to reduce the likelihood of this error\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-03-21T03:21:51.342-0400",
      "body": "After <https://fluidproject.atlassian.net/browse/FLUID-4626#icft=FLUID-4626>, this remains a serious problem. For example, using the \"model relay component\" to defer the construction of videoPlayer components to the point where uiOptions has constructed and fetches its model, gives rise to a classic instantiator failure - despite the new \"instantiator stack code\" apparently being prepared to have a heterogeneous stack of instantiators, there's currently no code path for one to arrive. New instantiators are still only created when the stack is found to be empty.\\\nIt's unclear whether we can do much about this before <https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392> work lands... an essential part of this work was enhancing the \"localRecord\" (and probably doing away with it entirely in its silly role of replacing the component options) to explicitly include any instantiator which is in progress. Still hard to deal with \"broken trees\" without an explicit notation available at construct time whether a component is meant to be a subcomponent or not. Which as usual implies doing away with \"initSubcomponent\". This probably implies Fluid 2.0.\\\nA nasty workaround is to wrap a listener dispatch like the one above with a setTimeout() to make sure that it executes with an empty stack.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:53:36.500-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
The IoC system will currently behave erratically if more than one concurrent instantiation is attempted from the same thread. This condition can also be triggered inadvertently, leading to untransparent behaviour. An example which came up this evening in UIOptions (FLUID-4171):

fluid.uiOptions - contains

fluid.uiOptions.controls - renderer component which invokes as a decorator (amongst many others)\
XX - break here\
fluid.textfieldSlider - view component, contains

fluid.textfieldSlider.textfield - view component

Now, in this case, fluid.uiOptions.controls was only registered as a rendererComponent, not an IoCRendererComponent, which led to the tree being broken at XX. In this case, a demands block was registered as follows:

fluid.demands("fluid.textfieldSlider.textfield", "fluid.textfieldSlider", {\
container: "{textfieldSlider}.dom.textfield",

Now, even though the tree was broken, it OUGHT to have been possible to recognise that fluid.textfieldSlider was in scope at this point, even if the "upper tree" was lost. However, given the IoC system is right now non-reentrant (to the extent that crucial housekeeping information is stored in a single threadLocal slot), it became confused, and the call to the creator function fluid.textfieldSlider went unrecognised by the instantiator, and fluid.textfieldSlider.textfield became uncontextualised.

One way to start of resolving these cases would be to do away with the stateful "expectedComponent" system in the instantiator. Since we have resigned to "options" structures being received from the IoC system as encoded, we can use a record here to communicate the current instantiator and expected path information. It would then become unambiguous whether this instantiation was part of the same tree or represented a fresh tree. To complete resolving the issue, it would require either doing away with the threadLocal system entirely (very hard, since there are still plenty of uncontextualised code locations, e.g. in invokers etc.) or else upgrading it to store a stack of instantiators rather than a single one.&#x20;

Really it would be much better if a "that" were somehow indissolubly connected to its "instantiator", although of course preferably without either polluting its own record, or causing lifetime/GC issues (these two goals are incompatible). This goal was partially to be addressed with the "shadow world" - but perhaps the best time to address it is with the "ginger world" - since the "root trundler" will probably need to be connected to the instantiator in any case.

        