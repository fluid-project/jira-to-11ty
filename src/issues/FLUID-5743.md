---json
{
  "title": "FLUID-5743",
  "summary": "Remove \"Arabic Grades\" from the framework",
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
  "date": "2015-08-17T15:08:14.163-0400",
  "updated": "2017-02-27T15:49:09.941-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5085/",
      "key": "FLUID-5085",
      "summary": "Correct grade merging algorithm to ensure that grade overriding is always effective"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-18T13:58:47.602-0400",
      "body": "Correction to the earlier timeline - grade have IN FACT been in \"Arabic order\" since at least late 2013 (dating from the fix of <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085>). It appeared that they were overriding in the opposite direction in <https://github.com/colinbdclark/bergson/blob/infusion-2.x/tests/js/utils/scheduler-test-utilities.js#L225> because of the <https://fluidproject.atlassian.net/browse/FLUID-5714#icft=FLUID-5714> \"funcName\" overriding bug. The docs were indeed wrong on this issue during the last few years, and are only now being corrected for the <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> fix and for this fix.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T19:43:55.980-0400",
      "body": "Merged into trunk at revision 6f88f9f4b925a5d3da9e7cd8862e5bd4c9a02b45\n"
    }
  ]
}
---
In preparing the <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> branch for being the Infusion 2.0.0-beta.1 release candidate, it was noticed that the order of grade merging priority had been inverted. The previous 1.9-x branch had grades mentioned to the right of the list in gradeNames overriding those to the left, whereas we now had grades at the left overriding those at the right. This change had also been reflected in the docs accompanying the release, assuming that the previous docs had been in error and that the implemented behaviour was unchanged. We need to back out both the error in the framework and in the docs, and restore the behaviour that a straw poll has determined is intuitively more desirable - that is, grades reading from left to right becoming successively more powerful - and also reflecting the framework's internal order in "mergeBlocks".

        