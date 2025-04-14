---json
{
  "title": "FLUID-5876",
  "summary": "Left sidebar covering the content page and top panel when open",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Blagoj Dimovski",
  "date": "2016-03-14T19:07:28.911-0400",
  "updated": "2016-03-21T12:14:31.527-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Aman varshney",
      "date": "2016-03-18T08:08:24.644-0400",
      "body": "@Blagoj Dimovski Can I work on this Issue ?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-18T09:27:52.908-0400",
      "body": "@@Aman varshney I don't know of anyone working on this at the moment, but you'll probably want to talk to the designers about it first.\n\n@@Dana and @@Jonathan Hung do you have any ideas/feedback about how the interaction should be?\n"
    },
    {
      "author": "Aman varshney",
      "date": "2016-03-19T07:07:03.276-0400",
      "body": "Can you please help me. As I am working on this issue I could not find how \" \\* \"(left sidebar) formed /infusion/demos/uiOption/index.html and which css files including in it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-21T08:39:43.154-0400",
      "body": "@@Aman varshney it's part of the Overview Panel component. <https://github.com/fluid-project/infusion/tree/master/src/components/overviewPanel>\n"
    },
    {
      "author": "Blagoj Dimovski",
      "date": "2016-03-21T12:14:31.527-0400",
      "body": "@Aman Varshney I think that you're the only one working on the issue, so yes you can work. Just follow Justin Obara's directions.\n"
    }
  ]
}
---
When you open the overview panel, it cover's part of the content and makes it unreadable. It is getting even worse when you open the separated panel UIO (Click the button "Show Display Preferences"). Possibly it could be fixed to open like the top panel (It slides from top and pushing the content down), it could slide from left and push the content right. I think with this improvement the page will get more readable, and will look better.&#x20;

Also, even when the overview panel is closed, and UIO is open, it's icon is covering a small part of the top panel. I think that should be fixed too.

        