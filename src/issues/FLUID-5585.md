---json
{
  "title": "FLUID-5585",
  "summary": "Removals from model are never relayed using model relay system",
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
  "reporter": "Cindy Li",
  "date": "2015-01-13T10:23:24.354-0500",
  "updated": "2021-12-14T08:37:28.031-0500",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework",
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6208/",
      "key": "FLUID-6208"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5489/",
      "key": "FLUID-5489"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-01-13T11:29:30.444-0500",
      "body": "Sent a pull request with a unit test to demonstrate this issue: <https://github.com/fluid-project/infusion/pull/576>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-01-13T17:35:08.423-0500",
      "body": "In fact the relay system is deficient in relaying removal of values of all kinds - the \"DELETE\" ChangeRequest type has been a 2nd-class citizen for a while and is not properly recognised by any of the relay system. This posed quite a profound-seeming problem at first - discussion in IRC at - <https://botbot.me/freenode/fluid-work/2015-01-13/?msg=29435729&page=1>\n\nRelevant messages pasted here:\n\nBosmon: I think we are going to have abandon a previously held dear religion, and start permitting change requests with a value of \"undefined\" ......\\\nWe'll just have to take care to \"armour\" them back into DELETE requests whenever we try to transmit them to anyone or store them\\\ncindyli: ok. but why would that require to permit change requests with a value of \"undefined\"\\\nBosmon: cindyli - well, we need a way to propagate the information about deletions through essentially arbitrary code\\\nFor example, the code fluid.identity\\\nNow fluid.identity is hardly going to response to a change request of type \"DELETE\"\\\nIt has no idea what such things are\\\nThe only thing it can respond to is VALUES.... which implies we must have a VALUE WHICH REPRESENTS A DELETION\\\n7:24 PM cindyli:ok\\\n7:24 PM Bosmon: Now in JavaScript, our reasonable choices for such a value are extremely limited\\\n7:24 PM In theory we could send in some special \"exotic\" value that we could check with a prototype or constructor check\\\n7:24 PM But this seems rather antireligious in some other ways\\\n7:25 PM \"undefined\" has the virtue of meaning almost exactly what we mean - in that after servicing a DELETE, undefined really is the value which we would observe after a read\\\n7:26 PM It would just require special processing in the changeApplier to honour it with a language-level \"delete\" rather than sticking it in as a value\\\n7:26 PM It would mean that the changeApplier then loses the ability to operate on \"broken JSON\" trees which hold \"undefined\" as property values, but it never really had this anyway\\\n7:27 PM Actually as the recent GPII settings handler problems demonstrated, 100% of our architecture, as well as our base libraries such as jQuery, lack the ability to process trees like that anyway\\\n7:36 PM Well, actually we are stumped\\\n7:36 PM We have already chosen to use \"undefined output value\" our convention within the model transformation system to mean \"do not propagate any change to output\"\\\n7:44 PM ok, LOO TIME has brought results\\\n7:45 PM I started to think about falling back onto the \"exotic value\" system\\\n7:45 PM but this is also obviously unworkable\\\n7:45 PM Imagine something like fluid.transforms.linearScale encountering a value OF ANY KIND representing a deletion\\\n7:46 PM It's obviously never going to have any idea what to do with it\\\n7:46 PM Unless we special-case the code in each of our transforms, they're obviously going to mishandle it\\\n7:47 PM So, this obviously has to be handled (to start with) outside the reach of the model transforms system entirely\\\n7:48 PM Initially it should just be a primitive of the relay system - that any relay rule that receives a DELETE at source/target should just transfer this by default to a DELETE at the other ened\\\n7:49 PM In the future, I guess, we will have to add in some special casing for oddities like transforms which transform undefined ones into defined ones\\\n7:49 PM For example, the valueMapper does this in some configurations\\\n7:51 PM cindyli: ok, i see\\\n7:52 PM Bosmon: Well ok, thinking further, I think I realise we need to do even more\\\n7:53 PM **EVERY** relay rule, accepting ANY value of any kind, should immediately begin by deleting the value at the other end - if it thinks it is going to try to relay it\\\n7:53 PM Only if it succeeds in reestablishing it should the new value be accepted\\\n7:53 PM Actually I think this succeeds in solving all of our problems immediately\\\n7:53 PM Including several that we haven't run into yet\\\n7:54 PM However, trying to implement this new aggressive behaviour may well expose several other bugs lying in the system\\\n7:55 PM We have been relying, I think, as a kind of \"safety net\" that the default behaviour of the system is to do nothing, if it encounters some problem with a relay rule\\\n7:55 PM But the default behaviour of the system will now be to utterly destroy the value at the other end of a relay rule : P\\\n8:03 PM cindyli: ya, sounds a bit risky. would be safer to save the destroyed value for a future restore when a relay fails\\\n8:04 PM Bosmon: Well\\\n8:04 PM We will just have to try it\\\n8:04 PM Either the relay result is correct or it isn't : P\\\n8:05 PM We can't have an architecture which depends on accidental \"do-nothing\" behaviour...\\\n8:13 PM oh dear\\\n8:13 PM It appears that an ARCHITECTURAL PROBLEM prevents this simple solution from being very simple\\\n8:14 PM I may have to just shelve this as yet another problem to be solved when we rewrite the relay system\\\n8:14 PM Unfortunately the system \"has no idea\" at the level of change events when an instance of relay is beginning and ending\\\n8:14 PM What a stupid system\\\n8:15 PM All of the relays all funnel through fluid.registerDirectChangeRelay\\\n8:15 PM Which all it does is connect an incoming stream of changes on a target\\\n8:15 PM This makes it very hard to figure out when to apply the \"punctuation\" of sending in the DELETE ....\\\n8:17 PM cindyli: the good thing is, this jira is not blocking anything. we have time\\\n8:19 PM also, another change applier jira is on its way, you may wanna see that first before coming up with the solution\\\n8:19 PM Bosmon: ok\\\n8:19 PM Well, it may be possible to find a quicker path by special-casing the two kinds of transforms\\\n8:19 PM I've found the place to punctuate transforms which use a full \"modelRelay\" record\\\n8:20 PM Bosmon: And if this doesn't cause everything to explode, I can try to extend this to relays which just use implicit relay\\\n8:32 PM Bosmon: Hey cindyli\\\n8:32 PM I can now pass your test case : P\\\n8:32 PM cindyli: what did you do\\\n8:32 PM Bosmon: And amazingly it seems that nothing else blew up\\\n8:33 PM I will now extend your test case and my fix to deal with the \"implicit relay\" case\\\n8,33 PM cindyli: awesome. thanks, Bosmon\\\n8:34 PM Bosmon: <https://gist.github.com/amb26/5fcc3816dbd103bdb45d>\\\n8:34 PM Here's my current diff ....\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-17T07:54:15.283-0400",
      "body": "Hi, Antranig Basman and Cindy Li.  I have recently been bitten by this problem, as the gpii-binder uses the \"DELETE\" type to clear out model variables when form inputs are cleared.\n\nCheck out this example for a disturbing variation on the problem:\n\n```java\n/* eslint-env node */\r\n\"use strict\";\r\nvar fluid = require(\"infusion\");\r\n\r\nfluid.defaults(\"fluid.tests.deleteRelay\", {\r\n    gradeNames: [\"fluid.modelComponent\"],\r\n    model: {\r\n        deep: {\r\n            parentValue: true,\r\n            parentDelete: true,\r\n            childValue: true,\r\n            childDelete: true\r\n        }\r\n    },\r\n    components: {\r\n        child: {\r\n            type: \"fluid.modelComponent\",\r\n            options: {\r\n                model: \"{deleteRelay}.model\"\r\n            }\r\n        }\r\n    }\r\n});\r\n\r\nvar component = fluid.tests.deleteRelay();\r\n\r\nconsole.log(\"parent model before change:\", JSON.stringify(component.model, null, 2));\r\nconsole.log(\"child model before change:\", JSON.stringify(component.child.model, null, 2));\r\n\r\ncomponent.applier.change(\"deep.parentValue\", \"new parent value\");\r\ncomponent.applier.change(\"deep.parentDelete\", \"new parent value\", \"DELETE\");\r\n\r\nconsole.log(\"parent model after parent delete:\", JSON.stringify(component.model, null, 2));\r\nconsole.log(\"child model after parent delete:\", JSON.stringify(component.child.model, null, 2));\r\n\r\n\r\ncomponent.child.applier.change(\"deep.childValue\", \"new child value\");\r\ncomponent.child.applier.change(\"deep.childDelete\", \"new child value\", \"DELETE\");\r\n\r\nconsole.log(\"parent model after child delete:\", JSON.stringify(component.model, null, 2));\r\nconsole.log(\"child model after child delete:\", JSON.stringify(component.child.model, null, 2));\n```\n\nThis results in output like the following:\n\n```java\nparent model before change: {\r\n  \"deep\": {\r\n    \"parentValue\": true,\r\n    \"parentDelete\": true,\r\n    \"childValue\": true,\r\n    \"childDelete\": true\r\n  }\r\n}\r\nchild model before change: {\r\n  \"deep\": {\r\n    \"parentValue\": true,\r\n    \"parentDelete\": true,\r\n    \"childValue\": true,\r\n    \"childDelete\": true\r\n  }\r\n}\r\nparent model after parent delete: {\r\n  \"deep\": {\r\n    \"parentValue\": \"new parent value\",\r\n    \"childValue\": true,\r\n    \"childDelete\": true\r\n  }\r\n}\r\nchild model after parent delete: {\r\n  \"deep\": {\r\n    \"parentValue\": \"new parent value\",\r\n    \"parentDelete\": true,\r\n    \"childValue\": true,\r\n    \"childDelete\": true\r\n  }\r\n}\r\nparent model after child delete: {\r\n  \"deep\": {\r\n    \"parentValue\": \"new parent value\",\r\n    \"childValue\": \"new child value\",\r\n    \"childDelete\": true,\r\n    \"parentDelete\": true\r\n  }\r\n}\r\nchild model after child delete: {\r\n  \"deep\": {\r\n    \"parentValue\": \"new parent value\",\r\n    \"parentDelete\": true,\r\n    \"childValue\": \"new child value\"\r\n  }\r\n}\n```\n\nPlease note that on the next subsequent change to the child model, the variable that was deleted in the parent is recreated in the parent with the original value.  This is the kind of thing that is likely to come up often in even moderately complex groups of components that use the binder.\n\nI could use a pairing session to discuss this, if there is no one working on it, I will likely need to address this before my work with the UL can continue.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-25T07:34:18.098-0400",
      "body": "Justin Obara, I'm not sure why you changed the affects version, perhaps to get it off of some rollup list?  IMO it would be better to set the \"Affects Version\" to a recent release, and to set the \"Fix Version\" once a release with a verified fix is available.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-25T09:13:12.004-0400",
      "body": "Tony Atkins \\[RtF] the current intention is that this will be fixed for the Infusion 2.0 release, although that may change based on some discussions today. If the plan is changed, it will be reverted back to affecting 2.0 and the fix for removed or set to some future version.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-26T04:13:20.077-0400",
      "body": "In later discussions it was agreed that it wouldn't be fixed in 2.0: <https://github.com/fluid-project/infusion/pull/577#issuecomment-255371232>\n\nI see that Justin Obara put the right \"Affected Version\" back in already, so we're good to go.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-01-06T10:28:40.233-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/577> has been merged into the infusion repo master branch at 07cc0d5ba6fe85a4b910751c9db8cec6c501e3bc\n"
    }
  ]
}
---
When using "fluid.transforms.free" to relay the model change to the target, the removal from the source model doesn't get relayed.&#x20;

For example, if the initial model starts with: \
{\
a: true,\
b: true\
}

Then, modify the model to \
{\
a: true\
}

The modification doesn't get relayed to the target.

        