---json
{
  "title": "FLUID-3289",
  "summary": "Cannot use the keyboard to activate the \"Browse Files\" button with Flash 10: Using Safari 4",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Armin Krauss",
  "date": "2009-10-13T18:01:34.000-0400",
  "updated": "2009-10-20T11:19:02.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Mac OS X 10.5; Safari 4; Flash 10\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2031/",
      "key": "FLUID-2031",
      "summary": "Cannot use the keyboard to activate the \"Browse Files\" button with Flash 10"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Cannot activate the "Browse Files" button with Flash 10: Using Safari 4

Steps to reproduce:&#x20;

1\) Open the either the demo or the server version of uploader \
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html> \
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>&#x20;

2\) Using the keyboard tap the tab key until the "Browse Files" button has focus&#x20;

Notice that it is not possible to reach the "Browse Files" button and therefore it is not possible to add files

        