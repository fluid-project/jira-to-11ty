---json
{
  "title": "SJRK-46",
  "summary": "Research REST API for Git repositories",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2017-12-20T16:40:27.420-0500",
  "updated": "2018-02-21T08:53:20.351-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-01-08T13:43:20.924-0500",
      "body": "My understanding is that Git can work over either HTTP or SSH. This is described in the [Transfer Protocol](https://git-scm.com/book/en/v2/Git-Internals-Transfer-Protocols) page. The steps for configure a server are detailed in the [Pro Git](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols) book.\n\nTo access a repository and manipulate its contents from Javascript, [JS-Git](https://github.com/creationix/js-git) is a pure Javascript implementation.&#x20;\n\nThere are modules available ([node-git](https://github.com/christkv/node-git)) but they rely on the Git binary being available.&#x20;\n\nOthers, like the Javascript bindings for [libgit2](https://libgit2.github.com/) called [nodegit](https://github.com/nodegit/nodegit) need C/C++ native code to work. That should be okay in a Node.js process but it's not suitable for a pure browser implementation (if that's our target but I'm not sure).\n\nNone of what was mentioned above offers a REST API. After searching for a while, I could find only one implementating of a REST API for dealing with Git data: [hulu/restfulgit](https://github.com/hulu/restfulgit). It's not seen a commit in 3 years though and it's coded in Python. I could not find another  REST interface on top of git's send-pack and receive-pack processes (which are used in the Smart HTTP transport mode for read-write access).\n\nI have only been able to find maintained REST APIs for managing Git repository, that is, creating repositories, branches, tags and all sorts of administrative changes except actually manipulating the data (committing code).\n\nAll major public Git services offer some sort of REST API to manage repositories:\n\n* [Bitbucket API](https://developer.atlassian.com/bitbucket/api/2/reference/)\n* [GitHub GraphQL API v4](https://developer.github.com/v4)\n* [GitLab API](https://docs.gitlab.com/ee/api/README.html)\n* [Visual Studio Team Services - Git REST API](https://www.visualstudio.com/en-us/docs/integrate/api/git/overview)\n\nGogs, an open source self-hosted Git service, is working on implementing a REST API but it doesn't seem complete at the moment (see [here](https://github.com/gogits/go-gogs-client/wiki). It's worth noting, GitLab is open source too.\n\nA Node.js application could use something like [node-git](https://github.com/christkv/node-git) to work with an existing repository and some of the vendor-specific APIs to create branches and tags (or even new repositories) and retrieve all sorts of data about the repository.\n\n@@Gregor Moss @@Alan Harnum please let me know if you think that's enough information for next steps.\n"
    }
  ]
}
---
Document what's available to expose Git repositories over a REST API.

        