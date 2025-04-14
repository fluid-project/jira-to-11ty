---json
{
  "title": "FLUID-5082",
  "summary": "Automatically supply \"soft namespaces\" for listeners which are registered without them",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-07-03T17:33:09.301-0400",
  "updated": "2014-03-03T11:48:34.485-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-07-20T22:49:54.808-0400",
      "body": "Almost immediately on merging with trunk, the strategy described originally in this JIRA was found to be unworkable. This caused a failure in the new design of the Pager described in <https://fluidproject.atlassian.net/browse/FLUID-4035#icft=FLUID-4035>. This resulted in a well-factored design, resulting in many subscribers attached to the same event from many different sources. The \"soft namespaces\" strategy above was found to be faulty since it caused one of the several listeners to the base \"onModelChange\" event defined in the top level \"fluid.pager\" component to become lost, as a result of the system interpreting the namespace structure as one which intended an override of a \"soft namespace\" assigned to one of the events. The listeners were as follows, in order of registration:\n\ni) \"onModelChange\" listener registered in \"fluid.table.selfRender\" - this was given a \"hard namespace\" of \"onModelChange\" (probably not a good idea in itself)\n\nfluid.defaults(\"fluid.table.selfRender\", {\\\n...\\\nonModelChange: \\[{\\\nfuncName: \"fluid.table.onModelChange\",\\\nnamespace: \"onModelChange\",\\\nargs: \\[\"{fluid.table}\", \"{fluid.table.selfRender}\", \"{arguments}.0\", \"{arguments}.1\"] // newModel, oldModel\\\n}\n\nii) \"onModelChange\" listener registered in \"fluid.pager.summary\" - this was assigned a \"soft namespace\" of \"onModelChange\", but due to an implementation bug, this was stripped off during the proxied \"addListener\" inside fluid.event.resolveEvent which was not aware of the 5th argument \"softNamespace\". This became interpreted as a hard namespace and then displaced the selfRender listener\n\nfluid.defaults(\"fluid.pager.summary\", {\\\n...\\\nonModelChange: {\\\nfuncName: \"fluid.pager.summary.onModelChange\",\\\nargs: \\[\"{that}.container\", \"{that}.options.strings.message\", \"{arguments}.0\", \"{arguments}.1\"] \\\n}\n\niii) \"onModelChange\" listener registered in \"fluid.pager.directPageSize\". this was also assigned a soft namespace of \"onModelChange\" but as a result of the different injection strategy (this component used direct injection of the event into the listeners entry, rather than wholesale injection of the event as in \"fluid.pager.summary\") did not fall victim to the bug in case ii). Therefore the two listeners ii) and iii) were allowed to coexist:\n\nfluid.defaults(\"fluid.pager.directPageSize\", {\\\n...\\\n\"{pager}.events.onModelChange\": {\\\nfuncName: \"fluid.pager.directPageSize.onModelChange\",\\\nargs: \\[\"{that}.container\", \"{arguments}.0\", \"{arguments}.1\"] // newModel, oldModel\\\n}\n\nDespite the failure in the pager resulting from an implementation bug, this confusion of namespaces is very painful and could very easily have resulted in a failure with only a very slightly different design. In order to rescue this implementation feature, we need to make sure that \"soft namespaces\" are much more fully qualified in order to hugely reduce the risk of unanticipated confusion between listeners registered in widely different places. It should be extremely difficult to \"accidentally\" override a listener which has been supplied with a soft namespace.\n\nOur new approach is to supply the FULL component name as the prefix for any soft namespace. Therefore the soft namespaces for the two latter listeners would be \"fluid.pager.summary.onModelChange\" and \"fluid.pager.directPageSize.onModelChange\". These also happen to agree with their full global function names. When dealing with \"this-ist\" records we will also normalise the eccentric hyphen that occured in the soft namespace name - thus in the following case:\n\nfluid.defaults(\"fluid.tests.FLUID5082Parent\", {\\\n...\\\nonCreate: \\[{\\\n\"this\": \"{that}.self\",\\\nmethod: \"FLUID5082invoker2\",\\\nargs: \\[\"{that}\", 3]\\\n}\n\nwe expect the soft namespace to be \"fluid.tests.FLUID5082Parent.self.FLUID5082invoker2\" - certainly a name unlikely to be uttered by accident.\n\nThe use of soft namespaces should be hugely reduced once we have an implementation of the \"new renderer\" for <https://fluidproject.atlassian.net/browse/FLUID-5047#icft=FLUID-5047> - this will unflatten what are currently long lists of \"onCreate\" entries back into \"decorators\" records in a new top-level block mirroring the functionality of \"old decorators\" in the \"old Renderer\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-07-22T21:12:10.394-0400",
      "body": "Merged into trunk at revision acf4633\n"
    }
  ]
}
---
One of the primary goals of declarative programming as with the IoC system is to help the work of 3rd and higher parties to reconfigure components. With the rewrite work that has been progressing over the last couple of months, large amounts of material have moved out from being hidden from closure blocks and "init functions" to appearing, primarily, as long lists of "onCreate" listeners.

Whilst these are now part of declarative configuration and hence in theory declaratively overrideable from derived grades etc., in practice, without a suitable namespace to identify a particular "onCreate" listener, it is impossible to single it out for overriding. In other cases (invokers, dedicated event listeners) this problem is less acute because there is less ambiguity about which block is being addressed.

So far, we have been encouraging original component authors to put namespaces on ALL event listeners declaratively registered, to aid precisely this goal of integrators. However, this is cumbersome and increases the length of configuration. What would be useful is an automatic convention that will invent a namespace from the configuration, if a suitable name can be found, and hopefully in a way that doesn't increase the risk of undesirable collisions.

For example, in the following onCreate block:

{\
"this": "{that}.container",\
method: "mouseout",\
args: "{that}.refreshView"\
}

a suitable name would be "mouseout", and in the following one:

{\
funcName: "demo.fiveStar.bindChangeListener",\
args: "{that}"\
}

it would be "bindChangeListener".

An integrator working with arguments or a derived grade could then explicitly override these particular listeners by supplying the same namespace explicitly.

We would need care in the implementation to avoid "inadvertent" overwriting. There should be a rule that prevents a listener with an "auto-assigned" namespace from overriding another one which happens to have been auto-assigned to the same namespace - these namespaces in this sense are then "soft".

        