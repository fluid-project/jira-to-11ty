---json
{
  "title": "FLUID-494",
  "summary": "File Upload: Add keyboard support",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Eli Cochran",
  "date": "2008-04-14T09:28:16.000-0400",
  "updated": "2011-02-22T16:27:53.466-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-873/",
      "key": "FLUID-873"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-660/",
      "key": "FLUID-660"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-657/",
      "key": "FLUID-657",
      "summary": "Implement basic keyboard support in Uploader"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-07-18T20:26:29.000-0400",
      "body": "The 'add files' button in the pop-up example file has strange focus swallowing behaviour. I've changed the button to a span temporarily in order to be able to add keyboard support for the uploader but we really should go back to a button and figure out why it hogs keyboard focus.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-07-22T15:20:38.000-0400",
      "body": "Some progress has been made bypassing the \"greedy\" button tab behaviour by turning off dialog modality. (see jquery.ui bug #3123 @ <http://ui.jquery.com/bugs/ticket/3123>)\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-31T16:41:15.000-0400",
      "body": "All the tasks have been completed the Uploader \"is\" keyboard accessible\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.465-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Add jQuery keyboard plugin and re-factor for keyboard support

dev-iteration39

        