---json
{
  "title": "FLUID-6440",
  "summary": "contextAwareness does not participate properly in grade closure algorithm",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-12-06T19:38:13.369-0500",
  "updated": "2024-07-19T07:40:42.683-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-12-06T19:40:07.007-0500",
      "body": "This implies that our previous hack fix for <https://fluidproject.atlassian.net/browse/FLUID-6438#icft=FLUID-6438> isn't quite appropriate. The CA algorithm indeed cannot be honoured by any userland definitions of single-shot grade computations and needs to be specially recognised. We should therefore withdraw our sort of half-assed support for \"first\" and \"last\" priorities and simply recognise a special form of record output by CA. However, our work in ensuring that arbitrary objects are recognised as gradeName elements hasn't gone to waste.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-12-09T12:34:17.728-0500",
      "body": "@@Antranig Basman in my <https://fluidproject.atlassian.net/browse/FLUID-6420#icft=FLUID-6420> branch, for the prefs framework demo we have the contextAwareness for applying the Text-to-Speech preference. With your latest changes to the <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148> branch, things appear to be working to apply the Text-to-speech preference. However, when the context check fails, I have a default grade for supplying the template that should be used instead. This template is not being applied. \n\nI can supply the template path in the options when instantiating the component, but then the template path supplied when the context check passes, is no longer applied.\n\n \n"
    }
  ]
}
---
It always seemed a bit miraculous that we had seemed to implement the ContextAwareness (CA) feature apparently in "pure userspace", via a single raw dynamic grade definition, given how sensitive the dynamic grade resolution (DGR) algorithm is.\
In retrospect, the DGR algorithm can be seen as a member of the class of "do least advanced work first" algorithms that the overall "ModelComponentQix" algorithm referred to in FLUID-6406 is another of.\
In practice, each freshly arriving dynamic grade should kick off a further round of all available grade accumulation algorithms, until we have full grade closure. The framework can do this internally for grades arriving via distributions via fluid.collectDistributedGrades(), but it cannot call out again to ContextAwareness for it to make its own checks.\
We have run into what initially didn't appear to be a closely related issue in the in-progress <https://github.com/fluid-project/infusion/pull/967> for <https://fluidproject.atlassian.net/browse/FLUID-6420#icft=FLUID-6420> at the current commit <https://github.com/fluid-project/infusion/pull/967/commits/e8adf6f6ca51a6a4761bbd6f52d8c3a363661fce> - whilst we had adjusted the timing of the FIRST (and currently, only, poll to contextAwareness) for <https://issues.fluidproject.org/browse/FLUID-6438> so that we didn't unnecessarily consume options values in later dynamic grade sources before CA could run, this led to a sense of unease that CA was running at a single time point at all.\
In the current commit, we now have a further issue that the grade outputs of CA are being overridden by grades output from a dynamic grade source, fluid.prefs.auxBuilder.buildAuxiliary .\
With a bit of effort, we can see this is just the form of problem we expected, even though CA in this case would not output any fresh grades. The mere fact that it output any grades implies that it should be rerun after any dynamic grade output, leading to any grades that it outputs being re-shunted to the front of the grade list.\
We should check that this is what the closure algorithm would achieve, but it looks like it probably is - although we keep a hash of seen grades, it appears that the "plainDynamic" in the closure algorithm's records is only used in order to determine whether closure is complete, rather than to stop reshunting grades ahead in the grade order.

        