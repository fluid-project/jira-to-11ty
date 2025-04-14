---json
{
  "title": "FLUID-2760",
  "summary": "Split UI Options cancel api",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-05-22T15:10:08.000-0400",
  "updated": "2011-08-25T15:10:09.744-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "all\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-25T15:10:09.737-0400",
      "body": "We have changed the API of UIO so this is no longer applicable.&#x20;\n"
    }
  ]
}
---
After working with the tutorial - adding UI Options to a dialog, we (Colin, Jorge, Laurel ) noted that it was difficult to activate cancel for UI Options on dialog close. This is because if you call cancel on dialog close and close the dialog on cancel you get an infinite loop.

Colin says in the channel: <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-05-22>\
UI Options itself probably needs to have its cancel() API broken out into a second public method: something that would allow you to throw away state while closing the dialog without going through it all.

        