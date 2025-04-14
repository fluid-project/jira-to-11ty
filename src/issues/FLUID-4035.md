---json
{
  "title": "FLUID-4035",
  "summary": "Update the Pager to use IoC",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-01-20T11:24:40.396-0500",
  "updated": "2013-09-18T11:25:16.853-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2881/",
      "key": "FLUID-2881",
      "summary": "Implement new \"strong IoC framework\" as driven by Pager requirements"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5022/",
      "key": "FLUID-5022",
      "summary": "Create framework facility for declarative definitions for dynamic collections of subcomponents"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2880/",
      "key": "FLUID-2880"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4036/",
      "key": "FLUID-4036"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-25T05:16:10.468-0400",
      "body": "The pager contains \"conditionally present\" subcomponents. The original plan was to tackle this issue via the medium of \"fallible views\" - components that on discovering a missing prerequisite such as no container in the DOM, would return \"null\" from their creator function. However, this workflow is at odds with the <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> ginger world semantic whereby a value, \"once seen\" should never be found to be absent or changed during a particular \"instantiation fit\". Therefore a component which returns null from its creator is not a valid construction - as a result, we must provide a mechanism which allows the creation of components to be blocked through checking their prerequisites BEFORE construction.&#x20;\n\nAs a result, we moved up and wrote up the requirement for <https://fluidproject.atlassian.net/browse/FLUID-5022#icft=FLUID-5022> which had been in the background for a while, and decided to implement the Pager's \"fallible components\" (such as the 2nd PagerBar, etc.) in terms of this mechanism.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-07-22T21:12:40.807-0400",
      "body": "Merged into trunk at revision acf4633\n"
    }
  ]
}
---

        