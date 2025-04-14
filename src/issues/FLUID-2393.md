---json
{
  "title": "FLUID-2393",
  "summary": "Cookies are not saved: Using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-03-23T11:27:15.000-0400",
  "updated": "2009-03-25T10:07:52.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-23T11:27:37.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-23T11:55:14.000-0400",
      "body": "It appears that Opera doesn't like double quotes (\") in the cookie. It will accept single quotes (') though\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-24T15:16:22.000-0400",
      "body": "I fixed the issue by not storing the cookie using JSON.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-24T16:31:31.000-0400",
      "body": "Colin review this and suggested using JSON and URI encoding.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-24T16:41:40.000-0400",
      "body": "Using JSON and URI encoding works fine in Opera.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-25T10:04:10.000-0400",
      "body": "Looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T10:07:52.000-0400",
      "body": "Verified fix using:\n\nOpera 9.6 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Cookies are not saved: Using Opera

Steps to reproduce:

1\) Open the UI Optinos example\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) Change some option and save

3\) Refresh the page, notice that the changes are reset

This also causes errors in the UIEnhancer unit test page

        