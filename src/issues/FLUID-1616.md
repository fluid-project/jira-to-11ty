---json
{
  "title": "FLUID-1616",
  "summary": "The function \"selectable\" clashes with jQuery UI ui.selectable.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2008-09-25T13:49:05.000-0400",
  "updated": "2008-12-12T13:45:56.000-0500",
  "versions": [
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1616/FLUID-1616-uportal-patch.txt",
      "filename": "FLUID-1616-uportal-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-25T14:27:34.000-0400",
      "body": "I'm giving this patch to Jen Bourey to see if it addresses the problems she's having integrating the LayoutReorderer into uPortal.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-10-01T13:48:17.000-0400",
      "body": "dev-iteration45\\\ndev-iteration46\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-11-05T16:48:40.000-0500",
      "body": "The patch did work for Jen, though they ended up not using it. Instead, they removed the selectables component from the uPortal import\\\nlist since they weren't using it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T12:20:54.000-0500",
      "body": "Bug Parade  0.6 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-09T15:16:22.000-0500",
      "body": "This has been resolved in a comprehensive manner as of revision 6181 with a new approach based on generalised \"bridging\" of the standard Fluid \"that-ist\" semantics to the JQuery UI standard \"this-ist + chaining\" model. In this way the entire Fluid framework, which has appropriate signatures, is available as a single JQuery UI plugin \"fluid\", and likewise, the former contents of keyboard-a11y.js are now available to Fluid code via standard fluid.function(args) syntax. \\\nThis moves all of this plugin code permanently out of harm's way in terms of future namespace collisions with the rest of the JQuery community, whilst preserving its modularity and also improving its conformance to the JQuery UI plugin guidelines. Documentation to follow - all samples and test cases updated.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-12T12:22:53.000-0500",
      "body": "I reviewed the code changes and it looks good. Having fluid available through jQuery UI style invocation should make for easier uptake by the jQuery community.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T13:45:56.000-0500",
      "body": "Verified fix using:\n\nFF3, FF2 (Mac OS 10.5)\n\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
We need to change our API for the plugin so that people can use the pluggin on a page that also imports ui.selectable.js

This bug cropped up when integrating with uPortal

        