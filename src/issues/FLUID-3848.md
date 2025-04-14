---json
{
  "title": "FLUID-3848",
  "summary": "No screen reader indication that a column has been used for sorting",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2010-11-18T12:54:57.101-0500",
  "updated": "2010-12-13T17:28:37.903-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "XP + FF3.6 + NVDA\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3849/",
      "key": "FLUID-3849"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3850/",
      "key": "FLUID-3850"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3848/FLUID-3848-2-patch.txt",
      "filename": "FLUID-3848-2-patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3848/FLUID-3848-3-patch.txt",
      "filename": "FLUID-3848-3-patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3848/FLUID-3848-4-patch.txt",
      "filename": "FLUID-3848-4-patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3848/FLUID-3848-5-patch.txt",
      "filename": "FLUID-3848-5-patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3848/FLUID-3848-patch.txt",
      "filename": "FLUID-3848-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-11-19T14:43:04.907-0500",
      "body": "Jan suggested that an aria-sort property may help improve this issue. Definitely worth a look.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T16:16:07.552-0500",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-30T12:14:16.954-0500",
      "body": "Justin and I tried adding aria-sort into the pager demo, but NVDA-main-3946 and JAWS 12.0 didn't report the sort strategy (ascending/descending) after you click on the column with a mouse or keyboard.  We have looked into the actual accessibility DOM tree with Accessibility Probe, there is a \"sort=ascending\" property in the attribute within ia2.  This means that the aria-sort are reflected on FF3.6 but the screen readers are not picking it up.  We believe it is a problem with the screen readers and we are waiting for a reply from them. &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-30T15:13:00.781-0500",
      "body": "Includes aria-sort in the column headers after the sort action is triggered.  Note that the pager sorter only uses ascending and descending sort order, thus the \"other\" option of the aria-sort is not used.  W3 WAI spec can be found here, <http://www.w3.org/WAI/PF/aria/states_and_properties#aria-sort>.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-12-06T14:52:40.709-0500",
      "body": "* Patch includes changes to the anchor within the sortableHeaders, anchor now have 3 different titles depending on the sort direction.  If the column isn't sorted, the anchor title will print \"Select to sort\"; if the column is sorted in ascending order, it will print, \"Select to sort in ascending, currently in descending order.\"; if the column is sorted in descending order, it will print \"Select to sort in descending, currently in ascending order.\".\n* Added unit test for the changes on the anchor titles.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-12-07T16:04:28.101-0500",
      "body": "Updated patch due to changes in Pager.js, patch FLUID-3848-3-patch.txt now works with rev. 10348.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-12-08T16:52:00.152-0500",
      "body": "* All test cases now passed on IE8.  It has some issues within the test class where I have to get the anchor variable from the DOM instead of using a variable. &#x20;\n* NVDA doesn't work well on IE8 with the application mode.  NVDA doesn't read the link text and the anchor text.  Tested with NVDA main-3946 and NVDA 2010.2 stabled version.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-12-09T14:05:59.949-0500",
      "body": "* Updated patch, cleaned up left over codes from Pager-test.html\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-10T16:36:14.928-0500",
      "body": "Thanks for the patch with tests Harris!  The setup data in the new test looks like it will be useful for lots of other Pager tests. When we next work on Pager, we should look at making this more generally available and reuse it.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T17:28:37.894-0500",
      "body": "I can confirm by testing with a screen reader that the fix Michelle reviewed and committed is in, and working. This addresses <https://fluidproject.atlassian.net/browse/FLUID-3849#icft=FLUID-3849> and <https://fluidproject.atlassian.net/browse/FLUID-3850#icft=FLUID-3850>, as well.\n"
    }
  ]
}
---
Using NVDA with the pager, there's no audible indication whether or not a given column has been used for sorting already.

        