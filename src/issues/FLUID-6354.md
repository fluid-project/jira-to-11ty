---json
{
  "title": "FLUID-6354",
  "summary": "switch from ttf to woff fonts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2018-11-21T11:25:25.474-0500",
  "updated": "2018-11-21T11:27:50.137-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Where possible the fonts used in Infusion should be switched from ttf to woff. Woff fonts should be appear the same as their ttf counterparts but are optimized for the web. 

<https://www.w3.org/Submission/2010/03/>

We currently make use of some web fonts, open sans and roboto, which are both available in woff. The generated infusion-icons fonts also generate a woff version; which should be used. 

        