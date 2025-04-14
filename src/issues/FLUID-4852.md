---json
{
  "title": "FLUID-4852",
  "summary": "Break out configuration for escape-aware EL parsing functions for accessor strategy used in Model Transformations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2012-11-26T05:30:39.342-0500",
  "updated": "2014-03-03T12:32:53.029-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4056/",
      "key": "FLUID-4056"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-07-05T02:35:35.096-0400",
      "body": "Merged into trunk at revision c1a526d\n"
    }
  ]
}
---
Right now users of the Model Transformation system need to repeat definitions for the EL-escaping-aware parsing functions ("strategies" and "parser") whenever they operate these accessors for themselves. These need to be broken out of private code in Model Transformation and placed at top level in the framework.&#x20;

I.e.:

var getParser = {\
parser: {\
parse: fluid.pathUtil.parseEL,\
compose: fluid.pathUtil.composePath\
},\
strategies: \[fluid.model.defaultFetchStrategy]\
};

var setParser = {\
parser: {\
parse: fluid.pathUtil.parseEL,\
compose: fluid.pathUtil.composePath\
},\
strategies: \[fluid.model.defaultFetchStrategy, fluid.model.defaultCreatorStrategy]\
};

        