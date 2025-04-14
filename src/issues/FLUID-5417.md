---json
{
  "title": "FLUID-5417",
  "summary": "Little contextual information provided for checkboxes and radio buttons used in adjuster panels",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-06T12:26:30.953-0400",
  "updated": "2017-09-26T12:30:55.931-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "IE 8 (Win XP) (NVDA 2014.2)\\\nChrome 35, FF 29, IE 9, 10, 11 (Windows 7)(NVDA 2014.2)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5681/",
      "key": "FLUID-5681"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5431/",
      "key": "FLUID-5431"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-09T15:29:56.638-0400",
      "body": "A similar issue was present in Infusion 1.4's version of UIO. However, the grouping was different, it was by tab so there was some more content provided in this manner for some of the items.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-16T10:32:38.215-0400",
      "body": "Perhaps changing the markup of the panels would help. Instead of using headers, we could use a fieldset.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-09-26T12:30:55.931-0400",
      "body": "Contextual information is much better across the board. In the case of Table of Contents, it's adjuster has been changed to a switch. However, in IE 11 it just reads blank. In Firefox and Chrome it works fine. Tested using NVDA.\n"
    }
  ]
}
---
Steps to reproduce:

1\) open the prefs framework demo\
<http://build.fluidproject.org/infusion/demos/prefsFramework/>

2\) Open "show display preferences"

3\) Navigate to the table of contents toggle (NVDA)\
Notice it just says "checkbox not checked". It doesn't not provide the contextual information about what the control is for.

* All form inputs require an associated form label that describes the purpose of the input. Ex all sliders should have corresponding labels
* Use of labels on the headings is inconsistent – some headings are labels for a panel’s control and some are not. Input identification/labeling should be consistent. Labels should span if not being used as labels

        