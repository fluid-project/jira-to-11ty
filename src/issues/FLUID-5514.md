---json
{
  "title": "FLUID-5514",
  "summary": "Fluid Infusion website SCSS styles should be using Foundation mix-ins",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-09-23T09:04:13.035-0400",
  "updated": "2024-07-25T14:48:09.450-0400",
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
      "author": "Justin Obara",
      "date": "2024-07-25T14:48:09.289-0400",
      "body": "We haven’t used foundation for a while and will likely move off of it from the fluid project site the next time we do a major refresh.\n"
    }
  ]
}
---
The Fluid Project stylesheet is currently overriding Foundation styles. Instead the styles should be using mix-ins to create customizations. This will create a smaller stylesheet delivered to the client.

Also mixins will allow removal of hard-coded Foundation values (such as min-width: 40.063em for medium screen queries).

        