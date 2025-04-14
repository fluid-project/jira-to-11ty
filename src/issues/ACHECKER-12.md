---json
{
  "title": "ACHECKER-12",
  "summary": "Getting Incorrect Fail Test Results For Test Examples",
  "tags": "ACHECKER",
  "project": {
    "key": "ACHECKER",
    "title": "AChecker"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "To Do",
  "reporter": "Victor Alagwu",
  "date": "2018-06-29T13:19:56.585-0400",
  "updated": "2018-06-30T07:25:34.133-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
 

| **Browser** | **Version**           |
| ----------- | --------------------- |
| Chrome      | Latest Stable release |

 

**Check Test**

**Test Example URL: &#xA0;****<https://achecker.ca/checker/suggestion.php?id=233>**

**Expected Test Result:** The document is not expected to contain any `frameset` elements, and if it should contain any frameset element, It is supposed to return a **fail result**.

**Expected Fail Result:** It should indicate that **"A frameset element exist",** by displaying the **"Contains a frameset element",** which is the fail message for check **233.**

**Bug discovered:** Instead of displaying the fail message for Check 233, that of Check 31, Check 48 and Check 49 are being displayed.

 

**Procedure to regenerate the same bug:**

* \***Via any browser of your choice, enter this URL "&#xA0;**<https://achecker.ca/checker/suggestion.php?id=233>"\*
* Go to the **"Paste HTML Markup",** section, click on it.
* Copy and paste the below code snippets in the text area provided

 

 

```html
// Fail Result (Contains a frameset element)
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<html>
<head>
<title>ATRC Testfile - 233.1 - Positive</title>
</head>
<frameset cols="33%,33%,33%">
<frameset rows="*,200">
<frame src="contents_of_frame1.html">
<frame src="contents_of_frame2.gif">
</frameset>
<frame src="contents_of_frame3.html">
<frame src="contents_of_frame4.html">
</frameset>
</html>
```

* Click on **"Check it"**
* The result in the **"Known Problems",** showns only **fail messages of Check 31, Check 48, and Check 49**
* Like earlier indicated, the expected result should have been fail message for check 233.

        