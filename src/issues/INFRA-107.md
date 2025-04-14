---json
{
  "title": "INFRA-107",
  "summary": "nginx-reverse - Default target should be health check",
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
  "reporter": "Giovanni Tirloni",
  "date": "2018-02-01T17:02:15.249-0500",
  "updated": "2018-06-21T15:04:53.629-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-23T08:21:58.762-0500",
      "body": "Here's an example of AChecker (the first backend) going down and both load balancers being reported as down too:\n\nThe monitor IDRC - achecker.ca ([https://achecker.ca](https://achecker.ca/)) is currently DOWN (HTTP 502 - Bad Gateway). \\\nThe monitor INFRA - load balancer i-0035 (<https://i-0035.tor1.inclusivedesign.ca/>) is currently DOWN (HTTP 502 - Bad Gateway). \\\nThe monitor INFRA - load balancer i-0036 ([https://i-0036.tor1.inclusivedesign.ca](https://i-0036.tor1.inclusivedesign.ca/)) is currently DOWN (HTTP 502 - Bad Gateway).\n\nAll happened at 04:44pm and did not impact any other websites.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-22T18:41:31.715-0400",
      "body": "Implemented two new features in nginx-common:\n\n* Ability to define a default URL (anyone hitting the LBs without a Host header gets redirected there)\n* Returning OK 200 on a defined path (again, without Host header defined)\n\nUptimeRobot has been updated with the new endpoints for the load balancers.\n\nSample output for default URL:\n\n```\n$ curl -v http://i-0035.tor1.inclusivedesign.ca\r\n* Rebuilt URL to: http://i-0035.tor1.inclusivedesign.ca/\r\n*   Trying 205.211.169.48...\r\n* TCP_NODELAY set\r\n* Connected to i-0035.tor1.inclusivedesign.ca (205.211.169.48) port 80 (#0)\r\n> GET / HTTP/1.1\r\n> Host: i-0035.tor1.inclusivedesign.ca\r\n> User-Agent: curl/7.55.1\r\n> Accept: */*\r\n> \r\n< HTTP/1.1 302 Moved Temporarily\r\n< Server: nginx\r\n< Date: Thu, 22 Mar 2018 22:24:58 GMT\r\n< Content-Type: text/html\r\n< Content-Length: 154\r\n< Connection: keep-alive\r\n< Location: https://idrc.ocadu.ca\r\n< Strict-Transport-Security: max-age=0;\r\n< \r\n<html>\r\n<head><title>302 Found</title></head>\r\n<body bgcolor=\"white\">\r\n<center><h1>302 Found</h1></center>\r\n<hr><center>nginx</center>\r\n</body>\r\n</html>\r\n* Connection #0 to host i-0035.tor1.inclusivedesign.ca left intact\n```\n\nSample output for health check:\n\n```\n$ curl -v http://i-0035.tor1.inclusivedesign.ca/health\r\n*   Trying 205.211.169.48...\r\n* TCP_NODELAY set\r\n* Connected to i-0035.tor1.inclusivedesign.ca (205.211.169.48) port 80 (#0)\r\n> GET /health HTTP/1.1\r\n> Host: i-0035.tor1.inclusivedesign.ca\r\n> User-Agent: curl/7.55.1\r\n> Accept: */*\r\n> \r\n< HTTP/1.1 200 OK\r\n< Server: nginx\r\n< Date: Thu, 22 Mar 2018 22:43:16 GMT\r\n< Content-Type: application/octet-stream\r\n< Content-Length: 0\r\n< Connection: keep-alive\r\n< Strict-Transport-Security: max-age=0;\r\n< \r\n* Connection #0 to host i-0035.tor1.inclusivedesign.ca left intact\n```\n"
    }
  ]
}
---
When the load balancer is accessed directly without it being through a configured vhost, it defaults to the first server{}. When this server entry has some problem, the load balancer is reported as failed (which is a false positive, because the failed server is actually what's behind it).

Need to implement a default server{} that's a health check endpoint.

        