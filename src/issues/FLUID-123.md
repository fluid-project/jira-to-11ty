---json
{
  "title": "FLUID-123",
  "summary": "Reorderer call to getAttribute(\"aaa:activedescendent\") sometimes fails in IE6 with \"Invalid argument\" error.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2007-11-23T09:00:42.000-0500",
  "updated": "2011-01-28T12:12:28.803-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Windows XP, IE 6 (non-hacked)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-126/",
      "key": "FLUID-126"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-123/FLUID-123_Reorderer.js.patch",
      "filename": "FLUID-123_Reorderer.js.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2007-11-23T09:04:49.000-0500",
      "body": "I've attached a patch to Reorderer.js that appears to resolve the problem, but I haven't done extensive enough tests to ensure it's safe. Can someone look at this for me?\n\nBasically, the patch removes the call to getAttribute to determine if the \"aaa:activedescendent\" attribute is present. Instead, it immediately calls removeAttribute(\"aaa:activedescent\") under the assumption that it's safe and faster to just attempt to remove the element, regardless of if it is present.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2007-11-23T09:23:55.000-0500",
      "body": "I think you should be using getAttributeNS and removeAttributeNS here. As in:\n\nif (this.domNode.getAttributeNS(\"<http://www.w3.org/2005/07/aaa>\", \"activedescendent\")) {\\\nthis.domNode.removeAttributeNS(\"<http://www.w3.org/2005/07/aaa>\", \"activedescendent\");\\\n}\n\nHaving said that, you only need to namespace ARIA states/properties on FF2 – the spec is being changed (FF3 implements the new behaviour.) Here's what I did in Dojo:\n\ngetWaiState: function(/**Element**/ elem, /**String**/ state){\\\n// Summary: Return the value of the requested state on elem\\\n//\t\tor an empty string if elem has no value for state.\\\n//\t\tOn Firefox 2 and below, we check for an attribute in namespace\\\n//\t\t\"<http://www.w3.org/2005/07/aaa>\" with a name of the given state.\\\n//\t\tOn all other browsers, we check for an attribute called\\\n//\t\t\"aria-\"+state.\\\nif(dojo.isFF && dojo.isFF < 3){\\\nreturn elem.getAttributeNS(\"<http://www.w3.org/2005/07/aaa>\", state);\\\n}else{\\\nvar value =  elem.getAttribute(\"aria-\"+state);\\\nreturn value ? value : \"\";\\\n}\\\n},\n\nremoveWaiState: function(/**Element**/ elem, /**String**/ state){\\\n// Summary: Removes the given state from elem.\\\n//\t\tOn Firefox 2 and below, we remove the attribute in namespace\\\n//\t\t\"<http://www.w3.org/2005/07/aaa>\" with a name of the given state.\\\n//\t\tOn all other browsers, we remove the attribute called\\\n//\t\t\"aria-\"+state.\\\nif(dojo.isFF && dojo.isFF < 3){\\\nelem.removeAttributeNS(\"<http://www.w3.org/2005/07/aaa>\", state);\\\n}else{\\\nelem.removeAttribute(\"aria-\"+state);\\\n}\\\n}\n\nfrom <http://trac.dojotoolkit.org/browser/dijit/trunk/_base/wai.js>\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-26T10:55:45.000-0500",
      "body": "One difference between 'Lightbox.html', and 'scheduler.html' is that the former declares namespaces for the aria 'wairole' and 'aaa'.  These are declared in the \\<html> element.  That might explain why a plain getAttribute() works in the context of the lightbox, but not in the case of the scheduler.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-26T16:12:24.000-0500",
      "body": "Michelle committed Colin's patch, and Anastasia checked it for her (paraphrase from and icq from MD).\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-26T16:19:15.000-0500",
      "body": "The patch fixed the immediate problem. We still need to address the issue of proper namespacing: we're adding attributes with the aaa: namespace without ever knowing if that namespace has actually been declared in the document. I'll file a separate JIRA.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-28T12:09:44.277-0500",
      "body": "Reopening these issues to add the reorderercomponent to them.\n"
    }
  ]
}
---
At least with the Scheduler markup and use of the Reorderer, there is an error in IE6 that renders it unusable. Upon instantiation of a Reorderer, IE6 complains that there is an "invalid argument:" on line 76 of the Reorderer:

if (this.domNode.getAttribute("aaa:activedescendent")) {\
this.domNode.removeAttribute("aaa:activedescendent");\
}

The problem seems to be with the call to getAttribute("aaa:activedescendent"). The SchedulerTests show the problem. It may be worth checking with Simon on the best way to be getting and setting these namespaced ARIA attributes.

My concern was that this may happen with any markup that initially lacks these attributes, but I can't get the todo list markup to reproduce. Perhaps it's a bug in the scheduler.

        