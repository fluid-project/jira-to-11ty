---json
{
  "title": "FLUID-1678",
  "summary": "Implement support for UIMessage component and template-driven msg= messages for I18N support",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-10-10T19:07:54.000-0400",
  "updated": "2011-02-22T16:27:56.037-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1679/",
      "key": "FLUID-1679",
      "summary": "Implement support for parsing standard Java .properties files on the client-side"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-01-19T21:14:23.000-0500",
      "body": "This was essentially concluded for 0.6 in that all the basic parsing code, component support and test cases were committed. There is perhaps a requirement to allow the automatic fetch of message bundle files to be integrated into a standard \"fetchResources\" workflow, but it would be best to wait for user feedback regarding the existing features.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:56.035-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Crucial features of the client-side renderer include support for the subsitution of internationalised messages within templates. In the "historical" RSF Server framework, these are implemented by a component UIMessage, an interface MessageLocator, and a template syntax as rsf:id="msg=message-key". Equivalents of all of these mechanisms should be implemented on the client-side.

        