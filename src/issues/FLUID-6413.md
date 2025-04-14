---json
{
  "title": "FLUID-6413",
  "summary": "Allow resourceLoader's localisation to be model-driven",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-10-14T12:16:13.475-0400",
  "updated": "2024-07-22T10:35:07.655-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The initial implementation of the new localised ResourceLoader expected the user to bash on the ResourceFetcher's record directly via a horrific dodge like the following:

```java
var checkIt = function (component) {
            jqUnit.assertTrue("Component successfully constructed ", fluid.isComponent(component));
            jqUnit.assertEquals("Localised model fetched", "These courses will require a lot of grading", component.model.messages.courses);
            // Dynamically update locale by bashing on the resourceFetcher's records
            var resourceFetcher = component.resourceFetcher;
            resourceFetcher.options.locale = "en_ZA";
            resourceFetcher.resourceSpecs.messages.onFetched.addListener(function () {
                checkIt2(component);
            });
            // Trigger a refetch of the resources which will automatically update the linked model
            resourceFetcher.refetchAll();
        };
```

What we want is for the localisation itself to be model-driven. This requires a pretty ambitious restructuring of the workflow of all modelComponents so that the initial transaction can extend over a longer period of time, to allow updates to accumulate during resource loading.

        