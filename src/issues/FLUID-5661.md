---json
{
  "title": "FLUID-5661",
  "summary": "Improve documentation of PrefsEditorLoader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "Anastasia Cheetham",
  "date": "2015-04-30T14:40:27.641-0400",
  "updated": "2024-07-22T10:35:14.482-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-06-11T13:22:39.839-0400",
      "body": "I'm writing the PGA architecture report right now, and I am again struck by the lack of documentation for this component. The comments in the code describe it as \"the only Preferences Editor component that is intended to be called by the outside world\" – as such, it really should be documented!\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-07-07T08:38:37.783-0400",
      "body": "The PrefsEditorLoader is abolished in 5.0, and replaced by an all in one \"loader and driver\" fluid.prefs.weaver which will be a base grade of an instantiated fluid.uiOptions - documentation will be unified centred on that\n"
    }
  ]
}
---
Our prefs framework documentation doesn't effectively communicate what the PrefsEditorLoader component does. It's described in the file LocalizationInThePreferencesFramework.md, but it would likely never occur to anyone to look for the information there. Now that the type of prefs editor is specified using a grade passed to the PrefsEditorLoader, we should probably surface that information more clearly.

In particular:

In the file AuxiliarySchemaForPreferencesFramework.md, the "loaderGrades" property is described, but there's no explanation of just what a prefsEditorLoader is (nor any link to any explanation), and there's no explanation of why you might want to apply particular grades to one (other than modifying the default prefs editor type, which is mentioned almost as an aside).

The information in LocalizationInThePreferencesFramework.md that describes the PrefsEditorLoader should be double-checked for accuracy. It currently make the component sound like it's primarily responsible for loading resources, but given that it also loads the actual prefs editor itself, there might be more information that might be useful.

We should consider moving the "Preferences Editor Component Hierarchy" description out of the Localization page into a more general spot – and ensuring it is up-to-date. I suspect that such an overview might be helpful to users of the prefs framework, and could be referenced by other places in the docs that talk about grades, etc. that affect the process (such as the "loaderGrades" property).

        