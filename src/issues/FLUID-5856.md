---json
{
  "title": "FLUID-5856",
  "summary": "testem should launch browsers in private/incognito mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-02-10T12:46:16.354-0500",
  "updated": "2016-02-10T12:46:16.354-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently when testem is triggered it launches the available browsers. What would improve this flow would be to launch the private/incognito versions of the browsers. This should prevent them from storing the history and cache. Which should reduce the chance of separate test runs affecting each other.

This blog post has information about how to launch browsers in private/incognito mode\
<http://digiwonk.wonderhowto.com/how-to/start-any-web-browser-private-mode-for-fast-incognito-browsing-0155209/>

        