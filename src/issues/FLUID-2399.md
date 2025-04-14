---json
{
  "title": "FLUID-2399",
  "summary": "Determine the best way to label groups of elements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Alison Benjamin",
  "reporter": "Justin Obara",
  "date": "2009-03-25T10:50:19.000-0400",
  "updated": "2009-05-21T15:20:28.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF3 / Win XP\\\nIE 7 / Win XP\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2741/",
      "key": "FLUID-2741",
      "summary": "JAWS does not read labels associated with radio buttons"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2738/",
      "key": "FLUID-2738",
      "summary": "Links and Inputs under \"Easier to Find\" are left justified instead of being centred"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2399/FLUID-2399-UIOptions.txt",
      "filename": "FLUID-2399-UIOptions.txt"
    }
  ],
  "comments": [
    {
      "author": "Alison Benjamin",
      "date": "2009-05-05T15:13:19.000-0400",
      "body": "FF3:\\\nJAWS does not read the label associated with radio buttons and checkboxes. \\\nE.g.: for the path Easier to find > Links > underline option\n\nJAWS reads\\\n\"Easier to find\" & \"underline checkbox not checked\"&#x20;\n\nIE 7: JAWS reads \"underline checkbox not checked\"\n\nIn both cases the label \"links\" is not read so it is not explicit what the checkbox refers to.&#x20;\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-05-14T13:27:55.000-0400",
      "body": "Here is a patch implementing fieldset & legend tags.&#x20;\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-05-15T10:56:29.000-0400",
      "body": "This patch was committed by Michelle. The behaviour has changed in that now JAWS reads \"Links, Easier to find, underline checkbox not checked\", etc giving context for checkbox options.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-20T11:33:48.000-0400",
      "body": "This isnt quite valid HTML, i think we need another solution\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-05-21T11:04:14.000-0400",
      "body": "I have closed this issue because it duplicates <https://fluidproject.atlassian.net/browse/FLUID-2741#icft=FLUID-2741>.&#x20;\n"
    }
  ]
}
---
Currently this issue is that we have something like this

Links:  \[ ] Underline \[ ] Bold \[ ] Larger

The labels for the checkboxes are Underline, Bold, and Larger, but out of the context of links they don't seem to mean much.

One suggestion is to use fieldsets and legend

        