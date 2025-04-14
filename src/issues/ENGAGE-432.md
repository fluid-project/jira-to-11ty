---json
{
  "title": "ENGAGE-432",
  "summary": "Alt text for change language flag icon is in English even in French mode",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "James Yoon",
  "reporter": "James Yoon",
  "date": "2010-02-22T11:28:27.000-0500",
  "updated": "2010-03-10T14:03:01.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Internationalization",
    "Language Selection"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/ENGAGE-445/",
      "key": "ENGAGE-445"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-432/ENGAGE-432.patch",
      "filename": "ENGAGE-432.patch"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-02-22T11:28:34.000-0500",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-02T15:26:31.000-0500",
      "body": "The flag seem to be only for presentation and the title beside it already reads \"language selection\", which is what the flag is to indicate. I think in this case it may be suitable to have alt text of \"\".\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-03-08T10:08:41.000-0500",
      "body": "I agree that the flag icon is mainly an aesthetic ornamentation, and whatever semantic significance it carries is duplicated in the title text (in a way, the title text *is* the alt text to the flag icon). An empty alt text seems appropriate to me too.\n"
    }
  ]
}
---

        