---json
{
  "title": "FLUID-4991",
  "summary": "The shadow effect around the hide/show preferences tab should change colour with the contrast theme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-04-26T14:25:50.644-0400",
  "updated": "2016-04-18T10:42:50.840-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Chrome, Safari, FF\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4991/Screen Shot 2016-03-08 at 10.03.40 AM.png",
      "filename": "Screen Shot 2016-03-08 at 10.03.40 AM.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-04-26T14:27:58.788-0400",
      "body": "\"screen-shot.png\" shows the shadow not changing colour with the theme.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:17:34.895-0400",
      "body": "Maybe the shadow effect should just be removed in the contrast themes.\n"
    },
    {
      "author": "sparsh paliwal",
      "date": "2016-03-02T16:00:29.070-0500",
      "body": "@Justin <https://drive.google.com/file/d/0B3GzDUy0ulh-b0hwVDloXzZoa3c/view?usp=sharing>\\\nAs the screenshot provided here is not working I tried it myself, I found that shadows around the hide/show tabs themes are changing properly on changing themes also when the theme is yellow on black, it changed the color accordingly. I have seen it in the uiOptions demo. As is in the screenshot I have linked.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-03T08:47:48.730-0500",
      "body": "@@sparsh paliwal thanks for adding the screen shot. I think the issue is fairly subtle and it may not be immediately obvious because the borders are changing colours. However if you look at the span containing the buttons, it has the class \"fl-prefsEditor-buttons\", the box-shadow doesn't change colour. I've lowered this to a minor issue though, because your screenshot suggests that it's fairly imperceptible.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2016-03-08T10:04:22.334-0500",
      "body": "Updated screenshot.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2016-03-08T10:10:46.774-0500",
      "body": "Pasted the wrong demo link originally. It should be: <http://build.fluidproject.org/infusion/demos/uiOptions/>&#x20;\n"
    },
    {
      "author": "Arnold Tagne",
      "date": "2016-03-09T08:48:52.523-0500",
      "body": "Thanks for the new image @Jonathan Hung. I will start by this issue since I can't assign an issue to myself.\n"
    },
    {
      "author": "Blagoj Dimovski",
      "date": "2016-03-13T18:30:37.245-0400",
      "body": "@Awesome Arnold,\\\nAre you working on the bug? I think I could work and fix it.\n"
    },
    {
      "author": "Arnold Tagne",
      "date": "2016-03-14T08:15:23.203-0400",
      "body": "@Blagoj Dimovski. Go on and fix it\n"
    },
    {
      "author": "Blagoj Dimovski",
      "date": "2016-03-14T19:30:47.548-0400",
      "body": "@Awesome Arnold, @Justin Obara, I think I've fixed it, I've just pushed commit to master branch.\n"
    },
    {
      "author": "Arnold Tagne",
      "date": "2016-03-17T06:02:46.560-0400",
      "body": "Hi @Blagoj follow the link below on how to contribute to infusion.\\\n<https://wiki.fluidproject.org/display/docs/Contributing+Code+To+Infusion#ContributingCodeToInfusion-ChooseorcreateanissueinJIRA>\n\nThen fill out the Fluid CLA and send it to @Justin Obara. <https://wiki.fluidproject.org/display/fluid/Fluid+Licensing> You can ping @Justin Obara in the IRC channel (Justin\\_o) if you have more questions on that.\n"
    },
    {
      "author": "Blagoj Dimovski",
      "date": "2016-03-19T18:00:49.906-0400",
      "body": "@Awesome Arnold, Thanks for the help, I did everything, I just need only to send the signed Fluid CLA, when @Justin Obara is online.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-04-18T10:42:45.945-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/700> has been merged into the master branch at e06b8fd915e8528107d08690c9b711bd74b01257\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the UIO demo: <http://build.fluidproject.org/infusion/demos/uiOptions/>\
2\) Open the Preferences panel and change the contrast theme to Yellow on Black\
3\) Notice that the shadow around the "Hide" button hasn't changed colour. It shows up as a glowing outline.

The proper behaviour should be to remove the shadow completely when in a contrast theme.

        