---json
{
  "title": "FLUID-5405",
  "summary": "The speak option in the Explore Tool demo causes Safari to crash",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Escalated",
  "reporter": "Colin Clark",
  "date": "2014-06-05T09:59:34.149-0400",
  "updated": "2016-03-03T10:32:27.478-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Safari 7.0.4, Mac OS X 10.9.x\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5438/",
      "key": "FLUID-5438",
      "summary": "The Exploration Tool's Speak feature doesn't read the actual page contents in Chrome or Safari"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2014-06-05T10:18:31.363-0400",
      "body": "This appears to be related to the Festival server, rather than the client side. For example, if you try to play this URL directly in Safari, it will also cause the crash:\n\n<http://tts.idrc.ocadu.ca/?q=text%20to%20speech%20enabled>\n\nIt is worth exploring a few issues:\n\n1\\. Are we sending back correctly formed WAVE files?\\\n2\\. Do we have the appropriate MIME type configured and are we sending the the right headers?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T15:14:21.598-0400",
      "body": "We should upgrade the Exploration Tool to use the web speech api.\n"
    }
  ]
}
---
I received this bug report from Tom Pokinko and verified that it is indeed an issue:

"I was browsing the Preference Exploration Tool (link from the FLOE website) in Safari on my Macbook Pro running OS X Mavericks.

<http://build.fluidproject.org/prefsEditors/demos/explorationTool/>

I chose to have the page read to me from the preferences at bottom and the website crashed badly. Error message: “Safari web content quite unexpectedly." Now even after clearing my cache the website crashes every time I go on it (I can’t change my preferences back to the defaults)."

        