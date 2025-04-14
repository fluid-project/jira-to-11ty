---json
{
  "title": "FLUID-5519",
  "summary": "Timing of \"initial transaction\" in new model relay system is problematic",
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
  "date": "2014-10-02T15:39:33.259-0400",
  "updated": "2024-07-22T10:35:30.631-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4925/",
      "key": "FLUID-4925",
      "summary": "Implement \"wave of explosions\", eagerly instantiating all component shells before their contents"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The "initial transaction" was introduced in the new model relay system so that model listeners could depend more reliably on invariants - that is, that they could be sure that there was a notification of a model change corresponding to every transition of the model from its initial state.\
Unfortunately, the timing of this transaction can often interact unhelpfully with the overall component construction process. It had been imagined that the initial transaction could be reliably positioned with respect, at least, to the "onCreate" event but it turns out that not even this is true - depending on the order of encountering and initialising components, it's possible for the initial transaction to occur before the onCreate of some components in the tree, but after that of others.\
This is obviously unsatisfactory, and the situation is also triggering outright bugs - for example an invoker which is registered as a modelListener notified during the initial transaction may not yet have been initialised. See discussion in IRC at <https://botbot.me/freenode/fluid-work/2014-10-02/?msg=22758352&page=2>

The only sound resolution to this problem can follow the FLUID-4925 "wave of explosions" work. The previous conception had been that the model skeleton would immediately follow the component shell in instantiation order, but these experiences suggest that actually the model skeleton should actually form a final penultimate phase of component instantiation, and any "early demanders" of model state should block, promise-like, on this phase.

        