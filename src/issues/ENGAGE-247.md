---json
{
  "title": "ENGAGE-247",
  "summary": "Improve Engage's data access layer, removing redundancy across services",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-18T15:22:49.000-0500",
  "updated": "2017-12-22T09:44:32.413-0500",
  "versions": [
    "0.1",
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-247/servicesUtils.txt",
      "filename": "servicesUtils.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-01-25T17:43:09.000-0500",
      "body": "This is a sketch attempt to remove redundancy across the services in kettle, demonstrated on services for browse\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-01-29T14:53:55.000-0500",
      "body": "Thanks for this patch - I can see two main issues, firstly that the return of genuine data cannot be reliably distinguished from an error return, and secondly that the pattern of factoring of service construction is upside-down - the services should be created from configuration, rather than proving utilities to call from within existing services. I have made an initial implementation of \"fluid.kettle.getData\" now within kettle.js as required by the I18N bundle work...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-17T11:47:36.000-0400",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:32.412-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
This is an umbrella issue for a two-day timeboxed task to improve the overall design of Engage's Kettle-side services and remove the redundancy within them. Will also include refactoring the data mapping layer to be more generic and extensible.

        