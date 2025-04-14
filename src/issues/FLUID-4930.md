---json
{
  "title": "FLUID-4930",
  "summary": "Correct \"ginger world\" algorithm so that it behaves correctly in cases of \"retrunking\" - clarify semantics for full evaluation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2013-03-10T20:42:44.901-0400",
  "updated": "2024-07-15T17:35:55.386-0400",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5981/",
      "key": "FLUID-5981",
      "summary": "It should be possible to insist that \"material provided as expander arguments is fully evaluated\""
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4330/",
      "key": "FLUID-4330",
      "summary": "Implement \"globally ginger world\" for component instantiation, breaking time dependence of subcomponents on options merging"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4918/",
      "key": "FLUID-4918",
      "summary": "Create new component record element \"members\" to automate transfer of IoC resolved material to component top level"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4919/",
      "key": "FLUID-4919",
      "summary": "Rewrite Uploader to modern framework standards"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5028/",
      "key": "FLUID-5028"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4930/aboveExpandExpander.png",
      "filename": "aboveExpandExpander.png"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-03-10T20:50:35.758-0400",
      "body": "This improvement may also be what we need to handle another vexed case in the speculated future framework - the ability to issue context- or options-holding directives from child components which designate the creation of FURTHER SIBLING SUBCOMPONENTS. This was considered one way out of the \"progressive enhanced uploader\" conundrum whereby the uploader appears as TWO components, a container which designates context tags, and the child component which holds the \"actual uploader\" which is enhanced by these tags. In the current \"modernised uploader\" we have papered over this as much as possible by use of a manually written nickname of \"uploader\" on the \"real uploader\" and Skywalker definitions to forward all options from the parent to the child, but it is still something of an annoyance (although nowhere near as nasty as the \"alias\" system in the \"old framework\").\n\nBy definition, since we have already embarked on the process of iterating over child components when we evaluate material from a child component, under anything like the current system we would not be prepared to react to any development which caused further child component definitions to come into existence since we have already marked the path \"components\" as evaluated within the options structure. If it was possible to use the putative \"shadow structure\" described in this JIRA as a source of such flags, it might be possible to mark the path \"components\" as \"dirty for recursion\" once again at any point in the process.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-12T04:28:01.663-0400",
      "body": "Note - when creating a test case fixing a further problem in the ginger system (inability to merge \"string\" on top of null, due to a faulty deep recursion caused by the \"evaluateFully\" system) it was realised that the original fault reported here (in \"members\") was actually triggered by the original bug, that is, that \"members\" has not been entered into the \"noexpand\" registry in the root mergePolicy. This makes it less likely that the headline bug described here can be observed in practice, although anecdotally it had been seen in a few other cases.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-10-14T13:47:19.440-0400",
      "body": "A clear test case for a core failure case for this issue emerged during the fluid authoring work. We have an expander which evaluates to a complex structure, which accepts as an argument elements from a structure which has other members which read from its return value - see fluid.tests.retrunking in FluidIoCTests.js in pull request <https://github.com/fluid-project/infusion/pull/763> .\n\nThe fix in that pull request only bodges over the problem. We have a more general case of the problem when we attempt to evaluate the expander arguments - it should be possible to express the policy that \"arguments which are supplied to expanders are fully evaluated\". However, the attached screenshot shows how very deep and winding the call stack is above fluid.expandExpander - only once we get back via traverseWithStrategy to the list of mounted strategies with fluid.getForComponent do we have a possibility to re-enter into the system - unfortunately there is no way within our very flawed \"trundler API\" to express the fact that we want to bypass the standard workflow of returning \"any concrete object first found by preference\" but instead re-enter into the fluid.fetchMergeChildren workflow with the equivalent of our \"evaluateFully\" flag set to true -&#x20;\n\n<!-- media: file aa9b70e8-2cc5-4e6f-9d07-dcf09e75ce55 -->\n\n&#x20;\\- that is, the workflow initiated by the \"initter\" of fluid.makeMergeOptions:\n\n```java\noptions.initter = function () {\r\n            // This hack is necessary to ensure that the FINAL evaluation doesn't balk when discovering a trunk path which was already\r\n            // visited during self-driving via the expander. This bi-modality is sort of rubbish, but we currently don't have \"room\"\r\n            // in the strategy API to express when full evaluation is required - and the \"flooding API\" is not standardised. See FLUID-4930\r\n            options.evaluateFully = true;\r\n            fluid.fetchMergeChildren(options.target, 0, [], options.sources, options.mergePolicy, options);\r\n        };\n```\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-17T10:20:32.497-0400",
      "body": "@@Antranig Basman based on your comment above, does it mean that this issue should remain open after <https://github.com/fluid-project/infusion/pull/763> is merged?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-10-17T11:12:48.610-0400",
      "body": "@@Justin Obara - Yes, that's right, because this issue now depends on <https://fluidproject.atlassian.net/browse/FLUID-5981#icft=FLUID-5981> which will not be fixed in this cycle\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-18T12:43:24.814-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/763> ) into the project repo at 4ba51be6ec9528379ee08438995e3be5df6c2f18\n"
    }
  ]
}
---
When writing a test case for <https://fluidproject.atlassian.net/browse/FLUID-4918#icft=FLUID-4918>, a pretty simple case came to light where the existing "ginger world" algorithm for <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> behaves incorrectly.&#x20;

```javascript
fluid.defaults("fluid.tests.memberTest", {
        gradeNames: ["fluid.littleComponent", "autoInit"],
        members: {
           expanded: {
               expander: {
                   func: "{that}.identity",
                   args: "{that}.emptyArray"
               }  
           },
           emptyArray: []
        },
        invokers: {
            identity: "fluid.identity"
        }  
    });
```

In the case above, the member "expanded" did not appear in the final component at all! The process for ginger evaluation for options during EXPANSION correctly evaluated the merge block corresponding to "expanded", causing evaluation of the reference to "{that}.identity" and hence the FULL evaluation of "{that}.emptyArray" which duly appeared in the final component as a result of complete evaluation of that path.

However, when the MERGE algorithm came to process the path "members", as required by the "initter" for the member strategy:&#x20;

```javascript
shadow.memberStrategy.initter();
```

in fluid.initDependents, it inspected the path "members", discovered that it was present in the options structure and hence concluded that it had already been evaluated! It then returned it as is, without following any further recursion.&#x20;

Some things are clear: i) It's clear that in some contents, the "extremely ginger" semantics operated by the ginger world are appropriate, in that it MAY refuse to evaluate any subpaths which are not immediately demanded. However, right now, the situations where these semantics are delivered are extremely patchy - a caller can't be sure how much of an object they will actually get, and what's more we are probably relying on this phenomenon to save us from circularity in at least some cases where we shouldn't depend on it - for example, it is believed that the indirect mutual reference between the Reorderer and LayoutHandler with respect to their DOM binder selectors currently works exactly because of this sort of "opportunistic bug". The real issue/problem is whether we can ever expect to be fully clear about this. It may simply have to be part of a client's grade or other info that explains their expectations on "full evaluation". You would expect that any client which is simply the options system itself or "members" would be happy with the current semantics, which guarantee the maximum freedom from circularity by maximum gingerness - however, a client which is an invoker or expander would most likely only be happy with fully evaluated arguments - unless it could somehow explain to the contrary.&#x20;

Clearly the situation right now - where an options structure was in fact NEVER fully evaluated even by the end of the ginger process is an outright bug, but the fix we have issued, a special flag in the expander's options named "evaluateFully" is an insufficient fix. More subtle instances of this problem can continue to recur, even though we can now at least guarantee that all evaluation is complete by the end of the ginger process.

ii) The system that we implemented whereby the ginger world relies on "self-timing" by storing properties (whether they are "undefined" or no) in the LH target object is inadequate to solve this problem fully. It was hoped that we could get by without any auxiliary storage, but it seems clear that we can't - since otherwise we can't disambiguate the situations where we visited a trunk path partially but need to return to it later to fully evaluate its child paths, and where we have completely evaluated it and don't need to return. This definitely requires flags held in some auxiliary "shadow structure" which is a painful result for efficiency but will at least spare us from returning the current ugly and probably dangerously confusing options structures filled with concrete properties with value "undefined" which appear everywhere where there is a value demand but no value present. This "shadow structure" would also be a place we could store provenance information which could be useful in interpreting merge results, as well as these flags indicating evaluation state. We might then even be able to return to the old semantics for "fluid.merge", in which the change has been an annoying bump in the release process for the "new framework".

The real challenge is finding where to express the client's "evaluation intent" since there is just not room for it in either the strategy API, or fluid.get, or any of the other "state API" expressions we have in the system. The "shadow structure" may itself be the only place to put this - given it is really associated with the evaluation of a particular PATH during a particular process, and the "shadow structure" is only good for that one process anyway - it is expected to be discarded on completion of a "ginger wave".

        