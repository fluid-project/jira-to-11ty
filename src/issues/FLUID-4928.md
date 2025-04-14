---json
{
  "title": "FLUID-4928",
  "summary": "Implement \"visibility model\" scheme for directly mapping model state onto state of DOM nodes and others",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2013-03-08T02:02:35.305-0500",
  "updated": "2021-06-21T11:30:00.299-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder",
    "IoC System",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3387/",
      "key": "FLUID-3387",
      "summary": "Renderer autoBinding doesn't properly update display with changed model values"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4718/",
      "key": "FLUID-4718",
      "summary": "Dropdowns are not correctly associated with their labels"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5976/",
      "key": "FLUID-5976"
    }
  ],
  "attachments": [],
  "comments": []
}
---
A feature considered for some time has been the ability to declaratively associate various model state conditions directly with visible representations in the DOM. The most obvious use case for this is associating model state consisting of boolean flags with visibility/enabledness of linked DOM nodes using $.hide/show and $.prop("disabled"), etc.

The earliest discussion on this issue can be traced to IRC logs from January 2012:

<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2012-01-26>

Some other linked discussion is on <https://fluidproject.atlassian.net/browse/FLUID-4718#icft=FLUID-4718> where a large comment speculates about the relation of such a feature to the "new renderer". An obvious incremental generalisation of this feature is to directly map changes in model state onto DOM UI rendered by the renderer into incremental DOM manipulations without a wholesale invocation of the whole renderer. Through further increments in sophistication, this implementation would shade into invocations of the renderer itself, e.g. for entire table rows etc.

There is a "proto-framework" implementation of this feature available in the VideoPlayer under the name "fluid.videoPlayer.showHide":&#x20;

<https://github.com/fluid-project/videoPlayer/blob/master/js/VideoPlayer_showHide.js>

This designates a portion of the model as particularly relating to DOM visibility having the format:

```java
model: {
            isShown: {
                // A list of flags (true or false) to define the showing/hiding of any selectors
                // in a component. Example:
                // "scrubber.handle": false
                // "scrubber" is the identifier defined in the option "showHidePath", normally the 
                // unique component name. "handle" is the selector defined in the "scrubber" component.
            }
```

Some "prior art" for this framework feature is the binding system of "knockout.js", for example, the "visible" binding described here:

<http://knockoutjs.com/documentation/visible-binding.html>

This feature is the natural inverse of the Fluid renderer's "autoBind" feature, and various artefacts in the renderer's implementation such as the mysterious thoroughness of dumping bindings for component fragments as in the following for UISelect:

dumpBoundFields(uiselect.selection);\
dumpBoundFields(uiselect.optionlist);\
dumpBoundFields(uiselect.optionnames);

suggest that this feature was always envisaged.

        