---json
{
  "title": "FLUID-3359",
  "summary": "Design and implement a new \"lightweight\" look and feel for the Infusion Builder, independent of our Fluid web site.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Colin Clark",
  "date": "2009-11-04T18:51:40.000-0500",
  "updated": "2009-12-18T15:59:28.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3233/",
      "key": "FLUID-3233",
      "summary": "After download, progress on \"Preparing your download...\" page does not disappear  "
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3250/",
      "key": "FLUID-3250",
      "summary": "Improper focus styling is used in the Infusion Builder, so items appear to not have focus."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3249/",
      "key": "FLUID-3249",
      "summary": "Infusion Builder's \"Download\" button does not change styling between disabled and enabled states"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3254/",
      "key": "FLUID-3254",
      "summary": "The Infusion Builder spinner doesn't spin correctly in IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T13:26:32.000-0500",
      "body": "ensure that focus styling is present in new design (<https://fluidproject.atlassian.net/browse/FLUID-3250#icft=FLUID-3250>)\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T13:29:05.000-0500",
      "body": "New design could try to address the problem in <https://fluidproject.atlassian.net/browse/FLUID-3254#icft=FLUID-3254> where the download spinner does not spin in IE\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T13:30:39.000-0500",
      "body": "The new design should address the problem that the download button does not show enabled and disabled state. (<https://fluidproject.atlassian.net/browse/FLUID-3249#icft=FLUID-3249>)\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T13:33:25.000-0500",
      "body": "Do we want to rethink the design with the spinner for the download page, since it never stops spinning. (<https://fluidproject.atlassian.net/browse/FLUID-3233#icft=FLUID-3233>)\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T13:35:25.000-0500",
      "body": "Do we need to revisit the design of the download page based on FLUID-3233?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-04T18:04:00.000-0500",
      "body": "Bug Parade Builder 1.1.2\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-12-09T11:32:52.000-0500",
      "body": "The current design is considered complete.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-09T14:09:56.000-0500",
      "body": "a couple more changes needed\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-12-10T17:19:56.000-0500",
      "body": "Since it's been clarified that the builder page must be presentable on its own, another layer of design was applied. It now looks comparable to the Demo portal.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-12-11T13:00:17.000-0500",
      "body": "More tweaks required for readability\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-16T12:18:27.000-0500",
      "body": "needs a minor fix to the spinner css\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-18T15:59:28.000-0500",
      "body": "The spinner is working for safari now.\n"
    }
  ]
}
---
We've removed the Builder from our Web site (which is great), but it's pretty sparse-looking. We need to work with Jacob to design and implement a new, simple design for the Builder. Since I expect we'll treat this as a separate application, this design can be totally independent of the Web site's styling and conventions.

        