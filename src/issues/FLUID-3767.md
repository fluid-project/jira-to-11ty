---json
{
  "title": "FLUID-3767",
  "summary": "Evaluate and remove JQuery UI delegate plugin from Infusion distribution",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2010-09-29T20:33:48.285-0400",
  "updated": "2010-10-18T17:10:35.470-0400",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3767/FLUID-3767.patch",
      "filename": "FLUID-3767.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:00:12.114-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-14T17:26:05.002-0400",
      "body": "Attached patch which removes the delegate plugin from the core framework. Note that the patch doesn't seem to include the actual directory deletion owing to the stupid vagaries of SVN. Yura is at present evaluating a live use of \"focusin\" for CollectionSpace and if the functionality continues to work, it is good evidence that the delegation is implemented adequately for our purposes. I did track down one live use of the feature within the renderer's \"reRender\" path.&#x20;\n"
    },
    {
      "author": "y z",
      "date": "2010-10-15T13:03:48.016-0400",
      "body": "jQuery focusin implementation seems to be working well with cspace implementation of dead man's blur. There's even no need to use live or delegate to bind to focusin and the example of implementation can be currently in the patch that is soon going to be committed to cspace: <http://issues.collectionspace.org/secure/attachment/11136/CSPACE-3037.3.patch.txt> . It has both the implementation and the test cases for blurring and exclusions.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-15T16:10:43.015-0400",
      "body": "Testing has revealed a significant difference between the 1.4.2 core functionality and the delegate plugin - the first two arguments to $.delegate have been swapped round. This grievous incompatibility means that CSpace repeatable will need to be patched once this framework upgrade reaches it, since it uses $.delegate to bind events to the dynamically generated component material. For example, from jquery.ui.delegate.js:\n\ndelegate: function(type, delegate, handler) {\n\nwhereas from jQuery 1.4.3:\n\ndelegate: function( selector, types, data, fn ) {\\\nreturn this.live( types, data, fn, selector );\\\n},\n\nThere is some commentary from people who believed they had gone crazy, on the delegate API docs page: <http://api.jquery.com/delegate/>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-18T01:01:34.141-0400",
      "body": "Fixed at revision 10147. Documentation update is required as part of release notes.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-10-18T17:10:35.469-0400",
      "body": "I've reviewed and spot tested this issue. It looks good to me.&#x20;\n"
    }
  ]
}
---
The advertisement for jQuery 1.4 <http://net.tutsplus.com/tutorials/javascript-ajax/jquery-1-4-released-the-15-new-features-you-must-know/> explains under item 5 that it appears the the focus event delegation functionality that we used to depend on the jQuery UI delegate plugin (jquery.delegate.js) for is now provided as part of the JQuery core framework. Indeed, looking through the source for jQuery 1.4.2 shows the following suggestive section at line 2341:

// Create "bubbling" focus and blur events\
if ( document.addEventListener ) {\
jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {\
jQuery.event.special\[ fix ] = {

This appears to be a "modern-style" (that is, without explicit browser version detects) implementation of the functionality in jquery.delegate.js, with the rest of the functionality supplied in the generalised core framework utility $.delegate(). As far as I can tell this is an essentially 100% compatible implementation of this functionality within the core framework. We should verify that this indeed the case and if so remove the file and its dependency entry from our distribution.

As far as I am aware this feature is not yet used by the core framework or components itself, but was just so far used for testing purposes. However, it is likely that it might become useful quite soon - there are some focus-related issues in the currently being improved InlineEdit widget, and also in CollectionSpace autocomplete widget, that might benefit from it.

        