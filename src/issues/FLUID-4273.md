---json
{
  "title": "FLUID-4273",
  "summary": "FSS Demo gives 404 error on build.xml, js/base.js, and data/base.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Harris Wong",
  "date": "2011-05-30T16:15:40.693-0400",
  "updated": "2013-09-06T12:49:31.528-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "FSS"
  ],
  "environment": "Firefox, Chrome\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4273/fss-base-demo-404-errors-may-30-2011.png",
      "filename": "fss-base-demo-404-errors-may-30-2011.png"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-30T16:16:33.008-0400",
      "body": "attached fss-base-demo-404-errors-may-30-2011.png\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-12-07T08:38:39.590-0500",
      "body": "This is because of the tabbed panels to the right of the demo. Basically the demo portal requests related files from the server, however in this case those files don't exist. The current strategy of the portal is to use the success/errors of these fetches to know which tabs to create on the right. A better approach might be to register which files are actually used in the demo.\n"
    }
  ]
}
---
The FSS demo gives a few 404 errors on console when loaded from the build site.  The missing files are:\
<http://build.fluidproject.org/infusion/build-scripts/build.xml>\
<http://build.fluidproject.org/infusion/demos/fss/base/js/base.js>\
<http://build.fluidproject.org/infusion/demos/fss/base/data/base.js>\
This happens across couple of FSS demos, such as reset, base, layout, text, themes.  Some of these demos have more or less 404 errors.

Steps to reproduce:\
1\. Go to <http://build.fluidproject.org/infusion/demos/fss/base/demo.html> with Firefox with Firebug console opened\
2\. Will see a few 404 errors in red.

        