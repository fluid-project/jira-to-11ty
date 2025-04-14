---json
{
  "title": "FLOE-487",
  "summary": "Convert MyL3 to use server-side Infusion as appropriate",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-10-25T09:02:10.014-0400",
  "updated": "2018-05-08T14:58:53.036-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Learning Dashboard"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-05-08T14:58:53.021-0400",
      "body": "Closing since new work in starting on this project, being captured in <https://issues.fluidproject.org/projects/MYL3/issues/?filter=allopenissues>\n"
    }
  ]
}
---
After ruminating on this, I've concluded it makes sense to convert / build out MyL3 to be a server-side Infusion project (using Kettle or gpii-express) sooner rather than later.

**Rationale:**

1\) Eventually we want this to be a full deployable service, with features like user authentication, non-browser storage of data, etc. The sooner we begin to implement this as part of the architecture the better, now that we are past a prototyping stage.

2\) It will be easier to take advantage of existing prior art from the larger community (the use of CouchDB / PouchDB via Kettle's implementations is one example).

**Things to look at:**

<https://github.com/GPII/first-discovery-server> has some similarities in being a relatively straightforward user interface that uses Kettle on the back end to persist data

<https://github.com/GPII/gpii-handlebars> is an obvious candidate for templating

<https://github.com/fluid-project/kettle> and <https://github.com/GPII/gpii-express> - these are the two existing Infusion-based server-side frameworks.&#x20;

**Future work**

More detailed issues will be forthcoming as the work evolves.

        