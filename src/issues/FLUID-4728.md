---json
{
  "title": "FLUID-4728",
  "summary": "Mouse hover styling still active on disabled \"Add More\" button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Justin Obara",
  "date": "2012-07-10T11:17:33.059-0400",
  "updated": "2016-07-08T11:09:42.794-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4728/Screen Shot.png",
      "filename": "Screen Shot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-10T12:36:18.068-0400",
      "body": "\"Screen Shot.png\" shows the hover style (border) when the \"Add More\" button is disabled.\n"
    },
    {
      "author": "Neel Dalsania",
      "date": "2016-03-06T08:26:33.673-0500",
      "body": "I have edited the code and i think the hover issue is solved.\\\nI have attached the link of the screenshot, suggest any changes.\\\n<https://www.dropbox.com/s/bhd0qk4bcfntimk/Screenshot%20from%202016-03-06%2018%3A43%3A38.png?dl=0>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-07T10:42:11.036-0500",
      "body": "@@Neel Dalsania it's hard to tell from the screenshot. Could you file a pull request with your changes?\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the Uploader Demo\
<http://build.fluidproject.org/infusion/demos/uploader/>

2\) Start uploading files (add enough that you have time to interact with the buttons)

3\) Hover over the disabled "Add More" button.\
Notice that the hover styling is still applied.

        