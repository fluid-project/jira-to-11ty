---json
{
  "title": "FLUID-4500",
  "summary": "Checkbox sub-labels overlap labels in Fat Panel, FF",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2011-10-03T17:17:01.757-0400",
  "updated": "2011-10-14T16:09:52.140-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF3.6, FF6 and FF7, Windows and Mac\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4500/uio-overlapping-labels-FF6-win.png",
      "filename": "uio-overlapping-labels-FF6-win.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4500/uio-overlapping-labels-FF7-mac.png",
      "filename": "uio-overlapping-labels-FF7-mac.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T17:20:37.574-0400",
      "body": "These two files (uio-overlapping-labels\\*) show the problem in FF6 and FF7, on Windows and Mac respectively.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T19:14:16.277-0400",
      "body": "I've just tested this in FF3.6 on Mac OS 10.5 and it happens here too.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-10-04T13:28:22.072-0400",
      "body": "Merged Cindy's pull request <https://github.com/fluid-project/infusion/pull/182> into the project repo at be56c4ea6e29f18869d44972a63805d69255948a\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-10-04T14:59:39.725-0400",
      "body": "Conversation on the underlying timing issue and fix happened in irc: <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2011-10-04>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-10-04T15:32:31.184-0400",
      "body": "The complexity of the implementation has been pushed over a critical threshhold by this fix - this function&#x20;\n\nfluid.uiEnhancer.lineSpacer.set = function (times, that) {\\\nif (!that.initialSize) {\\\nthat.calcInitSize();\\\n}\n\n// that.initialSize equals 0 when the line-height value on the container is un-detectable,\\\n// which is to fix <http://issues.fluidproject.org/browse/FLUID-4500>\\\n// @ See fluid.uiEnhancer.numerizeLineHeight()\\\nif (that.initialSize > 0) {\\\nvar newLineSpacing = times === \"\" || times === 1 ? that.initialSize : times \\* that.initialSize;\\\nthat.container.css(\"line-height\", newLineSpacing + \"em\");\\\n}\\\n};\n\nalways had a slightly unclear contract, and now its fundamental action, which should just consist of line 490 which updates the CSS setting, is obscured by an amount of stateful \"model normalisation code\".&#x20;\n\nThere should be a clear workflow where values \"times\", \"lineSpacing\", and \"initialSize\" are all assigned valid values (that is, numeric ones of the appropriate scale) at one point in time, preferably in a self-contained function for this purpose - and it would probably be better to encode the validity of the container originally responsible for <https://fluidproject.atlassian.net/browse/FLUID-4500#icft=FLUID-4500> in a dedicated boolean flag named for the purpose, rather than encoding it as an invalid value in one or more of the fields measured from the container.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-10-05T15:44:21.086-0400",
      "body": "Revised fix pushed to trunk\n"
    }
  ]
}
---
In the Fat Panel UIO, on the two tabs that have checkboxes, the label subtext is overlapping the actual text i.e. there's not enough line spacing, I think.

        