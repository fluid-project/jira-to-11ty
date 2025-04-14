---json
{
  "title": "FLUID-5373",
  "summary": "Correct implementation of \"half-transaction system\" used in model relay so that it is more comprehensible and correct",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-05-15T15:30:31.183-0400",
  "updated": "2021-07-29T01:33:57.272-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6211/",
      "key": "FLUID-6211",
      "summary": "Implement \"vertical transactions\", supporting in-band notification of transaction demarcation"
    }
  ],
  "attachments": [],
  "comments": []
}
---
In doing work for the group of issues <https://fluidproject.atlassian.net/browse/FLUID-5361#icft=FLUID-5361>, <https://fluidproject.atlassian.net/browse/FLUID-5368#icft=FLUID-5368>, <https://fluidproject.atlassian.net/browse/FLUID-5371#icft=FLUID-5371>, the logic of the existing model relay system was found to be extremely hard to follow as well as being likely to give incorrect results in many cases. For <https://fluidproject.atlassian.net/browse/FLUID-5361#icft=FLUID-5361> we corrected the timing of notification of listeners so that they are at least globally consistent but the previous test cases seem to have been written largely from the point of view of asserting that the final model condition is correctly computed. Now we are interested in the exact order of observation which is received by model listeners many problems are becoming apparent.

The model relay system uses the peculiar "half-transactional" system in order to make sure that the maximum number of changes have been honoured throughout the model skeleton before we attempt to honour a transforming model relay. Operating a transforming relay when the material that its transform depends on has been only partially updated runs a great risk of propagating inconsistent values into the models. Partial updates can arise from two sources - i) a sequence of individual changes propagated by a user in one of their own transactions, ii) a sequence of changes emitted by another transforming relay which has a compound output value. We must wait until the system is "idle" from these causes before starting to operate transforming relays. This implies that there are kinds of "subtransactions" corresponding to these idle points, on a much shorter timescale to the overall transaction visible to the user.

The error in the current system relates to trying to store only a single transaction at each applier cooperating in a wider transaction. There is not one answer that satisfies the needs of both kinds of clients, and the design of our transactions has become hugely overcomplicated as a result, with two independent sets of bookkeeping information being maintained for the fine and coarse transactional scales.&#x20;

We need to store TWO transactions at each proper model in the skeleton, one for the user's transaction and one for the current "relay idle point". We need to store just ONE transaction at appliers attached to relays themselves, the one representing the fine scale.

Without this, the user will see numerous redundant model updates during the relay process as the internal "idle points" are reached - and without independent accounting for the original transaction state, will also see model notifications in the case where a relay "transforms away" a change leaving the overall model unchanged. Also right now should the user succeed in finding a way to observe the model state before the completion of the overall transaction, they may be able to see it in a partially updated condition as updated by a relay transaction as the two kinds of transactions are currently multiplexed. Even though we don't intend to provide schemes which would allow this kind of observation (especially since <https://fluidproject.atlassian.net/browse/FLUID-5361#icft=FLUID-5361> schedules listeners until after the completion of the overall transaction) we should still ensure that the actual model update is genuinely atomic at the coarser scale.

In order to support this we also need to adjust our algorithm for computing change maps and change content. This should act ONLY at the point a transaction commits, and compute the maps and counts in one shot only at that point - since we are only interested in whether and what change has occurred rather than the mechanism for it. Without this, we are liable to trigger changes in cases where there has been no overall change to the model.

Hopefully by storing the two kinds of transactions separately, we can hugely simplify the overall workflow of the relay process as well as simplifying the implementation of the transactions themselves.

        