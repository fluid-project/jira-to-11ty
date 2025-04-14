---json
{
  "title": "FLUID-5558",
  "summary": "Create tutorial for adding UIO to a WordPress child theme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2014-11-18T13:19:05.761-0500",
  "updated": "2015-04-23T13:34:13.538-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-03-31T14:30:20.709-0400",
      "body": "We now have a WordPress plugin, so we don't want people to integrate directly anymore.\n"
    }
  ]
}
---
Our current method for adding UIO to a  WordPress instance – using our base theme – is unlikely to be used in the real world, since the vase majority of WordPress site creators choose an existing base theme that is aesthetically close to what they want and then create a child theme with their tweaks.

The ideal solution is a plugin that adds UIO; this would minimize the technical knowledge required to add UIO. As an interim solution (since a plugin is not likely to happen soon), we should create instructions on how to add UIO to a child theme.

        