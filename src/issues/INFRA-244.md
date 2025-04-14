---json
{
  "title": "INFRA-244",
  "summary": "Create load balancing layer in front of dev/test Kubernetes cluster",
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
  "date": "2020-04-29T15:53:08.464-0400",
  "updated": "2020-04-29T17:10:43.917-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-29T17:10:27.730-0400",
      "body": "Deployed two load balancers:\n\n```\ni-0105.tor1.incd.ca\r\ni-0106.tor1.incd.ca\n```\n\nThey are doing L4 load balancing on ports 80/443 to the k8s workers:\n\n```\n$ curl -v http://i-0105.tor1.incd.ca\r\n*   Trying 205.211.169.105:80...\r\n* TCP_NODELAY set\r\n* Connected to i-0105.tor1.incd.ca (205.211.169.105) port 80 (#0)\r\n> GET / HTTP/1.1\r\n> Host: i-0105.tor1.incd.ca\r\n> User-Agent: curl/7.66.0\r\n> Accept: */*\r\n> \r\n* Mark bundle as not supporting multiuse\r\n< HTTP/1.1 404 Not Found\r\n< Content-Type: text/plain; charset=utf-8\r\n< X-Content-Type-Options: nosniff\r\n< Date: Wed, 29 Apr 2020 21:10:03 GMT\r\n< Content-Length: 19\r\n< \r\n404 page not found\r\n* Connection #0 to host i-0105.tor1.incd.ca left intact\n```\n"
    }
  ]
}
---
Deploy 2 VM's running nginx to load balance traffic to the cluster's worker nodes.

        