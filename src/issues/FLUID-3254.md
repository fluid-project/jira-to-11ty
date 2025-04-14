---json
{
  "title": "FLUID-3254",
  "summary": "The Infusion Builder spinner doesn't spin correctly in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-10-08T09:59:25.000-0400",
  "updated": "2014-03-03T11:20:13.508-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "IE 8, IE 7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3359/",
      "key": "FLUID-3359"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-30T16:25:40.000-0400",
      "body": "I looked into this issue a little and determined that this seems to be a known problem with IE8 and animated gifs. Is there another way to include a spinner that wouldn't cause this problem in IE8?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.503-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Spinner not spinning

Steps to reproduce:

1\) Open the builder page

2\) Select some modules&#x20;

3\) Click the download button

Notice that on the download page, the spinner does not spin.

        