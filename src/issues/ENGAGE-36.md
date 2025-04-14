---json
{
  "title": "ENGAGE-36",
  "summary": "Build a related objects component",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2009-07-13T13:37:56.000-0400",
  "updated": "2009-11-13T10:16:21.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Browse"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-27/",
      "key": "ENGAGE-27",
      "summary": "Pull data from CouchDB into the artifact view component"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-07-13T13:45:23.000-0400",
      "body": "David has started building the markup for this component. We still need to finish building the markup and use the renderer to build out the entire list of artifacts from data provided in a json object. We also need to hook up the related objects list to the artifact component.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-08-31T12:15:03.000-0400",
      "body": "A related objects component is likely just a browse component containing related objects.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T10:16:21.000-0500",
      "body": "The related objects component is a browse component that uses a specific search.\n"
    }
  ]
}
---
The mobile wireframes have a 'related objects' page that can be built as a component. Eventually this component will likely be generalized as a browsing or search results component.&#x20;

<http://wiki.fluidproject.org/display/fluid/Mobile+wireframes>

        