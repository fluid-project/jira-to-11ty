---json
{
  "title": "FLUID-4907",
  "summary": "Create the UIO builder responsible for mapping from UIO Schema to enactors and settingsPanels",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "y z",
  "date": "2013-01-18T15:05:16.095-0500",
  "updated": "2019-09-10T12:00:31.565-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/VP-315/",
      "key": "VP-315"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5061/",
      "key": "FLUID-5061",
      "summary": "Develope an \"auxiliary schema\" which containing the component specific settings for constructing instances of UIO/UIE"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4903/",
      "key": "FLUID-4903"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4904/",
      "key": "FLUID-4904"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5063/",
      "key": "FLUID-5063"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-08-15T07:40:41.194-0400",
      "body": "Merged in pull request ( <https://github.com/fluid-project/infusion/pull/388> ) at 9112e0ee091b935badae51d6bd6d0231b1a31821\n"
    }
  ]
}
---
As part of our work related to UI Options supporting a preferences schema, we need to implement a "UI Options Builder".

The UIO Builder will take in a primary schema (FLUID-4903,<https://fluidproject.atlassian.net/browse/FLUID-4904#icft=FLUID-4904>) and an "auxiliary schema" (<https://fluidproject.atlassian.net/browse/FLUID-5061#icft=FLUID-5061>), and combine them into the grade(s) needed to construct a functioning instance of UIO and/or UIE. The grade(s) created by the UIO builder will likely resemble those already created for the various starter grades used by UIE and UIO.&#x20;

fluid.uiOptions.starterSettingsPanels\
<https://github.com/fluid-project/infusion/blob/master/src/webapp/components/uiOptions/js/SettingsPanels.js#L318-L439>

fluid.uiEnhancer.staterActions\
<https://github.com/fluid-project/infusion/blob/master/src/webapp/components/uiOptions/js/UIEnhancer.js#L104-L240>

More info on the mailing list:\
<http://lists.idrc.ocad.ca/pipermail/fluid-work/2013-June/009115.html>

Example API for the builder and its use with UIO:

```java
// Builder function, creates a grade and returns a grade name
fluid.uioBuilder = function (primarySchema, auxSchema) {
    // construct and create the grade(s) from the primarySchema and auxSchema with fluid.default
};

// A user would run the uioBuilder to construct a grade/component representing their configured UIO
// The user would execute this component to initialize their UIO.
fluid.uioBuilder(primarySchema, auxiliarySchema);
fluid.buildUIO(container, options); // just an example for the component name, the real one will likely be supplied in the schema
```

        