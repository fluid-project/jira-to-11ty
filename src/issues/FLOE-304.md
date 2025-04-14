---json
{
  "title": "FLOE-304",
  "summary": "Have selfVoicing component react to its own destruction",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2015-04-21T11:58:48.923-0400",
  "updated": "2015-11-12T14:45:40.600-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": "The latest version of Chrome and Safari\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-08-31T14:15:01.864-0400",
      "body": "Another option would be to use the mockTTS for these tests.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:45:40.598-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1382> and all activities should be carried on there.\n"
    }
  ]
}
---
An issue with the self voicing component in the integration test for the first discovery tool is, after all tests are run and the selfVoicing component is destroyed by the IoC testing framework, queued speeches continue to process and look for the selfVoicing component to read these speeches. This results in an error of referencing to a destroyed selfVoicing component.

The current work around is to override queueSpeech() in the selfVoicing component to fluid.identity() so speeches are not really queued and read in the integration test:\
<https://github.com/fluid-project/first-discovery/blob/master/tests/js/firstDiscoveryEditorTests.js#L34-L41>

The proper solution is the selfVoicing component should react to its own destruction by emptying its queue and nullifying its operations.

        