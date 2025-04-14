---json
{
  "title": "ENGAGE-329",
  "summary": "Styling issues with the current exhibition detail page",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "James Yoon",
  "date": "2010-02-05T14:48:34.000-0500",
  "updated": "2010-02-22T15:46:34.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-329/ENGAGE-329-trunk.patch",
      "filename": "ENGAGE-329-trunk.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-329/ENGAGE-329-trunk.patch",
      "filename": "ENGAGE-329-trunk.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-329/ENGAGE-329-trunk.patch",
      "filename": "ENGAGE-329-trunk.patch"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-02-05T16:03:30.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-11T16:42:58.000-0500",
      "body": "-'s are pieces that I haven't got working...\n\nTitle:\\\nI've got the exhibition name, subtext and exhibition dates at the right px.\\\nThis required a change to the HTML on the flc-shortDescription and flc-displayDate\n\nCatalogue:\\\nI've got the text at the right size,\\\n+- can't get text ellipsis to work even though it's almost identical to NavigationBar; this seems to be a browser-specific solution where Firefox doesn't display correctly, so I'm going to hope this works in Safari – can't test it myself on this page. It does work, tried it in Safari with a test page.\\\nThis required a change in HTML on flc-navigationList-titleText for each thumbnail item in the li\n\nPanels:\\\nread, view, etc. are right px \\\n+duh, it's called 'adding'-- not sure how to make the buttons exactly 25px high\\\nhave the dark single line\\\nhave the header text and number count px right\n\n* can't seem to get the accompanying number count to appear just to the right of the text\\\n  Catalogue \\<span class=\"fl-text-smaller\">(507)\\</span> – this one got tabled in IRC today\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-12T15:15:24.000-0500",
      "body": "Caution he/she who reviews this.  I suspect much of it is going to break stuff – I'm just coming up to speed on FSS.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-18T20:15:16.000-0500",
      "body": "Committed ENGAGE-329-trunk.patch with the following changes. 1) Reverted changes to the links as they became a bit too large. 2) changed the flc- in the style sheet to be fl- and added the appropriate classes to the markup. Note that the styling for the guestbook part still needs more work.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-19T12:05:15.000-0500",
      "body": "reopened for\n\n\"Read more\" exhibitions screen:\n\n* Exhibition thumbnail should be 72x72 (not the big, wide aspect ratio one currently on there) – similar issue in <https://fluidproject.atlassian.net/browse/ENGAGE-328#icft=ENGAGE-328>, but for upcoming exhibitions screen\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-19T18:22:29.000-0500",
      "body": ".fl-exhibition-image {\\\npadding: 0 ! important;\\\nwidth:75px;\\\nheight:75px;\n\nand changed the HTML on one line\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T18:54:20.000-0500",
      "body": "I reviewed, tested, and committed Jess' patch at r9459.\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-22T15:32:26.000-0500",
      "body": "I made the image 75x75 not 72x72 – oops!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-22T15:46:34.000-0500",
      "body": "Committed Jess' latest patch. It looks good, I added one small change to push the Heading closer to the image.&#x20;\n"
    }
  ]
}
---
Title:

* Exhibition name (not in header) should be 18pt; subtext should be 14pt; exhibition dates should be 12pt

Catalogue panel:

* Artifact names below the artifact thumbnail under catalog should truncate at the second line with ellipses replacing text
* Said text should be 11pt

Exhibitions detail panels in general:

* "Read more", "View full catalogue", "Read all comments" buttons should be 25 pixels in height; button text should be 12pt
* There should be a dark, single pixel line above the panel headers (i.e., above "Catalogue" and "Guestbook")
* Panel header text should be 14pt in bold; if there's an accompanying number count with the header text, it should be in 10p

"Read more" exhibitions screen:

* Exhibition thumbnail should be 72x72 (not the big, wide aspect ratio one currently on there) – similar issue in ENGAGE-328, but for upcoming exhibitions screen

        