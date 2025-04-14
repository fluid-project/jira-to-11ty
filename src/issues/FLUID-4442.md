---json
{
  "title": "FLUID-4442",
  "summary": "On server demo, progress bar and uploaded value both flicker",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2011-09-12T16:23:03.410-0400",
  "updated": "2011-09-20T14:27:47.452-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": "FF6 and Safari5, Mac 10.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-20T13:14:04.955-0400",
      "body": "Merged colin's pull request ( <https://github.com/fluid-project/infusion/pull/168> ) into the project repo at be812d76370693d0d34271d69e20b7c416092039\n\nIt still needs to be tested off the daily build site, from a remote location, to make sure that the flickering issue has actually been solved.&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-09-20T14:27:47.440-0400",
      "body": "Flickering gone (tested from remote location)\n"
    }
  ]
}
---
On <http://build.fluidproject.org/uploader/hourly/image-gallery.php>

When uploading a file, the progress bar goes back and forth and the uploaded size value also goes up and down (assuming this is what's affecting the progress bar)

        