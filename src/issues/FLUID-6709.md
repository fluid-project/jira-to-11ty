---json
{
  "title": "FLUID-6709",
  "summary": "Reimplement some form of caching for ResourceLoaders so that the same resource is not refetched many times",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-01-26T08:55:14.023-0500",
  "updated": "2022-01-26T08:56:45.453-0500",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "ResourceLoader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As per our planning document at [Prefs framework rewrite / Infusion planning meetings](https://docs.google.com/document/d/1V-NloJG-eLW2EryuBgVQH4wbKHwXj92N0l0V8FlxS0U/edit#) this was listed as important for 4.0.0 but could be done later:

ii) We need to economise on ResourceLoaders that are fetching identical state so they don’t keep attempting to refetch it (something that the old caching requests stuff did, which was axed)

This is only hugely important for upcoming "new renderer" components such as TableOfContents which have many recursive levels depending on the same template. This will not land in trunk until Infusion 5.

        