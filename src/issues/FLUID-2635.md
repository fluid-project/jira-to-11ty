---json
{
  "title": "FLUID-2635",
  "summary": "Update the license information for the Renderer's fastXmlPull.js file to also include the zlib/libpng license, which the owner of the code has agreed to license it to us with.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-04-29T17:41:00.000-0400",
  "updated": "2011-02-28T16:45:19.008-0500",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-04-29T17:45:48.000-0400",
      "body": "I've committed this to trunk in r7132.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:19.006-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
Our fastXmlPull.js code is based on the XML SAX parser provided by the XML for Script project:

<http://xmljs.sourceforge.net/>

This code is ordinarily distributed under an LGPL license, which, based on some opinions, may be incompatible with the ECL 2.0 license. As a result, I contacted the maintainer of the original parser and he agreed to license it to us under the zlib/libpng license. Specific details are available here:

<http://wiki.fluidproject.org/display/fluid/Licensing+for+fastXmlPull.js>

Dmitry has asked us to simply go ahead and update the license for this file in our copy to also include the zlib/libpng text.

        