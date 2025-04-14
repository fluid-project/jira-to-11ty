---json
{
  "title": "FLUID-107",
  "summary": "URLs are harded coded into the Apache/ModJK configuration on the daily build server.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Colin Clark",
  "date": "2007-11-09T13:00:20.000-0500",
  "updated": "2014-04-02T16:30:13.982-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-02T16:30:13.972-0400",
      "body": "The daily build server has changed since this issue was opened.\n"
    }
  ]
}
---
Our daily build server is configured with Apache and mod\_jk. It mounts a couple of paths explicitly so we can use URLs without tomcat port numbers. So, for example, we state the following paths explicitly\
/portal\
/uPortal\
/sakai-imagegallery-tool

The problem is if we have new paths (such as for new RSF tools) these will break unless we update our Apache configuration, which is very bad.

Here's a suggestion for a less brittle technique:

Create sub-domains for Sakai and uPortal:

sakai.build.fluidproject.org\
uportal.build.fluidproject.org

Then we rewrite all URLs at the top level. So, everything matching this expression:

sakai.build.fluidproject.org/\*

Should get mapped to:

sakai.build.fluidproject.org:8080/\*

and so on.

        