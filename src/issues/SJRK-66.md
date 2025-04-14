---json
{
  "title": "SJRK-66",
  "summary": "Create better build site demos of the flexible \"themes\" of the storytelling UI",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Alan Harnum",
  "date": "2018-03-27T14:53:32.522-0400",
  "updated": "2019-12-05T13:21:09.742-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-05-25T14:49:35.092-0400",
      "body": "On the build site, we should have links to the following:\n\n1\\) A \"basic\" appearance\\\n2\\) The Learning Reflections theme\\\n3\\) The Karisma theme\n\nThese should also implement the overview panel so we can explain what they are\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-12-05T13:21:09.742-0500",
      "body": "A bit more work has been done in the meantime around theming and reorganizing the codebase. We now have several production versions of the tool, and the tool will run with a barebones theme called \"base\".\n\nHere are the currently-implemented themes, their config names and their associated sites where applicable:\n\n1. \"base\"\n2. The Learning Reflections theme \"learningReflections\": <https://stories.floeproject.org/>\n3. Karisma / \"karisma\": <https://karisma-stories.floeproject.org/>\n4. Inclusive Cities / \"cities\": <https://stories.cities.inclusivedesign.ca/>\n5. SJRK / \"sojustrepairit\": <http://stories.sojustrepairit.org/>\n\nEach of the above-linked sites builds from a dedicated branch, so they're good as demo sites in that they're stable and don't often change. We also have the Staging site which is built directly from our main development branch ([stories-floe-dev](https://github.com/fluid-project/sjrk-story-telling/tree/stories-floe-dev)), and it gets reset every 24 hours: <https://staging-stories.floeproject.org/>\n\nI think it would make most sense to follow the staging site model and build from the same dev branch and reset every night, but to use the \"base\" theme instead of the LR theme.\n"
    }
  ]
}
---
Currently, the most mature demonstration of the storytelling tool UI is the Learning Reflections site deployed at <https://stories.floeproject.org/>

The build site deployment is a much older, pre-block version: <https://build.fluidproject.org/sjrk-storyTelling/>

It would be best to have an isolated demonstration of the block-based storytelling UI without the additional website chrome, similar to this demo for the Chart Authoring tool: <https://build.fluidproject.org/chartAuthoring/demos/>

        