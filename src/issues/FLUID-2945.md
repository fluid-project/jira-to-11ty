---json
{
  "title": "FLUID-2945",
  "summary": "use jsonp like, syncronous approach, to get the data from the server and store it in a global variable on the template page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Justin Obara",
  "date": "2009-06-12T10:53:17.000-0400",
  "updated": "2009-08-24T11:17:03.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2922/",
      "key": "FLUID-2922",
      "summary": "Refactor php code to send all dependency JSON data"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-06-16T11:35:52.000-0400",
      "body": "Note that the variable (fluid.component.dependencies) above, can be any valid variable. So I should receive the $\\_POST\\[var] and then output that value in the json \"var \".$\\_POST\\[var].\" = {json data};\"&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-16T15:16:37.000-0400",
      "body": "The above description of how to do this contained some errors and we found a different way to solve the problem.\\\n1\\) var fluid.component.dependencies = {json data} is invalid syntax for setting an object property. The var needs to be removed. However when you do this, then you need to confirm that fluid.component.dependencies actually exists and can be assigned. This is a bit of a pain.\n\n2\\) The alternative was to return fluid.model.setBeanValue(window, \"fluid.component.dependencies\", {json data}); which sets the value to the json data as required.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-16T15:28:11.000-0400",
      "body": "Made this change as per description in last comment and then uploaded to <https://fluidproject.atlassian.net/browse/FLUID-2922#icft=FLUID-2922>\n"
    }
  ]
}
---
use jsonp like, synchronous approach, to get the data from the server and store it in a global variable on the template page

Here is an example of how this will look on the html doc:\
\<script src="[http://server.com/dependencies.php?var='fluid.components.dependencies](http://server.com/dependencies.php?var=%27fluid.components.dependencies)'"> \</script>\
(please note that this is not the standard jsonp approach, see link below, but a simple modification of it)

This script block should go in the \<head> and will perform synchronously, returning the data inside of the global variable fluid.components.dependencies.

When the \<script> at the end of the \<body> is called to init the component, it will pass in the variable as the options. if the call to the server errors, the variable will not be set.

The defaults for the components should render an error message saying the data couldn't be loaded.

For the server side, this approach does mean that the server will have to do a little more work in packaging up the return.\
Basically the side will return the variable passed in, see above, with the json data attached to it. The return would look something like this:\
"var fluid.component.dependencies = {json data};"

However, the advantage is that the it is simpler to implement, and we won't run into issues where the page loads the template and then renders out the actual page after waiting on the ajax call. Since the operation is synchronous the page will load after the call to the server is complete.

For more information about the JSONP approach, please view this document: <http://bob.pythonmac.org/archives/2005/12/05/remote-json-jsonp/>

        