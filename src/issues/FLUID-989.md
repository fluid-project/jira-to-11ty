---json
{
  "title": "FLUID-989",
  "summary": "Implement the progress bar ARIA roles and states",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-07-22T19:13:19.000-0400",
  "updated": "2017-01-16T09:36:36.422-0500",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6108/",
      "key": "FLUID-6108"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-989/FLUID-989.patch",
      "filename": "FLUID-989.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-989/FLUID-989-b.patch",
      "filename": "FLUID-989-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-989/FLUID-989-b2.patch",
      "filename": "FLUID-989-b2.patch"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-07-23T16:06:33.000-0400",
      "body": "This patch includes the necessary global progress bar ARIA support\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-23T17:25:46.000-0400",
      "body": "This patch looks good - I've committed it.\n\nNext step is to try this in a screen reader, to see what it does.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-23T19:46:04.000-0400",
      "body": "IE is not ARIA compliant, so it says nothing.\\\nFF occasionally says the updated percentage number.\\\nIt would be good to add some other markup (ARIA or not) that would help screen readers say something vaguely useful.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-07-23T19:47:39.000-0400",
      "body": "Lets see what the concepts conveyed here (<http://issues.fluidproject.org/browse/FLUID-985>) do for us\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-07-31T16:31:21.000-0400",
      "body": "Adds valuetext for global progress bar.\\\nAs David menioned in the mailing list, JAWS and other AT should either support this attribute now or will soon.&#x20;\n"
    },
    {
      "author": "David Bolter",
      "date": "2008-07-31T17:20:56.000-0400",
      "body": "Just a little note to say I'm sort of surprised at the verbosity of aria-valuetext in the patch (I looked at b). I'm not saying it is \"wrong\", but it seems to me that ARIA should provide another mechanism for telling the user this kind of information. The essence of valuetext is to simply encode valuenow in a text form... e.g. valuenow=\"5\", valuetext=\"5 fishies\". Anyways, please don't change anything... especially if this is making a nice experience for screen reader users.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-05T14:18:47.000-0400",
      "body": "Jacob and I have reviewed this patch, and tweaked it slightly. For the record, I've attached a patch of the change I'll be committing.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-08-07T12:42:23.000-0400",
      "body": "The ARIA status of the individual file progress bars still needs to be updated.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T09:08:19.163-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-08-06T12:06:55.912-0400",
      "body": "As Michelle has indicated above, only the over-all progress bar has aria added. However, how should we go about having multiple progress bars output their status at the same time without it being confusing? I suppose the individual ones should only inform of their progress when focused. If this is the case, should the total progress still be announced when an individual one is focused?\n"
    }
  ]
}
---

        