---json
{
  "title": "SJRK-420",
  "summary": "Safari can go back in the browser history and modify published stories",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-11-11T16:07:20.154-0500",
  "updated": "2020-11-12T16:13:02.312-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Safari 12.03, 14.0\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-423/",
      "key": "SJRK-423"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-11-11T16:16:51.493-0500",
      "body": "Possible solution from an old stackoverflow discussion is to force the page to reload.\n\n<https://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked/13123626#13123626>\n"
    }
  ]
}
---
In Safari, the browser back caches the pages and memory for the story. This allows the user to go back, after publishing, and modify the published story and then republish. 

Steps to reproduce:

1. Start editing a new story (Example: <https://staging-stories.floeproject.org/storyEdit.html> )
2. Add some content
3. Add some meta data
4. Preview story
5. Publish story
6. Using the browser's back button, go back through the browsing history
7. Notice that you can reach the preview and other editing pages
8. Modify some of the content
9. Re-publish the story
10. Notice that the edited story is published.
11. In v0.4 this will update the published story due to the Story ID being preserved, in prior versions it will publish a new story.

        