---json
{
  "title": "KETTLE-7",
  "summary": "Modularize Kettle's dependency loader",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2009-11-30T21:36:27.000-0500",
  "updated": "2014-03-03T14:19:09.030-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/KETTLE-9/",
      "key": "KETTLE-9",
      "summary": "There's currently no way in Kettle to specify app-specific includes on top of a default set of Kettle-wide includes"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-29T21:24:18.000-0400",
      "body": "Work on this has been started in the <https://fluidproject.atlassian.net/browse/ENGAGE-208#icft=ENGAGE-208> branch.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-13T13:57:43.777-0400",
      "body": "This has been tackled recently in \"new new Kettle\" providing a declarative facility based on \"configs\" which can depend on \"modules\", designating the loading of npm modules. Fully modular loading of \"apps\" and their dependencies is now possible.\n"
    }
  ]
}
---
Currently Kettle is entirely bound up with the Engage app. Kettle needs to be a general purpose Web app container, and so should provide a modularized dependency loader where applications can be dropped into the container and run without any hard interdependencies between them.

In order to do so, we need to separate some Engage specific things from Kettle. Tasks include:

1\. Create a directory structure where Kettle will scan for applications and automatically load them\
2\. Split up engageConfig.json into separate app-specific and Kettle-specific configuration files\
3\. Split up KettleIncludes.json into separate app-specific and Kettle specific configuration files

        