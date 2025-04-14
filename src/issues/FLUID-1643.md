---json
{
  "title": "FLUID-1643",
  "summary": "Uploader Sample-code ReadMe.txt contains a bad path reference",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-09-30T19:47:24.000-0400",
  "updated": "2011-02-22T16:27:44.677-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "n/a\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-10-30T16:47:18.000-0400",
      "body": "Changed the text to refer to Uploader samples in general in the sample-code/uploader/ directory\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:44.592-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The ReadMe.txt file at fluid-components/sample-code/uploader/ talks about how to configure Flash setting to run the Uploaser locally. Unfortunately the instructions reference a file that does not, in fact, exist:

2\. Open sample-code/uploader/uploader.html

I suggest that we make the instructions more general, since there are now two different Uploader samples and there may be another if we build an Uploader springboard.

        