---json
{
  "title": "STUDIO-1",
  "summary": "The Fluid Studios WordPress theme imports Infusion with an incorrect file name, potentially causing it not to work on UNIX-based servers",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-12-03T13:28:22.788-0500",
  "updated": "2014-03-03T13:02:17.603-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-05T11:09:03.289-0500",
      "body": "Merged into project repo at fa27d9d7c4efb15dc34e8b27648af909af4d1358\n"
    }
  ]
}
---
The Fluid Studios WordPress theme has a typo in the \<script> tag for Infusion:

\<script type="text/javascript" src="\<?php bloginfo('template\_url'); ?>/infusion/myInfusion.js">\</script>

Since Mac OS X's file system is case-sensitive, this will work on developer machines but will break on a case-sensitive file system such as on Linux. The import should be:

\<script type="text/javascript" src="\<?php bloginfo('template\_url'); ?>/infusion/MyInfusion.js">\</script>

        