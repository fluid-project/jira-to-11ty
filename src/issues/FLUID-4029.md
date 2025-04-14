---json
{
  "title": "FLUID-4029",
  "summary": "Progress width calculation doesn't include container's padding",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-01-13T14:05:11.744-0500",
  "updated": "2011-02-14T10:50:16.693-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3837/",
      "key": "FLUID-3837"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4029/progress_4029.patch",
      "filename": "progress_4029.patch"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-01-13T14:15:01.539-0500",
      "body": "units tests still pass\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-27T19:29:13.072-0500",
      "body": "Hi Heidi,\n\nThanks for the patch. On Firefox 3.6, it seems to cause the total file progress area to overflow, causing scroll bars. Can you take a look?\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-02T13:38:42.504-0500",
      "body": "The scroll bar issue is fixed by the updated Uploader.css in <https://fluidproject.atlassian.net/browse/FLUID-3837#icft=FLUID-3837>. Progress tests and demo still good.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-12T13:21:36.256-0500",
      "body": "Pushed to Infusion project repository at commit 6368e698fd1a8d22fcbb\n\nHeidi, please check that it's working as you expect.&#x20;\n"
    }
  ]
}
---
line 77:\
return Math.round((Math.min(percent, 100) \* that.progressBar.width()) / 100);

should be\
return Math.round((Math.min(percent, 100) \* that.progressBar.innerWidth()) / 100);

So that any padding in the container that progress bar is filling is included in its width calculation.

        