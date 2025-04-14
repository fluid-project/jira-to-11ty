---json
{
  "title": "FLUID-133",
  "summary": "Build/demo site poms should reference fluid component version 0.2-SNAPSHOT when it is a dependency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-11-29T12:59:55.000-0500",
  "updated": "2011-03-17T15:06:06.045-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
For example, the "Sakai Gallery Nightly Redeploy" image gallery pom.xml contains these lines:

\<properties>\
\<fluidcomponents.version>0.1\</fluidcomponents.version>\
\</properties>\
...\
\<dependency>\
\<version>${fluidcomponents.version}\</version>\
\<dependency>

This means that the gallery tool when deployed will use v0.1 of the fluid-components.  It should be "0.2-SNAPSHOT".  Unfortunately, I don't know how to make this "stick" since an svn udpate from ucb's contrib can overwrite it.

Other pom files that might be similarly affected (I can't tell):

* Sakai Gallery
* Portlet Gallery
* uPortal Nightly Deploy
* Sakai Gallery

        