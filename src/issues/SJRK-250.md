---json
{
  "title": "SJRK-250",
  "summary": "Text of some stories breaks outside of its container",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "In Progress",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2019-06-10T18:34:05.176-0400",
  "updated": "2020-04-21T11:42:08.678-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-172/",
      "key": "SJRK-172"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-250/2019-06-06 Storytelling Tool glitch.png",
      "filename": "2019-06-06 Storytelling Tool glitch.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-250/2019-09-26 ST text overflow bug 1.png",
      "filename": "2019-09-26 ST text overflow bug 1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-250/2019-09-26 ST text overflow bug 2.png",
      "filename": "2019-09-26 ST text overflow bug 2.png"
    }
  ],
  "comments": [
    {
      "author": "Caren Watkins",
      "date": "2019-06-11T13:10:19.955-0400",
      "body": "Based on observation and feedback this only happens when the paste function is used (but that could be incorrect). For example, if someone writes their story in a word doc or google doc then copies and pastes it into the tool.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-09-26T22:00:38.354-0400",
      "body": "Issue persists and is confirmed to occur in:\\\nmacOS Chrome\\\nmacOS Firefox\\\niPhone 8 Safari\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-10-10T17:38:37.558-0400",
      "body": "This appears to be caused by the fact that the text block view template makes use of the GPII-Handlebars Markdown helper: <https://github.com/GPII/gpii-handlebars/blob/master/docs/mdHelper.md>\\\nThe relevant line in the Storytelling Tool can be seen here: <https://github.com/fluid-project/sjrk-story-telling/blob/a870c8afe9609a484f9005778039a0fe73974545/themes/base/templates/storyBlockTextView.handlebars#L4>\n\nThe issue can be reproduced by creating a new text block, adding content **that contains line breaks**, and then wrapping it in triple-backtick characters (\\`\\`\\`). In doing so, the Markdown renderer treats the text as a block of code and styles it accordingly, forcing no line wrapping.\n\nPlease also note the first paragraph, or whatever is immediately adjacent to the quotes, will not be rendered. This may be an issue in GPII-Handlebars, its underlying Markdown renderer, or it may be a symptom of misuse of the Markdown syntax (normally there would be a line break after the opening \\`\\`\\`)\n\nPossible solutions:\n\n1. Fix the database entries for the currently-affected stories and remove the offending characters from the text block content\n2. Adding escaping code text block or storyEditor that separates any triple-backticks from content that immediately follows it\n3. Remove the call to the md helper in the text block template, making it truly plain text but offering no escaping of any kind. Markdown support could then be added via implementing <https://fluidproject.atlassian.net/browse/SJRK-172#icft=SJRK-172>.\n4. Add a CSS rule to force wrapping for such lines\n   ```css\n   pre code {\r\n       white-space: pre-wrap;\r\n   }\n   ```\n   ...or all of the above 🙂\n\nA quick fix would be to add the CSS rule, and when time permits the stories currently affected can be manually adjusted. The affected story content should be corrected regardless, since it's possible that whole paragraphs are missing.\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2019-11-12T16:21:48.150-0500",
      "body": "In chatting with Gregor and Justin today, we think this was likely caused by a user adding four spaces at the beginning of a line. This causes the same outcome as triple backticks and is more likely to happen by accident (intending to indent a line).\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-11-12T16:25:52.990-0500",
      "body": "Building on Ned's comment just now, the same effect is achieved with a single tab character (\t), aka HT\n"
    }
  ]
}
---
Reported by @@Caren Watkins via email

"Hi Gregor, during a scan of the stories I noticed this odd rendering of a story from last Wednesday. The student did note in their critique of the tool that the copy was running "off screen" but I wasn't clear until I saw this:" \[refer to attached image]

This has been noted before in stories captured earlier this year. Here are links to the stories currently exhibiting this behaviour:\
<https://stories.floeproject.org/storyView.html?id=2fbf9d20-2a39-11e9-98f6-71413982cc35>\
<https://stories.floeproject.org/storyView.html?id=2931a1f0-879b-11e9-b178-a79380bdbe47>

Expected: all text to remain within the width of the site viewport, rendered in "p" elements

Actual: lines occasionally appear in monospace font, rendered in "pre" and "code" elements

        