---json
{
  "title": "SJRK-364",
  "summary": "Improve implementation of templateManager grade",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-06-18T16:18:01.513-0400",
  "updated": "2020-06-22T14:00:36.420-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-366/",
      "key": "SJRK-366"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The templateManager grade currently uses two separate fluid.resourceLoader subcomponents which handle loading the template and l10n messages (named templateLoader and messageLoader, respectively), and, once loaded, a gpii.handlebars templateRenderer that will combine the two and render the markup in the page. This issue is briefly discussed in [the pull request for SJRK-288 & SJRK-359](https://github.com/fluid-project/sjrk-story-telling/pull/84#pullrequestreview-431017684)

This structure is complex, prone to race conditions, and can be simplified by taking advantages of features introduced to the resourceLoader in <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148>/<https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> branches of Infusion. See here for documentation of those new features:\
<https://github.com/fluid-project/infusion-docs/blob/a46115785fff485ecae3b827eedfc2c2b3072b5e/src/documents/ResourceLoader.md#resourceloader-lifecycle>

The scope of this Jira is to simplify the way the templateManager works to remove the need for listeners to the onTemplateRendered event in all parts of the Storytelling Tool.

        