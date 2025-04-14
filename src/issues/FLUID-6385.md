---json
{
  "title": "FLUID-6385",
  "summary": "Self Voicing Enactor and Orator tests halt when run as part of all-tests in MS Edge",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2019-07-24T09:13:11.549-0400",
  "updated": "2024-07-22T10:35:28.293-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": "MS Edge 44 - Win 10&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6385/test.zip",
      "filename": "test.zip"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-07-26T09:52:29.439-0400",
      "body": "It seems that both the Orator and Self Voicing enactor tests are stopping after a call to [fluid.tests.orator.selection.selectNode](https://github.com/fluid-project/infusion/blob/master/tests/component-tests/orator/js/OratorTests-Utils.js#L109-L117), which doesn't seem to trigger the next event. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-29T13:06:37.460-0400",
      "body": "It seems that the issue is around the \"selectionchange\" event not firing, or at least not hitting any bound listeners, when programmatically changing the selection within an iframe. This is what happens in the fluid.tests.orator.selection.selectNode method. Users initiated selections are still triggering the \"selectionchange\" event, so this is really only an issue in the tests. Specifically the all-tests which are run through an iframe. Also, if we log the selection after making a programmatic change, the selection is correct. Which further points to it being an issue with the event.\n\n \n\nI also tested the \\[dev channel version of MS Edge|<https://www.microsoftedgeinsider.com/en-us/download/>], which is the chromium based version, it does not exhibit the issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-29T13:08:30.295-0400",
      "body": "test.zip contains a couple of simple examples for testing this issue. test.html will automatically trigger a programatic selection and output the results to a DOM node and to the console. frame.html runs test.html in an iframe.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-11-10T10:33:05.506-0500",
      "body": "Chromium based versions of MS Edge have been officially released for a while, and do not exhibit this issue.\n"
    }
  ]
}
---
The Self Voicing Enactor tests halt when run as part of all-tests.html. The tests stall at "fluid.prefs.enactor.selfVoicing.init - at sequence position 14 or 16". However, if the tests are run on their own, they pass.

 

Similar for the Orator tests which stall at "fluid.orator.selectionReader: fluid.orator.selectionReader - at sequence position 3 or 21"

        