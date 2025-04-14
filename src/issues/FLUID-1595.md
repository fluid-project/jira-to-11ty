---json
{
  "title": "FLUID-1595",
  "summary": "long file names in the upload queue, stretch the file queue, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-09-19T08:59:56.000-0400",
  "updated": "2014-06-25T15:55:53.713-0400",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE6 (Win XP, Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-962/",
      "key": "FLUID-962",
      "summary": "long file names in the upload queue, push the file size and remove button out of view"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1595/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-19T09:00:31.000-0400",
      "body": "'screenshot-1' shows the stretched file queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-19T09:03:27.000-0400",
      "body": "Affects uploader 2\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-19T12:02:43.000-0400",
      "body": "Will probably affect Uploader1 as well now. I think that I have a fix. Let's see what I can cook up. I'm surprised that this didn't happen before.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-19T15:11:49.000-0400",
      "body": "This is basically the same bug as <https://fluidproject.atlassian.net/browse/FLUID-962#icft=FLUID-962> it just manifests its self differently on different browsers and both of these bugs will be to come up with a way to automatically truncate the text of long files names. I thought that there was a bug written for that, but I can't find it.&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-29T15:06:53.000-0400",
      "body": "In Opera 9.64 Winxp the name of the file does not wrap, so you don't even see the full name of the file.\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-10-14T10:29:22.000-0400",
      "body": "I have had this problem (not seeing the entirety of a long file name) in Safari 4 / OS X 10.5.\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-10-14T10:31:16.000-0400",
      "body": "Sorry I also forgot to comment - also had this problem in FF3.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:53.689-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
long file names in the upload queue, stretch the file queue

Steps to reproduce:

1\) Open the uploader example&#x20;

2\) Add a file with a long name, such as "this\_file\_has\_a\_very\_long\_file\_name\_that\_should\_be\_displayed\_properly\_in\_the \_uploaders\_upload\_queue"

Notice that file queue's width expands to fit part of the name and wraps the rest to a new line

        