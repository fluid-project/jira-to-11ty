---json
{
  "title": "FLUID-6148",
  "summary": "Implement \"potentia II\" constituting aligned, transactional records of author's creational intent",
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
  "date": "2017-03-11T22:57:28.700-0500",
  "updated": "2024-07-22T10:35:19.741-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5028/",
      "key": "FLUID-5028"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5614/",
      "key": "FLUID-5614"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6145/",
      "key": "FLUID-6145"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6146/",
      "key": "FLUID-6146"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6147/",
      "key": "FLUID-6147"
    },
    {
      "type": "Dependence",
      "url": "/browse/SJRK-255/",
      "key": "SJRK-255"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5499/",
      "key": "FLUID-5499",
      "summary": "Think about scheduling of effects within the framework - especially the destruction of components"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5811/",
      "key": "FLUID-5811"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6281/",
      "key": "FLUID-6281"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-03-13T09:33:09.777-0400",
      "body": "Implementation notes:\n\nWe already have the beginnings of a scheme for \"mixed-mode\" lookup - when we find a component whose type is not \"constructed\" we drop into slow mode for context resolution. We'll have to do something similar for transactions since we can't afford for each transaction to have its own set of scope chain objects. These will be a luxury only enjoyed by fully committed objects in the \"main tree\", enjoying fast invokers and listeners etc.\n\nOur idea of \"gingerness\" naturally has to be extended to (now, in fact, **only**) make reference to the potentia II. As soon as a component begins to construct, we evaluate its \"components\" and transfer them into potentia II. Our iteration over children in initDependents then becomes an iteration over potentia II instead. We can repeatedly re-evaluate \"components\" and any fresh elements can be added to the queue of \"pendingPotentia\".\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-03-13T23:14:38.732-0400",
      "body": "We seem to have a big problem with deletions. To start with, it seems impossible that we could ever cancel them - how could we undo the action of destroying a component? However, it also seems reasonable that they should be considered to never fail. This being the case, it would be great if we could arrange that transactions **either** only contained deletes **or** constructions. But the natural semantic of fluid.construct was to do a \"deletion before construction\", which threatens to naturally mix them up.\n\nIf we did the deletes first, and the constructs failed, we would be left with a tree that was permanently altered - since we could never back out the deletes.\n\nIf we do the constructs first, we could presumably \"hide\" the components to be destroyed somewhere. But in that case, if the constructs pass, how could we convince the component's destroy action to run sensibly? Presumably we could hide it in its own transactional world where it, and noone else, still believe it to be mounted at its old path.\n\nLooks like this might be the workable option, as well as giving us \"Queen of Sheba\" semantics from the point of view of the outside world. But we have significant problems if people are expecting a \"destroy, afterDestroy, create\" sequence, for example, if a component or something it holds is being unregistered from some external container and then a new instance of it is re-registering. \"create \\[possible failure], destroy, afterDestroy\" seems a bit senseless, since we couldn't expect that the external container would be prepared to temporarily have two representatives of \"the component\" registered.\n\nPresumably this fits in with the model that we want to prohibit a component from having side-effects on the external world before we are committed to successfully constructing it. This kind of registration clearly represents such a side-effect. But the current framework doesn't allow us this kind of fine-grained filtration of a component's effects. The idea that events were only constructed \"onCreate\" was a kind of appeal to this idea - by the time we have reached onCreate our construction is fully committed.\n\nDoes this suggest that we should schedule the \"destroy\" moment for the component previously in the same place in the \"suspension interval\" of the previous component? As we said before, we would naturally like this to be a little later - some time after we have evaluated most of its options but before it has started to have any side-effects (which you would imagine had definitely occurred by the time its \"onCreate\" event occurred).\n\nThis then allows us the possibility to retain (destroy, afterDestroy, create) as the sequence, even though the components actually overlap in memory. We are left with the risk that a \"static failure\" could still occur during further options evaluation, even though we are then committed to destroying the component's predecessor, leaving its space in the tree empty. This is of course still vastly better than we could ever do before, and seems like the kind of \"quality of implementation\" issue we should tolerate until we can improve the framework.\n\nAh well, of course - the whole point of the \"potentia\" model is that the **PREVIOUS POTENTIA** can be recovered! This is obviously how we need to undo deletions. Much more straightforward - this implies that the component's potentia remains around for its entire lifetime.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-03-18T13:39:48.722-0400",
      "body": "In a conversation with Clayton I found this interesting prehistoric comment left in the buffer from 29th July 2015, which shows the beginnings of the \"potentia/extensa\" split beginning to be grasped:\n\nMy 7am noodlings, I think, have resolved the (non)-issue of GRADES OF NECESSITY........\\\nAs well as settling what demo we can very convincingly do for our Ungar-directed paper\\\nThe solution to \"grades of necessity\" is vastly simpler than I thought..... the idea of \"grades of necessity\" unnecessarily couples together the worlds of WHAT KINDS OF THINGS CAN EXIST and WHAT THINGS DO EXIST\\\nAll we need to do is to interpret a directive to destroy a component (whatever it is) at location A as a directive that that component SHOULD NOT EXIST (which clearly it obviously implies)\\\nBut that the effect of honouring the directive that it should not exist does indeed consist of two parts - firstly, ACTUALLY DESTROYING IT (the normal effect in an object-oriented system) but in addition REMOVING THE PREVIOUSLY EXISTING ANNOTATION THAT IT SHOULD EXIST (which has no meaning in an OO system, separate from executing the code which constructed it, but in our system actually corresponds to a persistent declaration kept in a registry) .........\n"
    },
    {
      "author": "Cindy Li",
      "date": "2018-10-16T13:03:00.754-0400",
      "body": "Merged [the ](https://github.com/GPII/universal/pull/687) [corresponding](https://github.com/GPII/universal/pull/687) [ universal pull request](https://github.com/GPII/universal/pull/687) at [this commit.](https://github.com/GPII/universal/commit/47e53b95ca4e1e8b48b1a47009ba1eaa47316165)\n"
    }
  ]
}
---
As described in our paper <https://github.com/amb26/papers/tree/master/ppig-2016a> , a desirable feature of an authorial system is to keep isolated records of the user's constructional intention. This allows the process of construction to be separated from the process of designating construction. Keeping these records would also allow us to solve issues such as FLUID-5614 ("double deep trees"), <https://fluidproject.atlassian.net/browse/FLUID-5028#icft=FLUID-5028> (continually arriving subcomponents) and FLUID-6146 (multiple createOnEvent components for the same event), as well as preparing the ground for crucial requirements like FLUID-6147.

In the PPIG paper, we named this realm as "potentia II" to distinguish it from the existing realm of designating potential effects, the grade registry.

Our potentia II records need to be indexed by path as well as by sequence, as well as permitting multiple transactional records to be active simultaneously, designating components which must be considered non-interfering until their construction is complete. The concept of "complete construction" would be represented by a dynamically maintained queue of "fully reified components" - for example solving FLUID-6146 by populating the inventory of createOnEvent components fully in advance (forming a single transaction), or <https://fluidproject.atlassian.net/browse/FLUID-5028#icft=FLUID-5028> by enqueuing any further children of the same constructing root.

We decided to solve the issue of component destruction by prohibiting any component destruction during a construction transaction (as suggested in <https://fluidproject.atlassian.net/browse/FLUID-5499#icft=FLUID-5499>) - a destruction operation must form its own, separate transaction. It's possible that in future we may support the aggregation of sequences of such transactions into "mega-transactions" allowing arbitarily complex operations on the component tree from being presented as a single atomic unit for the purposes of observation by other component tree citizens. This would be necessary in more mature Nexus applications, and would require explicit transaction demarcation to be supported in its wire protocol.

        