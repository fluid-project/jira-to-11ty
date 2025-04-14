---json
{
  "title": "INFRA-82",
  "summary": "Vidyo crashes when viewing screen share in full screen and remote participant ends the screen share",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Won't Fix",
  "assignee": "Giovanni Tirloni",
  "reporter": "Justin Obara",
  "date": "2016-02-23T15:03:06.464-0500",
  "updated": "2017-11-16T06:20:14.098-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "Mac OS 10.11\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/INFRA/INFRA-82/Vidyo_Desktop_Diag_20160222_1437_54.zip",
      "filename": "Vidyo_Desktop_Diag_20160222_1437_54.zip"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-02-23T15:03:37.214-0500",
      "body": "Added the diagnostic after one of the Vidyo Crashses\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-02-23T15:34:10.900-0500",
      "body": "Thanks for reporting this issue.\n\nI've sent a support request to ETGroup.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-03-02T14:59:15.059-0500",
      "body": "It seems this is a known issue that will be fixed in the upcoming release.\n\nAnswer from ETGroup:\n\n```\n-------- Forwarded Message --------\r\nSubject: Re: VidyoDesktop crashes when exiting full screen mode (OSX)\r\nDate: 03/02/2016 04:32 PM\r\nFrom: Mike Thornback <mthornback@etgroup.ca>\r\nTo: ET Group Support <support@etgroup.ca>, Tirloni, Giovanni <gtirloni@ocadu.ca>, ET Group Support <support@etgroup.ca>, Mitchell, Jess <jmitchell@ocadu.ca>, Harnum, Alan <aharnum@ocadu.ca>, OCAD <ocad@etgroup.ca>\r\n\r\nHi Giovanni,\r\n\r\nThis is a known issue with this version of the client. Vidyo has indicated that a new version of the client(s) are in QA at this time and have indicated that this fix is included in the forthcoming release.\r\n\r\nHope this helps,\r\n\r\n\r\nMike Thornback, CTS\r\nProject Lead\r\nM. 647 218 5088 <tel:647%20218%205088>\r\net <http://etgroup.ca/>group.ca <http://etgroup.ca/>\r\n| T. 416 477 2656 <tel:416%20477%202656> | 1 416 598 2223 <tel:1%20416%20598%202223>\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T09:38:39.184-0400",
      "body": "Has this ever happened again after the client updates?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-08-22T09:59:06.587-0400",
      "body": "@@Giovanni Tirloni, yes, this happened again to me last week.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-11-23T10:54:43.072-0500",
      "body": "Hi Justin, we have had another upgrade recently for Mac (v3.6.9-014). Could you ensure you have this version and try again the screen sharing when it's most convenient to you? Thanks!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-23T12:18:56.933-0500",
      "body": "@@Giovanni Tirloni I have v3.6.9-014 and tested it just now. Same problem.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-11-23T12:48:15.823-0500",
      "body": "Created a new support ticket (#86345).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-07-06T07:14:50.304-0400",
      "body": "Latest update from Vidyo:\n\n```\nHere is an update,\r\nthe fix for the issue will be delivered in the coming version 3.6.13 VidyoDesktop.\r\n\r\nIt will be delivered soon, but regarding ETA (Estimated time of arrival) for the fix, please reach out your regional Vidyo SE (Sales Engineer) as they have better view for the information.\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T11:01:42.209-0400",
      "body": "I have uploaded version 3.6.14 of VidyoDesktop this morning.\n\n@@Justin Obara could you try that and see if it fixes this issue? Thanks in advance.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-09-21T13:39:24.715-0400",
      "body": "@@Giovanni Tirloni I tried with v3.6.14 of VidyoDesktop and it still crashes. I also tried with the Vidyo Neo client, and didn't see this particular issue there.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T13:46:36.546-0400",
      "body": "That's bad. Thanks for testing though.\n\nA Vidyo rep told me VidyoDesktop is their \"legacy\" platform now and all improvements are going into VidyoNeo so I would expect this to get any attention any more, unfortunately.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-11-16T06:20:14.095-0500",
      "body": "Closing as the chance of getting support for VidyoDesktop now are minimal.\n"
    }
  ]
}
---
Steps to reproduce:

1\) View a screenshare in full screen\
2\) The remote participant sharing the screen, ends screen share\
3\) Try to exit full screen on mac

Vidyo crashes.

        