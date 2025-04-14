---json
{
  "title": "SJRK-462",
  "summary": "Re-evaluate the use of the staging site ",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-03-16T13:24:30.814-0400",
  "updated": "2021-03-16T13:25:39.085-0400",
  "versions": [
    "0.5"
  ],
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
Currently the [staging site](https://staging-stories.floeproject.org) built from the main looks identical to the [floe stories production site](https://stories.floeproject.org). In fact the floe stories site uses the staging site to demo the storytelling tool. However, this is problematic because they look identical but when you change to the staging links to the browser stories are for those that are written in the staging site but not those from the floe stories site. It's confusing for a user.

We should probably have a "nightly" build site deployed from main. The nightly should include all of the features like users accounts and etc. Each published site should have their own staging sites so that updates to them can be tested without effecting the published site.

        