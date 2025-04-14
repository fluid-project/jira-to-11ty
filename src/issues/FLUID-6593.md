---json
{
  "title": "FLUID-6593",
  "summary": "URL datasource sends the URL as an Object instead of a String",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-02-03T09:10:38.310-0500",
  "updated": "2024-07-22T10:35:20.414-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> and <https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580> lines of Infusion the included URL Datasource [sends the XHR](https://github.com/amb26/infusion/blob/6e4be079f5fc376f6ee614d121c7db912041ec28/src/framework/core/js/ResourceLoader-browser.js#L126) request with a URL Object rather than as a String. It appears that browsers are able to handle this, but when trying to write tests using Sinon's [fake server](https://sinonjs.org/releases/v9.2.4/fake-xhr-and-server/) it throws an error: request.replace is not a function (see: <https://github.com/sinonjs/nise/blob/f7ab6ec9dcb968e3a0f1d61b16f8d1176e9ba7d0/lib/fake-server/index.js#L89> )

If we look [one line above](https://github.com/sinonjs/nise/blob/f7ab6ec9dcb968e3a0f1d61b16f8d1176e9ba7d0/lib/fake-server/index.js#L88) : {{rCurrLoc.test(requestUrl) is returning true likely from the requestURL being implicitly having its toString method called. This lets it fall through to the failing line. However, it may fail later with other operations that may require requestURL be a String.

See conversation in the fluid-tech matrix room: <https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$3xzgv3RZdzar9HvBYfEsTDOFDPBwIc6Kbk9LA_oTci4?via=matrix.org>

        