---json
{
  "title": "FLUID-3837",
  "summary": "Clean up Uploader's markup",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "heidi valles",
  "date": "2010-11-15T13:47:38.741-0500",
  "updated": "2011-02-15T11:19:26.822-0500",
  "versions": [
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4029/",
      "key": "FLUID-4029",
      "summary": "Progress width calculation doesn't include container's padding"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4037/",
      "key": "FLUID-4037"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4060/",
      "key": "FLUID-4060"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3878/",
      "key": "FLUID-3878"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4061/",
      "key": "FLUID-4061"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/FLUID-3837-e.patch",
      "filename": "FLUID-3837-e.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/FLUID-3837-f.patch",
      "filename": "FLUID-3837-f.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/FLUID-3837-g.patch",
      "filename": "FLUID-3837-g.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/FLUID-3837-h.patch",
      "filename": "FLUID-3837-h.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/FLUID-3837-i.patch",
      "filename": "FLUID-3837-i.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/FLUID-3837-j-cleanup.patch",
      "filename": "FLUID-3837-j-cleanup.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/jquery.scrollTo.js",
      "filename": "jquery.scrollTo.js"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/scrollable_unit_test.patch",
      "filename": "scrollable_unit_test.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/scrollable_unit_test-b.patch",
      "filename": "scrollable_unit_test-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/uploader_markup2.patch",
      "filename": "uploader_markup2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/uploader_scroller.patch",
      "filename": "uploader_scroller.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3837/uploader_scrollto.patch",
      "filename": "uploader_scrollto.patch"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2010-11-18T14:26:56.968-0500",
      "body": "\\<div class=\"flc-scroller fl-scroller\" style=\"max-height: 180px;\"> &#x20;\n\nAlso, move the inline style into fl-scroller.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-13T11:02:42.309-0500",
      "body": "First patch - needs testing on all html5 browsers. Known issue - width of progress status bar.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-13T11:08:48.615-0500",
      "body": "Replaced scroller component with jquery scrollTo plugin. Needs to be tested on all browsers.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-13T16:11:15.202-0500",
      "body": "known issue for markup2.patch: IE top border and scroll on tbody. hoping to fix with scrollTo\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-18T15:41:49.198-0500",
      "body": "New patch with a refactored scrollableTable() function. Also moved the jquery.scrollTo plugin into the /lib/jquery/plugins directory.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-18T16:52:42.286-0500",
      "body": "Here's a new patch without the mysterious weirdness that Heidi and I were experiencing. Still doesn't scrollTo, though.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-20T13:52:32.208-0500",
      "body": "Not too much different than the -g patch, but removes the unused container div from Uploader.html, and cleans up the styles a little.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-20T16:06:17.287-0500",
      "body": "Detabbed.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-27T18:29:34.403-0500",
      "body": "I committed a modified version of Heidi's patch at r10479. Heidi and I agreed that we'd do another pass through all the markup and styling before closing this issue for 1.3.1, so I'm assigning it back to her. Thanks for the patch, Heidi!\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-01T18:53:55.313-0500",
      "body": "Major css/html clean up - tho didn't touch the browse/add more button overlay stuff. Needs testing on Win.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-02T09:54:15.275-0500",
      "body": "Looks good on windows too. Requires the scrollable table (<https://fluidproject.atlassian.net/browse/FLUID-4037#icft=FLUID-4037>) and the progress bar (<https://fluidproject.atlassian.net/browse/FLUID-4029#icft=FLUID-4029>) patches.&#x20;\n\nColin, could you review this patch for me? cheers.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-11T17:49:24.038-0500",
      "body": "Merged into Infusion project master at commit a5b442a5c83a7cf721d1b5c099e20e2d2c088584\n"
    }
  ]
}
---
Uploader's markup is more complex and less semantic than it could be. For example, right now there are 3 tables being used:

1\) A 1 row, 3 cols table for the values "file name, size, space". It has the caption "File Queue"\
2\) A dynamic data table with no caption, 3 cols. It holds the info of the uploaded files\
3\) A 1 row, 2 cols table for the footer. The first col has the # files/total size data, and the second has the browse file input.

I'd like to suggest an alternative:

* 1 data table, with both the header information and the data
* the footer as a plain old \<div> tag, styled with css

I'm guessing one reason it was done this way was to make the data scrollable but have a fixed header. We can still achieve this with CSS, and also keep the semantic connection of column headers to data.

        