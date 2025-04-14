---json
{
  "title": "ACHECKER-16",
  "summary": "Cannot Add/Edit Language because of character set not updating",
  "tags": "ACHECKER",
  "project": {
    "key": "ACHECKER",
    "title": "AChecker"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "To Do",
  "reporter": "Victor Alagwu",
  "date": "2018-08-13T05:00:08.215-0400",
  "updated": "2018-08-14T16:28:04.515-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ACHECKER/ACHECKER-16/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": []
}
---
 

| **Browser** | **Version**           |
| ----------- | --------------------- |
| Chrome      | Latest Stable release |

 This bug exit in both AChecker 1.4 and AChecker 1.5

**Add/Edit Language**

 

 

**Expected Result:** After the user has entered the details required with the character set inclusive, it is expected that a success message is reported\*.\*

**Bug discovered:** The admin cannot add or edit language successfully because of the **character set** is empty, even when the character set details are entered.

 **Procedure to regenerate the same bug:**

* Login as admin
* \***Via any browser of your choice, enter this URL** \*"\[\*ACHECKER DIRECTORY][/language/language\_add\_edit.php](http://localhost/achecker_new/language/language_add_edit.php) "
* Ensure \[ACHECKER DIRECTORY] is the directory when AChecker is stored
* Enter all the required details, then click save.
* You will notice the below error message, which is not supposed to be, as long as the charset input field is filled. 
* <!-- media: file 643f7fbd-c200-4cc1-848d-076e5599b303 -->

 

        