---json
{
  "title": "FLUID-3460",
  "summary": "Builder accessibility issues in JAWS IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2010-01-05T09:03:20.000-0500",
  "updated": "2014-03-03T11:20:13.243-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "JAWS IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:00:01.718-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.242-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
After the "Select all" button is activated (and all modules and dependencies are highlighted) you get auditory confirmation that all modules are selected, but in order for this to happen, you have hit Enter twice (as opposed to once).&#x20;

After "Reset selection" button is activated, it might be good to have confirmation that all modules are unchecked, i.e: "Modules Selected: none". My reasoning is because visually there is a change, so this should be communicated by JAWS too.&#x20;

        