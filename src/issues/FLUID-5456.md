---json
{
  "title": "FLUID-5456",
  "summary": "Fix broken links in infusion-docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2014-06-23T15:53:39.279-0400",
  "updated": "2015-06-17T10:29:14.581-0400",
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
      "type": "Related to",
      "url": "/browse/FLUID-5452/",
      "key": "FLUID-5452",
      "summary": "Review the converted docs for links to framework API wiki pages"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-06-26T11:41:29.904-0400",
      "body": "Submitted a pull request: <https://github.com/fluid-project/infusion-docs/pull/20>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-10T09:24:15.251-0400",
      "body": "Changes merged in at 29fefc65d199083ecd0262c9a85de06add582831\n"
    }
  ]
}
---
Fix broken links in infusion-docs:

* Builder.md
* bad link SettingsStore.md \[page does not exist on wiki either]
* ChangeApplier.md
* EventSystem.md should be InfusionEventSystem.md
* Tutorial-ModelBearingComponent.md should be tutorial-gettingStartedWithInfusion/ModelComponents.md
* ChangeApplierAPI.md
* TutorialModelComponents.md -> tutorial-gettingStartedWithInfusion
* ComponentGrades.md
* BasicComponentCreationLittleComponents.md -> tutorial-gettingStartedWithInfusion
* TutorialEventedComponents.md -> tutorial-gettingStartedWithInfusion
* TutorialModelComponents.md -> tutorial-gettingStartedWithInfusion
* TutorialRendererComponents.md -> tutorial-gettingStartedWithInfusion
* TutorialSubcomponents.md -> tutorial-gettingStartedWithInfusion
* TutorialViewComponents.md -> tutorial-gettingStartedWithInfusion
* ComponentLifecycle.md
* TutorialSubcomponents.md -> tutorial-gettingStartedWithInfusion
* DeclarativeThisismInIoC.md
* bad link Expanders.md \[page does not exist on wiki either]
* FrameworkConcepts.md
* TutorialEventedComponents.md -> tutorial-gettingStartedWithInfusion
* TutorialModelComponents.md -> tutorial-gettingStartedWithInfusion
* TutorialViewComponents.md -> tutorial-gettingStartedWithInfusion
* InfusionEventSystem.md
* there are 2 instances of links with text "Event Types" which link back to this page;\
  &#x20;     on the wiki page they pointed to Infusion+Event+System#InfusionEventSystem-EventsTypes\
  &#x20;     maybe this section was removed?
* The first "Event Types" link for "unicast" type is removed since "unicast" is deprecated and no detail explanation is found.
* The second "Event Types" link for "preventable" is changed to point to InfusionEventSystem.md#declaring-an-event-on-a-component, where a explanation for "preventable" can be found.&#x20;
* IoCSS.md
* <http://wiki.fluidproject.org/display/docs/IoC+References> should be IoCReferences.md
* PreferencesEditor.md
* bad link SettingsStore.md \[page does not exist on wiki either]
* README.md
* RendererComponentsTrees.md should be RendererComponentTrees.md (remove extra "s" on "Components")
* RendererComponents.md
* ModelComponents.md -> tutorial-gettingStartedWithInfusion
* RendererDecorators.md
* Subcomponents.md -> tutorial-gettingStartedWithInfusion
* SubcomponentDeclaration.md
* TutorialViewComponents.md -> tutorial-gettingStartedWithInfusion
* tutorial-gettingStartedWithInfusion/DefineANamespaceAndCreateAClosure.md
* not a broken link, but "closure" is misspelled in the title: "Define a namespace and create a clousre"

        