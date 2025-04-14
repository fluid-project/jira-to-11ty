---json
{
  "title": "FLUID-5421",
  "summary": "IE with preferences framework demos: Deleting browser cookies doesn't wipe out the previous saved user preferences",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2014-06-06T14:14:24.712-0400",
  "updated": "2024-07-23T07:31:47.271-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "IE8, 9, 10, 11\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T07:31:47.069-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
1\. Open up a preferences framework demo: <http://build.fluidproject.org/infusion/demos/uiOptions/>\
2\. Click "show display preferences" and adjust some preferences;\
3\. Refresh page, the selected preferences apply and persist on the main page;\
4\. Go To IE menu Tools -> Internet Options -> "Browsing history" section, click "Delete" button -> In the popup dialog, make sure the "cookies" checkbox is checked -> click "Delete" button -> Click "Apply" then "OK" button to go back to the main page.\
5\. Refresh page, the preferences selected at step 2 are still applied on the main page. These preferences are expected to be cleared out by deleting browser cookies and the page is restored to the initial state without any preference applied.

"Reset" button provided by the prefs framework does clear up all selected preferences.

        