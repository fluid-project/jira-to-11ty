---json
{
  "title": "FLUID-140",
  "summary": "Unit tests, examples, server-side templates should not be included within the deployment bundle.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Colin Clark",
  "date": "2007-12-01T17:49:06.000-0500",
  "updated": "2008-04-08T14:32:32.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-140/build.xml",
      "filename": "build.xml"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2007-12-01T18:01:25.000-0500",
      "body": "To be even more concrete, we probably want our release bundle to look like this:\n\nfluid-components/\\\ncss/\\\njs/\n\nsample-code/\\\nmarkupExamples/\n\nserver-side-templates/\\\nLightbox.html\\\nLightboxRSF.jar\n\ntests/\\\njsunit/\\\nfluid-tests/\n\nbuild-scripts/\\\nlib/\n\npatches/\n\ndocumentation/\n\nThat way, deployers can simply drop just the fluid-components directory into their webserver and start building UIs with Fluid.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2008-02-08T11:34:55.000-0500",
      "body": "An example of an ant build script that builds and creates a distribution.  Use this as a guide.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-02-12T14:17:16.000-0500",
      "body": "A wrinkle in the above structure...  markupExamples are used by the tests. By separating the markup from the tests, we could be creating some confusion by not depicting the dependency with the structure.\n\nBigger question:\n\n* Will we ever distribute markup examples without tests?\n* Do we want markup examples tightly bound to tests?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-02-14T14:23:03.000-0500",
      "body": "I think we should be fine to use relative paths between the tests and the markup examples, since they will always be co-located. It's only dependencies inside the server-side templates that are a concern.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-02-14T14:27:27.000-0500",
      "body": "Here's the final directory structure that Jonathan and I decided on:\n\ncomponents/trunk\n\ntoolkit/\\\ncss\\\nLightbox.css\\\njs\\\nFluid.js\\\nLightbox.js\\\nhtml\\\nLightbox.html\n\nsample-code/\\\nmarkup-examples/\\\nreorderer/\\\nabstract\\\nconcrete\n\ntests/\n\nbuild-scripts/\\\nbuild.xml\\\npom.xml\n\npatches/\n\nWEB-INF/\\\nweb.xml\n\nThe Ant build script will have to build the necessary structure for Maven to build a war file. This will be done as a by-product of the \"build-war\" target.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-02-15T08:43:06.000-0500",
      "body": "I appreciate the adjustment to bring html/js/css under a common root, but I'm still not very fond of the name \"toolkit\" which doesn't feel very \"inviting\" as a thing to find at top level? I'm not sure I would expect to know what to find in there, and to realise that it contained the \"main value\" of the package. What did we dislike about \"fluid-components\"?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-02-15T11:37:37.000-0500",
      "body": "Antranig,\n\nMy initial hesitation to continue using fluid-components as the name was that it felt redundant, at least from the svn perspective since the code will already be in a directory structure of fluid/components/. But on second thought, this doesn't apply to the final package.\n\nWe did some more brainstorming on names and ultimately concluded that fluid-components is probably just fine as the name. 🙂\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-02-16T16:45:21.000-0500",
      "body": "With further thinking, I'm wondering if un-nesting our code from the war file structure expected by Maven is an inconvenient idea. It will require at least an extra step when building any war file that depends on Fluid, since you'll need to run the ant target and then build your dependencies. I'm going to look more into Ant/Maven integration, but we may be able to achieve most of the desired effect with the following structure:\n\nsrc\\\nwebapp\\\nfluid-components\\\ncss\\\nhtml\\\nimages\\\njs\\\nWEB-INF/\\\ntests\\\nsample-code\\\nbuild-scripts\n\nAnd then the Ant build can produce the final structure as above for distribution.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-02-27T13:00:00.000-0500",
      "body": "There may be a problem with this proposed structure. With respect to tests and sample-code, our \"work\" and \"distro\" source trees are different. This would mean that if our tests and sample code work in one structure, it will not work in the other.\n\nAn idea was to use Ant's Filter & Token task to change the paths in the test and sample code files during execution of the ant build script. However, this will not work because Ant only replaces a token embedded in the file with a specified value in the Ant script. Hence we will not be able to replace the paths we want unless we place tokens (like @replaceMe@) into the path itself, which makes such paths unusable for most purposes.\n\nAnastasia suggested something like sed to do string replacement, but this will not work on Windows. There could be other alternatives like finding a suitable Ant task to plug in.\n\nPerhaps it will be easier to decide on a structure that will be the same for both work and build versions.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-04-08T14:32:32.000-0400",
      "body": "The new Ant build script works great!\n"
    }
  ]
}
---
Currently, the bundles we ship for deployment of Fluid 0.1 (the component-templates directory and the fluid-components-0.1.war)  also contain all our unit tests as well. We should split these out from the deployment artifact so we're not shipping non-production code in the actual package.

So, in other words, the deployment package for Fluid should only contain material that needs to be deployed to the web server directly:

1\. Fluid JavaScript and its dependencies (jQuery, etc)\
2\. CSS\
3\. Static (ie. non templates) HTML documents\
4\. Images used by the components themselves, but not as sample data

So we'll want to move unit tests, Lightbox.html, the fruit images, and the entire tests directory to a separate spot.

        