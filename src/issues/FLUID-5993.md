---json
{
  "title": "FLUID-5993",
  "summary": "Conditional adjusters example does not work",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Alan Harnum",
  "date": "2016-10-26T13:03:21.434-0400",
  "updated": "2016-10-27T16:34:15.941-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Present in at least latest Edge (Win10), and latest Chrome/Firefox/Safari (Mac).\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-6003/",
      "key": "FLUID-6003"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-27T16:33:58.561-0400",
      "body": "It turns out that there wasn't really an issue with the code, however, the build site was broken because it was serving old files. ( see: <https://fluidproject.atlassian.net/browse/FLUID-6003#icft=FLUID-6003> )\n"
    }
  ]
}
---
Conditional adjusters examples at <http://build.fluidproject.org/infusion/examples/framework/preferences/conditionalAdjusters/> and <http://build.fluidproject.org/infusion/examples/framework/preferences/conditionalAdjusters-singlePanel/> throws the error "ASSERTION FAILED:  Instantiation of view component with type fluid.textfieldSlider failed, since selector " .mpe-slider " did not match any markup in the document"

This may represent a regression to previous issues with conditional adjusters, the HTML5 range inputs and jQuery's context when dealing with the preferences in a frame, or it may be another issue. All the automated tests continue to pass, including the ones that were written against issues with conditional adjusters previously.

        