---json
{
  "title": "ENGAGE-367",
  "summary": "The Engage data mapping infrastructure is poorly factored, causing repetitive code and subtle musem-specific schema assumptions",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "Colin Clark",
  "date": "2010-02-10T12:24:13.000-0500",
  "updated": "2014-03-03T13:47:36.301-0500",
  "versions": [
    "0.1",
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-486/",
      "key": "ENGAGE-486",
      "summary": "Data in CouchDB should be stored in the single database in order to allow fancy view manipulations (join, etc.)."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-17T11:47:24.000-0400",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-17T04:02:16.010-0400",
      "body": "We should really close all outstanding Engage JIRAs since even if the project one day returns, the codebase we start from will be unrecognisably different. In this case, we would use the Model Transformation system which has been under development for the last few years.\n"
    }
  ]
}
---
Engage's architecture is founded on the concept of "schemalessness." At the database level, we don't assert a single schema to which a musem's data must conform. Instead, we store data in Couch in whatever format it is given to us in. This preserve the original linkage of data in our system with wherever it came from, ensuring that museums can easily query our data feeds, extract data from the system and merge it back with their in-house content and collections management system.

That said, we still want to shield presentation-layer code from having to contend with an essentially arbitrary schema. To this end, the vision for Engage is provide a single layer of framework code that can map data from a museum-specific format to one more suitable for presentation on the Web. Museums need only provide a declarative document that represents the mapping or transformation of their data. This should happen dynamically at request time, and should be invisible to components.

In Engage 0.3, the infrastructure we have for mapping from museum-specific schemas is located in framework/js/Engage.js. The central method is fluid.engage.mapModel(), which takes a raw model and a so-called "dataSpec" which defines the transformation operations.

However, this code is not well-factored and as a result includes a lot of duplicated code that breaks the declarative vision we have for mapping documents. Another side-effect of these design issues is that there is no way to support mapping of multiple fields into one field, etc.

        