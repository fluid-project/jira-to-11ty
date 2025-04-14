---json
{
  "title": "FLUID-108",
  "summary": "Lightbox image changes on FF2 the first time it gets focus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Simon Bates",
  "date": "2007-11-12T12:28:46.000-0500",
  "updated": "2008-07-09T14:43:15.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4beta1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "FF 2.0.0.9\\\nWindows XP\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-119/",
      "key": "FLUID-119"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-12-18T16:09:48.000-0500",
      "body": "Some more insight into this problem:\n\n* Before focus, the thumbnail shown is the top of the \"full\" thumbnail image. (i.e. bottom portion is cropped)\n* After focus, the thumbnail shown is the bottom half of the \"full\" thumbnail image. (i.e. top portion is cropped)\n* Right-clicking on the thumbnail and \"View Image\" reveals that the thumbnail is actually bigger than the image being rendered in the Lightbox (i.e. the thumbnail shown is actually a crop of the full thumbnail).\n\nThoughts:\n\n* would providing a pre-cropped version from the server solve this problem?\n* Is there any way to crop the thumbnail on the client instead? (without having to resort to Javascript).\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-19T11:27:20.000-0500",
      "body": "To see this problem more clearly, modify Lightbox.css so:\n\n.image-inner-container{\\\nheight: 100px;\\\nwidth: 140px;\\\nbackground-color: #eee;\\\noverflow: scroll; /\\* <-- changed from \"hidden\" \\*/\\\nmargin: 0 auto 3px auto;\\\n}\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-12-20T09:44:39.000-0500",
      "body": "Eli noted that:\\\n\\> ...this is an Image Gallery bug... we need to generate (probably alongside Resources) real thumbnails.\n\nI agree.\n\nHowever, the lightbox standalone demo, which can be seen on our daily build server (<http://build.fluidproject.org/sakai-imagegallery-tool/component-templates/html/Lightbox.html>), is also using full size images instead of actual thumbnails.  It should use real thumbnails as well. And, since that demo is completely outside of the gallery tool, it falls to us to make suitable thumbnails for it.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-20T13:39:58.000-0500",
      "body": "There is not a Jira issue for the Gallery relating to this bug.\\\n<http://jira.sakaiproject.org/jira/browse/GAL-74>\n\nAssuming that a server implementation is put in and that thumbnails are generated of an appropriate size (i.e. 140x100px), then this bug should go away.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-09T14:43:15.000-0400",
      "body": "This issue is no longer happening.\n"
    }
  ]
}
---
To reproduce:

* open <http://build.fluidproject.org:8080/sakai-imagegallery-tool/component-templates/html/Lightbox.html>
* tab to the lightbox
* navigate with the arrow keys
* image changes the first time it gets focus

        