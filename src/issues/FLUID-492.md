---json
{
  "title": "FLUID-492",
  "summary": "JAWS difficulty exiting Virtual PC Cursor to navigate in Lightbox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Zachariah Cameron",
  "date": "2008-04-10T19:24:42.000-0400",
  "updated": "2008-12-12T16:22:36.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Windows XP SP2; Vista Business; JAWS 7, 8, &9; Firefox2; IE7&#x20;\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1821/",
      "key": "FLUID-1821"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1821/",
      "key": "FLUID-1821"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1822/",
      "key": "FLUID-1822"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-492/Navigating the Lightbox in Internet Explorer 7 and JAWS 7.doc",
      "filename": "Navigating the Lightbox in Internet Explorer 7 and JAWS 7.doc"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-17T14:16:48.000-0400",
      "body": "Zach, can you describe the issue a bit more? What is it that happens when you enter \\<INS>z? Does it not drop out of Virtual PC Cursor?\n\nOn our test machine, we were able to type \\<INS>z to drop out of Virtual Cursor mode, and after that the navigation keys (I, J, K, M) worked fine.\n"
    },
    {
      "author": "Zachariah Cameron",
      "date": "2008-04-23T16:31:15.000-0400",
      "body": "Perhaps this gives a fuller and clearer description of the behaviour as I found it.\n\n\\<INS>z to exit Virtual PC Cursor\n\nDELL Precision 690\tWin Vista Ultimate\\\n\\= = = = = = = = = =&#x20;\n\nJAWS 9\\\nIE 7\n\n* \\- - - -&#x20;\n\nJAWS voices:-\n\n* \\- - - -&#x20;\n\nTo use the keyboard:\n\nSelect an image using i, k, m or j, or the arrow keys.\\\nView an image by pressing Enter.\\\nMove an image using CTRL + a direction key.\n\nwhich seems to imply that IJKM are sufficient to select an image.\\\nAt that point if you drop out of Vitual PC Cursor these keys do not work. One\\\nmust still tab into the windows.\\\nI am not sure this would be evident to the average JAWS user, nor am I certain\\\nif this is a function of the tool, or of the page design.\n\nJAWS 9\\\nFirefox 2\n\n* \\- - - -\n\nJAWS does not voice the entire\n\nTo use the keyboard:\\\nSelect an image using i, k, m or j, or the arrow keys.\\\nView an image by pressing Enter.\\\nMove an image using CTRL + a direction key.\n\nwhen tabbing through the screen. In my experience it sometimes voices nothing\\\nand other times voices only\n\nby pressing Enter.\\\nMove an image using CTRL + a direction key.\n\nIn this configuration I can, thus far, find no way to have the instructions\\\nvoiced in their entirety.\n\nAlso, in Firefox, when tabbing through, this instruction screen is reached\\\n*after* getting to the graphic content so would not be immediately evident.\n\nDell Precision M20 laptop  Win XP SP2\\\n\\= = = = = = = = = =&#x20;\n\nJAWS 7\\\nFirefox 2\n\n* \\- - - -&#x20;\n\nJAWS voices the instructions 'To use the keyboard,,,' but following those instructions *at that point* does not do the job. One must hit the tab key to gain access to the images and, occasionally, a single tab is not sufficient.\n\nJAWS 7\\\nIE 7\n\n* \\- - - - \\\n  Quite similar to exprience with Firefox and this version of JAWS but required more tabbing to get to the point where IJMK were properly functional.\n\nDELL Optiplex 755\tWin Vista Business\\\n\\= = = = = = = = = =&#x20;\n\nJAWS 9\\\nFirefox 2\n\n* \\- - - -&#x20;\n\nTo use the keyboard:\n\nSelect an image using i, k, m or j, or the arrow keys.\\\nView an image by pressing Enter.\\\nMove an image using CTRL + a direction key.\n\nThis is not read at all when tabbing around the document. Being sighted, I can see when the selection has fallen on this box. Seing that, if I press the down arrow I get&#x20;\n\nby pressing Enter.\\\nMove an image using CTRL + a direction key.\n\nand knowing there is more there, I can get it voiced eventually.\n\nJAWS 9\\\nIE 7\n\n* \\- - - -\n\nSame as above.\n\nDifficult to get tabbed into the correct place.\n\n\\= = = =\\\nIn each case, if you know what is needed, you can manage to get IJKM to work but you \\\nmay lose your audience before they get there.\\\nYou can also get the information by using the read all command but I would argue that ought not to be necessary.\n"
    },
    {
      "author": "Michael Elledge",
      "date": "2008-05-27T16:45:51.000-0400",
      "body": "I've checked the Lightbox with IE 7 and JAWS 7 and found that it works, but only when the virtual cursor is turned off. Since many (perhaps most) screen reader users will have no idea that this may be the source of their problems, or know how to resolve it, it is critical that they be told that \"Screen reader users must turn off the Virtual Cursor (ins + z)\" for Lightbox to work. Of course, it would be best if they didn't have to go through that step at all.\n\nHere are several other suggestions to improve accessibility and usability for persons with disabilities:\n\n2\\) add a description of what the Lightbox tool does: \"This is the Lightbox demo page. User the Lightbox tool to rearrange items on a page\", \\\n3\\) indicate that a new page will open when an item is selected, \\\n4\\) indicate that alt + left arrow will return you to the main page from the selected item, and \\\n5\\) improve the page title for each selected items page (\"Small cluster of blackberries\" rather than the URL).&#x20;\n\nIf possible: \\\n6\\) indicate which item precedes and which item follows an item after it has been moved, and \\\n7\\) add mechanism for sorting items alphabetically (will provide consistent starting point for persons with cognitive issues or who are blind).\n\nI have attached word document which describes what happened with virtual PC turned on and off.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T10:41:54.000-0400",
      "body": "Going along with the comments above, it would seem that the instructions text needs to be updated.\n\nA screen reader should tell the user to do the following:\n\n1\\) Press tab to go to the lightbox\n\n2\\) turn browse mode off.\\\nIt would be nice if this information was presented to screen readers only, as it wouldn't make sense to a non-screen reader user.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T12:12:17.000-0500",
      "body": "Bug Parade  0.6 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T16:22:36.000-0500",
      "body": "fixed along with <https://fluidproject.atlassian.net/browse/FLUID-1821#icft=FLUID-1821>\n"
    }
  ]
}
---
In each of the environments listed, it was difficult to exit JAWS Virtual PC Cursor in order to use the I,J,K,M keys to navigate through the available images.\
Ordinarily one enters \<INS>z to drop out of the JAWS Virtual PC Cursor and in this case should simply be able to use the designated keys for navigation. In most cases it was possible to get around this by 'playing' with the arrow keys and then going back to the provided navigation keys.

        