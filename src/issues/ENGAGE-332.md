---json
{
  "title": "ENGAGE-332",
  "summary": "Exhibtion View and About share the same component code, but they offer very different presentations. They should be factored out as separate components.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Colin Clark",
  "date": "2010-02-05T17:34:40.000-0500",
  "updated": "2017-12-22T09:44:26.582-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-333/",
      "key": "ENGAGE-333"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2010-03-10T17:10:27.000-0500",
      "body": "This issue causes an error in the stand alone where about and view both use the same demo data. About will try to initialize navigation list that it doesn't have the container for in html nor it has the resource in place (since there's no screenNavigator shared resources).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:26.581-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, the Exhibtion View and About pages are implemented using the same component, called ExhibitionView\.js. However, they have very different templates which show very different views on the data.

They should be separate components--if there's shared logic between the two, it should be factored out into an object that they both use. This should enable us to deliver much smaller and less bug-prone versions of each component.

An example of this issue is how we handle catalogue information. Exhibtion About doesn't display any catalog information at all, yet ExhibitionView\.js fundamentally concerned with this sort of information.

        