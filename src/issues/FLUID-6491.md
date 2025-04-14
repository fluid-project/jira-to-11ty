---json
{
  "title": "FLUID-6491",
  "summary": "Set Panel's full view  in PrefEditor window without direct DOM scroll",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Bate martins",
  "date": "2020-04-14T21:32:02.110-0400",
  "updated": "2020-04-14T21:36:10.359-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "OS: Ubuntu 18.04.4 LTS\\\nNode: 12.13.1\\\nChrome: 80.0.3987.122 (Official Build) (64-bit)&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6491/API Changes from 1.5 to 2.0 _ Fluid Infusion.gif",
      "filename": "API Changes from 1.5 to 2.0 _ Fluid Infusion.gif"
    }
  ],
  "comments": [
    {
      "author": "Bate martins",
      "date": "2020-04-14T21:36:10.359-0400",
      "body": "@cindyli,@jobara the gif is an example of what i am talking!.\n"
    }
  ]
}
---
Doing a scroll on the PrefEditor makes some panels "PARTIALLY HIDDEN". To get a full view of the partially hidden panel,the user is obliged to use the scroll effect.\
There should be a way to just click the remaining seen portion of the partially hidden panel to automatically bring its full view in the prefsEditor without using the scroll.\
Can i be assigned to work on this?.

        