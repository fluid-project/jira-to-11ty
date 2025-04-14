---json
{
  "title": "FLUID-5704",
  "summary": "doc-base repo: problem with setting up DocPad locally",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2015-07-08T11:05:52.411-0400",
  "updated": "2015-07-13T15:35:52.073-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-07-13T11:48:09.586-0400",
      "body": "For now I have updated the README to not use localhost. Instead the readme now states to generate the content statically and load the index.html file directly in a browser from the file system.\\\nSee: <https://github.com/jhung/doc-base-start/blob/FLUID-5692/README.md>\n"
    }
  ]
}
---
Following README.txt to set up DocPad locally, after running all steps in "Build with DocPad" section, accessing <http://localhost:9778/> in a browser gives "Server not found" error.

The output at running the second last step "docpad run --env static" shows this message:

"DocPad listening to <http://0.0.0.0:9778/>"

The DocPad seems listening to the host 0.0.0.0 instead of localhost. Accessing <http://0.0.0.0:9778/> throws "Unable to connect" error.

Note: The work for doc-base repo at this moment is still in progress as a Jonathan's personal repo: <https://github.com/jhung/doc-base/>&#x20;

        