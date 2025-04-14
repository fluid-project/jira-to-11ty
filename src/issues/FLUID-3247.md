---json
{
  "title": "FLUID-3247",
  "summary": "Image Reorderer - Up or down key press causes script error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Laurel Williams",
  "date": "2009-10-07T10:56:33.000-0400",
  "updated": "2010-03-30T18:38:55.000-0400",
  "versions": [
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "IE Tester using the IE6 tab, IE7 tab and IE 8 native\\\nFirefox 3.5\\\nall on XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-07T16:14:16.000-0400",
      "body": "Added FF 3.5 to the mix\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-07T16:51:27.000-0400",
      "body": "Added IE 8 to the mix\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-08T10:18:08.000-0400",
      "body": "Added IE7\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T18:38:55.000-0400",
      "body": "This issue is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-3558#icft=FLUID-3558> and has been fixed at r9746\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/html/imageReorderer.html>

I opened the page using a fairly wide screen, so that the images were all in one horizontal line. I tried navigating using the keyboard and pressing the up and down arrows (even though there were no images to go up and down to).  Got an IE dialog for the script error "'null' is null or not an object".

On FF3.5 the error says "togo is null"

        