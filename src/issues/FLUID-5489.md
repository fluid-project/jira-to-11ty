---json
{
  "title": "FLUID-5489",
  "summary": "ChangeApplier provides notification of some null changes - full diff algorithm is required",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-08-08T18:43:18.455-0400",
  "updated": "2016-07-08T09:10:08.974-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5585/",
      "key": "FLUID-5585",
      "summary": "Removals from model are never relayed using model relay system"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-03-25T13:57:53.955-0400",
      "body": "This can be closed once we have merged in <https://github.com/fluid-project/infusion/pull/577> which demonstrates that the diff algorithm is fully responsive\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-11-03T13:19:48.076-0500",
      "body": "The pull request mentioned above (#577) has been mothballed. Should this docs issue be closed now?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-11-04T09:15:55.286-0500",
      "body": "The work specifically listed here is concluded. We have a stalled pull request for <https://fluidproject.atlassian.net/browse/FLUID-5490#icft=FLUID-5490> as #577 since we can't unilaterally apply a single policy with respect to \"clearing source and target\" in relay rules - this needs to become a further configuration option to a relay rule, and there will not be time to return to this work before the next ChangeApplier rewrite begins, which itself will have to come after <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>\n"
    }
  ]
}
---
Whilst the new ChangeApplier is much more capable than the old in filtering out the effects of "null changes", there are still situations in which it may annoy the client by providing notifications where there has been no actual change to the model value of interest. The new "cautious applier" at least guarantees never to provide a notification where there has been no change to the overall model, but it can still be fooled in cases of "overbroad changes" (traditionally a bugbear of the ChangeApplier algorithm). Consider the following situation -&#x20;

i) initial model value: undefined\
ii) listener registered at path "innerPath"\
iii) model changed to value {}

Since the root path of the model has been invalidated, our patch matching algorithm will create a changeMap consisting of "ADD" at the root - this will actually notify every listener at every path, even though only a listener actually registered at path "" will see a changed value.

We should improve the ChangeApplier so that it can guarantee to only notify a listener in the case there is a change in the value it is observing.

It's a good time to tidy up on various other ChangeApplier issues. The simplest way to deliver on the headline issue in this JIRA is to implement a full "diff" algorithm (which can be done quite simply on the back of the existing cautious applier). This will be useful in other projects amongst the GPII also. See <https://fluidproject.atlassian.net/browse/FLUID-5490#icft=FLUID-5490> also.

        