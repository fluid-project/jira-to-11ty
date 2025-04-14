---json
{
  "title": "SJRK-115",
  "summary": "Investigate if there's a better approach for sjrk.storyTelling.ui.getBlockGradeFromEventModelValues than dynamically generating a grade",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T17:13:30.216-0400",
  "updated": "2020-06-26T11:16:35.221-0400",
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
      "date": "2020-06-26T11:16:35.221-0400",
      "body": "@@Antranig Basman left some relevant feedback on my <https://fluidproject.atlassian.net/browse/SJRK-288#icft=SJRK-288> pull request:\n\n> This isn't recommended since in current Infusion these defaults definitions will leak - whilst dynamically generated grades are used from time to time, this is only where there is no alternative. It seems like a better approach would be to ensure that the values fired in the event are already properly defaulted (in createBlocksFromData ?) and then to write the dynamic references to the event arguments inline in the definition of the \"block\" component.\\\n> General notes -\n\n* yes, supplying no grades at all in \"mixin\" grades is a reasonable technique, and was even sometimes required in the old framework where it was possible that trying to mix in \"fluid.modelComponent\" to a view component again would trash its argument list. This bug got fixed in the new framework.\n* the definition of \"storyUi\" is too large and should be broken up at least at one point, perhaps at \"blockManager\", \"managedViewComponents\", or both. It would be helpful to supply at least some kind of base grade for \"managedViewComponents\" in any case to guide the reader as to what kind of material might get created.\n"
    }
  ]
}
---
In order to successfully merge model values from dynamically-created components (rather than override the model entirely) with default values on a model, we're using dynamic grade generation in the sjrk.storyTelling.ui.getBlockGradeFromEventModelValues function.

We should investigate if there's a smoother way to do this, as dynamic grade generation has relatively high overhead.

        