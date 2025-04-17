---json
{
  "title": "FLUID-5874",
  "summary": "Text overlaps the headers when default theme is used",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Arnold Tagne",
  "date": "2016-03-11T11:21:36.355-0500",
  "updated": "2016-04-04T09:44:40.406-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "Chrome\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5874/disordered text.png",
      "filename": "disordered text.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5874/image.png",
      "filename": "image.png"
    }
  ],
  "comments": [
    {
      "author": "Aman varshney",
      "date": "2016-03-11T13:08:04.172-0500",
      "body": "@Awesome Arnold can I work on this issue.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2016-03-11T14:44:49.650-0500",
      "body": "Arnold Tagne\\\nThe image isn't showing up. Use the \"Attach Files\" option in the \"More\" menu to attach an image to the Jira.\n"
    },
    {
      "author": "Arnold Tagne",
      "date": "2016-03-12T14:26:40.444-0500",
      "body": "Look at the encircle part of the  attached image.\n"
    },
    {
      "author": "Aman varshney",
      "date": "2016-03-12T14:42:44.766-0500",
      "body": "@Awesome Arnold I changed UI of that page <https://github.com/fluid-project/infusion/pull/688> .\n\nInitially the text was in column then I changed it into row.\\\nhave a look\\\nfeedback welcome&#x20;\n"
    },
    {
      "author": "Arnold Tagne",
      "date": "2016-03-14T08:19:50.197-0400",
      "body": "I actually worked on the issue @Aman Varshney. Good to know you did something\\\nThe problem is,  I created the issue and could not assign it to myself  i.e change it's status to \"In progress\"\\\nJIRA is not giving me that option\n"
    },
    {
      "author": "Aman varshney",
      "date": "2016-03-17T12:24:07.703-0400",
      "body": "Is this is resolved or not ?\n"
    },
    {
      "author": "Arnold Tagne",
      "date": "2016-03-17T12:47:59.780-0400",
      "body": "@Aman Varshney, It has been resolved but I am still waiting for the pull request to be validated.\n"
    },
    {
      "author": "Aman varshney",
      "date": "2016-03-17T15:28:01.897-0400",
      "body": "ok\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-04-01T10:40:35.075-0400",
      "body": "Arnold Tagne are you sure this is a problem. Can you try it again with the latest version of Chrome. I am not able to reproduce this issue at all. If you can reproduce it, please include all of the steps necessary to trigger the problem.\n"
    },
    {
      "author": "Aman varshney",
      "date": "2016-04-01T14:26:46.595-0400",
      "body": "@Justin Obara, I am also getting same problem in google chrome browser.\n\nsee the attachment.&#x20;\n"
    },
    {
      "author": "Arnold Tagne",
      "date": "2016-04-04T04:46:22.963-0400",
      "body": "@Justin Obara, this issue was confirmed by @Jonathan Hung before I created and resolved it.\\\nPlease check the image attached to the issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-04-04T07:40:08.439-0400",
      "body": "Jonathan Hung could you please review the associated pull request\n"
    }
  ]
}
---
* Open the UIO demo <http://build.fluidproject.org/infusion/demos/uiOptions/>
* change the text size using the slider
* Notice the text overlaps the headers (i.e. first and second columns)
* Change contrast theme and notice that the overlapping text disappears.
* See the image below&#x20;
  <!-- media: external https://drive.google.com/file/d/0B6Ez3tXHRmnBdW1rQmR3dlVhdDQ/view?usp=sharing -->

        