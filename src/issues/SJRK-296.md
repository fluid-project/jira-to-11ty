---json
{
  "title": "SJRK-296",
  "summary": "Error thrown at accessing SJRK staging site in Chrome and Safari",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2019-09-17T14:43:05.672-0400",
  "updated": "2019-09-17T14:43:05.672-0400",
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
1\. Open Chrome -> developer tool -> console or Safari -> Develop -> Show javascript console;\
2\. Go to <https://staging-stories.floeproject.org/> in Chrome or Safari;\
3\. When the page loads, a bunch of 404 errors reported for loading JSON files such as *<https://staging-stories.floeproject.org/messages/storyMessages.json>**?*=1568745222991\_ etc;

In Chrome, following 404 errors, one more error is reported sometimes:\
*Uncaught TypeError: Cannot read property 'uiLanguage' of undefined*

This error is discovered with Chrome 76 and Safari 12.1.1 on MacOS Mojave.

        