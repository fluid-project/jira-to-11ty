---json
{
  "title": "SJRK-321",
  "summary": "Migrate code from stories-floe-dev to master branch",
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
  "date": "2020-01-16T16:31:44.213-0500",
  "updated": "2020-04-03T12:43:47.560-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-01-28T14:46:18.356-0500",
      "body": "The code has been merged into the master branch as a result of the work on <https://fluidproject.atlassian.net/browse/SJRK-255#icft=SJRK-255>.\n\nStill remaining:\n\n* ensure the [Laser Eye Checklist](https://wiki.fluidproject.org/display/fluid/Laser+Eye+Checklist) is satisfied\n* update the documentation (recommend adding a new file) detailing the branches used for site deployment\n* consider what to do about the staging site deployment\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-02-21T17:02:40.978-0500",
      "body": "In creating my BRANCHES.md file, I've noticed that the two branches `learning-to-learn` and `re-review` are not used. As such I recommend that we delete them along with `stories-floe-dev` when the time comes.\n\nFor a bit of context, `learning-to-learn` was once our main development base (much as `stories-floe-dev` was after that and `master` is now) and `re-review` is a branch that Antranig Basman set up for his holistic review efforts that culminated in the <https://fluidproject.atlassian.net/browse/SJRK-255#icft=SJRK-255> work being merged in and the project being updated to satisfy <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> and <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148>.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-02-21T17:12:03.709-0500",
      "body": "I have also noticed in my review of the CI jobs that the Karisma site (<https://karisma-stories.floeproject.org/>) is being deployed from a particular branch in Alan Harnum's fork of the code: <https://github.com/waharnum/sjrk-story-telling-server/tree/SJRK-56-karisma>. Transitioning off of that and onto a more \"mainline\" branch of the code may involve a bit of work bringing that particular theme up to date, since it was originally deployed nearly two years ago, so perhaps that effort deserves its own Jira.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-03-17T13:16:56.552-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/58) that completes the documentation has been merged into to the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/87aa0b3471c74b002147e93d5e0219efaabf4546).\n"
    }
  ]
}
---
The branch [stories-floe-dev](https://github.com/fluid-project/sjrk-story-telling/tree/stories-floe-dev) is currently being treated as a sort of master branch while the codebase is slowly inching towards satisfying fluid-project standards for inclusion in the master branch.

At least one metric of success is fully passing the [Laser Eye Checklist](https://wiki.fluidproject.org/display/fluid/Laser+Eye+Checklist).

Meanwhile, there are other fluid-project sites running out of their master branches, and we have been exploring the notion of a flexible code standard in <https://fluidproject.atlassian.net/browse/FLUID-6358#icft=FLUID-6358>. With this in mind, we should aim to stop using stories-floe-dev in this manner and promote its contents to the master branch.

This should also include an update to the README or a new documentation file (in the "docs" directory) which details all of the branches in [the main fork of this repository](https://github.com/fluid-project/sjrk-story-telling) and what they are each used for.

The stories-floe-dev branch is currently the basis for the CI build of the [FLOE Storytelling Tool staging site](https://staging-stories.floeproject.org/), so this should also be considered. Should master be the new basis for the staging site or would it be appropriate to leave it as it is?

        