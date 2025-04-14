---json
{
  "title": "FLUID-877",
  "summary": "Restructure sample-code folder to separate Reorderer-derived components from Reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-08T19:53:03.000-0400",
  "updated": "2011-01-20T15:09:39.684-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": "SVN\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-20T09:29:13.668-0500",
      "body": "Since this issue was filed, our samples and demos have been restructured. The Reorderer demos are now organized by flavour.\n"
    }
  ]
}
---
The Layout Customizer and Lightbox are considered components in their own right. Right now, the sample code for these components is lumped under the 'reorderer' folder with other Reorderer sample code (other components get their own folder). Separating these samples out into their own folder might make it easier for developers to find samples for the component they're interested in.

        