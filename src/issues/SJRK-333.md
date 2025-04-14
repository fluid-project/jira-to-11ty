---json
{
  "title": "SJRK-333",
  "summary": "Update production Storytelling Tool sites",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-03-27T13:07:16.303-0400",
  "updated": "2020-04-03T12:43:47.357-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-03-27T16:52:21.364-0400",
      "body": "The updates have been applied, all pre-existing stories are present and functioning properly, other pages on the sites seem to be fine and the browser tests are passing. Firefox 74 and Edge 44 browser tests hang on the Page grade fairly often, which I believe is the known kettle crash issue documented in SJRK-187. Otherwise, tests are passing in those browsers.\n"
    }
  ]
}
---
Update the production Storytelling Tool sites with the latest version of the software from [master](https://github.com/fluid-project/sjrk-story-telling/tree/master), making sure at every step that there are no glaring issues.

Deployment plan:

1. ~~Add separate CI jobs to back up stories on SJRK and Cities sites~~ These jobs already exist :check\_mark:
2. Back up SJRK site content :check\_mark:
3. Back up Cities site content :check\_mark:
4. Back up FLOE site content :check\_mark:
5. Merge master into SJRK site branch ([stories-sojustrepairit-production](https://github.com/fluid-project/sjrk-story-telling/tree/stories-sojustrepairit-production)) :check\_mark:\
   Merged at [9790fbacd54e878f9387defde90a5609adbbcc80](https://github.com/fluid-project/sjrk-story-telling/commit/9790fbacd54e878f9387defde90a5609adbbcc80)
6. Run [browser tests](http://stories.sojustrepairit.org/tests/) on SJRK site and check it visually
7. Merge master into Cities site branch ([stories-cities-production](https://github.com/fluid-project/sjrk-story-telling/tree/stories-cities-production)) :check\_mark:\
   Merged at [5c752156693b02d0ffb770adf7d67aa66c6492d4](https://github.com/fluid-project/sjrk-story-telling/commit/5c752156693b02d0ffb770adf7d67aa66c6492d4)
8. Run [browser tests](https://stories.cities.inclusivedesign.ca/tests/) on Cities site and check it visually
9. Merge master into FLOE site branch ([stories-floe-production](https://github.com/fluid-project/sjrk-story-telling/tree/stories-floe-production)) :check\_mark:\
   Merged at [c0f42f1d355594ea1432249b6df8df3b715b0d30](https://github.com/fluid-project/sjrk-story-telling/commit/c0f42f1d355594ea1432249b6df8df3b715b0d30)
10. Run [browser tests](https://stories.floeproject.org/tests/) on FLOE site and check it visually

        