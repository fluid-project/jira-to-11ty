---json
{
  "title": "FLUID-2575",
  "summary": "The jquery.bgiframe plugin (an optional dependency of the tooltip plugin) is not included in InfusionAll.js or other custom builds.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2009-04-08T16:46:09.000-0400",
  "updated": "2009-11-13T09:00:38.000-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2471/",
      "key": "FLUID-2471",
      "summary": "Move jquery.bgiframe.js into the jquery plugins folder"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-04-09T16:26:35.000-0400",
      "body": "This issue can be seen when using the Pager component with a \"rangeAnnotator\" tool tip, such as in the Sakai Site Settings pager example. In IE 6, you'll notice that the tool tip actually hovers underneath the selectbox on the line below.\n\n<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>\n\nThis issue can be worked around by linking  jquery.bgiframe.js, located in lib/jquery/core/js, into your page.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-05T14:05:49.000-0400",
      "body": "The bgiframe has now been moved into the jquery plugin directory. It still requires a module dependency json file and Pager needs to depend on it.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-13T11:38:31.000-0400",
      "body": "Added the json dependency file for jquery.bgiframe.js and added it to Pager's set of dependencies\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:00:38.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
As reported in FLUID-2471, the jquery.bgiframe.js plugin is currently located in the wrong place (lib/jquery/core). Due to this, we chose to not include it in jQueryCore's dependency declaration.

As a result, the bgiframe plugin is not included in any concatenated builds. This includes InfusionAll.js or any custom build. We do still ship the minified jquery.bgiframe.js file in our bundle, so users can still choose to link this file in their page to work around an potential IE6 issues that they may encounter with the Tooltip plugin or jQuery UI dialog.

        