---json
{
  "title": "FLUID-4736",
  "summary": "Most Reorderer test cases are now failing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2012-07-25T13:37:52.631-0400",
  "updated": "2012-08-05T22:31:42.000-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4695/",
      "key": "FLUID-4695",
      "summary": "Add the ability to specify transformations in the Model Transformation framework for outputPaths that aren't predetermined"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4733/",
      "key": "FLUID-4733",
      "summary": "Implementation of \"default value merge policies\" is inadequate"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2012-08-02T21:34:04.750-0400",
      "body": "Reviewed and pushed to master at revision 6295c3684d7415a9c5e4009cdb878c0e4453d8b9\n"
    }
  ]
}
---
Most of the Reorderer's test cases are currently failing on the build site - in particular, ImageReorderer tests and ListReorderer tests and most likely more. This is as a result of a framework fault introduced into the system with the merging of Model Transformations as a result of <https://fluidproject.atlassian.net/browse/FLUID-4695#icft=FLUID-4695>. This introduced a new system for "function grades" which altered the way that mergePolicies are accounted for in the grade chain. This causes the "default value merge policies" as used in the code Reorderer's configuration to be applied to its own grade rather than only to any final constructed component:

mergePolicy: { \
keysets: "replace", \
"selectors.labelSource": "selectors.grabHandle", \
"selectors.selectables": "selectors.movables", \
"selectors.dropTargets": "selectors.movables" \
},&#x20;

This is the same configuration quoted in <https://fluidproject.atlassian.net/browse/FLUID-4733#icft=FLUID-4733>, which already comments that this very old implementation is inadequate. At the very least we need to correct this implementation, as well as thinking about i) how this feature can be made consistent with model transformations itself, and ii) not be made subject to the escaping/name collision issues mentioned in <https://fluidproject.atlassian.net/browse/FLUID-4733#icft=FLUID-4733>

        