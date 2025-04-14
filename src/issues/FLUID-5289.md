---json
{
  "title": "FLUID-5289",
  "summary": "Integrate the Overview Panel with an existing Infusion demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Jonathan Hung",
  "date": "2014-03-17T13:27:06.051-0400",
  "updated": "2014-04-23T09:36:35.286-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5276/",
      "key": "FLUID-5276",
      "summary": "Create component for Fluid Infusion Overview Panel"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5175/",
      "key": "FLUID-5175",
      "summary": "The \"More Info\" links in the demo portal are dead."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T11:25:51.295-0400",
      "body": "A pull request for <https://fluidproject.atlassian.net/browse/FLUID-5276#icft=FLUID-5276> has been issued (#478). Once that's in master, this work will proceed.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-11T10:31:06.336-0400",
      "body": "In addition to adding the panel to the existing demos, this work will move the OverviewPanel's own 'test' page into a proper demo of its own.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-16T14:08:41.398-0400",
      "body": "Pull request issued: <https://github.com/fluid-project/infusion/pull/491>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-21T10:22:02.660-0400",
      "body": "Merged into project repo at e2b741777c002d9f80d6ddfafdaf8705a5ffbc83\n"
    }
  ]
}
---
Integrate the Overview Panel component with an existing Infusion demo. Identify and fix any integration issues before rolling demoMenu out to other component demos.

        