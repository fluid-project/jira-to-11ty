---json
{
  "title": "FLUID-3258",
  "summary": "Extra <div> in Image Reorderer demo markup not necessary",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2009-10-08T11:59:55.000-0400",
  "updated": "2016-04-06T09:00:08.805-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blagoj Dimovski",
      "date": "2016-04-04T17:19:50.838-0400",
      "body": "I could work on the issue, if it is okay? I see that pull request has been made already, but it has been declined, so that's why I am asking.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-04-04T18:14:35.890-0400",
      "body": "@@Blagoj Dimovski yes feel free to work on this one.&#x20;\n"
    },
    {
      "author": "Blagoj Dimovski",
      "date": "2016-04-05T11:56:27.895-0400",
      "body": "I've just created a pull request, regarding the issue: <https://github.com/fluid-project/infusion/pull/697>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-04-06T09:00:03.504-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/698> ) into the project repo at 20e3757c5dbeffb202e7a216dfe8eb42ae8186c4\n"
    }
  ]
}
---
The demo markup for the Image Reorderer includes an anonymous \<div> element inside the \<form>, encapsulating all of the image. This \<div> seems to serve no purpose whatsoever, and the demo works just fine without it. Since this is intended as exemplar code, we should probably remove it.

        