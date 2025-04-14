---json
{
  "title": "FLUID-5715",
  "summary": "Grid Reorderer locks up on IE11",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Simon Bates",
  "date": "2015-07-21T16:33:43.391-0400",
  "updated": "2016-11-24T12:54:23.156-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6004/",
      "key": "FLUID-6004"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The Grid Reorderer locks up on the demo on IE11.

It appears to be limited to IE and I cannot reproduce on FF or Chrome.

To reproduce:

1\. load the demo page demos/reorderer/gridReorderer/\
2\. close the overview panel\
3\. tab to the letter puzzle\
4\. arrow key to "H"\
5\. press CTRL + up and then left to move "H" to the top left, release CTRL\
6\. press CTRL + right and right again

The bottom right square disappears and we see:

F H A\
E B I\
D C

And the component no longer responds to arrow key presses.

It appears to be timing related. If I move slowly it works, if quickly it breaks. Also, if I have the Developer Tools open, I cannot reproduce the problem 😞

        