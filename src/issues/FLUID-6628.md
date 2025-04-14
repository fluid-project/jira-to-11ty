---json
{
  "title": "FLUID-6628",
  "summary": "Allow separated panel to start open",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-06-08T11:50:34.154-0400",
  "updated": "2021-06-08T12:21:05.920-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "Sliding Panel",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6606/",
      "key": "FLUID-6606",
      "summary": "Investigate a method to exempt the preferences pane from currently applied contrast theme without requiring an iframe"
    }
  ],
  "attachments": [],
  "comments": []
}
---
A [question](https://github.com/fluid-project/uio-wordpress-plugin/issues/13) came up for the [uio-wordpress-plugin](https://github.com/fluid-project/uio-wordpress-plugin) requesting to have the panel open by default.

The uio-wordpress-plugin doesn't expose many options in through the admin panel; only some selectors. This should be improved eventually, but there is also a way to edit the plugin itself, and as such could be used to modify the configuration.

However, there is no easy/straightforward way to set the panel to be open by default. The slidingPanel does have a model value, isShowing, but this is excluded on init. It also has a showPanel method; which updates the model value, and triggers the process for expanding the panel. This sort of works, but the contents of the panel are not made visible. This may have something to do with the height of the panel not being set properly. The separated panel prefsEditor has an onSignificantDOMChange event which is used to update the panel height.

I have tried using showPanel and onSignificantDOMChange but the panel still isn't being properly expanded. It may have something to do with timing issues when called during the initialization process. For example the afterPanelShow event is triggered asynchronously in the separated panel prefs editor. Although even triggering onSignificantDOMChange with afterPanelShow doesn't help. 

 

        