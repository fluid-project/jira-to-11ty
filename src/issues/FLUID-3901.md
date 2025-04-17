---json
{
  "title": "FLUID-3901",
  "summary": "XMLHttpRequest is undefined error in IE 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-12-14T16:17:29.816-0500",
  "updated": "2010-12-14T17:31:01.235-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Win Xp IE 6\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3901/FLUID-3901.patch",
      "filename": "FLUID-3901.patch"
    }
  ],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2010-12-14T16:48:06.459-0500",
      "body": "More complete feature check of XHR for progressive enhancement. &#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-14T17:31:01.227-0500",
      "body": "Reviewed and Committed Mike's patch ( <https://fluidproject.atlassian.net/browse/FLUID-3901#icft=FLUID-3901>.patch ). Also had him run the demo with it and verified that it worked and that the unit tests are still passing.&#x20;\n"
    }
  ]
}
---
When loading the uploader demo in IE 6 it throws an XMLHttpRequest is undefined error.

This appears to be caused by this line of code.\
line: 23

fluid.browser.binaryXHR = function () {\
var canSendBinary = window\.FormData || XMLHttpRequest.prototype.sendAsBinary;\
return canSendBinary ? fluid.typeTag("fluid.browser.supportsBinaryXHR") : undefined;\
};

Below is Colin's suggested fix from the fluid-work channel ( <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2010-12-14> )

var canSendBinary = window\.FormData || (window\.XMLHttpRequest && window\.XMLHttpRequest.prototype.sendAsBinary);

        