---json
{
  "title": "FLUID-4681",
  "summary": "Rich text integration for inline edit flickers or closes up on startup when used with latest TinyMCE version and latest Firefox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2012-03-27T02:51:16.832-0400",
  "updated": "2024-07-22T09:39:03.571-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-03-27T02:53:16.272-0400",
      "body": "Current \"globalDismissal\" code from CSpace Utilities.js:\n\n/\\*\\* \"Global Dismissal Handler\" for the entire page. Attaches a click handler to the\n\n* &#x20;document root that will cause dismissal of any elements (typically dialogs) which\n* &#x20;have registered themselves. Dismissal through this route will automatically clean up\n* &#x20;the record - however, the dismisser themselves must take care to deregister in the case\n* &#x20;dismissal is triggered through the dialog interface itself. \\*/\n\n&#x20;   \\\nvar dismissList = {};\n\n$(document).click(function (event) {\\\nvar target = event.target;\\\nwhile (target) {\\\nif (dismissList\\[target.id]) {\\\nreturn;\\\n}\\\ntarget = target.parentNode;\\\n}\\\nfluid.each(dismissList, function (dismissFunc, key) {\\\ndismissFunc();\\\ndelete dismissList\\[key];\\\n});\\\n});\n\ncspace.util.globalDismissal = function (nodes, dismissFunc) {\\\nnodes = $(nodes);\\\nfluid.each(nodes, function (node) {\\\nvar id = fluid.allocateSimpleId(node);\\\nif (dismissFunc) {\\\ndismissList\\[id] = dismissFunc;\\\n}\\\nelse {\\\ndelete dismissList\\[id];\\\n}\\\n});\\\n};\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-04-30T07:14:01.618-0400",
      "body": "Merged into project repo at 88390cc667a227ba4f21e6ba4dfa070d23b1170e\n"
    }
  ]
}
---
Reported in today's IRC channel logs by NickMayne:\
<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2012-03-26>

The issue occurs on FF but not on Chrome. The issue appears to be a 3-way misunderstanding between the browser, jQuery and TinyMCE (and, naturally, us!). The user attempted to resolve "jumping on startup" issues by applying the option lazyInit = true, but this precipitated one of a number of failures on FF - most notably, that clicking on the editable region for the very first time to perform the edit causes it to immediately close up again. Tracing through the focus issues show this to be caused by the following interaction:

i) The InlineEditIntegrations.js attempts to apply focus to the newly created editable region, after applying a respectful delay - InlineEditIntegrations.js has

tinyMCE.execCommand('mceFocus', false, that.editField\[0].id);

ii) the tinyMCE implementation attempts to honour this focus by calling the focus() method of the raw DOM node corresponding to the editor body (actually the "body" HTML node of an iframe!!) -&#x20;

tiny\_mce\_src.js line 13187 has body.focus()

iii) this focus request leads DIRECTLY to a dispatch into the jQuery implementation for the blur handler for the proxy editable textarea element (no intervening stack frames are shown in Firebug). This leads to jQuery dispatching a synthetic "focusout" event for that element&#x20;

jquery-1.7.1.js line 3684 has&#x20;

jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );

where "fix" has the value "focusout"

iv) this triggers our deadMansBlur to start the blur timer for the end of the editing operation. Unfortunately,

v) the expected focus event dispatched by tinyMCE at step ii) never arrives. This is most likely a combination of Firefox's greater fastidiousness in refusing to trade in focus/blur events for nonfocusable DOM elements as defined by W3C, and the fact that the element receiving focus is nested within in iframe. As a result, the DMB timer elapses and the edit operation is cancelled.

Providing a fix for this issue will be messy, and will involve i) upgrading DMB to be potentially responsive to receiving NO focus event whatever within the timer period and still interpreting this as a "cancel handling blur" operation, and ii) being reponsive to (thankfully, new-style) "focusin" events anywhere in the document as well as explicit response to "click" to deal with the case where the user is "morally transfering focus to a nonfocusable element".&#x20;

It's a shame, since some of these elements were present in the historic "globalDismissal" strategy which was used in CSpace for this task, but was considered unnecessary compared to the apparently superior power of deadMansBlur - especially considering the problems that arose with IE8 in propagating focus/blur events in the wrong order. See FLUID-3487 for the long history of finally getting this functionality to work cross-platform (as it now turns out, only temporarily) - also discussion on CSPACE-3304, the corresponding issue in CollectionSpace:

<http://old.nabble.com/CSPACE-3304---dismissing-popup-areas-on-IE8-ts30470733.html>

        