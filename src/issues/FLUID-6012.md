---json
{
  "title": "FLUID-6012",
  "summary": "Bug found of the deleting of rows when reordering the table rows.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "David",
  "date": "2016-10-28T14:04:22.940-0400",
  "updated": "2024-07-24T11:35:59.689-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE11, Windows 7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6004/",
      "key": "FLUID-6004",
      "summary": "Grid reorderer - letters will disappear when reordered a certain way"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6070/",
      "key": "FLUID-6070"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6012/imageReorder1.png",
      "filename": "imageReorder1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6012/image reorder 3.PNG",
      "filename": "image reorder 3.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-31T11:15:38.817-0400",
      "body": "I have not been able to reproduce this in either a windows 8 or windows 7 virtual box VM. I did reproduce on the two Windows 7 machines in our lab though, although those were the ones that the issue was found on. It would be good to try this out on another dedicated windows 7 machine if possible.\n\nAlso when I did reproduce it, i wasn't able to use the developer tools to look for any errors as the browser would just crash when the problem occurred with the developer tools open.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-31T12:09:36.739-0400",
      "body": "Tried on a third dedicated Windows 7 machine with IE 11, and was able to reproduce the issue.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2016-10-31T17:13:14.141-0400",
      "body": "I have been able to reproduce on IE 11 and Windows 10. Details:&#x20;\n\n* Internet Explorer 11.321.14393.0\n* Windows 10 1607\n\nIn addition, I noticed that when one of the rows disappeared and I was left with 4 rows, one of the remaining 4 rows could not be moved with the mouse. It could, however, be moved with keyboard.\n\nI am also seeing crashing interaction with the Developer Tools. Though I think that I am seeing something a little different from Justin. For me, if I open the Developer Tools (Console), I am unable to reproduce the disappearing row. But, if I close the Developer Tools, and move some rows around, then I get a crash. That is, in a browser in which the Develop Tools were opened but are now closed.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2016-10-31T17:36:25.485-0400",
      "body": "I am fairly reliably (maybe 75%) able to reproduce in 2 moves:\n\n* Start IE\n* Load <http://build.fluidproject.org/infusion/examples/components/reorderer/tableRow/>\n* And with the mouse:\n  * Move the bottom row, \"Human\", up to between \"Cat\" and \"Dog\"\n  * Move the \"Human\" row back down to the bottom\n\nAnd in this case:\n\n* The \"Dog\" row disappears\n* The \"Human\" row cannot be moved with the mouse\n\nIt doesn't happen every time but most times. If it isn't happening, restart IE.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T13:07:09.050-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/examples/components/reorderer/tableRow/>

Found a bug in the table reorderer  where when switching the rows in a certain pattern or sequence, it will delete a row.

Example of this bug:\
1\. Take the cat row and drag it under the human row\
2\. Take the dog row and drag it under the cat row \
3\. Take the great white shark row and drag it under the dog row\
4\. Take the human row and drag it under the great white shark row\
5\. Take the cat row and drag it under the human row \
6\. Take the great white shark row and drag it under the cat row

you will see that there are only 4 rows left instead of 5.

It is also possible to delete maximum 3 rows leaving two rows left.

        