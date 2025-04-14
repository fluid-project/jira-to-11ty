---json
{
  "title": "FLUID-2472",
  "summary": "Text inside a combobox does not resize the same as the rest of the text: using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-04-02T11:45:24.000-0400",
  "updated": "2013-10-04T10:25:10.477-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Safari 3.2 (Mac OS 10.4, Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2519/",
      "key": "FLUID-2519"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2472/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-02T11:46:47.000-0400",
      "body": "'screenshot-1' shows the text inside the combobox much smaller than the rest of the text on the page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:29:21.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-20T21:16:20.000-0400",
      "body": "I can't imagine this is resolvable if it is not implemented by the browser. We should mark this as \"escalate\" (at least, if it can be verified that it is not the effect of using a dynamically injected style sheet rather than a statically included one).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:18:53.558-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-27T16:09:42.898-0400",
      "body": "This is not an issue with Safari 5\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-27T16:13:57.801-0400",
      "body": "Non A-Grade&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:10:17.034-0400",
      "body": "Testing this in v1.4, I cannot reproduce it: the text in the drop-downs seems to resize appropriately.\n"
    }
  ]
}
---
Text inside a combobox does not resize the same as the rest of the text

Steps to reproduce:

1\) Open the UI Options example or the Sakai mock-up example\
<http://build.fluidproject.org/infusion/components/uiOptions/html/UIOptions.html>\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Change the font size to the maximum or minimum size

Notice that text inside the comboboxes do not scale with the rest of text on the page

        