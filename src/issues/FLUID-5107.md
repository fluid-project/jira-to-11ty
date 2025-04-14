---json
{
  "title": "FLUID-5107",
  "summary": "Remove the Sakai UIO integration demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2013-07-30T15:04:52.526-0400",
  "updated": "2013-08-01T10:40:52.179-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-07-30T15:05:22.848-0400",
      "body": "Link to the demo: <http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-01T10:25:47.142-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/379> ) into the project repo at c0ee40396fe44407d374915262e753b8bdc6d457\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-01T10:27:43.260-0400",
      "body": "Michelle can you also remove the link to this demo from the build.fluidproject.org site.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-08-01T10:35:35.365-0400",
      "body": "Here's the pull request that removes the link from the build site: <https://github.com/fluid-project/build.fluidproject.org/pull/3>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-01T10:40:29.870-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/build.fluidproject.org/pull/3> ) into the project repo at 517fcb3a0634543d54b1ec894bf93b89aea9db29\n"
    }
  ]
}
---
The Sakai UIO integration demo was built to show UIO in the context of a real application. At this point, UIO has been integrated and deployed in many places and this demo no longer serves a purpose. In fact, we so rarely look at this demo that we often find that we've broken it inadvertently.&#x20;

We should remove this demo and point anyone who is interested in seeing UIO in context to:\
<http://inclusivedesign.ca/>\
<http://www.oercommons.org/>\
<http://demo.floeproject.org/integration-demos/uiOptions/ClimateChange.html>

        