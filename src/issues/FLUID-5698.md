---json
{
  "title": "FLUID-5698",
  "summary": "Remove all JavaScript from inside the Separated Panel configuration of the prefs framework's iframe",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Antranig Basman",
  "date": "2015-06-24T12:24:38.574-0400",
  "updated": "2016-09-06T09:53:03.619-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-06-24T13:20:51.141-0400",
      "body": "Once jQuery includes are removed from SeparatedPanelFrame.html, the error,\n\nTypeError: that.jQuery is not a function\n\nis thrown @ <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/SeparatedPanelPrefsEditor.js#L214>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-06-24T17:35:50.698-0400",
      "body": "Thanks for the investigation, @@Cindy Li - I think we can fix this with only a small amount of refactoring\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-04-18T14:24:59.615-0400",
      "body": "Work on the FD tool revealed that due to the poor implementation of the jQuery UI tooltip widget, if the prefs framework UI uses this widget, loading it within the iframe will require a 2nd copy of jQuery and the widget. However, the \"plain\" preferences framework we have here does not use the tooltip widget so it seems that we can indeed get rid of all JavaScript within the iframe in this configuration.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-04-18T15:36:23.971-0400",
      "body": "After some initial experimentation, it looks like removing all Javascript within the iframe doesn't cause any failing tests or initial obvious bugs, but it does cause the sliders to stop working properly (they no longer \"slide\" in response to user input). I assume but haven't dug too deeply that this is because of a similar jQuery UI issue to the one above, but will investigate further.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-04-19T14:32:11.920-0400",
      "body": "After speaking to @@Cindy Li and @@Michelle D'Souza I've created <https://fluidproject.atlassian.net/browse/FLUID-5892#icft=FLUID-5892>\n\nI believe once this is done we'll be able to remove all Javascript from HTML expected to be delivered to the iframe in cases where the dependencies (Infusion, jQuery, etc) are already present in the parent of the iframe.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-05-17T11:20:12.599-0400",
      "body": "This has been done as part of <https://fluidproject.atlassian.net/browse/FLUID-5892#icft=FLUID-5892> when the native HTML slider is used, as it makes having any JavaScript in the iframe unnecessary. Javascript in the iframe is still necessary when the jQuery UI-based slider is used due to its limitations. So to that end, two different iFrame templates have been created.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-09-06T09:53:03.591-0400",
      "body": "Closing since this went in as part of another PR.\n"
    }
  ]
}
---
Our current build system misunderstands the header material inside the file SeparatedPanelFrame.html and based on seeing some jQuery includes there, mistakenly includes an entire instance of infusion-custom.js - see this JIRA for an outstanding issue with the build system <https://issues.fluidproject.org/browse/FLUID-4394> - and see this mailing list item which reports that although the file is the same, the browser appears to download it twice, probably as a result of a race condition with respect to the iframe:

<http://lists.idrc.ocad.ca/pipermail/fluid-work/2015-June/009715.html>

In fact it's highly likely that no JS is required within this frame any more. As I recall, this was a compatibility issue that only affected IE8 or 9 with respect to attempts to manipulate content within an iframe from a jquery instance outside it. Now we support IE10 at a minimum we should be able to remove all JS from this frame and resolve both this issue and FLUID-4394.

        