---json
{
  "title": "FLUID-4706",
  "summary": "mergePolicy of \"noexpand\" currently appears to also imply \"nomerge\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2012-05-07T04:32:46.800-0400",
  "updated": "2014-04-04T15:31:17.716-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-01T04:13:11.463-0500",
      "body": "Now correct in trunk implementation\n"
    }
  ]
}
---
The current implementation of the "noexpand" merge policy also appears to inhibit merging - only the "final value" of a series of options merged at a particular path under "noexpand" will appear. This removes the possibility for the user to specify options which are merged according to the standard algorithm but not expanded. This was the expectation in the "fluid.uiOptions.inline" options shipped in Infusion 1.4 but owing to a further framework limitation, which failed to honour mergePolicies which appeared in derived grades, this problem was not seen.\
As part of the FLUID-4695 model transformations work, the handling of mergePolicies was improved which caused a failure in the fatPanel configuration of UIOptions, as the final value of "uiOptionsTransform", the transformation record, no longer became merged together correctly, with the fatPanel portion of the record destroying the uiOptionsTransform record.

When this issue is resolved, the current effect of "noexpand" could be achieved by writing the composite mergePolicy of "nomerge, noexpand".&#x20;

        