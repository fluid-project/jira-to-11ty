---json
{
  "title": "FLUID-5355",
  "summary": "Climate Change demo should handle the case where the TTS server is unavailable.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2014-05-01T11:45:36.157-0400",
  "updated": "2015-06-26T09:57:42.400-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos",
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-01T11:46:01.777-0400",
      "body": "A first step solution may be to just use a browser alert to notify the user that the server is unavailable.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-01T13:32:16.424-0400",
      "body": "@@Michelle D'Souza I attempted to implement a simple solution for this using the onError event from the SelfVoicingEnactor: \\\n<https://github.com/fluid-project/infusion/blob/master/src/demos/prefsFramework/js/SelfVoicingEnactor.js#L103-L106>\n\nThis works okay in Firefox, but the event isn't triggered in Chrome. It appears that Chrome throws an error as soon as the resource is inaccessible, preventing our error event pipeline from triggering.\n\nIs it enough to have this working just in Firefox? (only firefox and chrome support the TTS enactor).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-02T10:30:28.127-0400",
      "body": "I did some more experimentation with this to see if I could use a try-catch block to get at the error, but this didn't work either. This is possibly a result of asynchrony in retrieving the resource.&#x20;\n\nIt appears that the library we are using to manage the audio, has an open issue for this <https://github.com/jaysalvat/buzz/issues/64>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-05T12:22:19.073-0400",
      "body": "Submitted a pull request to handle the error in Firefox. \\\n<https://github.com/fluid-project/infusion/pull/511>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-05-05T15:10:20.985-0400",
      "body": "The pull request has been merged into the project repo @ 2a94c0771e675fabf51f617c8d958e87d29e4f4f\n\nNote that the fix pops up the alert window in firefox but not in chrome.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T14:45:42.661-0400",
      "body": "The TTS Server is no longer being used. Instead, TTS is supplied via the web speech api. Browsers that don't support the web speech api, do not show the adjuster.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:49.805-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The climate change demo's text-to-speech feature requires access to a server hosted at the IDRC. The demo should ensure to handle the case where the server is down or otherwise inaccessible (e.g. running locally without internet access).&#x20;

        