---json
{
  "title": "FLUID-5433",
  "summary": "VoiceOver always announces the browse files button as \"no files selected file upload button\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-06-09T10:41:46.612-0400",
  "updated": "2014-06-16T15:30:04.455-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Safari 7 (Mac OS 10.9)(VoiceOver)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-12T14:52:25.831-0400",
      "body": "It seems that VoiceOver will always interact with the underlying input element, and read off it's default values. Here is an example of  a multi file input <http://jsfiddle.net/L2Kcd/> For the uploader, it creates new inputs every time a user adds files to the queue, to support adding additional files. This means that a user will always interact with an empty input.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-16T10:44:16.804-0400",
      "body": "An aria-label seems to work, but it will be suffixed with \"file upload button\" so we could set it to \"browse files\" or \"add more\" and it would be read as \"browse files file upload button\" or \"add more file upload button\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-16T14:24:06.021-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/534>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-16T15:30:02.400-0400",
      "body": "Merged into the project repo @ f4f90199d3ae1724d713ae14d791fca5e3ad5665\n"
    }
  ]
}
---
Steps to reproduce:

1\) Navigate to the "browse files" button\
Notice that it is announced as  "no files selected file upload button". Note that you can navigate to the label which is read as "Browse Files" but this isn't activatable.

        