---json
{
  "title": "FLUID-5915",
  "summary": "Review and optimize CSS used across Infusion ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-06-10T07:56:10.032-0400",
  "updated": "2021-07-29T01:46:23.502-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Build Scripts",
    "Framework",
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5918/",
      "key": "FLUID-5918",
      "summary": "Provide source maps for CSS generated from Stylus"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6416/",
      "key": "FLUID-6416"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-04-24T15:50:43.572-0400",
      "body": "<https://github.com/giakki/uncss> can be used to remove unused CSS. Although it won't work for the styles applied via the prefs framework, because they are only in use when enabled.\n"
    }
  ]
}
---
We should take the opportunity before the Infusion 2.0 release to review and optimize the CSS used throughout infusion. Here are some examples for things to look at / improve:

* unused styles
* excessive specificity
* use of !important
* unnecessary overrides ( simplify overall styling rules )
* make use of stylus
* concatenate and minify css ( use source maps )
* css linting

see [CSS Purge](http://www.csspurge.com) and [CSS Stats](http://cssstats.com) for inspiration.

        