---json
{
  "title": "FLUID-4711",
  "summary": "Action of fluid.clearComponent recursively clears all subcomponents from an injected tree",
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
  "date": "2012-05-23T01:13:09.178-0400",
  "updated": "2012-08-06T00:28:56.598-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2012-08-02T20:01:18.326-0400",
      "body": "Reviewed and pushed to master at 67da204..722ba14\n"
    }
  ]
}
---
GPII framework "requests.js" exposed this issue. At the lifecycle point of request end, that framework calls instantiator.clearComponent on the "request component" in order to clear it away. For a start, this is by default a very aggressive method which by default rips through all component found, recursively clearing their subcomponents - as well as removing them from both the "idToPath" and "pathToComponent" records. The former effect can be defeated by the rather messy extended signature using the "noModTree" option as in

instantiator.clearComponent(that, name, null, null, true);

but the idToPath effect cannot be defeated, which ends up corrupting the instantiators records, in the case the component had subcomponents which were injected from a larger scope (that is, "application scope" in Spring-speak).&#x20;

This implementation needs to be improved in order to keep records of components which were delivered through direct injection rather than being constructed "in situ" by the action of initDependent, and to ensure that ONLY the pathToComponent record is cleared in this case.&#x20;

        