---json
{
  "title": "FLUID-6260",
  "summary": "For enactors that modify the styling and presentation of content, a class should be added to identify that it is enabled.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-03-12T13:06:49.748-0400",
  "updated": "2024-07-22T10:35:31.002-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6605/",
      "key": "FLUID-6605"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2018-03-12T13:11:34.154-0400",
      "body": "This would be so powerful for an integrator! It would allow us to work with UI Options more easily with specific instances, instead of trying to re-work entire sections of markup + CSS to accommodate UIO.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-10-12T11:27:53.181-0400",
      "body": "Rather than use a class name, we can apply these style changes via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). Similar to <https://fluidproject.atlassian.net/browse/FLUID-6605#icft=FLUID-6605>. This would allow an integrator to hook into the custom property for their own styling. \n\nsee: <https://css-tricks.com/a-complete-guide-to-custom-properties/>\n"
    }
  ]
}
---
Enactors like Text Size, Line-Height, Letter-Spacing and etc that modify the styling of a page without necessarily adding a class, they should still add a class to identify that the enactor is enabled. This will provide a hook for an integrator to adjust the layout and presentation of the content to best work with the adjustment. It would be even better if specific classes for the various adjustment levels could be provided. (e.g. similar to how contrast works).

        