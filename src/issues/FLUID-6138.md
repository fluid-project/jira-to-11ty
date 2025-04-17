---json
{
  "title": "FLUID-6138",
  "summary": "Add missing files from /src to the /dist directory",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2017-02-28T13:12:05.395-0500",
  "updated": "2024-07-22T09:16:29.990-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6359/",
      "key": "FLUID-6359"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-02-28T13:14:29.339-0500",
      "body": "CC Justin Obara Jonathan Hung\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-02-28T13:35:35.746-0500",
      "body": "Perhaps we change the way the dist directory works. At the moment it really only contains things that are generated with the build ( i.e JS builds, compiled CSS ). However for things like the preferences framework there are additional artifacts that are required, such as html templates, JSON message bundles, other CSS dependencies, and etc. It had been assumed that these would just be sourced in place, which works okay for NPM builds, but seems to be an issue with the CDN.&#x20;\n\nAlthough for NPM this will result in duplication of resources between the src and dist directory.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-02-28T13:47:36.520-0500",
      "body": "We should (for CDN purposes) be able to source them in place by expanding the **npmfilemap** options at <https://github.com/cdnjs/cdnjs/blob/master/ajax/libs/infusion/package.json#L13-L20>\n\nThe **npmfilemap** configuration determines what files will be taken from the NPM tarball. Currently this takes all files from the /dist directory only, but we could change this and make a PR to them.\n"
    }
  ]
}
---
To make it possible to put UIO on a site without having to make a local build of Infusion, we should ensure that non-JS files from /src such as JSON message bundles and CSS are included in the /dist directory.

We can then cut a new release that will get picked up by CDNJS.

What exactly is to be done needs some further analysis; there is some discussion in #fluid-work starting around <https://botbot.me/freenode/fluid-work/2017-02-28/?msg=81702056&page=1>

        