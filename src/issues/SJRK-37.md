---json
{
  "title": "SJRK-37",
  "summary": "Show the story language name in storyViewer",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T17:11:18.317-0400",
  "updated": "2017-11-21T11:22:10.600-0500",
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
      "date": "2017-11-02T16:49:48.785-0400",
      "body": "Work partially complete: <https://github.com/BlueSlug/sjrk-storyTelling/tree/SJRK-37>\n\nThe language name will appear if it is available in the list of languages in the message bundle (in the \"availableLanguages\" block), but it would be ideal if it would show something in case the user chooses \"other\" and they type in the name of a language that isn't listed. Currently it will simply be blank in that case, but there are some possible solutions which could be implemented piecemeal or, ideally, combined in the order presented:\n\n1. Add a list of languages in each localization's message bundle, i.e. languages for which we know the names and IEFT codes but aren't in the drop-down list for some reason. Resolve the language name against this list rather than availableLanguages\n2. As the user types, provide autocomplete suggestions for the name of the language\n3. Store to the model, check the name against the list of available languages to see if there's a corresponding code\n4. Store and display the raw value as entered by the user\n\nThe current state of things lends itself well to the case where we allow multiple language selection, e.g. the user's story is in more than one language, and it would be good to preserve this flexibility.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2017-11-06T17:22:56.792-0500",
      "body": "Issue solved and PR created: <https://github.com/waharnum/sjrk-storyTelling/pull/11>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2017-11-08T16:44:42.160-0500",
      "body": "PR was merged\n"
    }
  ]
}
---
Show the localized story language name in the storyViewer, rather than the model value.

I.e. "English (Canada)" instead of "en-CA"

Consider storing a mapping between language codes and their localized names for languages that may be entered in the language input text box. Autocomplete?

        