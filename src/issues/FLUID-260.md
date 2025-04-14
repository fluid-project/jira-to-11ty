---json
{
  "title": "FLUID-260",
  "summary": "Determine correct ARIA roles for Lightbox thumbnails and portlets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2008-02-19T13:05:11.000-0500",
  "updated": "2008-03-12T11:32:08.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-02-19T13:06:29.000-0500",
      "body": "If ARIA roles are to be added programmatically, and roles will be different based on what is being reordered, we probably need a pluggable way for the client of the Reorderer to tell the Reorderer what roles to add to the orderable items.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-12T11:32:08.000-0400",
      "body": "We've determined that the roles of 'grid' and 'grid-cell' are the best possible match for the Lightbox and for the Portal.&#x20;\n\nRoles were made pluggable through an optional parameter to the Reorderer called 'role'. The Reorderer defaults to using a role of 'list' for the container and 'list-item' for the items. Other possibilities can be selected by using 'fluid.roles'. Currently the only other option is 'grid'. &#x20;\n"
    }
  ]
}
---
We need to review the ARIA spec and decide what are the appropriate roles to be used for the Lightbox thumbnails and for portlets, given the available options.

        