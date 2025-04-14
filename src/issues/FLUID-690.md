---json
{
  "title": "FLUID-690",
  "summary": "Deploy the fluid components war directly to a tomcat instance (i.e. not within Sakai)",
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
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-02T17:09:17.000-0400",
  "updated": "2008-06-05T11:21:56.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-05T11:21:56.000-0400",
      "body": "The links on the build site to the fluid examples use the newly deployed war instead of the sakai-gallery one. They work fine.\n"
    }
  ]
}
---
Currently, the only build site access to the components is through the Sakai tomcat instance. This means that we are dependent on the successful startup of that tomcat. It also means that all of our links to samples, etc. must link into the Image Gallery deploy.

I suggest we have a deployment unique to the fluid components.

        