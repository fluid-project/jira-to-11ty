---json
{
  "title": "FLUID-1824",
  "summary": "[Keyboard accessibility] doesn't appear to be a way to make an elm un-activatable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-11-18T15:29:27.000-0500",
  "updated": "2011-02-22T16:27:56.105-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1819/",
      "key": "FLUID-1819"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-06T14:22:40.000-0500",
      "body": "Bug Parade 0.7 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-07T11:39:11.000-0500",
      "body": "Pretty sure that Antranig is the right person to fix this bug/enhancement. If not, please pass it on.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-16T10:04:03.000-0500",
      "body": "Implemented at rev 6325\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:56.103-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Once a DOM element has been made activatable, there doesn't seem to be a way to make the element un-activatable.&#x20;

There may be a way, it just isn't clear that there is from either the code or documentation.&#x20;

\[ This is needed by Uploader to remove the event binding on the Remove button after a file has been uploaded (FLUID-1819) ]

        