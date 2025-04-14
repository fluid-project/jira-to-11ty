---json
{
  "title": "FLUID-4916",
  "summary": "Provide facility for dynamically resolved component gradeNames",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-02-19T05:10:58.441-0500",
  "updated": "2014-03-03T12:26:55.572-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System",
    "Progressive Enhancement"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4917/",
      "key": "FLUID-4917",
      "summary": "Implement \"demands block horizon\" system enabling demands block resolution to be cut off when meeting first instance of a context name"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-06T17:16:56.432-0400",
      "body": "Committed to trunk at revision a653e4e\n"
    }
  ]
}
---
To bring the ProgressiveEnhancer up to modern framework standards, as well as implement "demands block horizons" (FLUID-4917), as well as for various other purposes (e.g. "nonce request grades" within GPII/Kettle) we require support for components whose grade hierarchy is dynamic.

Initially we plan support for schemes like the following,

fluid.defaults("fluid.progressiveChecker", {\
gradeNames: \["fluid.typeFount", "fluid.littleComponent", "autoInit", "{that}.check"],

where "{that}.check" is an invoker resolved on the current component. The initial requirement is for the gradeName set to be updated so that we can use a FLUID-4914-based system for operating the ProgressiveEnhancer, rather than it producing just the single typeTag that it previously used to via a now-illegal indirect return system. As well as allowing the progressiveChecker to be given a standard automatic component workflow, this will also allow it to "return" multiple typeTags (as a result of being able to match all gradeNames throughout its hierarchy, including those returned from {that}.check) which as well as being useful in itself, will allow us to implement the "demands block horizon" system which will prevent more than one instance of a progressiveChecker for the same component to be taken into account during resolution.

Future requirements will expect the entire defaults block for the new grade hierarchy to be switched in. This will be perfectly possible, so long as the invoker in question does not provoke the ginger process to examine any "unsuitable" parts of the component, for example any of its subcomponents.

        