---json
{
  "title": "FLUID-5528",
  "summary": "Default template should use handlebars, not eco",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-10-17T08:57:03.040-0400",
  "updated": "2015-06-16T13:19:55.054-0400",
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
      "date": "2015-06-16T13:19:55.052-0400",
      "body": "Appears to have been addressed.\\\n<https://github.com/fluid-project/infusion-docs/blob/master/src/layouts/default.html.handlebars>\n"
    }
  ]
}
---
Currently the Default template is using a mix of eco and handlebars. All eco blocks should be converted to handlebars.

        