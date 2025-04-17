---json
{
  "title": "FLUID-5966",
  "summary": "that.container missing the selector and context properties",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-09-21T16:28:35.663-0400",
  "updated": "2019-07-12T09:16:17.687-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework",
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4536/",
      "key": "FLUID-4536",
      "summary": "Improve core framework to provide support for component trees which span iframe boundaries"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5825/",
      "key": "FLUID-5825",
      "summary": "Update Infusion's copy of jQuery"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-09-21T16:29:37.513-0400",
      "body": "This issue is being addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-5825#icft=FLUID-5825>. See PR ( <https://github.com/fluid-project/infusion/pull/752> )\n"
    }
  ]
}
---
When trying to upgrading to jQuery v3.1 ( see: <https://fluidproject.atlassian.net/browse/FLUID-5825#icft=FLUID-5825> ), it was discovered that jQuery has now removed the "selector" property from their objects. The "selector" and "context" properties have been deprecated since v1.9 and were officially removed in v3.0 ( <https://jquery.com/upgrade-guide/3.0/#breaking-change-deprecated-context-and-selector-properties-removed> ).&#x20;

The DOM Binder has taken care of re-adding these properties to the jQuery objects resolved through it. However, Panels.js from the Prefs Framework requires the "selector" property when reseting the DOM binder in sub panels.&#x20;

It is necessary to add the context and selector properties back to component containers created with fluid.container in FluidView\.js and with fluid.prefs.subPanel.resetDomBinder in Panels.js. ( the sub panel does a manual recreation of the container to ensure that it is sourced from an attached DOM element in the correct document – e.g. iframe ) ( see: FLUID-4536 )

        