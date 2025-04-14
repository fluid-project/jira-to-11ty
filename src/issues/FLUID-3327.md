---json
{
  "title": "FLUID-3327",
  "summary": "create config.php and builder.php files which are appropriate for local and server installs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-10-23T16:13:59.000-0400",
  "updated": "2009-11-04T11:36:14.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3326/",
      "key": "FLUID-3326",
      "summary": "create config.php for server"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-11-04T09:32:17.000-0500",
      "body": "I created a single config.php which works for both deployment strategies and only needs to be edited in four places as noted in the deployment instructions on the wiki.\n\nI created two builder.php files (builder\\_local.php and builder.php).&#x20;\n\nbuilder.php is for the server and assumes that \"DISTANT\\_PATH\" is located at  \"../../../infusion-builder-secure/php/\". This is the path that Jamon suggested we locate the \"secure\" files.\n\nbuild\\_local.php is for your local installation and assumes that you just leave the infusion-builder-secure directory where it is in relation to the infusion-builder directory when you check the files out of the svn. So \"DISTANT\\_PATH\" is \"../../infusion-builder-secure/php/\".\n"
    }
  ]
}
---
create a config.php and builder.php for both local and server installations.

        