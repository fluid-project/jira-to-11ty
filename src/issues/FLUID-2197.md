---json
{
  "title": "FLUID-2197",
  "summary": "Renderer should emit diagnostics in a special \"debug mode\" to help with diagnosing rendering failures",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2009-02-04T15:20:49.000-0500",
  "updated": "2011-02-22T16:27:57.440-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-04T16:05:42.000-0500",
      "body": "Implemented at revision 6426.\n\nThere is an existing rendering option \"debugMode = true\" which has been expanded to provide this rendering diagnostic information. As well as informing on all mismatches (both template to tree and the reverse) in a horrible pink, there is also branching information recorded in comments embedded in the resulting markup.\n\nWhilst being on the client suggests that the use of the horrible pink is a little less important than it was in the server-world, it still seems substantially helpful, since in complex cases with very big templates, it would be valuable to get a clear sense of **where** in a template a mismatch has occured, which in standard console.log statements would be more difficult to match up.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.438-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The most frequent result of a mismatched template and markup set is empty space - since these mismatched IDs or structure cause nothing to be rendered. It would eliminate frustration and speed diagnosis if there were a diagnostic rendering mode which gave useful feedback about the nature and position of the mismatch.

In fact, RSF Server already included some code with this function, which is the last code yet to be transferred to the client version of the renderer.&#x20;

        