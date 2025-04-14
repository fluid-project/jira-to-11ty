---json
{
  "title": "FLUID-5016",
  "summary": "3rd party developers need a way to access the stored UIEnhancer settings",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "y z",
  "reporter": "Anastasia Cheetham",
  "date": "2013-05-10T11:16:28.589-0400",
  "updated": "2015-06-15T10:24:33.057-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-06T14:52:03.645-0400",
      "body": "There was a discussion in the channel today about issues around the timing of the creation of the UIEnhancer:\\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-06-06>\n\nThe question is: What happens if the 3rd party app happens to be created before the UIEnhancer is created and added to the static environment? There's no way for the 3rd party to request notification, or anything like that.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-06-12T14:18:51.258-0400",
      "body": "Hi Yura - this sounds like a great function. Could you perhaps provide a code sketch that illustrates what the user of the system might write in this case?\n"
    },
    {
      "author": "y z",
      "date": "2013-06-12T14:56:49.058-0400",
      "body": "Anastasia, would you be able to point us to some of the code fragments used in the wordpress plugin?\n"
    }
  ]
}
---
When third party developers create something that wants respond to UIO settings changes, they need a way to access those model changes from the page enhancer.

This would require a grade, defined in the Framework, that would be added to the third party components. The grade would access the page enhancer in the static environment and expose model changes to the third party through an event. Ideally, the event would only notify of paths specified by the third party.

Use Case: VideoPlayer WordPress plugin\
The VideoPlayer WordPress plugin wants to add media panels to UIO and respond to changes in caption and transcript settings. UIO itself is provided by a completely separate theme, so the plugin should be able to work with UIO without having to instantiate UIO itself.

        