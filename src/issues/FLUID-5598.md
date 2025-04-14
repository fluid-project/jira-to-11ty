---json
{
  "title": "FLUID-5598",
  "summary": "Allow the auxiliary schema to take a terms block, for interpolating into resource loader option.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-02-25T10:38:15.171-0500",
  "updated": "2015-06-26T10:20:17.653-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-03-25T10:30:32.078-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/infusion/pull/587>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-26T09:57:39.440-0400",
      "body": "Merged @ 5adc32e325f8db4bb171edc33fa5818a09cb42d8\n\nThe corresponding infusion-docs pull request (<https://github.com/fluid-project/infusion-docs/pull/67>) has been merged @ 369e47d2785bcf52ec2803d3345edf586b70493c\n"
    }
  ]
}
---
Currently the prefix for message and template bundles are defined in the auxiliary schema as top level properties and both use the "%prefix" token when being referred at other places in the auxiliary schema. These prefix, currently named messagePrefix and templatePrefix, should be moved into a common top level property "terms" so that the entire terms block should be passed into the template and message loaders, which are instances of the resource loader (fluid.prefs.resourceLoader). This will allow the references to these prefix use the defined names such as %templatePrefix and %messagePrefix as well as allowing the passing of other options into these loaders.

        