---json
{
  "title": "FLUID-2031",
  "summary": "Cannot use the keyboard to activate the \"Browse Files\" button with Flash 10",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-17T17:38:10.000-0500",
  "updated": "2011-01-05T10:50:37.028-0500",
  "versions": [
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
  "environment": "Opera 9.6 (Win XP)\\\nFF3, FF3.5, FF3.6, Safari 4 (Mac OS 10.5, Mac OS 10.6)\\\nFF3.5 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3268/",
      "key": "FLUID-3268"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3278/",
      "key": "FLUID-3278"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3289/",
      "key": "FLUID-3289"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2858/",
      "key": "FLUID-2858"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-2851/",
      "key": "FLUID-2851",
      "summary": "Browse files button appears to have focus, but takes an additional 'tab' before it actually does: using FF3"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T14:59:05.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-10-08T10:57:00.000-0400",
      "body": "The same thing a11y issue happens with Flash 10, FF3.5, Linux Ubuntu Jaunty.&#x20;\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-10-08T10:57:40.000-0400",
      "body": "The same thing a11y issue happens with Flash 10, FF3.0.xx, Linux Ubuntu Jaunty.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T18:54:52.000-0400",
      "body": "For the browsers that this issue applies to, we should fix the problem by deprecating the Flash-based Uploader and replacing it with a new version based on HTML 5.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-15T13:39:36.783-0500",
      "body": "Testing the new HTML5 version, this issue has been addressed: the Browse Files button is perfectly accessible.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T10:50:37.026-0500",
      "body": "Fixed in Infusion 1.3\n"
    }
  ]
}
---
Cannot activate the "Browse Files" button with Flash 10: Using Opera

Steps to reproduce:

1\) Open the either the demo or the server version of uploader\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Using the keyboard tap the tab key until the "Browse Files" button has focus

3\) Attempt to use the keyboard to activate the "Browse Files" button

Notice that nothing happens

        