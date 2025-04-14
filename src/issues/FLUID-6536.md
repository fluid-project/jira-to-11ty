---json
{
  "title": "FLUID-6536",
  "summary": "Unify model transaction and tree transaction systems, together with \"globbing\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-07-30T07:48:16.937-0400",
  "updated": "2021-11-26T08:03:47.669-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5498/",
      "key": "FLUID-5498",
      "summary": "Apply \"transaction globbing\" for any manual changes triggered as part of a change process"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6396/",
      "key": "FLUID-6396",
      "summary": "Move ChangeApplier over to \"immutable application\" model"
    }
  ],
  "attachments": [],
  "comments": []
}
---
As part of the FLUID-5047 rendering work, it seemed more urgent to unify the rather different transactional systems that we have supporting "tree transactions" (following FLUID-6148) and old-fashioned "model transactions" (following <https://fluidproject.atlassian.net/browse/FLUID-5024#icft=FLUID-5024>).

Tree transactions are somewhat forward-looking in that they are "ambient" transactions that don't require a special formality to enlist in (code needs to look up the "current transaction" using fluid.currentTreeTransaction) but is incomplete in that it is very unlikely that more than one tree transaction can be underway on the same component tree "at the same time".

Model transactions are old-fashioned in that they are "manifest" in that one needs access to the particular model transaction object, dispensed from changeApplier.initiate() in order to enlist in it. They are likely to be non-interfering (except for init transactions, which are tied to tree transactions) but are cumbersome to use and anti-authorial, as <https://fluidproject.atlassian.net/browse/FLUID-5045#icft=FLUID-5045> suggests.

One of the things we need to be able to ensure for FLUID-5047 is that all the reactants from a single model change can resolve within a single model transaction, and hence also a single tree transaction - to ensure that we just make a single trip to the DOM for rendering their results. This is currently impossible since every modelListener notified from around the skeleton of a transactional update is isolated and has no way to enlist in a common transaction in the way that we arranged for FLUID-6148, i.e. for all components created from createOnEvent from the same standard event to be enlisted in the same tree transaction, by "soft opening" it during the firing and then closing it with a finalising listener.

This seems to imply unifying model transactions and tree transactions - which at least would resolve the annoying asymmetry that init model transactions are stored in a tree transaction whereas free ones are stored in global instantiator's "modelTransactions" record. Whilst it looks like tree transactions are bulky, as a "struct" they should be relatively easy to allocate.

It looks like, in practice, we want "very long-lived transactions" as with tree transactions, for model transactions, which stay around for multiple passes through the system. This is in fact mostly what the existing "half-transactional" system which operates relay rules does. However, this system we considered is only affordable because it does not bother to take a fresh snapshot of each intermediate state of the model so it can supply "oldValue" to the relay system, that is, the last value that the model had before it was notified.

This suggests that these changes should be made together with <https://fluidproject.atlassian.net/browse/FLUID-6396#icft=FLUID-6396> "immutable revolution" so that we can keep arbitrarily many old snapshots around at little cost, and thus indeed unify the relay half-transaction system and the user model transaction system.

This can then mean that the transaction which model listeners enlist in simply is the original model transaction which continues to be ongoing, together with any tree transaction it becomes enmeshed with.

        