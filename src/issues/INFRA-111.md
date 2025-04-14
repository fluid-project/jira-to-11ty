---json
{
  "title": "INFRA-111",
  "summary": "Evaluate Rancher 2.0 Beta",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-02-08T09:21:53.857-0500",
  "updated": "2018-06-28T11:13:31.184-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-26T08:40:45.942-0500",
      "body": "As of today, the 2.0 Beta has not been released yet. They have done some Alpha releases since we last evaluated it but without great modifications.\n\nThere's an official training on March 8th about the 2.0 Beta, so it's expected that it will be released before that date.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-08T10:07:57.939-0500",
      "body": "New Tech Preview release (alpha21) – <https://forums.rancher.com/t/rancher-tech-preview-update-3-7-2018/9735>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-05T08:27:40.218-0400",
      "body": "Beta-1 was finally released today: <https://rancher.com/rancher-2-0-now-feature-complete-enters-final-beta-phase/>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-06-28T11:13:31.159-0400",
      "body": "Evaluation is done. There's too much change happening on Rancher 2.0 and our focus is to first make all application run inside containers. Additionally, there's not enough logging/auditing, rke installer breaks frequently on CentOS 7.x, kubernetes service catalog support is alpha, and Terraform providers aren't great (more to come in 2.1 with import/export cluster configuration).\n\nInformal information received from people close to the project is to wait for Rancher 2.1 (2018 Q3). <https://github.com/rancher/rancher/wiki/Rancher-2.1>\n\nThere's no pressing business need to adopt it right and our Ops team is small. Will re-evaluate if requirements change.\n"
    }
  ]
}
---
Progress towards the beta can be followed here: <https://github.com/rancher/rancher/milestone/115>

Major areas of focus in the tests should be:

 \* Adding custom ndoes

 \* Rancher load balancer and ingress resources

 \* Storage management 

        