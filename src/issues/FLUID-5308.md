---json
{
  "title": "FLUID-5308",
  "summary": "Create bower.json file for deployment using Bower...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2014-04-11T09:40:03.443-0400",
  "updated": "2016-10-11T15:17:24.842-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2014-04-11T10:38:07.560-0400",
      "body": "I found packages for all dependencies except for:\n\n* jQuery QUnit Composite v1.0.1 <https://github.com/jquery/qunit-composite>\n* jQuery Chili code highlighter v2.2 <http://code.google.com/p/jquery-chili-js/>\n* Micro Clearfix <http://nicolasgallagher.com/micro-clearfix-hack/>\n* SWFUpload v2.2.0.1: <http://swfupload.org/>\n* fastXmlPull is based on XML for Script's Fast Pull Parser v3.1 \\\n  \\\n  &#x20;     (see: <http://wiki.fluidproject.org/display/fluid/Licensing+for+fastXmlPull.js>)\n* fss-reset-global.css and fss-reset-contextual are based on YUI's CSS reset styling v2.5.2 \\\n  \\\n  &#x20;     see: <http://developer.yahoo.com/yui/reset/>\n* fss-base-global.css and fss-base-contextual are based on YUI's CSS base and fonts styling v2.5.2 \\\n  \\\n  &#x20;     see: <http://developer.yahoo.com/yui/base/> \\\n  \\\n  &#x20;     see: <http://developer.yahoo.com/yui/fonts/>\n* fss-layout.css uses some styles, related to hiding content, based on HTML5 Boilerplate v1.0 \\\n  \\\n  &#x20;     see: <https://github.com/paulirish/html5-boilerplate/blob/master/README.md> (Public Domain)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-11T15:17:24.813-0400",
      "body": "We've moved away from the idea of using bower to share packages of infusion. We are exploring NPM for this instead.&#x20;\n\nsee: <https://fluidproject.atlassian.net/browse/FLUID-5579#icft=FLUID-5579>\n"
    }
  ]
}
---
For managing client-side code in express and other environments it would be useful to have a Bower manifest to allow people to cleanly deploy Infusion and its dependencies at once.

<http://bower.io/#defining-a-package>

        