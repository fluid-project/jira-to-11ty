---json
{
  "title": "FLUID-6327",
  "summary": "Build/lint time has increased significantly post-FLUID-6315",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-21T12:30:28.242-0400",
  "updated": "2024-07-22T08:56:24.687-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6315/",
      "key": "FLUID-6315"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2018-08-21T13:16:01.551-0400",
      "body": "Cheers for the report, Giovanni Tirloni. We have a new linting implementation contributed by Tony Atkins \\[RtF] which makes many more checks than before, which is responsible for the increased processing time. Hopefully we can increase the build timeouts in order to compensate.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-08-21T15:00:40.942-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/925> ) into the project repo at 7c9cf5cdccdec4108fd2cc042a293e552f2297ca\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-21T15:59:39.367-0400",
      "body": "Thanks Antranig Basman & Justin Obara.\n\nThe new build average time is 35 minutes.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-08-22T04:48:49.083-0400",
      "body": "Giovanni Tirloni or anyone, is there an example of successful build with the new timeout?  I'd like to review and confirm that we aren't accidentally linting non-repo content.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-22T06:51:13.234-0400",
      "body": "Still running but it's successfully finished the build/lint phases: <https://ci.fluidproject.org/job/infusion-pull-request/22>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-08-22T08:21:23.873-0400",
      "body": "Thanks, I decided to sanity check via other means and submitted <https://fluidproject.atlassian.net/browse/FLUID-6328#icft=FLUID-6328> with the few files that were not checked that should have been.  I didn't find any evidence that files that shouldn't be checked were being checked, which was what I was worried about with the timing.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-09-04T06:44:47.521-0400",
      "body": "I have reopened this as the speed was a separate issue.  I'm submitting a pull shortly that brings the linting time down to 9-10 seconds.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-09-04T07:03:50.366-0400",
      "body": "After some research, it became clear that the globbing used by Grunt, in combination with overly broad patterns like `./**/*.js` resulted in scanning and then excluding all files in dist, node\\_modules, et cetera.  There is a new pull that uses the new gpii-glob library and tighter patterns, which reduces the linting speed to 9-10 seconds.\n\n<https://github.com/fluid-project/infusion/pull/930>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-09-20T08:34:54.088-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/930> ) into the project repo at 81c4c0572b8ac0ffd650fa675cc8dab43d422d11\n"
    }
  ]
}
---
Build and lint check time for the Infusion repository has increased substantially.

**Build time pre-FLUID-6315:**

* 8m13s - <https://buildkite.com/fluid-project/infusion/builds/357#b0cd7322-75e7-467b-882c-0ce81b04f60a>
* 8m34s - <https://buildkite.com/fluid-project/infusion/builds/359#c2a8d232-55fa-4995-96bb-46e716f9b9c2>
* 8m46s - <https://buildkite.com/fluid-project/infusion/builds/361#5e259b34-c4b1-4bc0-bf41-d160133219f2>
* 8m11s - <https://buildkite.com/fluid-project/infusion/builds/367#ef946bd5-4448-4cff-b60d-242691c79bc8>

**Build time post-FLUID-6315:**

* 19m51s - <https://buildkite.com/fluid-project/infusion/builds/368#8663175a-b32a-4fec-9dc8-ac1a63e32ad8>

**Lint time pre-FLUID-6315:**

* 16s - <https://buildkite.com/fluid-project/infusion/builds/357#1ff3de88-8392-4435-a136-3ec36041c5e9>
* 17s - <https://buildkite.com/fluid-project/infusion/builds/359#a2d2b483-1782-4846-83f0-47b334a7ac50>
* 21s - <https://buildkite.com/fluid-project/infusion/builds/361#85ddea6b-bc7d-4af2-a2bd-5c8b6c209d37>
* 21s - <https://buildkite.com/fluid-project/infusion/builds/367#3baeee40-7786-4d96-be3e-09bfca23c478>

**Lint time post-FLUID-6315:**

* Timed out after 2min - <https://buildkite.com/fluid-project/infusion/builds/368#ea6c01eb-1fc6-4e9e-a791-8dda9e14ff2d>

Here is a failed CI build for FLUID-6315: <https://buildkite.com/fluid-project/infusion/builds/365>

i can reproduce these changes locally on my laptop (linting takes over 4min).

        