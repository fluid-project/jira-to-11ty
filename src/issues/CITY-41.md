---json
{
  "title": "CITY-41",
  "summary": "Add new Resources section and move Ideas to Blog section",
  "tags": "CITY",
  "project": {
    "key": "CITY",
    "title": "Inclusive Cities"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Done",
  "resolution": "Done",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2018-11-06T09:56:09.018-0500",
  "updated": "2018-11-30T15:26:04.136-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-41/Bird_Icon.png",
      "filename": "Bird_Icon.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-41/Bird_Icon.svg",
      "filename": "Bird_Icon.svg"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-41/Card Detailed View.pdf",
      "filename": "Card Detailed View.pdf"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-41/Cat_Icon.png",
      "filename": "Cat_Icon.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-41/Cat_Icon.svg",
      "filename": "Cat_Icon.svg"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-41/Co-design template (5).pdf",
      "filename": "Co-design template (5).pdf"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-41/Hex Values.pdf",
      "filename": "Hex Values.pdf"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-41/Mockups_V3_SS.pdf",
      "filename": "Mockups_V3_SS.pdf"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-41/Mockups_V4_SS.pdf",
      "filename": "Mockups_V4_SS.pdf"
    }
  ],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2018-11-15T16:43:38.773-0500",
      "body": "Check-in with Sepideh 2018-11-15:\n\n* Change the footer colour to the light grey \\[DONE]\n* Change blog post background to the light (white?) colour \\[DONE]\n* Remove \"Back to home\" link at end of each blog post \\[DONE]\n* Style navigation bar \\[DONE]\n  * Background: #333333\n  * Text: light grey (new colour of footer)\n  * Underline: same as text\n\nLower priority:\n\n* On homepage, align header text with body text\n* Use wider left margin on blog post (as home page) \\[DONE]\n* <https://fluidproject.atlassian.net/browse/CITY-24#icft=CITY-24>: Images not displaying in narrow browser windows\n"
    },
    {
      "author": "Simon Bates",
      "date": "2018-11-20T15:33:01.794-0500",
      "body": "\\[DONE]\n\nThe card descriptions are toggled using a JavaScript click handler on a div ('resourcesCardDescriptionToggle').\n\nWe will need to add keyboard support and ARIA annotations to indicate the role of this toggle control and its state.\n\nChange to a \\<button> element?\n\nConsult with Lisa and Joseph.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2018-11-22T15:57:57.152-0500",
      "body": "Still to do:\n\n* Accessibility assessment and implementation/fixes \\[Fri Nov 23]\n  * Keyboard and ARIA implementation for card description expand/collapse \\[DONE]\n  * The yellow and red card background colours fail WCAG AA contrast guideline (see comment with details below) \\[DONE]\n  * Switch the order of site and current page in the page title \\[DONE]\n  * Put navgiation into \\<nav>\\<ul>\\</ul>\\</nav> and indicate current section with aria-current=\"true\" \\[DONE]\n    * <https://tink.uk/using-the-aria-current-attribute/>\n  * Rework \\<H1>s to match the first part of the page title, rather than always being the site name \"Co-designing Inclusive Cities\"\n* Introduction section \\[DONE]\n  * Text \\[DONE]\n  * Image of template \\[DONE]\n  * Links to download template in different formats \\[DONE]\n* Add resource content \\[aim to have resource content ready end of day Fri Nov 23]\n* Testing and implementation for mobile \\[DONE]\n* Add \"Read more\" links to expanded card descriptions \\[DONE]\n* Update the CSS so that card format colours are in one place \\[DONE]\n* Add legend for resource format types \\[DONE]\n* Add text to the Resources introduction saying that feedback can be provided via email \\[DONE]\n* Sort Related Resources in same order as on Resources page: format, then alphabetical\n* Make the image for the Co-design template smaller on mobile\n* Filter resource cards\n* Facility for user contribution of resources\n* Testing before going live – start Wed morning at latest\n  * UIO\n  * Mobile\n  * Accessibility (in particular the keyboard and ARIA of card description toggle)\n  * IE11 and other browsers\n  * Ensure URLs for existing pages have not changed\n  * Check resource content\n\nGo live date: end of day Thursday Nov 29\n"
    },
    {
      "author": "Simon Bates",
      "date": "2018-11-26T10:01:30.827-0500",
      "body": "Contrast checks with TPG Colour Contrast Analyser:\n\nWhite on dark blue (perspective)\\\n\\#FFFFFF on #303D47\\\nPASS: 11.1:1\n\nWhite on yellow (reflection)\\\n\\#FFFFFF on #CA8F20\\\nFAIL 2.8:1 (need 4.5:1)\n\nWhite on red (tool)\\\n\\#FFFFFF on #E15846\\\nFAIL 3.7:1 (need 4.5:1)\n\n<https://www.w3.org/TR/WCAG21/#contrast-minimum>\n\n \n"
    }
  ]
}
---
Implement the structure for the toolkit.

 

        