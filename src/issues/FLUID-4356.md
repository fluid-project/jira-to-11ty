---json
{
  "title": "FLUID-4356",
  "summary": "\"Report Broken Demo\" populates subject with the wrong demo name",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-07-26T14:38:26.910-0400",
  "updated": "2014-03-03T12:01:50.633-0500",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-26T14:40:02.615-0400",
      "body": "Bug Parade Infusion&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-26T14:55:44.303-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/116>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-27T12:43:05.271-0400",
      "body": "Pull request merged into project repo at c61b1f406b37c94103f585a22a4cf500a92eb99b\n"
    }
  ]
}
---
The contextual and clearfix demos for the FSS have broken "Report Broken Demo" links. They populate the subject of the e-mail with the incorrect demo name.

* <http://build.fluidproject.org/infusion/demos/fss/contextual/demo.html>
  * "Report broken demo" link sets the subject to "FSS Base" instead of "FSS Context"

- <http://build.fluidproject.org/infusion/demos/fss/clearfix/demo.html>
  * "Report broken demo" link sets the subject to "Linearize" instead of "Clearfix"

        