---json
{
  "title": "FLUID-5452",
  "summary": "Review the converted docs for links to framework API wiki pages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2014-06-19T11:26:59.637-0400",
  "updated": "2014-06-23T16:04:06.008-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5455/",
      "key": "FLUID-5455"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5456/",
      "key": "FLUID-5456"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5363/",
      "key": "FLUID-5363"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2014-06-20T16:19:45.528-0400",
      "body": "I have reviewed the links on the existing pages (not only for framework API, but also for missing pages). Here's what I found:\n\n* APIChangesFrom1\\_4To1\\_5.md \\[good]\n* AuxiliarySchemaForPreferencesFramework.md \\[good]\n* Builder.md\n* fluid.invokeGlobalFunction\n* missing SettingsStore.md \\[page does not exist on wiki either]\n* ChangeApplier.md\n* EventSystem.md should be InfusionEventSystem.md\n* Tutorial-ModelBearingComponent.md should be tutorial-gettingStartedWithInfusion/ModelComponents.md\n* ChangeApplierAPI.md\n* TutorialModelComponents.md -> tutorial-gettingStartedWithInfusion\n* ComponentGrades.md\n* fluid.defaults\n* missing ContextsAndDemands.md\n* missing DOMBinder.md\n* BasicComponentCreationLittleComponents.md -> tutorial-gettingStartedWithInfusion\n* TutorialEventedComponents.md -> tutorial-gettingStartedWithInfusion\n* TutorialModelComponents.md -> tutorial-gettingStartedWithInfusion\n* TutorialRendererComponents.md -> tutorial-gettingStartedWithInfusion\n* TutorialSubcomponents.md -> tutorial-gettingStartedWithInfusion\n* TutorialViewComponents.md -> tutorial-gettingStartedWithInfusion\n* <http://wiki.fluidproject.org/display/fluid/New+Notes+on+the+ChangeApplier>\n* ComponentLifecycle.md\n* TutorialSubcomponents.md -> tutorial-gettingStartedWithInfusion\n* <http://wiki.fluidproject.org/display/Infusion14/Component+Lifecycle+and+autoInit>\n* ComponentOptionsAndDefaults.md\n* fluid.defaults\n* missing ComponentConfigurationOptions.md\n* Contexts.md \\[good]\n* Cutpoints.md\n* fluid.renderer.selectorsToCutpoints\n* fluid.rendererComponent\n* DeclarativeThisismInIoC.md\n* missing Expanders.md \\[page does not exist on wiki either]\n* DeprecationsIn1\\_5.md \\[good]\n* Enactors.md\n* fluid.viewComponent\n* EventInjectionAndBoiling.md\n* missing IoCInversionOfControl.md\n* Events.md\n* do we really need this landing page?\n* ExpansionOfComponentOptions.md \\[good]\n* FrameworkConcepts.md\n* missing ComponentConfigurationOptions.md\n* missing Components.md\n* missing DOMBinder.md\n* missing Pager.md\n* TutorialEventedComponents.md -> tutorial-gettingStartedWithInfusion\n* TutorialModelComponents.md -> tutorial-gettingStartedWithInfusion\n* TutorialViewComponents.md -> tutorial-gettingStartedWithInfusion\n* HowToUseInfusionIoC.md\n* fluid.defaults\n* HowToUseTheRenderer.md\n* fluid.fetchResources\n* fluid.reRender\n* fluid.render\n* fluid.selfRender\n* InfusionEventSystem.md\n* missing ComponentConfigurationOptions.md\n* missing InversionOfControl.md\n* missing Reorderer.md\n* there are 2 instances of links with text \"Event Types\" which link back to this page\\\n  &#x20;     on the wiki page they pointed to Infusion+Event+System#InfusionEventSystem-EventsTypes\\\n  &#x20;     maybe this section was removed?\n* Invokers.md \\[good]\n* IoCReferences.md \\[good]\n* IoCSS.md\n* <http://wiki.fluidproject.org/display/docs/IoC+References> should be IoCReferences.md\n* ModelRelay.md\n* fluid.defaults\n* missing ModelTransformation.md\n* <http://wiki.fluidproject.org/display/fluid/New+Notes+on+the+ChangeApplier>\n* OptionsMerging.md\n* missing UnderstandingComponentOptionsAndTheirDefaults.md\n* PreferencesEditor.md\n* missing SettingsStore.md \\[page does not exist on wiki either]\n* missing UIEnhancer.md\n* PrimarySchemaForPreferencesFramework.md \\[good]\n* ProgressiveEnhancement.md \\[good]\n* ProtoComponentTypes.md\n* fluid.formatMessage\n* Renderer.md \\[good]\n* RendererComponents.md\n* fluid.fetchResources\n* fluid.renderer.createRendererSubcomponent\n* ModelComponents.md -> tutorial-gettingStartedWithInfusion\n* RendererComponentTreeExpanders.md \\[good]\n* RendererComponentTrees.md\n* missing Components.md\n* RendererDecorators.md\n* missing Components.md\n* missing FluidComponentAPI.md \\[link goes nowhere in wiki]\n* Subcomponents.md -> tutorial-gettingStartedWithInfusion\n* SubcomponentDeclaration.md\n* fluid.defaults\n* missing ModelTransformation.md\n* TutorialViewComponents.md -> tutorial-gettingStartedWithInfusion\n* UnderstandingInfusionComponents.md\n* fluid.defaults\n\ntutorial-gettingStartedWithInfusion:\n\n* BasicComponentCreation-LittleComponents.md\n* fluid.defaults\n* missing InlineEdit.md\n* missing IoC-InversionOfControl.md\n* missing Progress.md\n* DefineANamespaceAndCreateAClosure.md\n* fluid.registerNamespace\n* EventedComponents.md\n* missing Reorderer.md\n* missing Uploader.md\n* GettingStartedWithInfusion.md \\[good]\n* ModelComponents.md\n* missing ModelObjects.md \\[the wiki links to a 1.3 page: http://wiki.fluidproject.org/display/Infusion13/Model+Objects]\n* missing Pager.md \\[the wiki links to a 1.3 page: http://wiki.fluidproject.org/display/Infusion13/Pager]\n* missing UserInterfaceOptions.md\n* PickAComponentType.md \\[good]\n* RendererComponents.md\n* missing Components.md\n* missing ModelTransformation.md\n* SetUpYourEnvironment.md\n* missing DeveloperIntroductionToInfusionFramework.md\n* <http://wiki.fluidproject.org/display/fluid/Contributing+Code>\n* Subcomponents.md\n* missing PagerSubcomponents.md \\[wiki links to a 1.3 page: http://wiki.fluidproject.org/display/Infusion13/Pager+Subcomponents]\n* missing UserInterfaceOptions.md\n* ViewComponents.md\n* missing DOMBinder.md\n"
    },
    {
      "author": "Simon Bates",
      "date": "2014-06-20T16:20:17.660-0400",
      "body": "Summary of the above.\n\nReferenced Framework API\n\n* fluid.defaults\n* fluid.fetchResources\n* fluid.formatMessage\n* fluid.invokeGlobalFunction\n* fluid.registerNamespace\n* fluid.render\n* fluid.renderer.createRendererSubcomponent\n* fluid.renderer.selectorsToCutpoints\n* fluid.rendererComponent\n* fluid.reRender\n* fluid.selfRender\n* fluid.viewComponent\n\nLinks to missing pages\n\n\\[with the assessment from http://wiki.fluidproject.org/display/fluid/Infusion+Documentation+Plan]\n\n* ComponentConfigurationOptions.md \\[should probably be rethought]\n* Components.md\n* ContextsAndDemands.md\n* DeveloperIntroductionToInfusionFramework.md\n* DOMBinder.md \\[ok but I think reads confusingly]\n* Expanders.md \\[page does not exist on wiki either]\n* FluidComponentAPI.md \\[page does not exist on wiki either]\n* InlineEdit.md\n* IoCInversionOfControl.md \\[needs more modern treatment and motivation]\n* also \"InversionOfControl.md\"\n* also \"IoC-InversionOfControl.md\"\n* ModelObjects.md \\[latest version appears to be: http://wiki.fluidproject.org/display/Infusion13/Model+Objects]\n* ModelTransformation.md \\[ok but incredibly incomplete]\n* Pager.md\n* PagerSubcomponents.md \\[latest version appears to be: http://wiki.fluidproject.org/display/Infusion13/Pager+Subcomponents]\n* Progress.md\n* Reorderer.md\n* SettingsStore.md \\[page does not exist on wiki either]\n* UIEnhancer.md \\[out of date]\n* UnderstandingComponentOptionsAndTheirDefaults.md\n* Uploader.md\n* UserInterfaceOptions.md\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-23T10:56:15.823-0400",
      "body": "Links to github for referenced framework api. these links all point to the Infusion 1.5 tag of the repo. Github's search seemed too fuzzy to be able to use directly for these references.\n\n* fluid.defaults\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L1519-L1539>\n\n- fluid.fetchResources\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/FluidRequests.js#L24-L50>\n\n* fluid.formatMessage\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/JavaProperties.js#L93-L115>\n\n- fluid.invokeGlobalFunction\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L930-L944>\n\n* fluid.registerNamespace\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L957-L966>\n\n- fluid.render\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/fluidRenderer.js#L1551-L1570>\n\n* fluid.renderer.createRendererSubcomponent\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/RendererUtilities.js#L62-L100>\n\n- fluid.renderer.selectorsToCutpoints\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/RendererUtilities.js#L268-L285>\n\n* fluid.rendererComponent\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/RendererUtilities.js#L139-L141>\n\n- fluid.reRender\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/fluidRenderer.js#L1480-L1527>\n\n* fluid.selfRender\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/fluidRenderer.js#L1572-L1588>\n\n- fluid.viewComponent\\\n  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/FluidView.js#L34-L36>\n"
    }
  ]
}
---
We will need a solution for the 1.5 docs for links to framework API pages. As a first step, we will review the converted docs and identify the existing links.

For this task:

* Review each converted page in <https://github.com/fluid-project/infusion-docs>
* Record a count of the number of framework API links in each page

        