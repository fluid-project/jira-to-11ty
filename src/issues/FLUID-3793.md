---json
{
  "title": "FLUID-3793",
  "summary": "columnDefs = \"explode\" causes error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2010-10-12T13:22:51.056-0400",
  "updated": "2010-10-28T16:56:08.878-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3793/FLUID-3793.patch.proper-paths.txt",
      "filename": "FLUID-3793.patch.proper-paths.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3793/FLUID-3793.patch.txt",
      "filename": "FLUID-3793.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2010-10-12T13:24:08.861-0400",
      "body": "Justin, since this is a bug caused by the default configuration (and since the fix is reasonably simple), I filed this as a blocker for 1.3. If you concur, feel free to assign it back to me and I'll commit a test and a fix asap.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-12T14:08:34.260-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-10-12T14:41:15.773-0400",
      "body": "This patch (<https://fluidproject.atlassian.net/browse/FLUID-3793#icft=FLUID-3793>.patch.txt) adds a test that configures the pager to use the fluid.pager.selfRender body renderer with the default columnDefs of \"explode\", which causes an error without the fix to the Pager. The fix to the pager (also included in this patch) is to use getRoots() properly, i.e. to use the modified first argument instead of a return value (there is no return value).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-10-19T09:11:15.032-0400",
      "body": "Antranig, could you review this patch? It adjusts the code to the existing apparent usage of the function, but the api of the function might actually be wrong given the name? A \"get\" function that doesn't actually get anything? I wonder if either the name should be changed or the function should return something?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-28T16:43:26.472-0400",
      "body": "Hi Anastasia - this patch looks ok in content, but seems to have been generated in a strange way that does not include file paths. Would it be possible for you to regenerate it?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-10-28T16:48:56.370-0400",
      "body": "Adding another attempt at the same patch, but with proper file paths.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-28T16:56:08.875-0400",
      "body": "Reviewed and applied at rev 10165\n"
    }
  ]
}
---
If the Pager's default columnDefs value of "explode" is used, an error is thrown on line 535. The call to getRoots() on  line 533 assumes a return value, but getRoots() doesn't return anything - it modifies the first argument. The fix is simple, but we need a test that catches it.

        