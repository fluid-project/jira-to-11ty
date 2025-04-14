---json
{
  "title": "INFRA-172",
  "summary": "Document process for adding new static sites",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-05-01T16:47:44.327-0400",
  "updated": "2018-07-17T09:55:42.743-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-02T19:29:50.901-0400",
      "body": "@@Alan Harnum thanks for walking through this process and documenting it. Although there is a lot of automation, the experience is less than ideal given how much of the underlying infrastructure is exposed to someone attempting to add a new static website (compared to GitPage Pages or Netlify). It's \"just\" editing 3 yaml files and running 4 playbooks.\n\nWith Kubernetes and Docker containers in place, I envision a process where one has to create a deployment, a service and and an Ingress that specifies the hostname and then the TLS certificates are created automatically. There are integration issues I've not tackled yet, like how this setup would create Route53 records or where/how the Docker containers would be versioned appropriately (likely a Helm chat that accept parameters to deploy a nginx sidecar container alongside a data container which holds the static website). Still, a lot is exposed to the end user (although GH Pages or Netlify would still need a CI layer on our side – or hosted) and there always a lot of small things that don't fit together nicely.\n"
    }
  ]
}
---
We seem to be wanting to deploy new static sites (especially so-called "microsites") more frequently in recent times and I'd like to document the "best" process for this in more detail than we've currently got.

Commonly, these days:

* The site is developed using a static site generator like Docpad or Hugo
* Site source code is publicly available in GitHub
* Those working on the site may take responsibility for building and committing updates to a dedicated branch ("deploy" or similar), or the building may be done by Jenkins - we aren't consistent with this
  * Question: is either of these preferable? does either have advantages?
    * the "deploy" branch option mirrors how GitHub Pages works, puts control in hands of whoever is developing the site
    * "Jenkins responsible for building" may be less prone to human error, but requires us to have build servers with the necessary static site generator installed
* Jenkins deploys the finished site to the static server

Goals:

1. Clarity for those developing sites as to what to do in order to build a new static site
2. Clarity for those working with the infrastructure as to what to do in order to deploy a new static site

Things to capture:

1. What people creating new sites should do in terms of setting up their project in GitHub
2. Information needed for a new static site:
   1. New domain or subdomain of existing domain?
   2. GitHub repo
   3. Branch to deploy code from
   4. Does Jenkins need to build and deploy the site?
3. What needs to go where in the automation configuration?
   1. New Jenkins job builder definitions
   2. New additions to Ansible var files, playbooks, etc
   3. Configuration to enable LetsEncrypt certificates for new domains / subdomains

 

        