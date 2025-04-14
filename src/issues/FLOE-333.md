---json
{
  "title": "FLOE-333",
  "summary": "Scrolling through languages causes page to reload too often",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Anastasia Cheetham",
  "date": "2015-05-13T09:14:02.751-0400",
  "updated": "2015-11-03T12:54:25.208-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-396/",
      "key": "FLOE-396"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-397/",
      "key": "FLOE-397"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-398/",
      "key": "FLOE-398"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-05-13T13:48:15.647-0400",
      "body": "According to the discussion in #fluid-design - <http://issues.fluidproject.org/browse/FLOE-333>, 12:54PM onwards, the arrow buttons should just scroll the language list, and then the user could use mouse to click on the language button to select their desired language.\n\nThe triangular indicator should stay with the currently-selected language since the language on the screen reveals which language is currently selected.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-15T15:29:42.064-0400",
      "body": "Thoughts of how to implement this feature:\n\nWhen the back or next button is clicked, find out which language button needs to be moved into the view and use this function for the move - <https://github.com/fluid-project/first-discovery/blob/master/src/js/panels.js#L563>. This function needs to be refactored to be able to take in the moved-to-language as an argument so that it can be shared by moves triggered by clicking back/next buttons and the change on the selected language.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-05-19T17:11:02.626-0400",
      "body": "On May 19, we met to clarify the desired behaviour (see the description above). However, this behaviour may be time consuming to realise given the current implementation of the language panel. In particular, the language list is implemented using radio buttons.\n\nI am looking into alternative solutions to see if we can get the desired high level behaviour, of exploring the available languages without reloading, with a UI that is simpler to implement but sill satisfactory.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-06-04T12:10:38.874-0400",
      "body": "Pull request:\n\n<https://github.com/fluid-project/first-discovery/pull/83>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-05T13:02:35.433-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/83> ) into the project repo at 556374661c8eac45bc6ad935b89f040a4f344b53\n"
    }
  ]
}
---
When scrolling through languages using the up and down arrows (either by keyboard or mouse), the act of scrolling also changes the current language selection to the next on the list, which causes the page to reload into that language. Focus is lost, and the user has to start all over. It would be nice if the user could scroll through the languages, see what's available, identify what they want and THEN take some action to enact that language.&#x20;

***

On May 19, 2015, Dana, Anastasia, Cindy, and Simon met to clarify the desired behaviour:

In the following, the term "active" is used for the language set in the user's preferences and in which the UI is rendered; the term "focused" is used for the language with keyboard focus. The active and focused languages might differ.

* The active language is indicated with a triangle and the name of the language is written in yellow
* Clicking on one of the arrow buttons with the mouse scrolls the list of languages and does not change the active language (the active language may scroll off screen)
* Clicking on a language button with the mouse activates the language
* When focus is moved to the language list, the list of visible languages is not changed and the language at the top of the list is given focus (this might not be the active language)
* When focus leaves the language list, the list of visible languages is not changed – the list stays at the same position
* Pressing the arrow keys moves the focus to the language above or below (scrolling as necessary) but does not change the active language
* Pressing enter or space on a language button makes that language active
* When the language panel is first displayed, or the user navigates back to it from another panel, the language list is scrolled to show the active language

        