---json
{
  "title": "FLUID-5878",
  "summary": "Create a fluid binding component to help with the localization of the prefs framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2016-03-18T15:44:14.096-0400",
  "updated": "2016-03-21T08:37:18.630-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5868/",
      "key": "FLUID-5868",
      "summary": "Localize the button text \"reset\" in the preferences framework"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-03-21T08:37:18.630-0400",
      "body": "Cindy Li in regards to \"// need more thoughts about how to specify a jQuery method\" could you just take in an invoker? Another idea would be to use something similar to the approach that invokers and etc use for thisist functions, but you'd still need to sort out the difference between a jQuery method and some other thisist function, because they may have different signatures.\n"
    }
  ]
}
---
To simplify the methods to localize messages used in the prefs framework, especially at the prefsEditorLoader level where the message needs to be applied to the DOM elements using jQuery functions such as text(), html(), attr(), Antranig Basman suggests,

1, Create a fluid binding component that binds DOM elements, messages and methods to apply messages. The binding in this case looks like:

bindings: {\
"\<a-namespace>": {\
selector: "\<infusion-selector>",\
message: "\<message-key-from-bundle-file>",\
method: "\<how-to-apply-message-to-the-selector>"  // need more thoughts about how to specify a jQuery method\
}\
}

The references for this work:

* Tony Atkins' gpii-binder: <https://github.com/GPII/gpii-binder/pull/1>
* Ben from IBM extends Tony's work to add the ability to supply functions: <https://github.com/pga03/first-discovery/blob/sprint3-integration/src/lib/databinder/src/js/binder.js#L79>

2\. Create a sub-component of prefsEditorLoader that receives prefsEditor.json only to, 1. unload the localization task from prefsEditorLoader; 2. continue to make use of "fluid.prefs.msgLookup" if a rendererComponent is needed.

        