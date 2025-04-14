---json
{
  "title": "FLUID-4695",
  "summary": "Add the ability to specify transformations in the Model Transformation framework for outputPaths that aren't predetermined",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2012-04-12T13:15:10.447-0400",
  "updated": "2014-04-04T15:22:23.805-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4736/",
      "key": "FLUID-4736"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-11-26T05:25:45.379-0500",
      "body": "This facility is now delivered in the Model Transformations system in trunk\n"
    }
  ]
}
---
At the moment, Infusion's model transformation framework takes a simple approach to specifying transformation using the following forms:

\<output path>: {\
expander: {\
type: \<expander type>,\
inputPath: \<input path>\
\<remaining expander options>\
}\
}

and the shorthand:

\<output path>: \<input path>

However, for cases where the output path is determined by some aspect of the transformer itself, we need to support a form like this:

{\
\<output path>: \<input path>,\
expanders: \[\
{\
expander: {\
type: \<expander type>,\
inputPath: \<input path>\
outputPath: \<output path>\
}\
}\
]\
}

        