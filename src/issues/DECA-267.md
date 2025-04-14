---json
{
  "title": "DECA-267",
  "summary": "Cannot use the arrow keys to change the accordion selection when ORCA is running",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2012-05-28T13:31:27.436-0400",
  "updated": "2012-09-06T10:30:03.742-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export"
  ],
  "environment": "FF 13 (Ubuntu 10.04, ORCA 2.30.2)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-28T13:33:33.702-0400",
      "body": "I spoke with Scott Gonzalez from jQuery UI about it in the jqueryui-dev channel. \\\n<http://irc.jquery.com/%23jqueryui-dev/%23jqueryui-dev_20120528.log.html>\n\nThe accordion in master behaves better. You are able to move to and open the other accordion panels, but pressing up/down arrow keys will require you to read line by line through a panel before you can get to the next accordion headers.\n\nDemo of the accordion widget in master:\\\n<http://view.jqueryui.com/master/demos/accordion/default.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-06-04T15:40:01.638-0400",
      "body": "Spoke with clown (joseph today) in the irc channel:\\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2012-06-04>\n\nHe pointed me at this issue from orca where they suggest it is an issue with Firefox:\\\n<https://bugzilla.gnome.org/show_bug.cgi?id=638062>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-06-12T14:04:57.083-0400",
      "body": "After some investigation from Joseph, it seems that if you press ORCA+f12 to switch to Gecko's navigation mode, it will handle the arrow navigation as intended.\n\nSee the Orca note: <http://wiki.jqueryui.com/w/page/12137702/Accordion>\n"
    }
  ]
}
---
Steps to reproduce:

1\) Turn the ORCA screen reader on

2\) Launch the Decapod web app

3\) Tap the tab key until one of the export options has focus

4\) Attempt to select a different export option by using the up/down arrow keys\
Notice that the text selection moves but you can't use the space/enter keys to active the accordion headers.

        