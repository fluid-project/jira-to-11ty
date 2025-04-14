---json
{
  "title": "FLUID-5490",
  "summary": "Restore \"source tracking\" facility in new ChangeApplier",
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
  "date": "2014-08-08T18:56:05.659-0400",
  "updated": "2015-06-10T20:24:49.747-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4679/",
      "key": "FLUID-4679"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Work this week has thrown up cases in which the default behaviour of the new ChangeApplier, to notify on every change including an initial relay, is unhelpful. Cases include:

i) "lagging indicators" - for example, where a user requires notification of values they have changed themselves\
ii) Other cases where reaction to a change requires interaction with an uninitialised part of the component - e.g. some live markup

For example, the CTR work which brought up FLUID-5489 also raised this issue. The other instance was work on the feedback functionality of the metadata tool.

There are a few ways of delivering on this functionality. We could add annotations to modelListeners which are similar to those on relays - which "gate" based on initialisation sequence. On the other hand, we could restore a version of the functionality we had implemented for the old ChangeApplier, which allowed changes to be distinguished based on their "source". The old implementation suffered from numerous issues, which we should attempt not to recreate. In the new system, sources will be attached to changes (or rather, transactions) rather than to stack frames. We will create a new source named "init" which allows the "initial transaction" to be easily identified for special treatment.

We had hoped to avoid the requirement for a "source" system since the main use of it historically was for "backwash protection" - that is, avoiding endless cycles of changes caused by listeners reacting to changes triggered by a complementary partner (e.g. in the case of a UI field which both reacts to and causes a model change). The new "cautious applier" had eliminated most cases of this since it is completely able to suppress "null changes". But it now seems that some cases still remain.

We suggest a system based on two fields, "excludeSource" and "includeSource". We need only implement the first for now. This seems more intelligible than the old name "guardSource".

Other solutions to this issue are hampered by the fact we did not implement the "lifecycle detection" that we had planned for components in general. There are some cases where it would be desirable to be able to explicitly identify components which are still in a process of initialisation. We have a utility fluid.isDestroyed() which should really be generalised to be able to detect 4 states - IN\_CONSTRUCTION, LIVE, IN\_DESTRUCTION, and DESTROYED. However, the hard requirement for this feature in general suggests deficiencies in other areas of the framework, as this headline issue suggests. We should reimplement a "source" system first and then wait for further use cases for lifecycle detection.

        