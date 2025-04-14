---json
{
  "title": "FLUID-6249",
  "summary": "model relay system cannot distinguish between different sources of initial values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2018-02-22T08:11:57.248-0500",
  "updated": "2021-07-29T01:51:57.661-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework",
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-02-23T09:39:15.106-0500",
      "body": "Regarding the work in <https://fluidproject.atlassian.net/browse/FLUID-6209#icft=FLUID-6209> it seems that the default panelIndex model value is being saved to the store when the model is instantiated. This is even the case if the modelListener for saving the panelIndex is set to exclude init. It seems that this is happening because the initial model values for the preferences are also being set in the model, which also triggers a save. However, those initial preference values are explicitly ignored. However, any component state such as the panel index will be saved to the store. The effect of this is to replace the previously stored value with the default value.\n\n \n\nFor example, at the time of save, the model will look something like the following. Note that the default preference values are stripped out by the prefs framework before saving the model to the store.\n\n```java\n{\r\n    panelIndex: 0,\r\n    preferences: {\r\n        contrast: \"default\"\r\n    }\r\n}\n```\n"
    }
  ]
}
---
While implementing the remoteModel component into the prefs framework (<https://fluidproject.atlassian.net/browse/FLUID-6209#icft=FLUID-6209>) I've encountered an issue where the default model value for the panelIndex (for arrow scrolling in the small screen mobile view), causes a conflict. If a default value is provided for the panelIndex, the value from the store will not be used. If the "init" source is excluded via model relay, the store value will be used, however, the default model value will never be used.

 

See conversation on the <https://fluidproject.atlassian.net/browse/FLUID-6209#icft=FLUID-6209> PR ( <https://github.com/fluid-project/infusion/pull/867#pullrequestreview-86399946> )

        