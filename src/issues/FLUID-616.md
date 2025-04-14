---json
{
  "title": "FLUID-616",
  "summary": "Height of upload queue does not decrease as files are removed from the list",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-22T15:08:58.000-0400",
  "updated": "2008-12-02T15:18:53.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 Mac\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-567/",
      "key": "FLUID-567"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-05-23T12:05:39.000-0400",
      "body": "Many things all conspired to make the old implementation impossible. \\\nThe tbody element was both the scrolling element and the element that needed to be measured in order to know whether you needed to set the element to scrolling. \\\nSo you can't test the height of the element since you're also setting the height of the element to get it to scroll. (Is this making sense)\\\nSo instead of checking the height of the element, you check the offsetHeight of the element.\\\nBut IE doesn't support offsetHeight. (OK, it supports it but gets it wrong).\\\nSo you have to have a different element handle the scroll from the tbody which handles the height.\\\nExcept that height also isn't supported on tbody elements in IE so you have to test against the entire table element.\\\nBut you don't want to include headers and footers.\n\nAnd so, I exploded the table into three separate parts so I could scroll the middle. All because IE is wack!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-02T15:18:53.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
Add enough files to the file queue in the file uploader so that the queue gets scrollbars.\
Remove files one by one.\
At some point the file queue will no longer have scrollbars\
Keep removing files\
Observe: the file queue height does not decrease

        