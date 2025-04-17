---json
{
  "title": "FLUID-6262",
  "summary": "Add namespaces to all listeners, modelListeners, and model relays",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-03-14T09:53:00.487-0400",
  "updated": "2018-03-20T12:57:38.285-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-03-15T15:34:58.004-0400",
      "body": "Cindy Li mentioned that we should also namespace the distribute options.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2018-03-20T12:57:34.170-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/883) has been merged into the project repo master branch at 0d498cf2f3e08fe74927226ac9426e577c8d7682\n"
    }
  ]
}
---
Listeners, modelListeners, and modelRelays should all use namespaces so that they can be overridden or sequenced via priority. Currently in the prefs framework there is a mixture of namespaced and non-namespace values.

 

see:

* <https://docs.fluidproject.org/infusion/development/InfusionEventSystem.html#namespaced-listeners>
* <https://docs.fluidproject.org/infusion/development/ChangeApplierAPI.html#model-listener-declaration>
* <https://docs.fluidproject.org/infusion/development/ModelRelay.html#modelrelayblock-layout>

        