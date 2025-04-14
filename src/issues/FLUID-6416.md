---json
{
  "title": "FLUID-6416",
  "summary": "Improve preference application performance on page load",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2019-10-21T09:57:50.435-0400",
  "updated": "2019-10-21T10:04:08.698-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5915/",
      "key": "FLUID-5915",
      "summary": "Review and optimize CSS used across Infusion "
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently when loading a page that has preferences applied from the prefs framework, there is a slight delay between the page load and the application of the preferences. This may cause a flicker of the screen depending on browser caching, network latency, and speed of rendering and js/css interpretation. 

There may be a few ways to improve this:

* Provide an example/option for server side storing/application of preferences
  * e.g. apply theme classes as part of the server side rendering so that the correct theme is applied on load.
* Minimize CSS 
  * streamline CSS and/or lazy load so that not all of the options are loaded even when they are not used
    * see tools like [PurifyCSS](https://github.com/purifycss/purifycss), [PurgeCSS](https://www.purgecss.com/), [uncss](https://github.com/uncss/uncss) (see: FLUID-5915)

        