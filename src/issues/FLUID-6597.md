---json
{
  "title": "FLUID-6597",
  "summary": "The URL DataSource browser implementation does not set the request header",
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
  "date": "2021-02-09T11:41:50.659-0500",
  "updated": "2024-07-22T10:35:16.597-0400",
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
The URL DataSource included in the <https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580> line of development does not properly set the request headers. 

{{fluid.dataSource.URL.handleHttp}} sets the headers option under `defaultOptions.headers`. ( <https://github.com/amb26/infusion/blob/3ed160b3629d75ee76591d3d16e826f920d465b8/src/framework/core/js/ResourceLoader-browser.js#L91-L93> ) However, the call to `xhr.setRequestHeader` looks for values in `options.requestHeaders` ( <https://github.com/amb26/infusion/blob/3ed160b3629d75ee76591d3d16e826f920d465b8/src/framework/core/js/ResourceLoader-browser.js#L28-L33> ). 

This was discovered while working on the Storytelling tool (SJRK-403) to add a login request via the URL DataSource. The request header for content-type was coming through as "plain/text" instead of "application/json" due to the above issue.

        