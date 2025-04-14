---json
{
  "title": "FLUID-2642",
  "summary": "User-initiated no-Flash graceful degradation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-05-01T19:37:07.000-0400",
  "updated": "2011-02-22T16:27:52.848-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2642/FLUID-2642-a.patch",
      "filename": "FLUID-2642-a.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-05-01T19:41:26.000-0400",
      "body": "There are some challenges to implementing this. The place to configure this is either in progressiveEnhanceableUploader or in Uploader. The problem is that it needs data from both. Right now progressiveEnhanceableUploader doesn't have access to some of the options in Uploader because Uploader has not been initialized yet. And Uploader doesn't know about the enhanceable element in progressiveEnhanceableUploader since that is discarded after progressiveEnhanceableUploader has done it's work.&#x20;\n\nPerhaps the best way is to make the enhancable element an option of the Uploader which then gets passed into the Uploader on the options but used by progressiveEnhanceableUploader first.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-05T12:09:20.000-0400",
      "body": "Colin Clark and I worked out a way to handle this situation that is a mix of very light framework code that could be used by almost any component and a bit of rather specific (perhaps too) Uploader code. However, the Uploader's requirement that it be user enhancable and degradable is an edge case, and the framework really should carry the burden of supporting that odd functionality.&#x20;\n\nBelow is the code sketch that we worked out. (This is only a sketch and I'm putting it here for safe keeping until we implement the solution).&#x20;\n\nfluid.progressiveEnhanceableUploader = function (container, enhanceable, options) {\\\nenhanceable = fluid.container(enhanceable);\\\ncontainer = fluid.container(container);\n\n// setup the toggle, this is temp code, needs to be smart and DOM agnostic\\\nvar toggleElement = $(\".uploader-toggle-choice\",enhanceable);\\\ntoggleElement.removeClass(\"fl-uploader-hidden\");\\\ntoggleElement.click(function () {\\\nenhanceable.hide();\\\ncontainer.show();\\\n});\n\nif (swfobject.getFlashPlayerVersion().major < 9) {\\\n// Degrade gracefully.\\\nenhanceable.show();\\\n} else {\\\n// Instantiate the component.\\\ncontainer.show();\\\n$(\".uploader-toggle-choice\",container).click(function () {\\\ncontainer.hide();\\\nenhanceable.show();\\\n});\n\nreturn fluid.uploader(container, options);\\\n}\n\nvar options = {\\\nenhanceable: \"#thingy\",\\\nselectors: {\\\nenhancableToggleControl : \".foo\",\\\nenhanceable : \".uploader\\_basic\"\\\n}\\\n}\n\nfluid.uploader = function (container, options) {\n\n};\n\nfluid.progressiveEnhance = function (componentName, container, enhanceable, options) {\\\nvar systemCheck = fluid.invokeGlobalFunction(componentName + \".checkSystemRequirements\");\\\nif (systemCheck) {        \\\nvar component = fluid.invokeGlobalFunction(componentName, \\[container, options]);\\\ncomponent.enhanceable = enhanceable;\\\n} else {\\\ncontainer.hide();\\\nenhanceable.show();\\\n}\\\n};\n\nfluid.uploader = function (container, options) {\\\nif (that.enhanceable) {\\\n// write out link\\\n}\n\n//...\\\n};\n\nfluid.uploader.checkSystemRequirements = function (container, enhanceable, options) {\\\nvar goodFlash = swfobject.getFlashPlayerVersion().major > 8;\\\nif (goodFlash) {\\\nvar enhanceLink = \"\\<a href='#'>blah blah\\</a>\";\\\nenhanceLink.click(function () { \\\ncontainer.hide();\\\nenhanceable.show();\\\n});\\\nenhanceable.append(enhanceLink);\\\n}\\\nreturn goodFlash;\\\n};\n\n};\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-15T18:50:35.000-0400",
      "body": "Here's a patch with a working (though raw) implementation of clickToDegrade decorator. I ran into a snag trying to register this as an actual decorator on the component--this should be possible, but I haven't had enough time to debug the issues. But this works in a bare-bones style.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-18T17:08:25.000-0400",
      "body": "I think that the DOM for the enhancible links should be carried in the markup for maximum flexibility and then the selectors would be added to the clickToDegrade decorator.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-13T18:34:31.000-0400",
      "body": "This was fixed for Infusion 1.0\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:52.846-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Add functionality to the Uploader to allow users to switch between the Advanced Flash-based Multi-File Uploader and the generic form file uploader.

This should be a configuration option and be tied to progressive enhancement.&#x20;

        