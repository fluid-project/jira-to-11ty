---json
{
  "title": "FLUID-1653",
  "summary": "Access For All Binding",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Michelle D'Souza",
  "date": "2008-10-01T16:20:13.000-0400",
  "updated": "2016-09-26T15:13:22.780-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-482/",
      "key": "FLOE-482"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-11-10T08:52:34.000-0500",
      "body": "We have found that in practice we are simply mapping the values that we use in UI Options to possible values in Access for All. This mapping is currently not very meaningful. We've decided to originally build UI Options without the Access for All bindings and create the bindings once we know more about the values that UI Options uses. This way we can more intelligently feed back our needs to the Access for All spec.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T09:05:09.781-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2012-04-23T10:47:23.370-0400",
      "body": "We will be implementing a SettingsStore that can read and write the AfA-compatible settings used by GPII.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-04T10:38:11.898-0400",
      "body": "I wonder if this is now satisfied through the primary schema and gpiiStore.\n"
    }
  ]
}
---
We want to be able to interoperate with applications that implement the access for all standard. Where possible, we should convert our options settings into access for all format, probably in JSON.&#x20;

        