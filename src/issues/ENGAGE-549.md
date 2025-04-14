---json
{
  "title": "ENGAGE-549",
  "summary": "Architecture: Determine the viability of server-side JavaScript using Jack and JSGI",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-06-02T19:19:13.000-0400",
  "updated": "2014-03-03T14:28:51.448-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-06-04T09:41:19.000-0400",
      "body": "Here's a zip file containing a checkout of Narwhal and Jack, along with a simple hello world-type test. There's a directory called \"perftest\" in here that is intended for the performance test application. Things to figure out:\n\n1\\. Do we need to call setTimeout() in runTests()? If so, what alternative do we have in Rhino/Narwhal? Or do we need to use Env.js?\\\n2\\. Get the Renderer to work without the DOM. This should be easy:\n\n* Call parseTemplates() and renderTemplates() instead of selfRender. renderTemplates() will need a resourceSpec object, but it should be fairly easy to create, using the implementation in selfRender() as an example. Some documentation:\n\n<http://wiki.fluidproject.org/display/fluid/Renderer+API#RendererAPI-fetchResources>\n\nAfter that, it should be as simple as packaging up everything as a module and then running it, appending the results of the Renderer to the body of the response.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-06-04T16:13:16.000-0400",
      "body": "Note that despite what the readme says, for the examples to run as is, jack needs to be inside the narwhal directory. This will make the symlinks to jackup incorrect so run the example from the jack directory like this:\\\nbin/jackup examples/example.js\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-06-05T00:31:56.000-0400",
      "body": "Here's an updated zip file containing narwhal and jack, along with a SecureModules package for InfusionAll.js. Due to our heavy dependence on jQuery, I had to also include Envjs, which is automatically imported if you load Infusion via Narwhal's package loader like this:\n\nvar fluid = require(\"infusion\").fluid;\n\nI've also moved the perftests jack app to into the narwhal directory (not exactly sure why; it should be able to go anywhere) and updated the app to load our perftest.html template and return it as the text of the response.\n\nNext steps: feed the text of that template file to parseTemplates() and renderTemplates(), returning the response. Obviously the code from perftests.js will have to be moved into scope for the app.\n"
    }
  ]
}
---
We're interested in the possibility of building Infusion's services layer using JavaScript running on the server. This would allow us to use much of our existing infrastructure from Infusion while using a widely familiar language.

Biggest concerns come from the lack of infrastructure and potential speed issues. Since JSGI and Jack help to address the infrastructure issue, let's get a sense of how fast or slow this stuff will be running in Rhino on the JVM.

        