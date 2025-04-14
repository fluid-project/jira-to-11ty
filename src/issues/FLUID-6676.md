---json
{
  "title": "FLUID-6676",
  "summary": "Use BCP-47 language codes for specifying message bundle localizations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-22T07:43:17.912-0400",
  "updated": "2021-07-22T07:43:17.912-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework",
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When UIO was being designed, it went with language codes specified with an "\_" instead of "-" to be consistent with Java Locale format ( <https://www.oracle.com/technical-resources/articles/javase/locale.html> ). This was the common format at the time. 

These days [BCP-47](https://tools.ietf.org/search/bcp47), using "-", is a common format for use on the web. We should either allow both formats or switch to using BCP-47. 

For example currently only "en\_CA" is accepted, but "en-CA" should be accepted.

        