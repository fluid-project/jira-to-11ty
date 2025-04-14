---json
{
  "title": "FLUID-1679",
  "summary": "Implement support for parsing standard Java .properties files on the client-side",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-10-10T19:10:22.000-0400",
  "updated": "2008-10-10T19:12:42.000-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1678/",
      "key": "FLUID-1678"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-10-10T19:12:42.000-0400",
      "body": "Implementation & test cases committed at revision 5756\n"
    }
  ]
}
---
In order to support proper I18N support on the client side, which is fully interoperable with any serverside message bundles which have been drawn up, it needs to be possible to parse all valid Java .properties files into the equivalent client-side data structures.

Full documentation for this file format, as well as examples of a few unusual cases, is provided at&#x20;

<http://java.sun.com/javase/6/docs/api/java/util/Properties.html#load(java.io.Reader>)

        