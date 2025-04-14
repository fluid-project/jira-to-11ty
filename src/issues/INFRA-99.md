---json
{
  "title": "INFRA-99",
  "summary": "Private container registry",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Giovanni Tirloni",
  "date": "2018-01-23T09:00:51.065-0500",
  "updated": "2020-04-13T08:00:27.127-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-07-30T13:39:35.944-0400",
      "body": "Re-opening since are usage of Docker containers affords a private registry for faster deployments.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-13T08:00:27.124-0400",
      "body": "AWS/Azure/GCP all offer private docker registry services.\n"
    }
  ]
}
---
We need to implement an private container registry for added security, reliability and, possibly, speed.

Today everything is based on Docker Hub, a free service that stopped offering security scans lately (moved into their Docker Enterprise product).

Self-hosted:

* [Docker Registry 2.0](https://github.com/docker/distribution)
* [Atomic Registry](http://www.projectatomic.io/registry/)
* [OpenShift-integrated Docker registry](https://docs.openshift.com/enterprise/3.0/architecture/infrastructure_components/image_registry.html#integrated-openshift-registry)

Hosted:

* [Quay.io](https://quay.io/)
* [Docker Hub paid plans](https://hub.docker.com/billing-plans)
* [AWS Container Registry (ECR)](https://aws.amazon.com/ecr)
* [Google Container Registry](https://cloud.google.com/container-registry)

        