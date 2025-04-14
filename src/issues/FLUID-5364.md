---json
{
  "title": "FLUID-5364",
  "summary": "that._setErr is undefined in fastXmlPull.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-05-07T11:19:21.248-0400",
  "updated": "2014-05-21T14:25:17.224-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-14T15:58:16.873-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/519>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-05-21T13:44:51.865-0400",
      "body": "Merged at 9af52b41739c1f27775625b9f79e382d8ac64d66\n"
    }
  ]
}
---
that.\_setErr in fastXmlPull.js is not defined, however fluid.XMLP.\_setErr is defined. The fix would either be to map this function onto the that object, or to call it directly instead.

This issue was discovered when an invalid template was provided to the render. The invalid template contained an unclosed attribute list (i.e. that is missed the closing "). The elements to be rendered were contained in markup after this missing ".

        