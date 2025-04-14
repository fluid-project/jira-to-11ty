---json
{
  "title": "FLUID-5258",
  "summary": "distributeOptions behaviour is inconsistent with respect to expansion context",
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
  "date": "2014-01-22T04:14:27.689-0500",
  "updated": "2019-11-28T16:00:37.875-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5594/",
      "key": "FLUID-5594"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6437/",
      "key": "FLUID-6437"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The "headline requirement" for the distributeOptions system was to expand source material in the context of the source component and not the target component - this is because the initial role of the system was seen as "facade-forming" in that material received from external parties would be processed in a "black-box" way - external parties were not expected to be aware of the implementation details of the component to which options were forwarded and in fact shielding them from this knowledge was one of the primary goals of the system. Therefore expanding material in the source context was crucial and we went to some efforts to ensure this behaviour (which actually confused implementors initially) was implemented. Of course the aim was to trade off confusion to implementors against lack of surprise to end users.

However, since this initial implementation, two issues have arisen:

i) The expansion system as implemented is not fully consistent. Some material, especially that appearing in "listeners" arguments etc. is still always expanded in the target context, since this occurs by a custom workflow in the framework rather through general options expansion. This is an alarming inconsistency we need to think about and fix

ii) There may be architectural purposes for distributeOptions other than the one originally conceived which may make expansion in the target context the correct behaviour after all. We should watch our activities and try to characterise them - if there do seem to be legitimate purposes for this, and we decide to fix i) we should also consider adding configuration option "expandAtTarget" or so to the set available in distributeOptions to cater for this.

        