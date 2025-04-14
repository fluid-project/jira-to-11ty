---json
{
  "title": "ACHECKER-5",
  "summary": "Removing Deprecated Call-By-Reference PHP Codes",
  "tags": "ACHECKER",
  "project": {
    "key": "ACHECKER",
    "title": "AChecker"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Done",
  "resolution": "Done",
  "assignee": "Victor Alagwu",
  "reporter": "Victor Alagwu",
  "date": "2018-05-08T18:42:15.888-0400",
  "updated": "2018-07-17T13:21:36.914-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
1\. PHP 5.4 removes the use of call by reference;\
2\. According to [PHP docs](http://php.net/manual/en/language.oop5.decon.php): *"Old style constructors are DEPRECATED in PHP 7.0, and will be removed in a future version*". You should always use  \_\_construct() in new code.

        