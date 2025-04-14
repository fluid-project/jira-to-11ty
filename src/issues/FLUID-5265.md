---json
{
  "title": "FLUID-5265",
  "summary": "grunt-modulefiles plugin should return the set of module related directories as well as files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-02-03T14:44:38.359-0500",
  "updated": "2014-02-04T13:55:03.251-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-02-04T10:25:24.362-0500",
      "body": "Submitted a pull request <https://github.com/fluid-project/grunt-modulefiles/pull/3> that will return an object containing files and directory arrays.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-02-04T11:47:26.534-0500",
      "body": "Merged into the project repo @ aef0991f7e7f406224ca9c63821bee1fecfdd06d\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-02-04T13:55:03.251-0500",
      "body": "Merged more into the project repo @ eb782abaca89400099dcfe5ec8436c7cddbf9e14\n"
    }
  ]
}
---
Currently the grunt-modulefiles plugin will return the set of required files. However, at times it will also be interesting to know what the set of required directories are. Perhaps instead of just returning the set of files to "output" we return an object of the structure

{\
files: // set of files\
dirs: // set of dirs\
}&#x20;

        