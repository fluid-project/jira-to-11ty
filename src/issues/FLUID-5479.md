---json
{
  "title": "FLUID-5479",
  "summary": "Improve handling in valueMapper of matching on composite values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-07-23T08:20:52.964-0400",
  "updated": "2015-06-17T10:28:36.720-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5307/",
      "key": "FLUID-5307"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-07-25T13:42:18.321-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/552> merged into project repo at f0f9696b5b86a78f82523858c769259122fb3eb4\n"
    }
  ]
}
---
There is partial but not properly implemented or tested support in our "valueMapper" transform rule for matching on composite values. This needs to use a "scoring" system similar to the one used in the GPII's "canopy matchmaker" described at <http://issues.gpii.net/browse/GPII-4> and in other presentations.

Recent work on the metadata editing component by cindy has brought up a real use case for this, which can't be addressed in a compact and intelligible way through other schemes. This use case has been written up at <http://wiki.fluidproject.org/display/fluid/Notes+on+valueMapper+Requirements>

There are some utilities "fluid.model.transform.matchValue" and "fluid.model.transform.compareMatches" which operate this, but they are quite vague and skeletal. It is time to press them into service for this real application - as well as ensuring that the inverse rule also works correctly.

        