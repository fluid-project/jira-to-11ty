---json
{
  "title": "FLUID-6220",
  "summary": "Automate testing of Infusion PRs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Avtar Gill",
  "reporter": "Avtar Gill",
  "date": "2017-11-02T19:25:34.945-0400",
  "updated": "2024-07-22T10:35:04.895-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-03T05:14:39.043-0400",
      "body": "Thanks for continuing to look into alternatives, @@Avtar Gill.  I'd like to try out buildkite, can you please send an invite to tony@raisingthefloor.org?\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2017-11-03T09:28:19.094-0400",
      "body": "@@Tony Atkins \\[RtF] I sent you an invitation. Please note that I was running the [Buildkite agent](https://buildkite.com/docs/agent) on my laptop while testing. [You'll need to run it](https://buildkite.com/docs/agent/osx) as well if you'd like to set up test builds – the SSH key details can be ignored for now.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2017-11-03T18:09:13.694-0400",
      "body": "Thanks for putting this together, @@Avtar Gill! I'd like to check out the Buildkite site, can you invite <mossmonkey@gmail.com> please? 🙂\n\nI think the disadvantage of Buildkite being a proprietary service is worth noting, though it's a similar case to GitHub or Jira, which are both proprietary services with free-to-open-source tiers.\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2017-11-06T08:48:47.238-0500",
      "body": "@@Gregor Moss, you should have an invitation now. Thanks for the help!\n\nThe GitHub comparison seems fair. I would add Slack to the list since more open source projects seem to be using their service. There's obviously the risk that some of these companies might change their free tier policies at some point in the future but it does let people kick the maintenance cost can down the road a bit.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-07T05:35:18.162-0500",
      "body": "@@Avtar Gill, any info on setup steps, such as the minimum permissions required when setting up your API Access Token?\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-07T05:39:33.410-0500",
      "body": "nm, I see that the token is meant to be the organisation's agent access token.\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2017-11-07T16:44:40.122-0500",
      "body": "@@Tony Atkins \\[RtF], there's now a Buildkite agent running in the IDRC data centre so you can avoid that part of the setup process. This is the repository that I've been testing with:\n\n<https://github.com/fluid-bot/testingz>\n\nIf you send PRs there you should see CI statuses.\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2017-11-08T17:51:37.744-0500",
      "body": "Hi all, I tried a couple workarounds in an attempt to prevent CI jobs from being run by unrecognized accounts. Unfortunately I didn't end up with an ideal solution. I tried using a [global environment hook](https://buildkite.com/docs/agent/hooks) to check if the incoming changes were part of a pull request, check if a trusted user was making the changes, if not then pause the CI job. This didn't work because the environment hook is run before every command :/\n\nThe following change pauses all PR jobs:\n\n<https://github.com/fluid-bot/testingz/commit/5e5bd8e69e12c0cabf65cc0cbb5f9b7a72c4ad46>\n\nThe jobs can be resumed by visiting the Buildkite dashboard and clicking `Unblock`. Not ideal by any means. I've filed an [issue](https://github.com/buildkite/feedback/issues/288) requesting a behaviour similar to the defunct Jenkins PR builder plugin.\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-11-09T08:39:58.937-0500",
      "body": "@@Avtar Gill your feature request makes a lot of sense. In the meantime is there anything else we could do? I wonder if we have access to the [pull request event](https://developer.github.com/v3/activity/events/types/#pullrequestevent) and if we can check for anything ourselves?\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2017-11-09T10:04:29.645-0500",
      "body": "\\> In the meantime is there anything else we could do?\n\nI would add your +1s to that issue 😉\n\n\\> I wonder if we have access to the [pull request event](https://developer.github.com/v3/activity/events/types/#pullrequestevent) and if we can check for anything ourselves?\n\nWe could have a proxy service but it will start looking like GPII-2473 again, albeit this GitHub -> Buildkite proxy would need to do less work than what's mentioned in the GPII issue. Two webhook URLs per repository would need to be configured – the first one provided by Buildkite (for non-PR branches) and the second pointing to the proxy. The proxy would handle the GitHub account verification. If a recognized account was used to issue the PR then it would [start a build](https://buildkite.com/docs/rest-api/builds#create-a-build) on the Buildkite side. If an unrecognized account was used then it would ask for confirmation using PR comments before starting a build. Seems clunky and brings us back to the scenario where we need to maintain this proxy and host additional infrastructure but so far [all the CI options on the table](https://github.com/blog/2463-github-welcomes-all-ci-tools) seem to have their own clunky attributes.\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2017-11-13T15:55:09.844-0500",
      "body": "I created a [separate issue](https://github.com/buildkite/feedback/issues/293) requesting a feature that will allow for the blocking of unrecognized contributors' pull requests.\n\nHere's a summary of what I tried last week. A `block step` for pull request branches will pause CI jobs. Buildkite fires [webhook events](https://buildkite.com/docs/webhooks) whenever [builds](https://buildkite.com/docs/webhooks/build-events) take place for any projects in an organization. One can [specify](https://buildkite.com/organizations/fluid-project/services/webhook/new) to only have `build.finished` events fired. Then have the following handy:\n\n* Buildkite API token with `read_builds` and `write_builds` privileges\n* `fluid-bot` account name\n* `fluid-bot's` email address\n\nVerify the incoming payload has the following properties:\n\n* event: build.finished\n* build.blocked: true (due to the fact a block step was used for the PR branch)\n* build.url: \\<whatever url is sent>\n\nMake a `GET` request using the `build.url` value and obtain the job that has the `\"state\": \"blocked\"` and `\"unblock_url\"` properties. Issuing a request such as the following, using the `unblock_url` value, will resume the CI job:\\\n \n\n```java\ncurl -H \"Authorization: Bearer <buildkite api token>\" \\ \r\n-X PUT \"https://api.buildkite.com/v2/organizations/fluid-project/pipelines/fluid-infusion-test/builds/18/jobs/f65f9669-3e46-49b9-9ef2-e736f3fbd051/unblock\"  \\\r\n-d '{\r\n    \"fields\": {\r\n        \"name\": \"fluid-bot\",\r\n        \"email\": \"fluid-bot@looool.biz\"\r\n    }   \r\n}’\n```\n\n It's still a workaround until Buildkite implements a feature that makes processing pull request CI jobs less risky but at leas the advantage of doing it this way for now is that the webhook only needs to be set up in one location, in the Buildkite organization's settings area.\n\n \n"
    },
    {
      "author": "Avtar Gill",
      "date": "2017-12-04T16:03:17.057-0500",
      "body": "Here's a workaround that tackles the above:\n\n<https://github.com/avtar/unblock-buildkite-pr-job>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2017-12-05T17:54:39.480-0500",
      "body": "I merged the pull request at 3d20742aa38ce60cd9a0167960d1f4cad43841d8 and  have added the Github webhook for build kite. Anything else you need, @@Avtar Gill?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-06T11:12:08.906-0500",
      "body": "For buildkite to report the build results, the fluid-bot needed to be given write access to the repository. This was done by creating a new \"services\" team with the correct permission and adding the fluid-bot to it.\n"
    }
  ]
}
---
It would be great if Infusion PRs could be tested by CI. GPII's CI automation (and automated PR testing) hasn't been replicated for Fluid due to Jenkins limitations, namely:

* An unmaintained Jenkins PR builder plugin
* Buggy multijob plugin that doesn't honour timeout values
* A vast world of pain that is Jenkins plugins management

We've looked into GitLab CI which addresses the issues above and also provides nice features such as pipelines, simpler YAML job configuration files, pull-based CI agents, and a more pleasant UI. The main disadvantage with this option is that GitLab's CI offering is packaged as a larger offering meant to replace GitHub. They provide very limited GitHub repository mirroring which is triggered on an hourly basis. GitHub PRs can't be tested using just their software – more information is logged in the [GPII-2473](https://issues.gpii.net/browse/GPII-2473) issue.

Recently I came across [Buildkite](https://buildkite.com/home#features), a CI service that addresses all of the Jenkins and GitLab shortcomings. They provide [free accounts to open source projects](https://buildkite.com/pricing) so I set up a [test Fluid organization](https://buildkite.com/fluid-project). You will need to create an account and be invited to the org to see CI results. Here is an example of an Infusion fork's PRs and branch merges being tested:

* <https://github.com/avtar/testingz/pull/1/commits>
* <https://github.com/avtar/testingz/commits/master>

The config file used to test the above:

* <https://github.com/avtar/testingz/blob/master/.buildkite/pipeline.yml>

The disadvantages of using Buildkite are:

* Proprietary service which can't be self-hosted – although hosting Jenkins or GitLab involves considerable on-going maintenance costs in terms of securtity issues, testing new releases, support, etc.
* Job failures and successes are shown in the GitHub UI but Buildkite accounts are required to view detailed CI results
* I don't think PR jobs can be manually triggered using a confirmation string such as "ok to test" but I've contacted their support team to verify
* They don't provide a contributor whitelist feature so anyone can open a PR, potentially containing malicious code, and trigger CI jobs

There might be a workaround for the last point. When Michelle sent a test PR a&#x20;

`BUILDKITE_BUILD_CREATOR="michelled"` environment variable was available to the Buildkite agent. A list of trusted GitHub account names could be maintained and checked against before running any jobs on the agent.

        