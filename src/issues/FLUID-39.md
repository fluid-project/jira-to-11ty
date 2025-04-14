---json
{
  "title": "FLUID-39",
  "summary": "Gallery portlet is not working in uPortal",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2007-10-03T09:55:53.000-0400",
  "updated": "2008-07-11T14:00:32.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": "uPortal demonstration site running on build.fluidproject.org\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-03T10:07:49.000-0400",
      "body": "Updating the version of RSF to the latest release (0.7.2) allows the portal to deploy properly into uPortal.\n\nHowever, there is a problem with the URL substitution - port 80 is incorrectly being added to the url (the correct port is 8090). Investigating whether or not this is a bug in the RSF portlet stuff.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-03T13:23:51.000-0400",
      "body": "The apache configuration that was supposed to be eliminating the need for a port at all has been fixed, and now it works.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-03T14:13:16.000-0400",
      "body": "For some reason, the Lightbox is not initializing properly - the javascript error says that fluid.GridLayoutHandler() is not a constructor.\\\nNote that it works fine in Sakai, and it works fine in uPortal on a local machine, and it works fine when Lightbox.html is served from uPortal's tomcat\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-03T14:41:28.000-0400",
      "body": "The version of uPortal on the server was 2.6.0-RC2, which loaded dojo-0.4 instead of 0.9. Upgrading to uPortal 2.6.0-GA allows the Lightbox to load its own dojo, so it works now.\n"
    }
  ]
}
---
The portlet version of the Gallery tool is not working in uPortal

        