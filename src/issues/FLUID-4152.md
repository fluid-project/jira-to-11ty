---json
{
  "title": "FLUID-4152",
  "summary": "Verify and expand on \"initFunction\" infrastructure for auto-lifecycle components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-03-18T01:00:15.250-0400",
  "updated": "2014-03-03T13:13:30.194-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-08-16T02:21:35.433-0400",
      "body": "This was delivered as part of the 1.4 release at commit a3c7a4703\n"
    }
  ]
}
---
The current model for "autoInit" components is not established, but as it stands, the rudimentary "lifecycle point" scheme is incomplete in its coverage and not properly tested. At the least, this particular model for lifecyle should be rounded out so it is usable, as we consider more advanced and automatic schemes for allowing people to implement methods on components.\
In particular, a useful addition would be a "preInitFunction" lifecycle point which would allow users to introduce methods which could resolve via IoC resolution of listeners onto the SAME component. Since we have not yet the "globally ginger world" this will need to be done through manual tinkering with the lifecycle methods and expansion workflow.

        