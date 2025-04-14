---json
{
  "title": "FLUID-2371",
  "summary": "Resizing the text does not change the size of the text's container, in the dialog",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-03-17T12:53:49.000-0400",
  "updated": "2009-05-05T13:09:15.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF3 (Win Vista, Mac 0S 10.5)\\\nFF2 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2397/",
      "key": "FLUID-2397"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2433/",
      "key": "FLUID-2433"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2371/FLUID-2371.patch",
      "filename": "FLUID-2371.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2371/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T12:54:46.000-0400",
      "body": "'screenshot-1' shows some issues with the resized text\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-17T13:27:36.000-0400",
      "body": "comment removed\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-25T09:31:39.000-0400",
      "body": "This is the html part that was missing in the original commit. It applies the class names to enforce the fix.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-25T10:30:11.000-0400",
      "body": "This fix works for the Reset, Cancel and Save and Apply buttons. The issue still occurs for the dropdowns etc.&#x20;\n\nThe css file has a commented out style in it that should be removed rather then commented out.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-05T13:09:15.000-0400",
      "body": "This issue is fixed with <https://fluidproject.atlassian.net/browse/FLUID-2425#icft=FLUID-2425>. Since the dialog is closed on saving, it is appropriately repainted when the dialog is re-openned.\n"
    }
  ]
}
---
Resizing the text does not change the size of the text's container in the dialog

Steps tor reproduce:

1\) Open the sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Open the UI Options dialog

3\) Increase the minimum text size and click save the change

Notice that the text has expanded but the containers they are in haven't&#x20;

        