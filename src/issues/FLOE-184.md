---json
{
  "title": "FLOE-184",
  "summary": "On first load of editing OER resource in metadata demo, the resource editor does not look right",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2014-04-21T10:11:05.936-0400",
  "updated": "2014-04-21T12:23:24.821-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When loading the resource editor in the Metadata Demo for the first time in a browser, the content may not lay out properly and the content may not load.

Work-around:\
Reloading the page and restarting the demo (press "Restart Demo" from inside the resource editor) appears to fix this.

Reproducing may be tricky, but you can try the following:

* dump cache and restart your browser session, load the metadata demo, choose "Climate Change Impacts" from the landing page - see how the layout and content doesn't look right.
* alternatively, if you are running the demo locally, try moving or renaming the metadata directory so that the browser is forced to reload its contents and not cache. Then load the demo in a browser.

        