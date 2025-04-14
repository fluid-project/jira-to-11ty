---json
{
  "title": "SJRK-455",
  "summary": "Login and Signup forms fail in production environment",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2021-02-26T16:21:47.465-0500",
  "updated": "2021-03-15T11:18:58.628-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6599/",
      "key": "FLUID-6599",
      "summary": "New DataSource implementation applies default port of 80 even if https URL is supplied"
    },
    {
      "type": "Dependence",
      "url": "/browse/SJRK-456/",
      "key": "SJRK-456"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-455/image-2021-02-26-16-18-36-981.png",
      "filename": "image-2021-02-26-16-18-36-981.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-03-15T11:18:58.628-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/114> ) at ffa60fe828fa816fadca949aaccbec6f682b7ebe\n"
    }
  ]
}
---
When deployed to the remote servers hosting the AIHEC site, the Login and Signup forms failed on submission with the error "net::ERR\_SSL\_PROTOCOL\_ERROR" in Chrome 88.

<!-- media: file f8cbdd52-3ae5-447d-a3a4-21ceafd8a314 -->

This seems to be due to the URL DataSource used by the sjrk.storyTelling.base.page.authentication page grade sending the request on port 80, which is the default. Configuring the port to 443 (the traditional SSL/TLS port) may solve the issue in production, but the site will fail when hosted locally for development purposes.

<https://fluidproject.atlassian.net/browse/FLUID-6599#icft=FLUID-6599> describes the cause in a bit more detail, though until that has been done, any public-facing deployments of the site should not use the account system.

 

Alternatively, changes could be made to the development environment (to the Docker container or to the Kettle server itself) that allow it to accept certain requests on port 443, and then specifying the port in the authenticationDataSource may solve this issue satisfactorily.

        