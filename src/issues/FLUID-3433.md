---json
{
  "title": "FLUID-3433",
  "summary": "Filename of Infusion Build downloads should be different from each other/indicate that it's custom (e.g., infusion-custom-1.1.2)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2009-12-16T13:36:59.000-0500",
  "updated": "2014-03-03T11:20:12.955-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:12.954-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
jameswy in the IRC channel describes this issue as:

"So, the problem as I see is that I download two completely different builds of Infusion for whatever reason, but both are downloaded as "infusion-1.1.2.zip". So, on my end, days later, I'm trying to find my Fluid Infusion download, but I see two files that are similarly named (infusion-1.1.2.zip, infusion-1.1.2 (2).zip), and from where I'm standing, they should be exactly the same file that I just accidentally downloaded twice."

        