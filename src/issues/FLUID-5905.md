---json
{
  "title": "FLUID-5905",
  "summary": "Implement inverse for inRange and quantize",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2016-05-10T10:05:17.726-0400",
  "updated": "2016-05-10T10:12:37.528-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5337/",
      "key": "FLUID-5337",
      "summary": "Improve model relay and model transformation system to operate \"pseudoinverse\" rules"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5133/",
      "key": "FLUID-5133"
    }
  ],
  "attachments": [],
  "comments": []
}
---
* This would be the first place to start testing our "principal inverse" system. By default they should just pick "some particular" value in the range, for example the midpoint, but we should allow the inverse value they produce to be configured in some standard way, driven by a special grade which lets us recognise whether the produced value arises from a default or not.
* See <https://issues.fluidproject.org/browse/FLUID-5337>
* We should work through the GPII/universal solutions registries. there are several usages of quantize that might serve as useful examples.
* inRange is currently only used in relation to contexts - and we dont need automatic inversion for that at the moment.

        