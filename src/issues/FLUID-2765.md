---json
{
  "title": "FLUID-2765",
  "summary": "The .fl-ProgEnhance-basic and .fl-ProgEnhance-enhanced class names don't follow our standard conventions.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2009-05-25T12:49:53.000-0400",
  "updated": "2009-05-26T17:17:14.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-25T13:01:32.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T15:00:11.000-0400",
      "body": "The classes have been renamed.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T15:18:39.000-0400",
      "body": "Didn't ensure backward compatibility... oops\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T15:37:47.000-0400",
      "body": "I've added backward compatibility with the old names, marked as \"deprecated\". Needs review!\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-26T14:45:36.000-0400",
      "body": "I made some small syntactic changes, but everything else looked good. Looks like the ball is now in someone elses court!\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-26T14:53:57.000-0400",
      "body": "Reviewed this most recent change as +1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-26T17:17:13.000-0400",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5)\n"
    }
  ]
}
---
Our progressive enhancement features rely on two CSS class names: .fl-ProgEnhance-basic and .fl-ProgEnhance-enhanced. These don't follow our standard conventions, which are described here:

<http://wiki.fluidproject.org/display/fluid/Class+Name+Conventions>

Let's rename these to .fl-progEnhance-basic and .fl-progEnhance-enhanced, providing backwards compatibility for the incorrect names. This will require changes in the FSS layout file as well as ProgressiveEnhancement.js

        