---json
{
  "title": "FLUID-2351",
  "summary": "[Uploader] rev 6621 of Uploader.js and Progress.js crash FF on the server",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-03-16T11:18:11.000-0400",
  "updated": "2009-03-26T10:24:01.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3/Flash 10, running uploader from server\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2334/",
      "key": "FLUID-2334",
      "summary": "[Uploader] file progressors display in the wrong positions, if files are added to a completed upload"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2351/FLUID-2351.etc.a.patch",
      "filename": "FLUID-2351.etc.a.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-03-16T11:19:50.000-0400",
      "body": "rolled my server back to 6566 and the crash stopped. now rolling forward slowly to see where the big bad is.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-16T13:18:02.000-0400",
      "body": "commented out the offending lines in Uploader.js:\n\nthat.locate(\"totalFileProgressBar\").addClass(that.options.styles.completed);\\\nthat.locate(\"totalFileProgressBar\").removeClass(that.options.styles.completed);\n\nand added a comment to that effect.\n\nThis isn't a fix, it's just a temporary measure so that I can work on error messages\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-16T14:29:31.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-19T22:28:08.000-0400",
      "body": "Not sure that we can easily fix this one. Or even difficultly fix this one.&#x20;\n\nBecause in trying to fix this bug, I discovered that this bug and <https://fluidproject.atlassian.net/browse/FLUID-2334#icft=FLUID-2334> (progress bars positioned in the wrong place) are related.&#x20;\n\nSo, I managed to reduce the FF crash from a crash to intermittent hang. Better, but suddenly <https://fluidproject.atlassian.net/browse/FLUID-2334#icft=FLUID-2334>, which before I'd only seen in the demo version started happening in the server version.&#x20;\n\nSo what's happening is interesting. In both cases, bugs are being caused by SWFUpload's insistence on refreshing the Flash object on the page if anything in it's DOM ancestry changes.&#x20;\n\nIn the case of this crash, we get a funny race condition that crashes FF or occasionally hangs SWFUpload (not unlike the Pause bug by the way).\n\nIn the case of <https://fluidproject.atlassian.net/browse/FLUID-2334#icft=FLUID-2334>, we get recycled file ids because the refreshed Flash object doesn't remember that it had already used that id.&#x20;\n\nThis gives me a little insight on how to fix the bug... move the button out of the DOM ancestry... wonky... but it might work. Or I could move the styling for the total progress bar out of the ancestry, that might work as well.\n\nAnyway, I should have noticed a while back that when I commented out the feature to stop the crash, the other bug (<https://fluidproject.atlassian.net/browse/FLUID-2334#icft=FLUID-2334>) stopped happening.\n\nSorry for the ramble, but it's that kind of a bug!&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-19T22:29:41.000-0400",
      "body": "Same feature, changing the styling of the Uploader footer causes both <https://fluidproject.atlassian.net/browse/FLUID-2334#icft=FLUID-2334> and <https://fluidproject.atlassian.net/browse/FLUID-2351#icft=FLUID-2351>\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-20T20:15:00.000-0400",
      "body": "Uploading the <https://fluidproject.atlassian.net/browse/FLUID-2351#icft=FLUID-2351>.etc.a.patch\n\nAfter much thought and a lot of code I figured out that if I used the existing progress bar to indicated total doness for the Uploader instead of changing the footer (where the Flash object lives) that I could avoid the FF crash and a bunch of other problems. It also opened up an opportunity to fix a bunch of other bugs.&#x20;\n\nThis patch fixes:\n\n* <https://fluidproject.atlassian.net/browse/FLUID-2351#icft=FLUID-2351>\n* <https://fluidproject.atlassian.net/browse/FLUID-2334#icft=FLUID-2334>\n* <https://fluidproject.atlassian.net/browse/FLUID-1974#icft=FLUID-1974>\n\nand moves <https://fluidproject.atlassian.net/browse/FLUID-2355#icft=FLUID-2355> one more step closer to completion!\n\nMr. Colin Clark participated in a walk-through of the code, I made the recommended changes, so I'm checking it in. Still should be reviewed.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-20T20:15:57.000-0400",
      "body": "Enclosed Fluid-2351.etc.a.patch fixes this bug. See comment above.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-26T10:12:23.000-0400",
      "body": "Reviewed, and it works for me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-26T10:24:01.000-0400",
      "body": "Verified fix using:\n\nFF3/Flash 10, running uploader from server&#x20;\n"
    }
  ]
}
---
May be just a fluke with my server but I can consistently crash FF3 running the Uploader from my local server. This is revision 6621. Revision 6566 on builds.fluidproject.org does not display the same behavior.

Lets see:\
Server version only\
Flash 10\
Firefox 3 (I tried disabling all my add-ons, no luck)

The reproducible steps are: \
1\. Click Browse Files\
2\. Add a few files to the queue\
3\. Click Upload\
4\. Let all files complete\
5\. Click Browse Files again\
6\. Add a few files\
7\. Click Upload

Result: FF immediately exits

        