---json
{
  "title": "FLUID-6304",
  "summary": "Make it possible to exclude certain panels based on locale",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2018-07-20T13:44:24.317-0400",
  "updated": "2018-09-04T16:13:35.350-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6302/",
      "key": "FLUID-6302",
      "summary": "Create a locale-aware component that makes it easier to for Infusion applications to respond to the browser-specified locale"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-07-25T16:52:52.001-0400",
      "body": "This section of the Preferences Framework documentation may be relevant: <https://docs.fluidproject.org/infusion/development/ConditionalSubpanels.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-07-27T07:17:35.972-0400",
      "body": "You're probably already thinking about this, but in case you aren't, you'll also want to be able to stop the enactors for those related adjusters as well. This may also mean being able to reset their values when the language changes. \n\n \n\nSo one scenario may be that you have letter spacing set and you switch to farsi. The letter spacing enactor should revert the page to the default letter spacing. Then you switch back to the previous language and the letter spacing should be applied again. I'd also assume that these changes to the letter spacing enactor shouldn't affect the stored preferences. That is, the store should still contain the set preference for letter spacing even though it isn't applied.\n"
    }
  ]
}
---
As has been pointed out by @@Sepideh Shahi, certain adjuster may not make sense in certain locale contexts. The concrete example is the new "letter spacing" adjuster, which has no meaning for a script-based character set like Farsi, and in fact is detrimental to the comprehensibility of the text.

Per this issue, it would be good to have an approach to excluding or including certain panels based on locale.

At a generalizable level, this would likely relate to context-awareness features involving locale per FLUID-6302 

        