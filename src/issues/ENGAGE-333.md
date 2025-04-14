---json
{
  "title": "ENGAGE-333",
  "summary": "The Exhibtion About page throws an error on instantiation",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-05T17:39:15.000-0500",
  "updated": "2020-11-12T07:37:22.369-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-332/",
      "key": "ENGAGE-332",
      "summary": "Exhibtion View and About share the same component code, but they offer very different presentations. They should be factored out as separate components."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-05T17:39:45.000-0500",
      "body": "This issue is caused by the design error described in <https://fluidproject.atlassian.net/browse/ENGAGE-332#icft=ENGAGE-332>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-24T12:21:00.000-0500",
      "body": "The error has been fixed, the design related issue will be fixed in <https://fluidproject.atlassian.net/browse/ENGAGE-332#icft=ENGAGE-332>\n"
    }
  ]
}
---
Exhibition About is throwing an error upon page load. This is due to the fact that it is implemented using the same component as Exhibition View, which attempts to create a Navigation List for displaying catalogue information. However, the Exhibition About template doesn't have any catalogue information in it.

Since both data feeds share the same underlying representation of Exhibition models, ExhibitionView.js attempts to instantiate a NavList and bind it to the "catalogue" element in the page, even those Exhibition about.html doesn't have this information in it.

Here's the offending code:

```java
// Render the Exhibition Preview component only if we have artifacts to preview.
        if (that.model.catalogueSize > 0 && that.model.cataloguePreview) {
            // Prepare model for NavList
            var cataloguePreview = fluid.transform(that.model.cataloguePreview, function (artifact) {
                return {
                    target: artifact.target,
                    showBadge: artifact.media,
                    image: artifact.image,
                    title: artifact.title
                };
            });
            
            $.extend(that.options.exhibitionPreview.options, {model: cataloguePreview});
            that.exhibitionPreview = fluid.initSubcomponent(that, "exhibitionPreview", [
                that.locate("catalogue"), 
                fluid.COMPONENT_OPTIONS
            ]);
        }
```

We'll have to work around this whole issue temporarily by ensuring that catalogue information doesn't get included in the model supplied by the Exhibition About data feed. In the long run, we need to refactor both Exhibition View and About to separate their concerns, as outlined in <https://fluidproject.atlassian.net/browse/ENGAGE-332#icft=ENGAGE-332>

        