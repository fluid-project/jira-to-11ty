---json
{
  "title": "SJRK-150",
  "summary": "Update Edit page tests to work in any language",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-06-11T01:53:04.151-0400",
  "updated": "2018-06-28T19:07:04.650-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/SJRK-157/",
      "key": "SJRK-157"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-11T12:24:15.352-0400",
      "body": "Fixed by switching the test order. This is not an ideal solution.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-27T11:26:51.685-0400",
      "body": "The tests for sjrk.storyTelling.page.storyEdit will fail if either:\n\n* the cookie with language preferences is missing, or\n* the cookie is present and the language is not English\n\nEnsure the tests are set up such that they will pass, either by making sure the preference is there and set to English, or by adjusting precisely what is tested.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-27T12:01:27.829-0400",
      "body": "A related symptom is that if the cookie is not present while using the editor page, the first click of a block-add button will fail in exactly the way described in <https://fluidproject.atlassian.net/browse/SJRK-94#icft=SJRK-94>\n\nErgo it is likely that there is nothing wrong with the tests at all, and that the code for blockUi's should be made more robust in order to deal with just such a situation. The default initial value should be set somewhere and used instead of falling back to \"undefined\"\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-28T18:52:27.137-0400",
      "body": "The solution was to update the page.model.uiLanguage to templateManager.model.locale relay to work only conditionally, so that if uiLanguage is falsy (e.g. undefined), then it simply doesn't override the default, which is \"en\"\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-28T19:07:04.647-0400",
      "body": "The tests have been adjusted to work regardless of the initial language set, and now include checking that the text-to-speech string is changed and renders correctly when switched between English and Spanish and back again. As mentioned in the most recent comment, if there is no cookie present, the site will default to English.\n"
    }
  ]
}
---
The tests for sjrk.storyTelling.page.storyEdit currently fail if they are run after the tests for sjrk.storyTelling.page, because the latter sets the language cookie to Spanish and the former expects values in English.

This is symptomatic of the message\_readStoryText value containing set values in the given language, instead of being dynamically composed of other messages (like message\_authorText). This can be tackled later.

A simple solution for the time being could be something like switching the language click tests on page to run English second instead of first, or calling something to clear the cookie at the end of the sequence.

        