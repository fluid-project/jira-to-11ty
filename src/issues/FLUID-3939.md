---json
{
  "title": "FLUID-3939",
  "summary": "Builder Pressing Enter on focused checkbox activates \"Select All\" (possibly IE only)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2010-12-17T13:05:15.858-0500",
  "updated": "2014-03-03T11:20:13.676-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "Win7 IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.663-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
With a checkbox focused in the builder, pressing Enter activates Select All which leads to a confusing situation.

To reproduce:\
1\. Load the builder: <http://forge.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>\
2\. Press tab until the checkbox for Infusion Framework Core gets focus styling.\
3\. Press Enter.\
4\. Notice all items become selected, and the focus styling moves to "Select All".

Appears in IE8, FF3.6 not affected.

        