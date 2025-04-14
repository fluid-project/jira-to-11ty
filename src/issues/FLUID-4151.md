---json
{
  "title": "FLUID-4151",
  "summary": "Improve diagnostics for IoC system",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-03-18T00:42:52.416-0400",
  "updated": "2015-06-09T13:21:12.354-0400",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-30T15:54:41.682-0400",
      "body": "Related to json2 removal. <https://github.com/fluid-project/infusion/commit/3e45b80f11b88b3b42982c50f23c7eafa3d1244a>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-02-01T10:40:23.338-0500",
      "body": "Merged into project repo at cf52d6763037be7298c97e5fc31a7e9c7372db9e\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-02-02T01:03:41.360-0500",
      "body": "Reopening this issue since many more improvements are necessary - should probably be kept open indefinitely\n"
    }
  ]
}
---
Resolution in the IoC system is currently very hard to debug. The code paths that are traversed during both function and value resolution are very deep and recursive and rarely provide insight to uninitiated visitors. If "something goes wrong" one is left guessing as to the exact reasons a resolution failed to be made. We should start by supplying useful diagnostic messages, firstly in the case of ALL function resolutions, listing the environment which was investigated, and secondly in the case a value resolution is attempted which does not match a context. This latter case should be made an error again - now that the "that stack" is tidily packaged up inside the "instantiator" component it is now once again possible to determine in closed form whether a context has finally matched or not.

        