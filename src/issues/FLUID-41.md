---json
{
  "title": "FLUID-41",
  "summary": "Make gallery-portlet uPortal deployment process less brittle wrt version number",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2007-10-03T13:00:09.000-0400",
  "updated": "2011-10-14T14:55:43.648-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": "uPortal demo site on build.fluidproject.org\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-14T14:55:43.572-0400",
      "body": "We don't deploy the gallery portlet anymore, so this issue is now moot.\n"
    }
  ]
}
---
Currently, the gallery portlet deployment scriptmust copy the versions war file (gallery-portlet-0.1.war) to an unversioned name (gallery-portlet.war) before deploying to tomcat. This is because the apache configuration in httpd.conf maps the path of the portlet to an appropriate worker, and the path is based on the war file name.

We need a less brittle way of producing an unversioned war file for deployment. Currently, when the version changes, we will have to change the build script.

The deployment script in question is found in the svn repos at    .../infrastructure/build-scripts/uportal/stop\_deploy\_resetdb\_start.sh

        