---json
{
  "title": "FLUID-3678",
  "summary": "When Fetching a template and then trying to call fluid.reRender along with providing the cutpoints and component tree the renderer fails to find the selectors.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2010-07-19T16:49:11.908-0400",
  "updated": "2014-07-30T15:34:52.609-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3678/FLUID-3678.testcase.patch.txt",
      "filename": "FLUID-3678.testcase.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-07-19T16:50:39.833-0400",
      "body": "Testcase for the issue.\n"
    },
    {
      "author": "y z",
      "date": "2010-07-20T11:14:35.992-0400",
      "body": "Looks like it works if cutpoints are specified in resources structure passed to fetchResources and parseTemplates and not to the reRender function in the options.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-30T15:34:52.609-0400",
      "body": "Antranig Basman is this something that we should fix, or should we not expect reRender to be called directly?\n"
    }
  ]
}
---
Not sure if that's a bug but these are the steps to reproduce:

Attempt to call fetchResources for some html template.\
In callback try to fluid.parseTemplates this templates.\
Finally call fluid.reRender(templates after they were parsed, someNode in current markup, component tree, {cutpoints: some cutpoints});

Notice that selectors in component tree were not rendered (found) by the renderer. Supposedly due to the fact that the renderer tryes to render them before the markup is final (i.e. contains the template in the node).

Please refer to the "FLUID-3678: Fetching and rendering a template into a node" renderer test case in the attached patch.

        