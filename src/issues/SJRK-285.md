---json
{
  "title": "SJRK-285",
  "summary": "Add nginx to docker-compose and customize client_max_body_size",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-09-12T19:35:36.145-0400",
  "updated": "2020-05-06T16:31:51.696-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-05-06T15:56:23.866-0400",
      "body": "The deployment that is done through docker-compose exposes the node application directly, without Nginx fronting it.\n\nThe actual deployments in production do have Nginx in front of them acting as a load balancer but the configuration for that piece of the infrastructure is not done in docker-compose (it's in a separate \"ops\" repo using Ansible).\n\nAll stories websites in production have been updated to use a 2GB client\\_max\\_body\\_size\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-05-06T16:11:41.442-0400",
      "body": "Thanks for the clarification, Gio! The purpose of this Jira is to ensure that we don't accidentally have a new deployment with the client\\_max\\_body\\_size set to its default value. If we can configure this in a persistent manner (i.e. along with the site source, or some other associated repo), then I think we're where we want to be.\n\nIf that means setting it in an Ansible playbook that we can use for all Storytelling Tool deployments, that would fit the bill nicely!\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-05-06T16:16:18.660-0400",
      "body": "In our environment, it's just a piece of configuration data used by the Ansible playbooks that deploy the load balancers.\n\nBut maybe what we're hinting here is that the docker-compose deployment should include Nginx to be closer to production deployments as much as possible. In that case it'd make sense to have the max upload size configured there (but it still requires the infrastructure owner to configure all the upstream load balancers to accept it as well).\n\nI think we could leave this JIRA open and amend it to say \"add Nginx\" to docker-compose AND ensure the 2GB limit is set there. WDYT?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-05-06T16:29:11.742-0400",
      "body": "That sounds like a reasonable amendment 🙂\n"
    }
  ]
}
---
Configure the nginx client\_max\_body\_size in the Dockerfile or docker-compose.yml file in order to make sure we no longer run into issues of deployments with maximum request sizes of 1 MB. Set the value to 2GB.

Whether it is possible to configure this setting in Docker, specifying and checking this setting should be added as a server setup step in README.md

Currently, the docker-compose configuration doesn't have Nginx in front of the Story telling tool. Nginx should be added in a 3-tier app deployment configuration to better mimick what is deployed in production.

        