---json
{
  "title": "FLUID-1333",
  "summary": "cursor does not change on hover over  link children of portlet title",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-08-27T16:10:29.000-0400",
  "updated": "2014-06-05T15:26:33.870-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-30T16:52:57.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T14:50:11.586-0500",
      "body": "I believe this is refering to the uPortal reorderer example ( <http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:26:33.847-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
This is expected behaviour  - but the actual text of the title is wrapped in a \<a href="#">Title\</a> which means that the hint is not present in the most likely candidate for  a grab. This is an implementor problem then?&#x20;

        