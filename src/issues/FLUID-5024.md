---json
{
  "title": "FLUID-5024",
  "summary": "UIOptions modelRelay needs to support value transformation",
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
  "date": "2013-05-23T15:38:08.421-0400",
  "updated": "2015-06-26T10:02:37.154-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5026/",
      "key": "FLUID-5026",
      "summary": "Model transformation system implicitly outputs unwanted data to the output object"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5045/",
      "key": "FLUID-5045",
      "summary": "Improve Model Transformation system to support transforms contextualised by IoC expressions"
    },
    {
      "type": "Dependence",
      "url": "/browse/VP-297/",
      "key": "VP-297"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4790/",
      "key": "FLUID-4790"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5114/",
      "key": "FLUID-5114"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-05-29T13:57:03.385-0400",
      "body": "I had a chat with Antranig about this in the channel today (<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-05-29>). He feels that the framework is not yet ready to support the kind of model relay transformation functionality that is provided by the VideoPlayer's private modelRelay, and that we shouldn't try to upgrade the UIO model relay until after Kasper's done some more work on the model transformation stuff, and we have some more converstaions about this.\n\nSo for now, the VideoPlayer will continue to use its own private modelRelay.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-03-19T15:58:06.713-0400",
      "body": "The new model relay system implemented by Antranig already supports model transformations. This new system has made into the project master branch.&#x20;\n\nThe next step is to upgrade the preferences framework, and video player, to make use of the new system.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:00.035-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The UIOptions modelRelay component performs a direct relay between changes to one model and another. It does not support any transformations of values (reversible or irreversible). The UIO modelRelay should allow integrators to specify a function that can be used to transform model values.

The VideoPlayer requires at least an irreversible transformation for language preferences: The VideoPlayer model stores language settings as an index into an array of tracks, but the UIO Preferences are stored as a language code.

The VideoPlayer originally contained its on private modelRelay (which I believe is the basis for the UIO modelRelay). This original VideoPlayer relay did support transformations, and that code could serve as the inspiration for modifying the UIO modelRelay.

        