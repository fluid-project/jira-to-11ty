---json
{
  "title": "FLUID-3474",
  "summary": "Refreshing the page while a package is being built throws an error: using Safari",
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
  "date": "2010-01-08T08:39:55.000-0500",
  "updated": "2014-03-03T11:20:12.406-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "Safari 4 (Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2010-01-08T08:49:02.000-0500",
      "body": "While I'm not sure exactly what is causing this, I do have an idea of how to aviod it. The logic in builder.php is as follows:\\\n1\\) if get\\['var'] is in the $\\_GET variable then default to the jsonProcessor.php code - show the download page\\\n2\\) if post\\['selection\\_choice'], etc. is in the $\\_POST variable then process the build request\\\n3\\) if neither of the above then show an error page (likely someone is trying to hack).\n\nA better way to handle this might be to default to the first alternative unless the post variables are in place. This will prevent hacking but also return a sensible result in all cases.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:12.398-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Refreshing the page while a package is being built throws an error

Steps to reproduce:

1\) Open the Infusion Builder\
<http://forge.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>

2\) Select a set of modules that haven't been cached.

3\) While the package is being built reload the page.

Notice that a white page with text that says "Error"  appears.

Here is the information from the response header.

<http://forge.fluidproject.org/infusionBuilder/php/builder.php>\
Response Headers\
Connection:close\
Content-Encoding:gzip\
Content-Length:50\
Content-Type:text/html\
Date:Fri, 08 Jan 2010 13:25:58 GMT\
Server:Apache/2.2.9 (Debian) PHP/5.2.6-1+lenny4 with Suhosin-Patch\
Status:400\
Vary:Accept-Encoding\
X-Powered-By:PHP/5.2.6-1+lenny4

It appears that the refresh is happening on builder.php instead of InfusionBuilder.html

        