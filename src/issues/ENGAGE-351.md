---json
{
  "title": "ENGAGE-351",
  "summary": "Users should be shown a \"loading...\" screen when pages take a noticable amount of time to load",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "y z",
  "reporter": "Colin Clark",
  "date": "2010-02-08T17:07:14.000-0500",
  "updated": "2017-12-22T09:44:17.037-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-414/",
      "key": "ENGAGE-414"
    },
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-416/",
      "key": "ENGAGE-416"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-158/",
      "key": "ENGAGE-158"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-351/351.patch",
      "filename": "351.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-351/351b.patch",
      "filename": "351b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-351/351c.patch",
      "filename": "351c.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-351/351d.patch",
      "filename": "351d.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-351/spinner.png",
      "filename": "spinner.png"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-02-19T18:49:56.000-0500",
      "body": "This patch is not fully functional yet, there's an older bug with the spinner background colour. So todo: fix the spinner background problem, put spinner everywhere.\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-22T15:22:55.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "y z",
      "date": "2010-02-22T19:06:45.000-0500",
      "body": "This patch is almost working. There are 2 issues left: \\\n1\\) make the home page working with spinner.\\\n2\\) investigate why the spinner disappears on the ipod after a first second\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-22T19:51:40.000-0500",
      "body": "Yura, I took a quick peek at your patch. Things look roughly as I expected. My only concern: it looks like a fair bit of markup has changed in many pages. Have you snuck a few other changes in here, or have tabs crept in perhaps? Or is there another reason why all of the navbar markup--as well as the body take in some cases--has changed on Artifact View, Browse, etc.?\n\nNot a big deal, but definitely worth looking at before submitting a final patch\n"
    },
    {
      "author": "y z",
      "date": "2010-03-05T17:53:34.000-0500",
      "body": "spinner should go to shared/images in engage core\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-10T00:58:04.000-0500",
      "body": "it seems a bit onerous to expect every implementor of a navigation link to apply a particular CSS class to it, and somewhat error-prone. Would it not be a better strategy to simply hook into the global fluid.engage.url.setLocation functions that we were obliged to provide for the condenser?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-10T01:04:04.000-0500",
      "body": "Antranig's comments make sense to me, but it strikes me that we may want to extend the Screen Navigator to fire real events before and after a page change occurs, allowing us to add effects such as this spinner and cross-page animations.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:17.036-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---

        