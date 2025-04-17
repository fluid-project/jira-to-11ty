---json
{
  "title": "INFRA-37",
  "summary": "Automate static website updates",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-25T15:23:31.191-0400",
  "updated": "2016-08-22T10:03:48.377-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/INFRA/INFRA-37/website-fluidproject.org.yml",
      "filename": "website-fluidproject.org.yml"
    }
  ],
  "comments": [
    {
      "author": "Avtar Gill",
      "date": "2015-08-25T15:52:23.189-0400",
      "body": "We started using Github Pages at one point because people wanted an easy way to deploy their own changes without having to ping a sysadmin. Otherwise we ran cron tasks that would fetch changes from git repos at certain intervals. The infrastructure was less stable then as well so people were a fan of having sites like [http://floeproject.org](http://floeproject.org/) available even during outages at 100 McCaul.&#x20;\n\nAll that being said it was assumed that we would start hosting static sites in-house again once something like Jenkins was set up to receive Github webhook payloads and then deploy changes. Colin Clark might confirm if that's still the case. The other pain points that people encountered with Github Pages was the lack of TLS and the official way to deal with URL redirects isn't awesome <http://konradpodgorski.com/blog/2013/10/21/how-i-migrated-my-blog-from-wordpress-to-octopress/#redirect-301-on-github-pages>&#x20;\n\nAn ideal hosting solution might let someone specify the url redirects in their repo which Ansible would then use to configure Nginx. A build step might be required as well if something like docpad is used to manage static content. Jenkins could do all that when changes in a git repo take place or if a developer triggers a job. That could pave the way for something like chatops in the future.\n\nThis conversation may offer more background <https://botbot.me/freenode/fluid-work/2014-11-19/?msg=25836892&page=2>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-08-26T10:36:40.970-0400",
      "body": "This seems to offer a (relatively) uncomplicated way to make better use of Jenkins and CI as part of our infrastructure. I see that Giovanni already has some Ansible roles for managing the static sites - can we extend the \"manifest\" idea we've been talking about for the quality infrastructure perhaps, with the idea that static site developers could be responsible for maintaining a basic manifest for their site including their 301s, if a build is needed via docpad etc, which we then pass to Ansible?\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-08-26T10:42:47.141-0400",
      "body": "Something like this pseudocode:\n\nstatic\\_site\\_repo: <https://github.com/waharnum/mystaticsite.git>\\\nstatic\\_site\\_branch: master\\\nstatic\\_site\\_primary\\_domain: www\\.mystaticsite.com\\\nstatic\\_site\\_redirects:\n\n* www\\.mystaticsite.org\n* www\\.mystaticsite.ca\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-26T11:31:26.209-0400",
      "body": "I think it's fine if we want to use Jenkins for that automation, to trigger any commands that will update things. I'm not so sure about empowering end users to create those deployment units themsevelves, or being able to define their own domains without going through an ops review first. My experience with countless Great Migrations (tm) shows me a ton of things might be left behind and will confuse any future upgrades/migrations to \"the cloud\" or whatever is the next thing (either we'll need to talk to end users to see what's *really* running, or we keep carrying cruft forward).&#x20;\n\nSo I'd be okay with us having talks with end users / developers,  defining those deployment units ourselves, then we are responsible for what's running and they only concentrate on coding. I don't want to sound too much like a control freak but I'm not sure we want to be running things from a perspective of a 100% Heroku-like operator (that doesn't have to worry about what is configured/running, just keeping things up).\n\nThat being siad, It's easy to extend the staticsite role to grab updates and do the magic. If you're okay with that I can just add the repo and branch information as requirements for type \"git\" or something. There will be sites not hosted on GitHub. FYI, the first domain is currently defined as the 'primary domain' and everything else are redirects (<https://github.com/inclusive-design/ops/blob/master/ansible/roles/staticsite/templates/generic.conf.j2>).&#x20;\n\nI was going to merge staticsite with phpsite into a 'website' role but I haven't had the time yet. Maybe that's for the better as it might start to get too big (with all the updating, etc, to do). It'll be much different for PHP websites so we may want to keep that separate anyway.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-08-26T13:37:04.024-0400",
      "body": "Totally hear you on the ops review and the desire to make sure nothing is left out - maybe a good eventual goal would be to have an \"ops review\" process that can be fully automated for simple static sites, if we think that would be possible? Basically, could we define the requirements precisely enough that something in the CI process could run a deployment unit through some tests to ensure that nothing is left out? I'm an advocate for easing developer/designer workflows in this case (and ours as well).\n\nI can envision how we might combine this with Docker to make our lives (and the lives of the static site developers) easier - since the deployed product of a static site (even one built by a site generator) is inherently stateless, they'd seem like a good candidate for Dockerization.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-26T14:03:19.334-0400",
      "body": "I think it's possible to define verification steps that would be required to pass before a deployment of a static website can happen (and be added to Jenkins by the end user, although I'm not sure how that would happen). Things like is your DNS entry pointing to the correct address, is the Git repository accessible, etc.\n\nWould it be acceptable, as a first step at this moment, to enhance the static site role with information about a new type (\"git\"), repository URL and branch? That way I could just add that information about the static websites we have today that are hosted with Git and schedule a periodic task to update them if there are changes. Today I do not have an answer to end users that want to update their websites besides \"let me do it for you now\", and I would like to change that reality within the next week or so.\n\nAs for the whole CI/Quality workflow, it will involve a discussion with end users I suppose, plus a definition on future container platform, probably some customization to Jenkins, etc. If that's the case we're talking about a few months of work, right? I think it's a big discussion with many moving parts and dependencies and more than a few meetings. In this JIRA in particular I would like to move ahead with a workable solution that meets basic users needs. Later the work done in the static site role could be leveraged by Jenkins and future workflows we define.\n\nMy main concern with updating static websites right now would be the acceptable delay. Today end users / developers push to the gh-pages branch and see their changes in seconds. To replicate that experience would require something receiving WebHooks events (Jenkins?) and triggering the appropriate Ansible playbook. If a few minutes of delay are acceptable, then a periodic task would be okay with less complexity.\n\nAs for Jenkins, at this moment we have a few VM's running in the Nebula cluster that need to be migrated away, so that's another dependency on fully relying on Jenkins in the next few weeks.\n\nMaybe this has all been answered already in the IRC logs, I've been procrastinating on getting to them.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-08-26T14:06:58.249-0400",
      "body": "I think that's would be an acceptable first step to solve the immediate issue (get us off the gh-pages dependency while still maintaining the strength) but we'd want to review it with the static site developers as well.\n\nMy comments about CI/Docker etc are obviously towards possible longer-term work.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-28T14:20:42.365-0400",
      "body": "Re-reading my comments I think I may sound too boneheaded and actually a classical control freak. So while thinking more about this it downed on me something that I've implemented in the past at other places: to reduce cruft, we can ask website/service owners to confirm they still want to keep things up and running. There is a period to collect answers and then the cleaning starts. Just wanted to keep that in mind as it might ease my concerns about carrying cruft forward. Thanks folks!\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-10-28T10:31:06.698-0400",
      "body": "Two websites are now using Jenkins (tor1-prd-ci04) and deploying automatically using GitHub.\n\n* 7e600377\\_courses.idrc.ocadu.ca\n* e19b0582\\_websavvy.idrc.ocad.ca\n\nSee [http://ci-int.inclusivedesign.ca](http://ci-int.inclusivedesign.ca/)\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T10:03:48.375-0400",
      "body": "Static websites are being updated through Jenkins.\n\nEach website gets an ID which is used for the username/directory on the target server (created automatically by the Ansible role for static websites).\n\nA new site has to be configured in Jenkins for the Publish over SSH plugin. It'll point to the target server with the specific username and directory.\n\nCurrently used for the following websites:\n\ncourses.idrc.ocadu.ca\\\nfloeproject.org\\\nfluidproject.org\\\nguide.inclusivedesign.ca\\\nhandbook.floeproject.org.\\\nsnow-dev.idrc.ocadu.ca-the\\\nwebsavvy.idrc.ocad.ca\n"
    }
  ]
}
---
People are using GitHub repositories to store static sites but we still want to host them locally. The gh-pages branch is very convenient for end users, but there is no link between GitHub and our servers.

We need a service/script/something that will ensure these changes reflect locally. It could use WebHooks, update repositories and looking for changes every X minutes, etc. To be discussed.

        