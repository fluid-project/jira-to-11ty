---json
{
  "title": "INFRA-73",
  "summary": "Assess removing supervisor from Docker container images in favour of Docker run restart policies",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Alan Harnum",
  "date": "2015-11-30T10:29:17.605-0500",
  "updated": "2018-01-23T09:10:42.536-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/INFRA-75/",
      "key": "INFRA-75"
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-60/",
      "key": "INFRA-60"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-01-23T09:10:42.533-0500",
      "body": "We're not using supervisor anymore. I'm closing this for now, feel free to re-open if I missed something.\n\nExamples:\n\n \\* <https://github.com/GPII/universal/blob/master/Dockerfile>\n\n \\* <https://github.com/gpii-ops/docker-preferences-dataloader/blob/master/Dockerfile>\n\nI think there are other nice ideas (sidecars, etc) but maybe we should create new JIRAs specifically for that? That seems to fall in GPII's area of responsibility at the moment (with their Kubernetes [automation](https://github.com/gpii-ops/gpii-infra) work).\n"
    }
  ]
}
---
@@Giovanni Tirloni, @@Avtar Gill, @@Alfredo Matas please comment on the below.

Background: when the Docker containers for GPII were last built, [supervisor](http://supervisord.org/) was installed as a means of restarting applications running in Docker containers if they exited. At the time, [Docker restart policies](https://docs.docker.com/engine/reference/run/#restart-policies-restart) did not exist.

Since we are now rebuilding the containers anyway there's an opportunity to assess if supervisor stills need to be part of the container stack. We are not using supervisor in a complex way right now - it simply restarts the application (within the container) if it exits, keeping the container up and running. Removing it in favour of using runtime restart policy would simplify the container building process.

The Docker-idiomatic behaviour seems to be to have containers that can be safely restarted at any time. Kubernetes makes extensive use of this idiom and extends it with more sophisticated [health checking](http://kubernetes.io/v1.0/docs/user-guide/walkthrough/k8s201.html#health-checking).

At the moment, the GPII application container with which I'm most familiar (Preferences Server) can't always safely be restarted due to the existence of the PRIME\_DB option, which loads the default test preferences to CouchDB when the container is launched. If a container using this option is restarted, it will launch again and load the test preferences again, wiping out any changes made during its previous runtime. So we need to take an approach that decouples this container behaviour (one-time data loading) from the behaviour of the running application.

I propose that we take this approach:

* as a general principle, all continuously running GPII application containers (and application containers in general) should be idempotent in their interactions with data stores; that is, it should always be safe to restart a container that's intended to be a continuously running application
* one-time / at launch tasks that create DB tables, load test data or similar things necessary for the running application should be captured in a separate manner, perhaps in something like the [sidecar container](http://blog.kubernetes.io/2015/06/the-distributed-system-toolkit-patterns.html) pattern.

So continuing with the Preferences Server as the example, launching it for the first time would look like this:

* run a CouchDB server or container
* run a container that loads the test data to CouchDB, then exits once this task is complete
* run the Preferences Server application container with an appropriate restart policy

Digging around the repo further, [docker-oatts-server](https://github.com/gpii-ops/docker-oatts-server) works rather like this, though it couples the DB priming behaviour with running the application and decides which one to do at runtime.

Thoughts? I'm trying to think through how we best separate the distinct behaviours. Separate "utility"-type containers seems like a safe pattern to me and I don't think it would be too hard to refactor towards this.

        