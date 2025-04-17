---json
{
  "title": "FLUID-5389",
  "summary": "ImageReorder Demo, cannot tab to Overview Panel links and close button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "beth.mejsullivan",
  "date": "2014-06-03T10:32:58.935-0400",
  "updated": "2014-06-10T10:28:44.754-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Safari 6.1 (8537.71)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-04T09:12:39.405-0400",
      "body": "beth.mejsullivan in safari you may need to use option-tab to navigate to links.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-10T09:08:52.373-0400",
      "body": "Tried with Safari 7.0.4 on Mac 10.9.3. Cannot reproduce.\n"
    },
    {
      "author": "beth.mejsullivan",
      "date": "2014-06-10T10:11:14.291-0400",
      "body": "Option-tab works to get to the Overview Panel. Mac 10.8.5 Safari Version 6.1 (8537.71)\n"
    },
    {
      "author": "beth.mejsullivan",
      "date": "2014-06-10T10:28:44.754-0400",
      "body": "It might be helpful to add the browser specific navigation key combinations in the documentation. Especially if this is also directed toward developers and users who are not as knowledgeable at the accessibility shortcuts of each browser.\n\nIf this is too much of a burden on the project, links out to the supported browsers' instructions on how to navigate using a keyboard might be another solution.\n\n(If I can help with the documentation here let me know.)\n"
    }
  ]
}
---
Keyboard&#x20;

Test 5: Keyboard, Focus

Procedure\
Open the browser and navigate to the specified URL\
Using the keyboard, tap the 'tab' key until the close button has focus\
Hit enter\
Tap the 'tab' key until one of the images has focus

Expected Results\
There should be a border around the close button to show focus. \
Should be able to hit enter to exit the Overview Panel.

Results\
You can see that the Image is selected under the Overview Panel, but cannot access the close button of the Overview panel using the keyboard.\
The styling of the element should change to indicate that the image has focus

        