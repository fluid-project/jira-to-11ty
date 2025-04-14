---json
{
  "title": "FLUID-4738",
  "summary": "fluid.fetchResources forces all cached resources (per page) to be not cached (per session)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2012-08-02T22:19:25.195-0400",
  "updated": "2021-08-08T13:53:06.698-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-08-08T13:53:06.694-0400",
      "body": "This issue was resolved when the old-style FluidRequests.js was rewritten into ResourceLoader.js for Infusion 4.x\n"
    }
  ]
}
---
Some old code within FluidRequests.js patches any AJAX request which is issued with the "forceCache" option to be forwarded to jQuery with no caching. The relevant line is FluidRequests.js line 175:

options.cache = false; // TODO: Getting weird "not modified" issues on Firefox

This apparently perverse behaviour was required as the result of a bug in the Firefox of the day (One of the 3.5x series) which caused a "not modified" response from the server (ordinarily a beneficial result implying that the browser's cached version should be used) resulting in an empty document received at the client. So much water has flown under the bridge since then and 3.5x is so far from being supported that we should be able to safely remove this facility without problems - but will require significant investment in cross-browser testing since naturally unit tests can't be supplied to verify this behaviour.

        