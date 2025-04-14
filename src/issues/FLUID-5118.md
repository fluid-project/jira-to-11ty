---json
{
  "title": "FLUID-5118",
  "summary": "IoC expansion of distributed options is based on current component, rather than the one the options are distributed too",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2013-08-19T13:11:19.937-0400",
  "updated": "2014-03-03T11:29:23.387-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-08-19T13:16:14.415-0400",
      "body": "Issued a pull request ( <https://github.com/fluid-project/infusion/pull/392> ) containing a test case demonstrating the issue.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-19T15:41:38.483-0400",
      "body": "Hi Justin - this behaviour is just as designed, and it took some effort to get it that way! Options are always expanded based on the site of configuration and not the target component. This is because it is the original requester whose environment is relevant to configuration he provides. He cannot be expected to anticipate the destination site, and hence adjust his configuration for an unforseeable target - they may even be multiple such targets.\n"
    }
  ]
}
---
When using distributed options, the IoC expansion seems to occur before the distribution of the options. The means that the resolution of {that} is based off of the existing component instead of the one to which the options are being distributed too.

This can be quite confusing, particularly for integrators who assume they are working with the options structure for the child component.

        