---json
{
  "title": "FLUID-3761",
  "summary": "Create a preview option for UI Options that modifies the entire page instead of having a preview pane. ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2010-09-28T16:21:15.761-0400",
  "updated": "2011-07-08T16:23:08.740-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3734/",
      "key": "FLUID-3734"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4331/",
      "key": "FLUID-4331",
      "summary": "Fix up the uiOptions Fat Panel styles including scroll bar always showing, and poor factoring of the css file"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3761/FLUID-3761-a.txt",
      "filename": "FLUID-3761-a.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3761/uio_incubator.patch",
      "filename": "uio_incubator.patch"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-09-28T16:27:09.268-0400",
      "body": "FLUID-3761-a.txt is a first pass at making the preview a subcomponent and using IoC to initialize it. A couple things need to be fixed for this to work as it did before the change. \\\n1\\. the listener to the uiOptions component's modelChanged needs to be correctly attached\\\n2\\. the preview enhancer's savedSettings and table of contents options needs to be correctly initialized&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-09-29T12:43:59.028-0400",
      "body": "It sounds like we'll implement this as a series of preview strategies. The two obvious ones to start will be the \"inline sample preview\" (the one we currently have) and the \"whole page\" preview like we want to do for the IDI site.&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-10-04T13:44:58.806-0400",
      "body": "patch A commited 10117. \\\nstill need to \\\n-have frame preview contents load without hard refresh\\\n-on preview load, use existing page settings\\\n-create page preview subcomponent\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-25T15:48:11.652-0500",
      "body": "The attached incubator patch is a dump of the work Michelle and I did on this (but didn't finish) in the incubator. It's a diff between the time of the UIO incubator dir's creation (r10116) and the current trunk. We can apply the patch again once we come back to this, starting again where we left off. The work includes creating a preview subcomponent with IOC and modified tests to use it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T12:43:06.705-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-18T13:58:25.725-0400",
      "body": "Work for this issue was started under the <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782> branch ( <https://github.com/heidiv/infusion/tree/FLUID-3782> ). New work should branch off from there and be continued under a branch specific to this jira.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-18T14:14:57.661-0400",
      "body": "This is currently working with the latest changes that went into the <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782> branch. The fluid.uiOptions.preview and fluid.uiOptions.livePreview components are quite similar though. Once the issues with uiEnhancer are sorted out ( <https://fluidproject.atlassian.net/browse/FLUID-4235#icft=FLUID-4235> ), we might be able to refactor them into a single component.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-21T10:11:34.191-0400",
      "body": "The fixes in the <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782> branch were merged into the project repo with the <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267> branch at aa5efc1e1a20aaa152f2e7e2d4edfbb35e08c5ea&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-07-06T14:15:18.882-0400",
      "body": "Merged in the live preview work justin/mike did and noticed a couple things:\\\n-scrollbar on side shouldn't be there \\\n-styles for drop down options missing (font and theme)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-07T15:42:31.146-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/93> merged into project repo at f2422a49c04f6c4dcf25ab6132f176be9f5d522d&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-07T15:52:53.986-0400",
      "body": "I opened 4331 for the scrollbar issue\n"
    }
  ]
}
---
We want to have two preview options for UI Options. The current one, which is a preview pane that will be updated upon setting changes and another option which changes the entire page when a setting is changed. In order to do this, the preview needs to be made into a subcomponent of the ui options component.&#x20;

        