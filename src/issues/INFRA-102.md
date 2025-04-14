---json
{
  "title": "INFRA-102",
  "summary": "Evaluate Rancher 2.0 Tech Preview 2",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-01-29T09:34:41.291-0500",
  "updated": "2018-02-06T11:47:11.060-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-01-29T11:57:14.828-0500",
      "body": "Starting work on this today.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-02T07:15:57.683-0500",
      "body": "I've updated this ticket because there was a misunderstanding regarding when the Beta would be available.\n\nThe release that was done a week ago is still called \"Tech Preview 2\" and it's not the Beta.\n\nSince I've been evaluating TP2 (with good results so far), I'll add my findings here about TP2 and open a new ticket for the Beta specifically (which should be released in 2 weeks).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-02T14:47:53.133-0500",
      "body": "**What changed since TP1**\n\nTP1 felt like a mix of Rancher 1.x and 2.x. Various concepts were mixed together, there was a lot of Cattle code still running and overall it wasn't a good experience. That was expected. The UI also had a lot of issues and it seems everything was exposed, even if it didn't work so well (or at all).\n\nIn TP2 the UI is much more polished, actions either work or have clear errors and a number of options have been removed (probably things that are still being worked on). Overall, it felt much better. What was available worked as expected.\n\n**High Availability**\n\nRight now the Rancher server doesn't support HA. It should not be confused with HA for the Kubernetes cluster, which the RKE installer supports just fine it seems.\n\nFor us this won't matter much. If the management interface goes down, the Kubernetes clusters continue to work normally. It would be an annoyance though but I'm not sure our environment justifies spinning up 3 VM's just for it. In the future, if the Rancher server could run alongside the Kubernetes masters, that would be good for resource efficiency but I'm not sure about the security implications.\n\n**Storage Management**\n\nStorage management is missing from TP2 but should be added before the GA release. This is a major area of concern for us. I think the biggest.\n\n**Ingress Controller**\n\nThe Rancher ingress controller worked fine. Others might be used instead (just like in any K8s cluster you can have many controllers watching over different objects).\n\n**Catalog**\n\nRancher has their \"certified\" and \"community\" catalogs. It's basically a collection of docker-compose and rancher-compose files. I didn't test this extensively because I think we prefer Helm charts and I couldn't find much about how that's integrated into the UI (i.e. if I deploy a Helm chart, does it count as a catalog item being deployed?). I think we should explore this further because it could help in providing a self-service panel for power users (a la Bitnami).\n\n**Creating clusters**\n\nIn the Tech Preview 2, only AWS and Digital Ocean are supported to create clusters from the UI. However, it's possible to use RKE manually (which is essentially what Rancher uses), create the cluster and then import it. It's mentioned in the Getting Started Guide that the ability to create RKE clusters on other providers or bare metal will be in the GA release. That's what I have focused on (and submitted a few bug reports, forums posts, etc).\n\nAdditionally, we can also create clusters with kubeadm and import them. I tested it and it seemed to work fine, although at this point I'm leaning more towards RKE clusters. Kubeadm is getting HA support in the next few releases but RKE has it now.\n\n**Node Drivers**\n\nRancher can use docker-machine to spin up VMs. There are several drivers that know how to talk to various cloud providers and hypervisors. Support for KVM/libvirt isn't enabled by default and we would need to figure out how to do this. Since we don't play to spin up clusters all the time, I'm not sure the effort to automate this here will pay off (since it's already automated in Ansible).\n\nIf a Node Driver for KVM/libvirt cannot be made to work, the alternative is to use RKE separately and import the cluster. It seems there aren't many downsides in doing this but it's worth investigating full automation.\n\n**Custom Node Support**\n\nThis feature existed in Rancher 1.x but is not available in 2.x yet. I read it's being prioritized for the Beta release. Adding Custom Nodes would allow us to deploy our VMs in the traditional way (KVM/libvirt/ansible) and then add them through the Rancher UI which would give us a Docker command to run the Rancher agent. It works pretty well in 1.6 so I'm expecting the same in 2.0 since there aren't big changes. I think the removal of certain features from the TP2 was a matter of focus and limiting support the support burden.\n\n**SELinux**\n\nSELinux had to be disabled to use TP2 the RKE installer, that's unfortunate. There are instructions on how to enable SELinux for Rancher 1.6 but I have not tested it (because 2.x is too different in how it deploys K8s). In the final release, I'd expect SELinux to be supported again.\n\n**Non-default SSH port**\n\nRKE 0.1.0 doesn't support non-default SSH port (there's a PR for this – <https://github.com/rancher/rke/issues/100>). I had to make OpenSSH listen on port 22 due to that.\n\n**CentOS Docker issue**\n\nThere is an issue with bind mounts that was fixed in Fedora and RHEL some time ago but it's missing from the CentOS package. I opened a bug report: <https://bugs.centos.org/view.php?id=14455>\n\n\"MountFlags=\" should be removed from Docker's systemd unit (<https://github.com/rancher/rke/issues/123> <https://github.com/rancher/rke/issues/123> <https://github.com/moby/moby/pull/22806#issuecomment-220009311>)\n\n**Networking**\n\nThe default overlay network is flannel. That's not appropriate for us due to lack of support for Network Policies which we definitely want.\n\nLuckily, calico, weave and canal are supported. I need to run more tests with more complex deployment to test Network Policies thoroughly but it's a basic Kubernetes feature, not Rancher's.\n\n**Final Words**\n\nOverall impression was positive (actually, pretty impressed with the improvements since TP1 so now expecting a lot for the Beta).\n\nI continue to think it fits our scenario perfectly due to the following reasons:\n\n* Open source (both RancherUI and RKE)\n* Fully focused on Kubernetes now\n* Kubernetes is deployed completely as containers (\"self-hosted Kubernetes\"). This seems better than managing systemd units.\n* Nice complementing concepts to the basic Kubernetes ones (Stacks, Workloads, etc)\n* Good defaults for RBAC\n* Security policies per environment\n* Moved from MySQL/Java to etcd/Go (leveraging Kubernetes custom resource definitions now, very low resource usage)\n* Nice UI but also no roadblocks to accessing the underlying Kubernetes directly.\n\n**Next Steps**\n\nI think we have spent too much time already in the prep phase of our Kubernetes work. I think it's time to put it in use and soon.\n\nI want to discuss what are some good workloads to start throwing at a semi-permanent cluster with the intent of moving as much as possible inside Kubernetes. Some workloads will need to wait a bit more until we have more trust in the storage solution (GlusterFS, with maybe Rook) but we shouldn't delay this anymore.\n\n \n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-06T11:47:11.056-0500",
      "body": "Closing this issue as the research is done. We'll repeat the process for Rancher 2.0 Beta (the real Beta) and in the meantime we'll get a cluster up & running to start deploying things to it.\n"
    }
  ]
}
---
Rancher 2.0 was released and the IDRC was given access to a restricted support channel with Rancher Labs.

Investigate what's needed to install and use it for our purposes.

Storage management is currently not available in Rancher 2.0 TP2

        