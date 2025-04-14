---json
{
  "title": "FLUID-5054",
  "summary": "Base grades of dynamic grades are not registered into IoC resolution",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2013-06-14T11:29:03.072-0400",
  "updated": "2014-03-03T11:48:52.854-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5054/FLUID-5054.tests.patch",
      "filename": "FLUID-5054.tests.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-06-17T05:41:01.429-0400",
      "body": "Hi Yura - thanks for this issue report - the test case code looks clear enough but this report unfortunately falls into the category of a TLJ (Two Line JIRA). Do you think you could expand the issue description so that \\\ni) there is a chance that a 3rd party could understand what the issue is without reading the code\\\nii) you describe the context where the problem arose\\\niii) you describe any simplifications you have attempted to the test case which will cause it no longer to fail\n\nThanks, A\n"
    },
    {
      "author": "y z",
      "date": "2013-06-17T13:22:11.480-0400",
      "body": "Hi Antranig, gladly:\n\ni) As a user of the framework might be aware, there's an option of specifying (\"contributing\") additional grades to a specific component via its options. Those additional grades might be composed of other grades created outside of framework defaults. The problem here is that if such grade is, indeed, specified in options, the actual component will not be considered an instance of one of its derivative grades.\n"
    },
    {
      "author": "y z",
      "date": "2013-06-17T13:27:55.956-0400",
      "body": "ii) The problem arose while working on refactoring of uioptions. We have a grade called fluid.uiOptions.initialModel that contains an empty initial model used by uiOptions component. In addition to that grade we also have a grade called fluid.uiOptions.initialModel.starter. This grade is a child grade of fluid.uiOptions.initialModel with a starter uiOptions model actually defined. This grade is conditionally attached to fluid.uiOptions component itself (there's an option of defining other grades that inherit from fluid.uiOptions.initialModel). The problem arises when we refer to fluid.uiOptions component as a more loose fluid.uiOptions.initialModel grade instead of its fluid.uiOptions.initialModel.starter instance. In that case the reference to a component is not resolved by the framework.\\\n3\\) Note however that everything works if there grades are specified in the component defaults. In order to fix it, for the time being (until the initial model is replaced by the current schema work), uiOptions has an additional default grade of fluid.uiOptions.initialModel that contains no pre set initial uiOptions model.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-06-18T07:51:22.618-0400",
      "body": "Thanks for the addiitonal description, Yura! A pull request is now in the queue\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-06-28T16:08:25.815-0400",
      "body": "Merged into trunk at dccfc47\n"
    }
  ]
}
---
It looks like contributed hierarchical grades are not resolving with the current IoC system.

Attaching a patch with a test case

        