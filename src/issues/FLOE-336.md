---json
{
  "title": "FLOE-336",
  "summary": "Language enactor needs to add a language-specific class to the tool",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2015-05-14T16:20:29.895-0400",
  "updated": "2015-11-03T12:08:51.477-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-05-15T15:37:04.921-0400",
      "body": "According to <http://www.w3schools.com/cssref/sel_lang.asp>, css can be applied based on the language code. Anastasia experimented and it seemed working fine. So, the solution is altered: rather than applying a css class to the container, a \"lang\" attribute will be added to the \\<html> element. Also, this attribute change needs to be performed by the language panel instead of the language enactor which reloads the page and causes added attribute being wiped out.\n\nIssued a pull request: <https://github.com/fluid-project/first-discovery/pull/48>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-19T08:58:05.702-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/48> ) into the project repo at 06a3f7e63ed3398c92696599669bd9e79ab775b7\n"
    }
  ]
}
---
Because the strings are of different length in the different languages, we will need language-specific styles. To support this, the tool needs to add a class (to the body or the main div?) that is specific to the language in question. I suggest a fixed prefix of something like "gpii-fd-lang-" with the language code tacked on, so French would result in "gpii-fd-lang-fr" and Spanish would result in "gpii-fd-lang-sp"

        