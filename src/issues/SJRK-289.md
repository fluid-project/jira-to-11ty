---json
{
  "title": "SJRK-289",
  "summary": "Add auto-save or caching feature for story authoring",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2019-09-12T19:46:45.433-0400",
  "updated": "2020-11-12T15:16:07.051-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-360/",
      "key": "SJRK-360"
    },
    {
      "type": "Dependence",
      "url": "/browse/SJRK-394/",
      "key": "SJRK-394"
    },
    {
      "type": "Dependence",
      "url": "/browse/SJRK-396/",
      "key": "SJRK-396"
    },
    {
      "type": "Dependence",
      "url": "/browse/SJRK-399/",
      "key": "SJRK-399"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-409/",
      "key": "SJRK-409",
      "summary": "Update server stories on local changes"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-384/",
      "key": "SJRK-384"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-04-20T12:39:48.668-0400",
      "body": "According to \\[the IRC discussion]\\(<http://irc-logs.fluidproject.org/%23fluid-design/%23fluid-design.2020-04-17.log>), starting 2020-04-17T16:32:38, there are difficulties saving uploaded files in image, audio and video blocks. So the first implementation is to auto save all text contents including all in text blocks, block headings and descriptions and alt texts for audio, video and image blocks. but all uploaded files in audio, video, image blocks will be lost.\n\n\\[The pull request]\\(<https://github.com/fluid-project/sjrk-story-telling/pull/71>) for the first implementation has been merged into the master branch at \\[this commit]\\(<https://github.com/fluid-project/sjrk-story-telling/commit/0a1d74d4bd4033d41869f2199508cc04c04afb01>) and into the stories-aihec-production branch at \\[this commit]\\(<https://github.com/fluid-project/sjrk-story-telling/commit/b7a74dea9f1bd85cd77e4b5939f22ed1ed673bab>).\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-04-22T13:49:56.088-0400",
      "body": "I will be implementing the following steps in order to add server-side autosave:\n\n1. :check\\_mark: ~~Planning the work and make this list (I'm so meta, even this acronym)~~\n2. :check\\_mark: ~~Updating the version number of the project to 1.0.0~~\n3. :check\\_mark: ~~Updating UUID call to use v4 instead of v1~~\n4. :check\\_mark: ~~Adding new values to the story model~~\n   * ~~Published~~\n   * ~~Timestamp for initial creation~~\n   * ~~Timestamp for last modification~~\n   * ~~Timestamp for publishing~~\n   * ~~Salted hash of a CSPRNG or similar to make sure nobody else can finish the author's story~~\n5. :check\\_mark: ~~Adding \"published\" restriction to storiesById view on the DB~~\n   * ~~if (doc.value.published) { ... }~~\n6. :check\\_mark: ~~Updating View request handler to prevent viewing unpublished stories~~\n   * ~~sjrk.storyTelling.server.handleGetStory()~~\n7. :check\\_mark: ~~Adding new request handler to post a story without any files~~\n   * ~~It should call sjrk.storyTelling.server.saveStoryToDatabase()~~\n8. :check\\_mark: ~~Adding functions, listeners, etc. to call this new request~~\n9. :warning: ~~Adding code to check the timestamps, or to check differences in the story~~\n   1. This step is not currently necessary; the story update process will be one-way and conflicts will be resolved with the client's version always being correct.\n10. :check\\_mark: ~~Adding new request handler to post a single media file only~~\n11. :check\\_mark: ~~Adding code client-side to call this request~~\n12. :check\\_mark: ~~Modifying the uploader component to work nicely with this request~~\n13. :check\\_mark: ~~Modifying sjrk.storyTelling.base.page.storyEdit.submitStory() to switch flag~~\n14. :check\\_mark: ~~Creating a progress indicator for file uploading in block editor~~\n15. :info Ensuring tests have been added for all new functions, grades, etc.\n16. Updating documentation to reflect code changes\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-05-19T14:24:50.322-0400",
      "body": "There are a few tasks which were not accounted for in the initial estimate, or which have arisen out of further discussions since then:\n\n1. :check\\_mark: ~~Removing a block's old file from server on new file selection~~\n   1. ~~Getting the newly-added removePreviousStoryFile middleware working~~\n2. :check\\_mark: ~~Getting progress indicator working for audio and video blocks~~\n3. :check\\_mark: ~~Removing fileDetails from code, if it is indeed unused~~\n4. :check\\_mark: ~~Getting timestampLastModified working~~\n   1. ~~No change debouncing or throttling necessary, as gpii.binder only operates DOM-to-model updates on text defocus~~\n   2. ~~File a new Jira for saving on exit/close, if possible~~ <https://fluidproject.atlassian.net/browse/SJRK-357#icft=SJRK-357>\n5. Restricting publishing while upload is in progress\n6. Restricting preview while upload is in progress\n7. Adding tests for all new functions and invokers\n8. Updating docs to reflect changes\n9. Addressing any PR feedback as it arises\n10. Deploying to staging site\n11. Testing via the [Manual Testing Grid](https://wiki.fluidproject.org/display/fluid/Storytelling+Tool+Manual+Testing+Grid)\n12. Address any blockers from the testing session\n13. Deploying to production versions of the site\n14. Testing production versions to ensure no regressions\n\nThese tasks need to be (re)estimated (by me) and incorporated into an overall estimate of remaining work.\n\n \n\nLegend: \n\n:check\\_mark:: done\n\n:info: in progress\n\n:warning:: note\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-07-14T01:36:56.495-0400",
      "body": "Design questions from the Priorities Spreadsheet:\n\n| **Question**                                                                       | **Status**                       | Dan&#x61;**'s Answer**                                                                                             |\n| ---------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------- |\n| When should auto-saving the story occur?                                           | Implemented                      | if we can do it on every change then let's do it                                                                     |\n| When should an auto-saved story load?                                              | Implemented                      | In any case where user leaves the tool/browser                                                                       |\n| When should an auto-saved story be cleared?                                        | Implemented                      | I guess once it's published - this is not user facing in any way, right? so whatever makes sense technically I think |\n| Should an auto-saved story include empty blocks?                                   | Implemented                      | yes                                                                                                                  |\n| Should media (audio, image, video) be stored with auto-saved stories?              | Implemented                      | yes                                                                                                                  |\n| Do we want stories-in-progress to be accessible publicly? I.e. unlisted            | Implemented                      | no                                                                                                                   |\n| Should we disable publishing while files are uploading?                            |                                  | Yes                                                                                                                  |\n| Should we disable viewing the overall story preview while files are uploading?     |                                  | Yes                                                                                                                  |\n| If we decide to save text content locally, how often should the server be updated? | Not implemented (not necessary?) | every minute                                                                                                         |\n| Security considerations for story in progress                                      | Implemented                      | story ID is the security key, for the time being                                                                     |\n\n \n\nFor more context and discussion notes, please refer to [the spreadsheet proper](https://docs.google.com/spreadsheets/d/1_MYdS2ASPERITszN7bmdvnsrfRtdRb2hmZGTJkOc7WM/).\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-09-15T00:26:32.307-0400",
      "body": "I've attempted to determine (without going too deep into the weeds) what the most common/likely errors would be when uploading a file to the server, once this work is completed.\n\nThese error messages would be shown on a given (individual) block and pertain only to that block's file, and will not be shown in the publish story error area.\n\nEach of these messages will be preceded by *\"Uploading failed:\"* before providing more details:\n\n* \"Connection to the server timed out after X seconds\"\n  * When the response from the server takes more than X seconds, regardless of the reason\n  * X is currently set (somewhat arbitrarily) to 5 minutes (300,000 ms). This value should be parameterized and perhaps moved to the server configuration file (in a different Jira, probably)\n* \"Error retrieving story with ID {STORY ID HERE}\"\n  * This is when the story ID in localStorage points to a story that doesn't exist in the database. Not likely in regular usage unless a stale story is deleted, a point that can be revisited as part of <https://fluidproject.atlassian.net/browse/SJRK-345#icft=SJRK-345>.\n* \"Error retrieving story with ID null\"\n  * Same as above, but when local story save has no ID provided. Will occur if a new story is created while the database is down but the web server is not\n* Server out of storage space - exact error text has not been observed at this point, only a hypothetical case and is not actually checked-for in code\n* \"Unable to connect to the server\"\n  * Transfer connection interrupted partway or could not be established in the first place\n  * To reproduce: after loading the editor and adding a media block, turn off the web server and then try to upload any file\n* \"An unspecified server error occurred\"\n  * Displayed when no other error information is available\n"
    }
  ]
}
---
Add the ability to auto-save or cache story content on the user's local machine in order to mitigate server issues or losses due to accidental refreshing or otherwise.

**Update**\
Given limitations on storing large files locally (as mentioned in Cindy Li's comment below), the new approach will be to auto-save the story and any associated files on the server.

        