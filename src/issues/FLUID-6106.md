---json
{
  "title": "FLUID-6106",
  "summary": "Consider use of CLAs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-01-11T11:22:15.886-0500",
  "updated": "2018-07-03T14:07:20.810-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Infrastructure",
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-07-03T14:07:20.802-0400",
      "body": "We have started to use CLA Assistant to track CLAs for our GitHub repos.\n\n \n"
    }
  ]
}
---
Currently we require a CLA for individuals and a CCLA for organizations that contribute to our projects. ( see: <https://wiki.fluidproject.org/display/fluid/Fluid+Licensing> ). Our current process requires a contributor to submit one or more of the forms as a signed document, either in person or faxed. This is cumbersome both to the contributor and for us to collect. It is also a barrier for contribution. We should look into either an improved process (e.g. automated) or remove our requirement for CLAs altogether.&#x20;

* [https://cla-assistant.io](https://cla-assistant.io/)
* <https://sfconservancy.org/blog/2014/jun/09/do-not-need-cla/>
* <https://botbot.me/freenode/fluid-work/2016-11-25/?msg=77009195&page=1>
* Action: Team of 2 to investigate CLA assistant or some other more lightweight option
* Consider some kind of UI which operates within github whenever a pull request is opened, indicating that the contributor agrees to the repo-wide licence
* Simon and Colin have indicated interest
* Survey other inclusive communities that we respect (e.g. hood.ie)
* None of this work looks like a huge priority compared to other immediate projects - it will be done "in the corners"

see: <https://wiki.fluidproject.org/display/fluid/Post+Infusion+2.0+Review+Meeting+Notes>\
Informal deadline - before GSoC starts up again Februaryish

        