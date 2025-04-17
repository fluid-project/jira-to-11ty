---json
{
  "title": "INFRA-41",
  "summary": "Reverse DNS ",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-31T10:53:44.860-0400",
  "updated": "2015-11-03T09:33:11.498-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-31T10:54:42.102-0400",
      "body": "Provided Yong with our DNS servers on 6/11/2015. Requested an update on 8/28/2015.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-04T10:12:56.340-0400",
      "body": "No answer from Yong.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-10-21T10:45:51.135-0400",
      "body": "Latest iteration of this request.\n\n```\n-------- Forwarded Message --------\r\nSubject: Re: Reverse DNS for 205.211.169.0/24\r\nDate: Wed, 21 Oct 2015 12:41:15 -0200\r\nFrom: Giovanni Tirloni <gtirloni@ocadu.ca>\r\nTo: Zhang, Yong <yzhang@ocadu.ca>, Harnum, Alan <aharnum@ocadu.ca>\r\nCC: Clark, Colin <cclark@ocadu.ca>, Gill, Avtar <agill@ocadu.ca>\r\n\r\nHi Yong,\r\n\r\nI can't seem to resolve any IPs from the 205.211.169.0/24 network, but\r\nif I query the IDRC's DNS servers directly, they respond with the\r\ncorrect answer:\r\n\r\n$ dig +short @ns-794.awsdns-35.net. 10.169.211.205.in-addr.arpa. ptr\r\ntor1-prd-fw01.inclusivedesign.ca.\r\n\r\nI believe Cogent will have to do the delegation at the ARIN level,\r\ninstead of just adding NS records to their DNS servers. What they have\r\ndone is considered a \"horizontal referral\" (referral at the same level)\r\nand doesn't seem to work because the DNS resolver considers it a \"bad\r\nreferral\" and stops looking.\r\n\r\nHere is the document from ARIN mentioning that delegations can only\r\nhappen at /8, /16 and /24 boundaries. Cogent probably owns/manages\r\nseparate delegation for 205.211.168.0/24 and 205.211.169.0/24 that they\r\ncould change independently:\r\n\r\nhttps://www.arin.net/resources/request/reversedns.html\r\n\r\nI've attached a log file with a DNS trace showing the bad referral. The\r\ndig utility is used for troubleshooting and continues the lookup even in\r\nthe face of the error (that's why it's able to show the correct answer)\r\nbut Windows/OSX/Linux DNS resolvers don't do that.\r\n\r\nThanks for helping us with this.\r\n\r\nThank you,\r\nGiovanni\r\n\r\nOn 10/20/2015 02:44 PM, Zhang, Yong wrote:\r\n> Hi Alan and Giovanni,\r\n> \r\n> The change has been made for 205.211.169.0/24 reverse zone.  Keep in mind some IPs in 205.211.169.0/24 are in managed by IDRC.\r\n> \r\n> Thanks,\r\n> Yong\r\n> \r\n> -----Original Message-----\r\n> From: Harnum, Alan \r\n> Sent: Monday, September 21, 2015 12:53 PM\r\n> To: Zhang, Yong\r\n> Cc: Clark, Colin; Gill, Avtar; Giovanni Tirloni\r\n> Subject: FW: Reverse DNS for 205.211.169.0/24\r\n> \r\n> Hi Yong,\r\n> \r\n> Could you help facilitate the request below from Giovanni to help us get reverse DNS configured for our SMTP servers?\r\n> \r\n> I believe (Giovanni, please correct if this is wrong) this is related to emails to our mailing list recipients being rejected.\r\n> \r\n> Thanks,\r\n> \r\n> ALAN HARNUM\r\n> SENIOR INCLUSIVE DEVELOPER\r\n> INCLUSIVE DESIGN RESEARCH CENTRE, OCAD UNIVERSITY\n```\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-11-03T09:05:29.454-0500",
      "body": "Giovanni Tirloni, is this issue satisfactorily resolved now? Can we close this one?\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-11-03T09:16:11.255-0500",
      "body": "Yes, issue is resolved. Thanks for helping wit this.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-11-03T09:16:55.420-0500",
      "body": "Reverse DNS for IPs 11,12,29,30,31 created individually.\n\nIf we ever need DNS delegation in the future, Cogent will have to delegate the 205.211.169.0/24 network at the ARIN level to us.\n\n$ for i in 11 12 29 30 31; do host 205.211.169.$i | sed 's/domain name\\\npointer/=>/g'; done\n\n11.169.211.205.in-addr.arpa => tor1-prd-ns01.inclusivedesign.ca.\\\n12.169.211.205.in-addr.arpa => tor1-prd-ns02.inclusivedesign.ca.\\\n29.169.211.205.in-addr.arpa => tor1-prd-mx01.inclusivedesign.ca.\\\n30.169.211.205.in-addr.arpa => tor1-prd-mx02.inclusivedesign.ca.\\\n31.169.211.205.in-addr.arpa => tor1-prd-mx03.inclusivedesign.ca.\n"
    }
  ]
}
---
Besides being a good practice to have reserve DNS configured, we also need it to avoid mail errors like this:

to=\<keineantwortadresse\@web.de>, relay=mx-ha03.web.de\[212.227.15.17]:25, delay=256735, delays=256734/0.02/1.1/0, dsn=4.0.0, status=deferred (host mx-ha03.web.de\[212.227.15.17] refused to talk to me: 554-web.de (mxweb005) Nemesis ESMTP Service not available 554-No SMTP service 554 invalid DNS PTR resource record, IP=205.211.169.31)

        