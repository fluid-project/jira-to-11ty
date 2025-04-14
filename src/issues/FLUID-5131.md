---json
{
  "title": "FLUID-5131",
  "summary": "Improve the schema version of UIO to support one panel with multiple templates",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-09-11T10:33:42.995-0400",
  "updated": "2013-10-28T08:52:51.388-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-13T15:39:38.148-0400",
      "body": "The e-mail thread that kicked off this whole discussion:\\\n<http://fluid.2324889.n4.nabble.com/Combining-complex-panels-in-the-preferences-framework-td8799.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-13T15:40:52.351-0400",
      "body": "More discussion from todays channel logs starting at \\[13:56:53 CDT(-0500)]\\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-09-13>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-20T15:31:00.959-0400",
      "body": "The subpanels need to share the refreshView method and afterRender event from the parent panel. This is to ensure that the rendering always happens in the parent and to maintain any event bindings and calls to refreshView that may already be associated with the subpanel. However, since these subpanels are not known in advance, the parent panel will need to generate the necessary configuration.&#x20;\n\nIt would seem that distribute options would be needed to pass down this configuration from the parent panel to the sub panels.\n\n1\\) use an expander to generate the distributeOptions to know where to pass along the override configuration. However, distribute options doesn't seem to accept an expander.\\\n<https://github.com/fluid-project/infusion/blob/74ac01a0cd935ca17cc646b3c0ff8fcdf42d0c1c/src/framework/core/js/FluidIoC.js#L314-L364>\n\n2\\) use an expander to generate the options for all of the subpanels and pass it down to the parent's components option. However, distributeOptions passes along the expander instead of the expanded value.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-23T15:22:02.194-0400",
      "body": "More discussion from today's channel logs starting at \\[13:37:45 CDT(-0500)]\\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-09-23>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-30T15:45:28.322-0400",
      "body": "More discussion from today's channel logs starting at \\[13:37:54 CDT(-0500)]\\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-09-30>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-02T10:36:05.997-0400",
      "body": "More discussion in the IRC channel starting at \\[12:45:21 CDT(-0500)]\\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-10-01>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-02T10:37:07.802-0400",
      "body": "More discussion from today's channel logs starting at \\[08:21:12 CDT(-0500)]\\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-10-02>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-02T11:00:13.171-0400",
      "body": "Documentation for fluid.uiOptions.compositePanel\n\nOverview:\\\n\\=======\\\nA compositePanel is a fluid.uiOptions.panel, but it has the additional behaviour of combining together several subPanels. To achieve this, the composite panel handles the rendering actions, creates the modelRelay rules to link it's model with the subPanels and the creation a consolidated preference map which it exposes in its options.\n\nPreferenceMap\\\n\\===========\n\nThe preferenceMaps from all of the subPanels are pulled are combined into the compositePanel. The preference keys remain the same, but their configurations are modified. The model paths are rescoped to the compositePanel (note: that the value used in the composite model is the preferenceKey with the \".\" replaced by \"\\_\".). Any other option directives in the preferenceMap are modified to reference the subPanels components block in the composite panel.\n\nSelectors\\\n\\=======\n\nAn integrator must supply selectors used to reference the containers for the subPanels, in the compositePanel's template. These selectors should also be added to the \"selectorsToIgnore\" option, so that they won't interfere with rendering. The selectors from the subPanels needed for rendering are surfaced to the compositePanel. To prevent any collisions, they are namespaced with the subPanel's member name, and scoped to the subPanel's container. (e.g. subPanel1\\_header: \".subPanel1 .header\").\n\nTemplates\\\n\\========\n\nAll of the templates for the panel and subPanels should be supplied to the compositePanel's resources block. The subPanel's templates should be keyed off of their member name, while the compositePanel's template should be off of the \"template\" key. The compositePanel's template is essentially a template template, and is used to indicate how the subPanels should be arranged. This will be combined with the subPanel templates and used for rendering.\n\nRendering\\\n\\=======\n\nRendering in the compositePanel will occur whenever refreshView is called on the compositePanel or any of the subPanels. The afterRender event will be fired from the compositePanel as well as all of the subPanels. However, rendering will only occur in the compositePanel. See templates: for how the templates are combined. The protoTrees of the subPanels are automatically combined and rebased to the compositePanel in the compositePanel's call to produceTree. The subPanels will all be reinitialized after each rendering, to ensure that their DOM bindings are all up-to-date.\n\nRequirements\\\n\\===========\n\nWhen creating a compositePanel the integrator must supply the following options.\n\n1. The components block to indicate which subPanels to use.&#x20;\n   * All subPanels should include {createOnEvent: \"initSubPanels\"}\n2. Selectors for the containers of each subPanel referencing a DOM element in it's template\n   * these selectors should have the same name as the subPanels member name\n3. Templates for the compositePanel, and for each of the subPanels\n   * subPanel templates should be keyed with the same name as the subPanel's member name\n   * the compositePanel's template must be off the \"template\" key and be template for inserting the other templates into\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-24T14:44:57.408-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/423> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-28T08:52:39.048-0400",
      "body": "Merged Pull Request at 5b631da3519a797684a89a8fb494ca5a14ba2f22\n"
    }
  ]
}
---
The discussion of this improvement was logged in IRC channel @ <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-09-10>, from \[12:36:10 CDT(-0500)] onwards.

There are two main parts to this issue:\
1\. Update the auxiliary schema to allow for the definition of multiple templates for one panel.

singel template:

template: "path to template"

mutlple templates:&#x20;

template: {\
foo: "path to template foo",\
bar: "path to template bar"\
}

2\. Create a panel combining panel. Each preference is associated with a panel. This grade would combine several individual panels into a single one. It will need to do the following things to achieve this.

a. combine the individual preference maps\
b. combine the individual templates\
– the parent will need to have a template for how to combine the individual templates\
c. combine the prototrees\
d. combine the selectors used for rendering\
– selectors should somehow be associated with their original panel (e.g. namespace, nesting, etc.)\
– selectos should be scoped to their original panel's container \
– selectors will need to be updated in the combined prototree to refer to these\
e. subcomponents will need to have the parent's afterRender event boiled to theirs\
f. subcomponents will need to have their refreshView methods reassigned to the parents\
g. subcomponents cannot render on init\
h. subcomponents should be created after the parent, so that the parent can set their options.\
i. the parent will have to setup the model relay rules (should be configured automatically with the preference map. Similar to how it works for the uio builder)

3\. fluid.uiOptions.panels should be renamed to fluid.uiOptions.panel and include an empty preference map. All panels will need preference maps.

        