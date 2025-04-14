---json
{
  "title": "ENGAGE-373",
  "summary": "Page titles, as displayed with the HTML <title> tag, are not being localized",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Colin Clark",
  "date": "2010-02-11T11:16:56.000-0500",
  "updated": "2017-12-22T09:44:17.780-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Internationalization"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/ENGAGE-400/",
      "key": "ENGAGE-400"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-438/",
      "key": "ENGAGE-438",
      "summary": "When adding application to home screen, default name is \"Home\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-02-19T16:35:39.000-0500",
      "body": "\\<title> of pages should be the same as the main header text on screens\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-19T16:37:16.000-0500",
      "body": "This is also an accessibility issue as VoiceOver starts off by reading the \\<title> of the page--currently, \\<title>s like \"Browse\" are not descriptive enough be meaningful to VO users\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-19T16:37:28.000-0500",
      "body": "a11y issue\n"
    },
    {
      "author": "Sambhavi Chandrashekar",
      "date": "2010-02-24T11:42:46.000-0500",
      "body": "VO on iPhone with OS 3.0 reads the titles of web pages loaded, like \"Web page loaded - Exhibitions\", but VO on iPhone with OS 3.1.3 does not mention the titles of web pages loaded; it merely says, \"Web page loaded\".\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:17.778-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, page titles as displayed by the browser chrome using the \<title> head tag, aren't being localized. This is probably a minor issue for most cases since Engage 0.3 is chromeless on the iPhone. It is something we're going to have improve soon, though.

        