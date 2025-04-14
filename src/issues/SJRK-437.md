---json
{
  "title": "SJRK-437",
  "summary": "Review usage of \"section\" elements in UI templates",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-12-03T18:11:57.329-0500",
  "updated": "2020-12-03T18:15:45.893-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In most themes, the primary UI templates use a pair of "section" elements to delineate between the "knockout" title bar and the main page content which has some padding on either side of it. It's possible that this usage of the "section" element is not in keeping with semantic HTML guidelines, and this should be reviewed: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section>

If this usage is found not to agree with how the "section" element is meant to be used, change them to something that is appropriate (e.g. "div") and adjust the CSS rules accordingly.

The themes affected by this issue are: "aihec", "cities", "learningReflections" and "sojustrepairit", as well as the storyNotFound template in the base theme.

For an example of this code, see the storyViewer template in learningReflections theme: <https://github.com/fluid-project/sjrk-story-telling/blob/main/themes/learningReflections/templates/learningReflections-storyViewer.handlebars#L2-L8>

        