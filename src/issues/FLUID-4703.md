---json
{
  "title": "FLUID-4703",
  "summary": "UI Enhancer shouldn't use 'em' for line-height value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2012-04-20T10:16:26.417-0400",
  "updated": "2012-04-20T16:15:15.407-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-04-20T10:53:29.382-0400",
      "body": "I've issued a pull request for a fix to this:\\\n<https://github.com/fluid-project/infusion/pull/220>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-04-20T16:15:09.174-0400",
      "body": "Merged the pull request ( <https://github.com/fluid-project/infusion/pull/220> ) into the project repo at ddecffb33b1ddd45813abe23edc46bbfde9ed239\n"
    }
  ]
}
---
The UI Enhancer currently uses a unit of 'em' on the line-height setting it applies o the body element. I believe it shouldn't use a unit.

When an absolute value is used for line-height, the computed line-height (based on the the font-size of the element where the line-height was specified) is inherited by all elements that don't have their own line-height set. In the case of UIO, this means that everything inherits the computed - and therefore fixed - line height based on the body font size. Because UI Enhancer is setting the line height this way, elements with larger fonts end up with too little line-spacing, requiring integrators to hard-code a line-height for those elements, which means that increasing the line-height with UIO doesn't affect those elements (see FLUID-4491).

In contrast, when the line-height is a unitless number, it is treated as a scaling factor, and that factor is inherited. The factor will be used by each element to calculate the line height based on the element's own font size.

If we fix this bug, integrators shouldn't have to set line-heights at all, so the incidence of FLUID-4491 would greatly decrease.

        