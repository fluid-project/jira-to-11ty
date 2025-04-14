---json
{
  "title": "FLUID-3818",
  "summary": "IoC \"value resolution\" currently does not search the dynamic environment for resolving context names",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2010-10-25T15:36:01.954-0400",
  "updated": "2010-10-28T14:59:44.350-0400",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-25T16:25:32.581-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-26T02:44:13.742-0400",
      "body": "Fixed at revision 10158 - please review. NOTE that as a result of the remaining issues surrounding <https://fluidproject.atlassian.net/browse/FLUID-3771#icft=FLUID-3771>, it is still not possible to apply this or any other value resolution to values which occur at top-level inside fluid.defaults (that is, not as either a demands block or the options for an IoC-driven subcomponent). This fix also removes what was once a helpful diagnostic on failing to match a context name within the \"that stack\" - the default behaviour on failing to match a name in the environment is simply to silently return an undefined value. This was found helpful in cases where we did \"pure environmental resolution\" (which we are now sharing code with via the new utility fluid.environmentFetcher) but perhaps we should reconsider whether it is appropriate here.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-10-28T14:59:44.348-0400",
      "body": "The tests pass and the code looks reasonable.&#x20;\n"
    }
  ]
}
---
Whilst names held in the dynamic environment are used for function resolution, at present only names in the "that stack" are used for value resolution. These forms of resolution should be made consistent

        