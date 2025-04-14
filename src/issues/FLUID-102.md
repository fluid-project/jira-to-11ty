---json
{
  "title": "FLUID-102",
  "summary": "License files and copyright statements should be updated to reflect our new licensing policy",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2007-11-06T16:06:09.000-0500",
  "updated": "2011-01-25T14:37:08.373-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-07T10:52:50.000-0500",
      "body": "Which files should the embedded license text be included in? Everything, including CSS, HTML and so on? Or only for programmatic code such as JavaScript and Java files?\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-07T14:32:03.000-0500",
      "body": "Fixed link to embedded licence in the original description.\n"
    },
    {
      "author": "Sheila Crossey",
      "date": "2007-11-08T10:48:47.000-0500",
      "body": "Regarding Michelle's question, it seems OK to me to put the license text in just the programmatic code (Java script and Java), but not in CSS and HTML files. This is based on my assumption that the HTML and CSS items will be in the source respository and that potential sublicensors will assume that the LICENSE file applies to these items.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-20T11:34:06.000-0500",
      "body": "We should add copyright attribution for Cambridge contributions in LICENSE.txt and the file headers for the appropriate modules:\n\nCambridge:\n\n* fluid-components\n* fluid.js\n* Reorderer.js\n\n- gallery-portlet\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-20T11:44:59.000-0500",
      "body": "I added the Cambridge copyright statements where appropriate. Probably a good idea to get Sheila to check this over and close the issue.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-26T14:35:19.000-0500",
      "body": "I showed Sheila the fix for this issue and she was happy.\n"
    }
  ]
}
---
All Fluid code is now dual-licensed under the ECL 2.0 and New BSD licenses. Sheila has put together a page describing how we include license and copyright statements within our code and source repository. The policy is described here:

<http://wiki.fluidproject.org/display/fluid/Fluid+Licensing>

All source code files should include the new embedded license text  that will be available here.  At present, this is just a template, not the full licence text.  It requires the copyright and full urls to the licences to be added.

<http://wiki.fluidproject.org/display/fluid/Embedded+Fluid+license>

A LICENSE file should be included at the top level of our source code repository. The contents of this file is available here:

<http://wiki.fluidproject.org/display/fluid/Fluid+License>

        