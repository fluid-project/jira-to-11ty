---json
{
  "title": "FLUID-3692",
  "summary": "The README and license information for fastXmlPull.js incorrectly includes reference to LGPL",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-08-30T10:44:48.631-0400",
  "updated": "2010-09-08T13:53:48.728-0400",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.1.3",
    "1.2.1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3692/FLUID-3692-1.1.x.patch",
      "filename": "FLUID-3692-1.1.x.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3692/FLUID-3692-trunk.patch",
      "filename": "FLUID-3692-trunk.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-08-30T10:54:04.442-0400",
      "body": "Two patches--one for the 1.1.x branch and against trunk (hopefully this will apply cleanly in the not-yet-created 1.2.x branch), which fix the licensing and attribution errors in Infusion's fast XML pull parser.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-09-08T13:53:48.726-0400",
      "body": "Applied 1.2.1 patch to update license information.\n"
    }
  ]
}
---
The Infusion Renderer's fast XML pull parser is based on a SAX parser from XML for Script. This code was originally distributed under the LGPL license, but upon request the community granted us a zlib/libpng licensed version. The details are documented here:

<http://wiki.fluidproject.org/display/fluid/Licensing+for+fastXmlPull.js>

As a result, our modifications are licensed only under the zlib/libpng licensed, and we should not include any references to the LGPL. The source code, fastXmlPull README file, and the overall Infusion README file should be updated to reflect this.

        