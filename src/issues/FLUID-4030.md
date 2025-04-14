---json
{
  "title": "FLUID-4030",
  "summary": "Document the framework's model transformation APIs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Anastasia Cheetham",
  "date": "2011-01-14T11:58:03.310-0500",
  "updated": "2016-10-26T09:57:50.968-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Model Transformation System",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-03-02T09:24:23.348-0500",
      "body": "I did some documentation for the model transformation here: <http://wiki.gpii.net/index.php/Architecture_-_Available_transformation_functions>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-31T16:03:39.564-0400",
      "body": "Docs are now (as of 1.5) living in github (<https://github.com/fluid-project/infusion-docs/>) but there's still not model transformation documentation.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:25:01.385-0400",
      "body": "Docs are now hosted at <http://docs.fluidproject.org/infusion/development/>, but the source is stored in github.\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-04-14T19:34:31.231-0400",
      "body": "Pull request at <https://github.com/fluid-project/infusion-docs/pull/86>&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-10-26T09:57:44.900-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion-docs/pull/86> has been merged into the master branch at 186b4376d61c187f743e20f7045d128f03d7051c\n"
    }
  ]
}
---
We have a placeholder page for this:\
<http://wiki.fluidproject.org/display/docs/Model+Transformation>

We need to include (not exhaustive):

* transforms now in "fluid.transforms" namespace
* many new transforms available (see ModelTransformationTransforms.js)
* transforms now specified with "transform:" instead of "expander:"&#x20;
* only supporting 'input' and 'inputPaths' instead of value in the expanders
* Several new transform functions
* "standardTransformation" -> standardTransformFunction

        