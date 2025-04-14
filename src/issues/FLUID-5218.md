---json
{
  "title": "FLUID-5218",
  "summary": "Prefs editor requires iFrame template to be in same place as panel templates; it probably shouldn't",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-11-21T11:51:54.049-0500",
  "updated": "2024-07-22T14:52:49.507-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6749/",
      "key": "FLUID-6749"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-11-21T15:57:53.606-0500",
      "body": "Of course, if the integrator is designing their own templates, they're probably going to have their own styles, in which case they'll have to copy the SeparatedPanelPrefsEditorFrame.html in order to add the link to the css file.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:52:41.127-0400",
      "body": "The iframe was removed with FLUID-6749\n"
    }
  ]
}
---
Currently, the prefs framework builder allows the aux schema to specify a 'template prefix' which is used as the path to all the templates, including both panel templates and the SeparatedPanelPrefsEditorFrame.html template.

From an integrator's perspective, the SeparatedPanelPrefsEditorFrame.html is conceptually in a different class than the panel templates. The panel templates are mine to design, custom to my implementation, but it's likely rare that I'd ever want to customize the SeparatedPanelPrefsEditorFrame.html I think the iFrame template should be treated as a special case.

I recommend that the framework somehow default to use the SeparatedPanelPrefsEditorFrame.html that is present in the framework's own html folder. This would require the integrator to specify an additional prefix, the relative path to the framework html folder. This could perhaps be called "panelTemplatePrefix" or something similar.

If the integrator perhaps **does** want to create their own custom SeparatedPanelPrefsEditorFrame.html, then they could simply set "panelTemplatePrefix" to wherever the template it - perhaps event the same value as "templatePrefix" if that's where they put it.

        