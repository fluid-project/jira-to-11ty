---json
{
  "title": "FLUID-4321",
  "summary": "Demo portal doesn't work from the local file system when run in Chrome",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Escalated",
  "reporter": "Colin Clark",
  "date": "2011-07-04T12:56:43.494-0400",
  "updated": "2014-06-25T16:16:11.181-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos"
  ],
  "environment": "Chrome\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4321/Screen shot 2011-07-01 at 3.26.26 PM.png",
      "filename": "Screen shot 2011-07-01 at 3.26.26 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-07-04T12:57:41.051-0400",
      "body": "Screenshot from Jeff Cross showing issue with demo portal in Chrome when run from the local file system.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-06T10:09:23.429-0400",
      "body": "There is an issue filed for this with Google's chromium project <http://code.google.com/p/chromium/issues/detail?id=40787>\n"
    }
  ]
}
---
The demo portal fails to correctly load demos when run in Chrome from the local file system. Here's a report from Jeff Cross about the issue:

"I'm Jeff Cross, I work with Gary at Unicon and am getting up to speed on Fluid. I ran into an issue when running the demos locally in Chrome, and didn't see an existing issue at issues.fluidproject.org.&#x20;

When I open any demo, such as pager, here is what my screen looks like (Web Inspector is open at the bottom so you can see javascript errors). It looks like a crossdomain issue, even though all the resources are local. Perhaps it's just a Chrome bug. Running Google Chrome 12.0.742.112."

It looks like this may be caused by a tightening of Chrome's same origin policy when run against the local file system.

The demo portal works correctly in Chrome when run from the server.

        