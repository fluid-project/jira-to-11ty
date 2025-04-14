---json
{
  "title": "INFRA-243",
  "summary": "Create test Kubernetes cluster",
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
  "date": "2020-04-29T10:41:32.738-0400",
  "updated": "2020-04-29T15:52:11.182-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-29T14:41:02.285-0400",
      "body": "```\n# kubectl get nodes\r\nNAME                  STATUS   ROLES    AGE     VERSION\r\ni-0101.tor1.incd.ca   Ready    master   2m28s   v1.18.2\r\ni-0102.tor1.incd.ca   Ready    <none>   85s     v1.18.2\r\ni-0103.tor1.incd.ca   Ready    <none>   79s     v1.18.2\r\ni-0104.tor1.incd.ca   Ready    <none>   77s     v1.18.2\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-29T15:29:48.657-0400",
      "body": "sonobuoy quick test:\n\n```\n# ./sonobuoy results $results\r\nPlugin: e2e\r\nStatus: passed\r\nTotal: 4992\r\nPassed: 1\r\nFailed: 0\r\nSkipped: 4991\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-29T15:51:42.262-0400",
      "body": "Dev/test cluster deployed with Calico networking and Traefik ingress controller:\n\n```\n# kubectl --namespace=kube-system get pods\r\nNAME                                          READY   STATUS    RESTARTS   AGE\r\ncalico-kube-controllers-75d56dfc47-nvjzc      1/1     Running   0          71m\r\ncalico-node-4mz7b                             1/1     Running   0          71m\r\ncalico-node-7rfr4                             1/1     Running   0          71m\r\ncalico-node-qb92t                             1/1     Running   0          71m\r\ncalico-node-r99rz                             1/1     Running   0          71m\r\ncoredns-66bff467f8-jlwtw                      1/1     Running   0          72m\r\ncoredns-66bff467f8-kd97t                      1/1     Running   0          72m\r\netcd-i-0101.tor1.incd.ca                      1/1     Running   0          72m\r\nkube-apiserver-i-0101.tor1.incd.ca            1/1     Running   0          72m\r\nkube-controller-manager-i-0101.tor1.incd.ca   1/1     Running   0          72m\r\nkube-proxy-5tshj                              1/1     Running   0          71m\r\nkube-proxy-6t2h2                              1/1     Running   0          72m\r\nkube-proxy-9wh5l                              1/1     Running   0          71m\r\nkube-proxy-xf4hb                              1/1     Running   0          71m\r\nkube-scheduler-i-0101.tor1.incd.ca            1/1     Running   0          72m\r\ntraefik-ingress-controller-2wsdw              1/1     Running   0          5m59s\r\ntraefik-ingress-controller-fh6xt              1/1     Running   0          5m59s\r\ntraefik-ingress-controller-qrnd6              1/1     Running   0          5m59s\n```\n"
    }
  ]
}
---
Create a Kubernetes cluster running on the IDRC hypervisors with the following configuration:

1 x master\
3 x worker nodes

        