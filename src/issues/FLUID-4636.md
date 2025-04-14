---json
{
  "title": "FLUID-4636",
  "summary": "Allocation of \"nickName\" for components is not responsive to all sources of options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2012-03-07T19:44:59.714-0500",
  "updated": "2014-03-03T12:59:32.106-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4914/",
      "key": "FLUID-4914"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:54:43.023-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
There is a facility of explicit allocation of the component "nickName" through setting an option of the same name. This facility is useful for controlling the context names which are used to match during IoC resolution. Unfortunately this facility has a poor implementation which is only sensitive to "direct options" supplied to the component initialisation. In particular, it is not responsive to a value supplied through the component's defaults, or those supplied through demands resolution.

This is important in the medium term, since in the absence of <https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392> work, the "nickName" name is at a strong premium as the only user-controllable context name that can be used in resolution.

        