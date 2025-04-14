---json
{
  "title": "FLUID-3231",
  "summary": "Tests fail in IE and Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-10-06T10:13:12.000-0400",
  "updated": "2014-03-03T11:20:11.795-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-06T10:14:00.000-0400",
      "body": "Further testing revealed that this did not seem to impact the actual downloaded files or the interaction with the interface.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-11-03T14:10:54.000-0500",
      "body": "For the record here are the problems:\\\nIn IE6, IE 8 and Opera on XP the tests fail (4, 5, 6, 12, 13, 14 and also 8, 16) all the time.&#x20;\n\nIn addition, in IE, all tests using element.simulate(\"click\") fail. This may indicate that the simulate code doesn't work in IE and opera at all.\n\nHave not been able to find any documentation on simulate.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-11-03T14:12:43.000-0500",
      "body": "Colin suggested replacing element.simulate(\"click\") with element.click. I tested this and found that the element.click changed the appearance of the single check box that was clicked, but the action did not propagate to fire the events to click on the dependent modules check boxes. So - unfortunately, this does not fix the problem.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-09-21T16:07:08.980-0400",
      "body": "With more tracing-down, one of the causes is this line in InfusionBuilder.js\n\nthat.applier.modelChanged.addListener(\"\\*\", function (newModel, oldModel) {...});\n\nInstead of sending in the new model with selected check boxes, newModel sends in the same object as oldModel. However, the real clicks on the check boxes work well. Seems that simulate(click) does not perform well with applier.modelChanged.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-17T12:09:05.963-0500",
      "body": "Fluid Infusion 1.3 Testing. Unit 34 of 274 tests failing in IE8 Win7.&#x20;\n\nThe following are failing:\n\n5 All\\\n6 All\\\n7 All\\\n9.1, 9.3\\\n14 All\\\n15 All\\\n16 All\\\n18.1\\\n18.2\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-12-17T13:58:28.119-0500",
      "body": "Fluid Infusion 1.3 Testing. Unit 34 of 274 tests failing in IE 6, IE 7, IE 8 in Windows XP.\n\nThe following are failing:&#x20;\n\n5 All \\\n6 All \\\n7 All \\\n9.1, 9.3 \\\n14 All \\\n15 All \\\n16 All \\\n18.1 \\\n18.2\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:11.784-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Some javascript unit tests fail in IE6, IE8 and Opera (latest).&#x20;

        