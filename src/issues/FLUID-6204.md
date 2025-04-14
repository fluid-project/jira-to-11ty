---json
{
  "title": "FLUID-6204",
  "summary": "Implement a letter spacing enactor and adjuster",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2017-09-28T13:30:18.365-0400",
  "updated": "2018-03-12T14:43:36.131-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-09-28T13:32:49.449-0400",
      "body": "Based on <https://files.inclusivedesign.ca/index.php/apps/files/?dir=/IDRC-Design/Typography&fileid=22233#pdfviewer> it seems that in phototypesetting letterspacing is determined by units. A unit is based on the em.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-03T16:35:03.107-0400",
      "body": "Talked with Caren, Dana, Lisa, Jon, and Sepideh about line spacing to determine the following:\n\n* What are the increments?\n* What is the range?\n* What is the best interaction?\n\nSummary of feedback:\n\n* Possibly use discreet increments such as \"regular, small, medium, large\"\n* Have negative values to make letters closer\n* Potentially need to modify linespace and workspace along with character space to keep it readable\n* Should use \"em\" instead of \"px\" to set letter spacing to account for differences in font size\n* Need more research into the need for character/letter spacing.\n* Looked at illustrator, indesign, and word to see how they set letter spacing\n* Regarding interaction:\n  * are the values meaningful? would a simple slider or +/- buttons be enough\n  * would discreet increments paired with a class name make it easier for integrators who may have already set letter spacing for certain portions of the site?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-04T09:53:07.731-0400",
      "body": "In my research so far, there is no specific mention of specific values or combinations that are recommended. The guidelines tend to be more general and recommend against crowding. There are also some recommendations against having too many gaps or uneven spaces as it can make reading harder, especially for those with dyslexia.\n\n \n\nBelow are some resources that Julia passed along from her Google search:\n\n* <http://www.afb.org/info/reading-and-writing/making-print-more-readable/35>\n* <https://w3c.github.io/low-vision-a11y-tf/requirements.html>\n* <https://www.si.edu/accessibility/sgaed>\n* <http://uxmovement.com/content/6-surprising-bad-practices-that-hurt-dyslexic-users/>\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-31T09:50:54.125-0400",
      "body": "Suggestions from APCP UX team \n\n<https://wiki.gpii.net/w/Browser_Adaptation_Design_Research#Character_Spacing>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-01-11T16:57:49.044-0500",
      "body": "Should look at <https://www.w3.org/International/> for any advice on internationalization issues. For example some languages like farsi may not make sense if letter spacing is applied.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2018-03-12T14:43:31.938-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/869) has been merged into the project repo master branch at e4d2974d22938cc20a2157f5fd687486fec15024.\n"
    }
  ]
}
---
As part of the work on UIO+ we need a character/letter spacing adjuster/enactor. This should be similar to how the text size and line spacing adjusters/enactors work, but will adjust the space between the characters. 

This should be possible to do using the "letter-spacing" css style.

        