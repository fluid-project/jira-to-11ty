---json
{
  "title": "FLUID-3725",
  "summary": "Refactor the Uploader's file queue subcomponent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-09-09T13:33:25.828-0400",
  "updated": "2014-04-02T15:28:19.287-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4038/",
      "key": "FLUID-4038"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The Uploader currently has a helper object called fluid.FileQueue, which contains both the core model for Uploader. It consists of a list of files to be uploaded, as well as a data structure containing state information about the current batch of files.

However, FileQueue also includes a set of convenience methods for operating on the model. It represents an awkward hybrid of traditional OO encapsulation and the familiar "open model" approach found in Infusion. The code in the FileQueue needs to be assessed, reworked, and ultimately split out into a common shared model that each component can use and a real event-aware subcomponent that can manage this model at the various important lifecycle points of the Uploader.

        