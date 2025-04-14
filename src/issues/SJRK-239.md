---json
{
  "title": "SJRK-239",
  "summary": "Remove editing capabilities from production site",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-03-18T10:59:49.275-0400",
  "updated": "2019-04-22T17:07:15.409-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Fully remove editing capabilities from the site and adjust the text of the landing page so it no longer invites people to create stories. This work entails:

* Hiding or commenting out the editor form
* Disabling or commenting out the server endpoint for sharing stories
* Add a flag in the server config to turn editing on/off more easily in the future
* Once SJRK-224's [CI pull request](https://github.com/inclusive-design/ci-service/pull/34) is merged, ensure the staging site works, then merge the dev branch into the production branch and make a similar PR for the production site CI job

Possible text for the landing page:\
Stories connect us, help build relationships and share information that is important to learning about ourselves, people and the world around us.\
This project’s goal is to provide awareness through stories about current barriers, challenges, successes and exclusionary situations that we all experience in our learning journeys.\
Together, our stories can contribute to the rethinking of our learning systems.

        