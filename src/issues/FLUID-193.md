---json
{
  "title": "FLUID-193",
  "summary": "Upgrade daily build server to uPortal 3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Simon",
  "reporter": "Colin Clark",
  "date": "2008-02-01T14:20:35.000-0500",
  "updated": "2011-02-22T16:27:49.661-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-02-06T15:59:37.000-0500",
      "body": "The daily build server (<http://build.fluidproject.org/uPortal>) has been upgraded to uPortal 3. The Image Gallery Tool and portlet reorderer have not yet been integrated.\n"
    },
    {
      "author": "Simon Simon",
      "date": "2008-09-04T14:54:36.000-0400",
      "body": "The uPortal 3 Fluid integration test server is available at: <http://build.fluidproject.org/uPortal>.\n\nThe server and database can be started/stopped manually or automatically through continuum.\n\nThe start/stop scripts are under scripts/uportal/ directory.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.659-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
dev-iteration42

1\. The uPortal 3 code was checked out from uPortal 3 trunk: svn co <https://www.ja-sig.org/svn/uPortal/trunk/>\
and in the future can be updated by svn update command.

2\. The uPortal 3 build uses ant-1.65, and the tomcat version is tomcat 6.

3\. The build commands are: ant-1.65 deploy-war, ant-1.65 deploy-ear.

4\. The current test uPortal 3 uses hsql database.

5\. Under scripts/uportal directory, there are scripts can be run manually to start/stop hsql database or uportal.

6\. The data in the database can be reseted through ant-1.65 initportal, and  this is performed in the continuum routine.

7\. The test uPortal server is configured to use local authentication.

8\. The uProtal test site is: <http://build.fluidproject.org/uPortal>. In the Welcome page, there is a Logging in channel explains how to log in.

        