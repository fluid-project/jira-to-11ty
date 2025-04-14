---json
{
  "title": "FLUID-1312",
  "summary": "Edit mode won't display more than 1025 characters unless the characters are selected, using Opera 9.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-08-26T11:45:28.000-0400",
  "updated": "2009-05-05T10:34:26.000-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1312/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1312/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1312/screenshot-3.jpg",
      "filename": "screenshot-3.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-26T11:46:56.000-0400",
      "body": "'screenshot-1' shows the inline edit field in edit mode with the \"xxxx\" not visible.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-26T11:48:32.000-0400",
      "body": "'screenshot-2' shows the inline edit field in edit mode with the \"xxxx\" visible after mouse selection\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-26T11:49:23.000-0400",
      "body": "'screenshot-3' shows the \"xxxx\" displayed properly when out of edit mode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-05T10:34:26.000-0400",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
Edit mode won't display more than 1025 characters unless the characters are selected

Steps to reproduce:

1\) Open either inline edit example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Enter in more than 1025 characters into an inline edit field (i.e. "Qqqqqqqqqqq qqqqqqqqqqq qqqqqqqqqqq qqqqwwwwwwwwwww wwwwwww wwwwwww wwweeeeeee eeeeeeeeeee eeeeeeeeee eeeeeeeeerrrr rrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrr rrrrrrrrrrrtttttttttttttt ttttttttttttttttt ttttttttttttttttttttt ttttttttttttttttttttt tttttttttttttttyyy yyyyyyyyyyy yyyyyyyyyyyy yyyyyyyyyyyy yyyyyuuuuuu uuuuuuuuuuu uuuuuuuuuuu uuuuuuuuu iiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiii ooooooooooooo ooooooooooooo ooooooooooo pppppppppppp ppppppppppppp pppppppppppp aaaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaassssss sssssssssssssss sssssssssssssss ssssssssddddd dddddddddddd ddddddddddd dddddddddfffff ffffffffffffffffff ffffffffffffffffff ffffffffffffffffff fffffffffffffffffff ffffffffffgggggg gggggggggggg ggggggggggggg gggggghhhhhh hhhhhhhhhhhh hhhhhhhhhhhh hhhhhhhhjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjj jjjjjjjjkkkkkkkk kkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkk llllllllllllllllllllll lllllllllllllllllllllllllllxxxx")

Notice that the "xxxx" at the end is not visible in edit mode unless you select the characters with the mouse. It will display fine out side of edit mode, as well.

        