---json
{
  "title": "FLUID-6281",
  "summary": "Can't refer to a subcomponent by its grade name in an IoC reference for model listener on the parent.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2018-05-17T16:26:53.495-0400",
  "updated": "2018-08-22T12:56:33.667-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6148/",
      "key": "FLUID-6148",
      "summary": "Implement \"potentia II\" constituting aligned, transactional records of author's creational intent"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-05-17T16:32:34.698-0400",
      "body": "Submitted a PR with a test case verifying the issue. <https://github.com/fluid-project/infusion/pull/902>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-05-17T17:03:31.220-0400",
      "body": "This is a subcase of <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148> and is hopefully resolved by that work. Could you check out your test case with the pull that is in progress for that, and perhaps any other review that occurs to you - cheers!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-05-22T09:40:03.434-0400",
      "body": "@@Antranig Basman it looks like <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148> fixes this, as the tests pass in that branch. I did a skim, far too quick for a change of such complexity, of the <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148> PR and nothing immediately stood out.\n"
    }
  ]
}
---
When trying to hook up functionality between a child component and the parent component, if an IoC reference used on a model listener, or invoker used by a model listener, refers to the subcomponent by its grade name, the reference will fail to resolve.

 

It will work if the IoC reference is made using the member name for the subcomponent as defined in the components block.

        