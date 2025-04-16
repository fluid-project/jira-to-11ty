---json
{
  "title": "SJRK-152",
  "summary": "Look into optimizing the site to reduce payload size",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-13T14:23:42.836-0400",
  "updated": "2020-04-14T17:00:24.453-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-144/",
      "key": "SJRK-144",
      "summary": "Create a basic asset pipeline for minifying and compiling Javascript dependencies"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-338/",
      "key": "SJRK-338",
      "summary": "Load Normalize.css from local files instead of Cloudflare"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-152/Screenshot from 2018-05-17 14-07-14.png",
      "filename": "Screenshot from 2018-05-17 14-07-14.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-152/Screenshot from 2018-05-17 14-08-40.png",
      "filename": "Screenshot from 2018-05-17 14-08-40.png"
    }
  ],
  "comments": []
}
---
In order to make the site easier to load in low-bandwidth/high-latency situations, explore various ways to reduce the amount of information transferred to the client on page load. This includes things like:

* reducing image size
* combining images into a single file and using a sprite approach, if an accessible method can be determined (i.e. not background images)
* considering compression methods (the server is apparently using HTTP/2 already)
* minifying and bundling JavaScript files (SJRK-144)
* minifying and bundling CSS files

Giovanni Tirloni took a couple of screenshots (attached) to show load times in a simulated "Slow 3G" situation, with load times of around 30 seconds. He also provided links to a couple of tools to help with analysis:

* <https://www.webpagetest.org/result/180517_DT_3a98dae9ed05fd7d161b99286b3e04a6/1/performance_optimization/>
* <https://webspeedtest.cloudinary.com/results/180517_DT_3a98dae9ed05fd7d161b99286b3e04a6>

        