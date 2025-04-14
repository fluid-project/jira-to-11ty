---json
{
  "title": "FLUID-4479",
  "summary": "Image gallery demo doesn't display the uploaded images sometimes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2011-09-30T13:24:24.114-0400",
  "updated": "2014-06-25T16:25:07.233-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": "All browsers\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:25:07.231-0400",
      "body": "This demo no longer exists.\n"
    }
  ]
}
---
To produce:

1\. go to <http://build.fluidproject.org/uploader/hourly/image-gallery.php> or <http://build.fluidproject.org/image-gallery/image-gallery.php>\
2\. click on "browse files" to add a large-sized image with the size exceeding upload\_max\_filesize directive in php.ini (10M at this moment)\
3\. click on "upload"\
4\. no error reported but the image is not displayed in the "uploaded images" div

The cause is that the image is too large to be uploaded. The php server script needs to be improved to detect this type of error by checking $\_FILES\['file']\['error'].

        