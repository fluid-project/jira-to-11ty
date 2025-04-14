---json
{
  "title": "ENGAGE-523",
  "summary": "Implement a method for transforming models within the Nav List",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-03-17T13:23:12.000-0400",
  "updated": "2014-03-03T13:44:39.431-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-17T13:23:23.000-0400",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-23T16:32:37.000-0400",
      "body": "Added the ability for the navlist to map data for its model on its own.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T10:11:32.000-0400",
      "body": "Assigned to Antranig for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-25T08:42:26.000-0400",
      "body": "I don't agree that this functionality should be part of the component - and certainly shouldn't be implemented by custom code delivered as part of the component file. In general, responsibility for mapping models really should fall upon the component's user and not on the component - but we should supply framework-standard functionality to help with this. In general we have developed a dangerous profusion of custom model-mapping schemes within Engage and I suggest that this implementation should probably be removed or migrated to a utility file pending a more thorough solution.\n"
    }
  ]
}
---
Implement a method for transforming models within the Nav List

Currently it seems that the model that the nav list should be acting on is rarely a one-to-one match to the nav list's actual model. In Engage we have been performing a mapping operation before passing it to the Nav List. It would simplify the use of the Nav List if it could transform the data itself.

        