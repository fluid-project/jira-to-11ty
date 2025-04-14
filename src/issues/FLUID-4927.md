---json
{
  "title": "FLUID-4927",
  "summary": "Create presentation ants for each of the UIO settings",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-03-01T14:29:28.473-0500",
  "updated": "2013-04-29T09:43:22.524-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4974/",
      "key": "FLUID-4974"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-03-14T16:46:52.565-0400",
      "body": "Hi Justin - thanks for the detail here, the overall plan looks sound. A few things occur -&#x20;\n\na) The relationship between \"SettingView\" and \"SettingPanel\" seems unclear in the design - I only see any uses of the later. Could you clarify their responsibility, and the specific support that the \"eventedModel\" grade will give to them? It would be nice to see some uses of this grade in the sample configuration\\\nb) I am wondering whether we don't want to bias the interpretation of a panel to just containing a singular \"Setting\" - might \"SettingsView\" and \"SettingsPanel\" be better names?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-03-14T19:04:12.234-0400",
      "body": "Thanks for the feedback Antranig.\n\na) The settingPanel is just the thing that does the grouping of the common setting(s). It has a title and one or more containers for the subcomponents (the actual setting widgets). The SettingView is just a grade that tries to give viewComponents an api that more closely resembles that of a renderComponent. This is mainly through the requirements of a refreshView method and a afterRender event. I've dropped the eventedModel from the description above after having looked at some of Cindy's changes in her work for <https://fluidproject.atlassian.net/browse/FLUID-4908#icft=FLUID-4908>. Since each setting is only going to have its own model, it will probably be easiest for it to just bind it's own events. Perhaps this can be brought back for wiring up just an afterModelChanged event to the whole model.\n\nb) I've changed the name to SettingsPanel, so as not to bias things. However I feel that the settingView is just a single setting. I've added some more examples about cases where the panel would contain one or more settings, and some examples of what an integrator would use to create a settings widget.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-03-14T19:17:58.492-0400",
      "body": "Example of what the eventedModel grade might look like.\n\nfluid.defaults(\"fluid.eventedModel\", {\\\ngradeNames: \\[\"fluid.modelComponent\", \"fluid.eventedComponent\", \"autoInit\"],\\\nfinalInitFunction: \"fluid.eventedModel.finalInit\",\\\nmodel: {},\\\nevents: {\\\nafterModelChanged: null\\\n}\\\n});\n\nfluid.eventedModel.finalInit = function (that) {\\\nthat.applier.onModelChanged.addListener(\"\", that.events.afterModelChanged.fire);\\\n};\n\nThis basically just exposes the applier's onModelChanged event to an actual component event. Anything using this grade, and any integrator as well, would be able to just listen to the afterModelChanged event.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-03-14T20:44:31.483-0400",
      "body": "Chatted about this in the channel today. The approach outlined here may be too ambitions for the immediate concerns and we will have to have more discussion about where to source the markup/templates from. For now the first step will be to work backwards from the existing implementation. 1) try to create an empty UIO without other modifications to the settings and panels 2) begin to break down the settings and panels. For now we will continue to work under the model where templates are fetched and rendered at the panel level.\n\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-03-14>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-04-26T14:01:58.697-0400",
      "body": "Merged pull request into project repo at 6b19e2e0b8781cedd9570774d2e95be94d1f83a0\n"
    }
  ]
}
---
Similar to the work being done in <https://fluidproject.atlassian.net/browse/FLUID-4908#icft=FLUID-4908>. The presentation settings contained within UI Options should be broken down into individual presentation ants for each setting.&#x20;

The first step will involve building up a grade for view components that will provide a common interface with renderComponents. Namely they will consist of the following:

1\) a refreshView method which will be called to handle the rendering/displaying of the gui\
2\) an afterRender event, to be fired after the refreshView method has finished executing

example defaults:

fluid.defaults("fluid.settingView", {\
gradeNames: \["fluid.viewComponent", "autoInit"],\
events: {\
// must be fired at the completion of refreshView invocation\
afterRender: null\
},\
listeners: {\
onCreate: "{that}.refreshView"\
},\
invokers: {\
refreshView: {\
funcName: "fluid.settingView.needToImplement", //replace with specific function to render our the view\
args: \["{that}"]\
}\
}\
});

After this structure has been implemented, panel components for the new designs will be started in a separate file. The initial pass will be focused on getting things working, with more refinements to the markup coming later.&#x20;

Generic Panel component: (perhaps the fetch resources portion should be moved to a new grade)

fluid.defaults("fluid.settingsPanel", {\
gradeNames: \["fluid.viewComponent", "autoInit"],\
selectors: {\
title: ".flc-settingsPanel-title",\
settingsContainer: ".flc-settingPanel-settingsContainer"\
},\
strings: {\
title: "Settings"\
},\
styles: {\
title: ".fl-settingsPanel-title"\
},\
invokers: {\
displayTitle: {\
funcName: "fluid.settingsPanel.displayTitle",\
args: \["{that}"]\
},\
appendTemplate: {\
funcName: "fluid.settingsPanel.appendTemplate",\
args: \["{that}.container", "{that}.options.resources.template.resourceText", "{that}.events.afterTemplateLoaded.fire"]\
}\
},\
events: {\
afterTemplateFetched: null,\
afterTemplateLoaded: null\
},\
listeners: {\
onCreate: {\
listener: "fluid.fetchResources",\
args: \["{that}.options.resources", "{that}.events.afterTemplateFetched.fire"]\
},\
afterTemplateFetched: "{that}.appendTemplate",\
afterTemplateLoaded: "{that}.displayTitle"\
},\
resources: {\
template: {\
forceCache: true,\
url: "../html/SettingsPanelTemplate.html"\
}\
}\
});

An integrator looking to create a panel would then create something like the following.

fluild.uiOptions(".container", {\
...\
components: {\
singleSetingPanel: {\
type: "fluid.settingsPanel",\
container: "{that}.dom.newPanelContainer",\
options: {\
strings: {\
title: "Single Setting Panel Title"\
},\
components: {\
// Settings Widget config goes here\
}\
}\
},\
multiSetingPanel: {\
type: "fluid.settingsPanel",\
container: "{that}.dom.newPanelContainer",\
options: {\
selectors: {\
firstSettingContainer: ".flc-settingPanel-firstSettingContainer",\
secondSettingContainer: ".flc-settingPanel-secondSettingContainer"\
},\
strings: {\
title: "Multi Setting Panel Title"\
},\
components: {\
settingOne: {\
container: "{settingsPanel}.dom.firstSettingContainer"\
// Settings Widget config goes here\
},\
settingTwo: {\
container: "{settingsPanel}.dom.secondSettingContainer\
// Settings Widget config goes here\
}\
}\
}\
}\
}\
...\
});

Examples of the setting widgets that would be used as subcomponents of the settingsPanels.

fluid.defaults("redererBasedSetting", {\
gradeNames: \["fluild.rendererComponent", "autoInit"],\
// typical renderer component setup here\
});

fluid.defaults("viewBasedSetting", {\
gradeNames: \["fluid.settingView", "autoInit"],\
invokers: {\
refreshView: "renderBasedSetting.renderView" // renders the view. Meant for component that are rendered without the Renderer (e.g. jquery ui widgets).\
}\
// typical fluid.viewComponent configuration here\
});

We'll likely want to pre-configure some panels for our new settings.. Example a contrast panel that includes the contrast widget. We may also want to preconfigure panels that contain multiple widgets similar to the Infusion 1.4 implementation of UIO.

More details on the plans for this work as a whole can be seen on an e-mail thread to the fluid-work list:\
<http://old.nabble.com/Summary-of-UIOptions-Architecture-meeting-this-afternoon-to35149865.html>

        