---json
{
  "title": "FLUID-1889",
  "summary": "Uploader Storycard 3:  Add remaining time for upload to the progress bar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "Daphne Ogle",
  "date": "2008-12-02T13:33:34.000-0500",
  "updated": "2013-02-01T04:04:30.573-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-01-29T18:27:09.000-0500",
      "body": "As I think through the implementation of this feature, I imagine that it's really only helpful in situations where the upload is going to take more than a certain amount of time. There are two reasons for this.&#x20;\n\n1\\) A quick upload is just going to happen, and the user won't really care about the time remaining. The upload will be so responsive, they wont care.&#x20;\n\n2\\) A short upload wont provide accurate enough data to project anything reasonably approaching an accurate time remaining. In fact, the margin of error will probably exceed the actual time remaining. Even under good conditions, the estimate will get better, the longer the upload, and the deeper into the upload we get. I'm guessing that this may look like those file copying dialogs that start out saying that the copy will take three days and then a minute later will say that the copy will take 17 minutes.&#x20;\n\nWhat is the lower threshold below which we shouldn't bother to display the time remaining message? 30 seconds, a minute, 2? We can probably build the feature and then play around with this.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-11T19:40:07.000-0400",
      "body": "This will not make it into the Uploader for version 1.0 but is a good 1.1 candidate.\n"
    }
  ]
}
---
Details:

* Add remaining time (this is an estimate) to progress bar.
* Display format:  "16:45 remaining"&#x20;
* This is meant as a heuristic for users not an exact measurement.  The estimate may change depending on various factors. We want them to know "do I have time to grab a cup of coffee" or "I need to leave in 5 minutes, will this be done or should cancel and do it later or wait 1 extra minute cause its almost done".

Uploader Storyboard - Simple Upload:  <http://wiki.fluidproject.org/display/fluid/Uploader+Storyboard+-+Simple+Upload>

        