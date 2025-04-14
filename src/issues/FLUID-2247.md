---json
{
  "title": "FLUID-2247",
  "summary": "Change argument list for activationHandler to agree with jQuery defaults",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2009-02-17T12:27:08.000-0500",
  "updated": "2009-11-13T08:58:32.000-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-04-14T11:44:15.000-0400",
      "body": "This issue wasn't actually fixed in Infusion 1.0. On line 591 of jquery.keyboard-a11y.js, you can see the code that invokes the activation handler:\n\nvar ret = binding.activateHandler(evt.target, evt);\n\nSo we're still invoking it in the weird two-arg style that I introduced way back in the first version.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-21T15:35:38.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-25T22:49:40.000-0400",
      "body": "In attempting to resolve this, I found it impossible - note that part of our contract is to allow a non-arg invocation of the form $(activatable).activate() - this call does not give rise to a jQuery event since \"activate\" is not registered with the overall jQuery system. Therefore no event can be delivered as the first argument to the activateHandler - whereas a DOM element can. \\\nKicking this back upstairs - there seem to be only two options, i) continue with our current signature, and document even more carefully that the \"evt\" 2nd argument may sometimes be missing, or else ii) upgrade \"activate\" to be a top-level genuine jQuery event.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-26T15:58:24.000-0400",
      "body": "After a brief discussion in the channel, we agreed that we'll create a real jQuery custom event called \"fluid-activate.\" While this name is slightly awkward, it will prevent any namespacing conflicts with other custom events. Most users will not need to know this particular implementation detail, though. 🙂\n\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-05-26> starting at about \\[15:28:00 EDT(-0400)]\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-26T22:44:50.000-0400",
      "body": "Implemented as discussed with \"fluid-activate\" event. Test cases adjusted - there are believed to be no usages of this callback anywhere in the framework and samples, so this should hopefully cause no further disruption. This new model is somewhat more straightforward than the old implementation and has allowed us to save some code. However, the plugin as a whole still needs a fair amount of work to streamline its idiom.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T08:58:32.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
As part of <https://fluidproject.atlassian.net/browse/FLUID-2243#icft=FLUID-2243>, the return value of the activation handler was adjusted to agree with jQuery/browser defaults. Changing the argument list to also conform, that is, to consist of a single argument which is a jQuery event, should also be done, but was too significant a change for the 0.8 release. This needs to be done for 1.0, documentation, test cases and all samples updated.

        