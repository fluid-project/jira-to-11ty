---json
{
  "title": "FLUID-6647",
  "summary": "Can not initiate drag and drop action using the multiple Infusion manual test on Chrome Android",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2021-06-29T15:50:05.501-0400",
  "updated": "2024-07-24T13:56:22.688-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Chrome 91.0.4472.120 (Android 11)\\\nSafari 14 (iPadOS 14.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-29T16:53:11.519-0400",
      "body": "We use the jQuery Plugin touchPunch in other drag and drop demos, and probably need to add that here as well. Although I wonder if there would be any issues because of the older version of the Infusion that is running on the page. We might need to bring that up-to-date or come up with a different demo that better showcases running multiple instances of infusion at the same time.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-24T13:56:22.688-0400",
      "body": "This manual test is no longer available.\n"
    }
  ]
}
---
Running the multiple Infusion manual test does not allow drag and drop of items in the list.

To reproduce:\
1\. Open <https://build-infusion.fluidproject.org/tests/manual-tests/framework/core/multipleversions/> on Chrome on Android.\
2\. Try to tap and drag an item in either list.\
3\. Notice nothing happens.

Note, the [Dynamic Reorderer manual test](https://build-infusion.fluidproject.org/tests/manual-tests/components/reorderer/dynamic/) works on Chrome Android - items are able to be reordered using tap and drag.

        