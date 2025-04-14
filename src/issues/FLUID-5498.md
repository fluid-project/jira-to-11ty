---json
{
  "title": "FLUID-5498",
  "summary": "Apply \"transaction globbing\" for any manual changes triggered as part of a change process",
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
  "date": "2014-08-21T08:32:51.649-0400",
  "updated": "2020-07-30T07:51:59.432-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5517/",
      "key": "FLUID-5517"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6536/",
      "key": "FLUID-6536"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-08-22T15:01:32.493-0400",
      "body": "A further use case appeared almost immediately. As part of the \"feedback\" tool, there is a requirement to operate a model constraint that is equivalent to that that governs \"radio buttons\" in a traditional UI - when one element is activated, any (or all) other activated element should be deactivated. This is not possible to express using any form of model relay rule, since it relies on a stateful relationship to the stream of changes. The best we could do currently is to create some new form of element, for which we lack a name - a kind of \"constraint box\" that interacts with a transaction and guides the evolution of state within it in a stateful way.&#x20;\n\nHowever, given the current framework we lack even the capability of doing that - since it is currently not possible to even easily discover the existence of any transactions which are active with respect to the current models. The only place it is exposed is in a private stack frame directly above that of the original external trigger of the \"initial change\" in the transaction. In theory one could grub about in the instantiator's transaction records, but we really need to expose a proper API for this - at least a kind of semi-user-level API such as \"applier.beginTransaction\" with no arguments, which will either start a fresh transaction or enlist in a current one.&#x20;\n\nAfter that, we have the problem of how to express constraints such as the \"radio button constraint\" in some form of reasonable declarative dialect. This problem is related to the <https://fluidproject.atlassian.net/browse/FLUID-5337#icft=FLUID-5337> \"pseudoinverse\" problem but is unfortunately more serious. <https://fluidproject.atlassian.net/browse/FLUID-5337#icft=FLUID-5337> can be implemented without any new kinds of model citizens or configuration - it just requires the inhabitants to \"buy into\" the idea that the existing model state will be used to \"break ties\" in the case there are multiple possible inverse values that could result from running a transform backwards. Unfortunately the \"radio button constraint\" requires explicit interaction with the history of the model. Or even just a suitable arena to express the code like the following:\n\n```java\nmodelListeners: {\r\n                        \"isActive\": [{\r\n                            listener: \"{feedback}.applier.change\",\r\n                            args: [\"mismatch\", \"{change}.value\"]\r\n                        }, {\n```\n\nin this case, no such inspection is even required, and simply the headline functionality for this JIRA would be sufficient. If we automatically glob, and apply consistent semantics for \"oldValue\" (that is, value before transaction start) and \"newValue\", we could do as well as we might in expressing such rules compactly - especially if we just house them in a dedicated component.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-01-09T16:31:12.971-0500",
      "body": "> Note that we discovered this constraint can be expressed quite straightforwardly on the other side of an \"arrayToSetMembership\" transform\n\n\"quite straightforwardly\" my foot. The solution whilst it is quite simple takes a while to reconstruct, especially as regards what the \"other side\" actually is. Here is the comment duplicated from <https://fluidproject.atlassian.net/browse/FLUID-5517#icft=FLUID-5517> which explains this:\n\nNote - the \"proper\" solution to this problem (or rather, the only one we can implement without stateful relay rules) is simple-seeming but rather obscure - it was explained in IRC at <https://botbot.me/freenode/fluid-work/2014-08-25/?msg=20363141&page=2>\n\nThe idea is to tackle the issue at the point of initial data binding - the UI action of selecting, say, the \"match\" button is not bound to the boolean end of the relay, but the array and - and the binding has the effect, say, of writing the entire array \\[\"match\"] to the so-called \"inTransit.opinion\" (this needs to be renamed) - rather than writing to the boolean end of the relay.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-01-26T09:27:43.843-0500",
      "body": "The headline behaviour asked for in this JIRA doesn't actually make any sense. By definition, if we are in a user listener reacting to a model change, the transaction governing it must already have concluded - we couldn't possibly \"glob\" to it since it must already have been cleaned up. The behaviour nonetheless is confusing - if there are multiple listeners listening to the change, all wanting to trigger further changes, the model state reported in oldValue etc. will be long gone - the first listener to react will have already caused a further change. We need to continue to discourage triggering of changes from listeners in favour of relay semantics.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-07-30T07:51:59.432-0400",
      "body": "Note that the previous comment of 26 Jan 2015 was entered at a time of maximal misunderstanding of how the current system works. The existing transaction has **not** been concluded during the notification of model listeners, and has not even begun to enter its \"postCommit\" stage. More modern comments on <https://fluidproject.atlassian.net/browse/FLUID-6536#icft=FLUID-6536> suggest that we should continue with this model, and rather than \"discouraging triggering of changes\" in a reactionary way we should unify the semantics of relay rules and listeners, making it easier to write stateful relay rules as well as making it possible to enlist multiple listeners into an (existing) transaction.\n"
    }
  ]
}
---
A feature that might be helpful, but will require some thought, is to apply "transaction globbing" to enlist a change made by a listener in reaction to a change process. The current metadata resourceInputPanel.js contains the following function:

```java
gpii.metadata.baseResourceInputPanel.updateModel = function (that, value, path, index, root) {
        var changePath = [root, index].concat(path);
        that.applier.change(changePath, value);
    };
```

This applies a form of "manual model relay" to deal with the fact that relay is coming from one of a number of dynamically generated components. It would be better to express this via configuration, but it is probably not currently possible to express relay to dynamic paths.

The effect of this is to kick off a second transaction in the target components - whilst the first transaction has just concluded and is in the process of notifying its listeners (including this one). This made the issue <https://fluidproject.atlassian.net/browse/FLUID-5497#icft=FLUID-5497> somewhat harder to debug, although if this feature were implemented, that bug would still have had a damaging though slightly milder effect.

One possible approach might be to automatically enlist any user in any transaction which is underway in their own applier, or anywhere on their current call stack - or at least provide a straightforward means for them to supply an annotation wishing that they wish to be enlisted. The effects of this might be awkward, however, and it might be best to maintain transactions as "isolated" from the user's (that is, the materialiser's) point of view. The best next step might be to improve our handling of dynamic components and dynamic relays so that manual relay of this kind isn't necessary.

        