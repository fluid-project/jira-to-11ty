---json
{
  "title": "FLUID-4382",
  "summary": "Blank screen on Uploader demo from the build site when using IE9 Windows 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Harris Wong",
  "date": "2011-07-29T09:47:16.004-0400",
  "updated": "2024-07-22T09:41:17.883-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": "Windows 7 Professional IE 9, Service Pack 1\\\n64x machine\\\nNo flash installed on IE9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-07-29T09:47:55.605-0400",
      "body": "Log messages:\\\n\\-------------------------------------------------------------------------\r\\\nLOG: 09:33:26.278:  Resolving demands for function names fluid.transformOptions in context of component fluid.uploader \\\nLOG: 09:33:26.278:  Components in scope for resolution:\\\n{ typeName: \"fluid.uploader\" id: 3vptys63-5}\\\n{ typeName: \"fluid.dynamicEnvironment\" id: 3vptys63-4}\\\n{ typeName: \"fluid.instantiator\" id: 3vptys63-7}\\\n{ typeName: \"fluid.staticEnvironment\" id: 3vptys63-2}\\\n{ typeName: \"fluid.browser\" id: 3vptys63-3} \\\nLOG: 09:33:26.281:  Beginning instantiation of component with name \"uploaderContext\" as child of { typeName: \"fluid.uploader\" id: 3vptys63-5} \\\nLOG: 09:33:26.282:  Resolving demands for function names fluid.progressiveCheckerForComponent,uploaderContext in context of component fluid.uploader \\\nLOG: 09:33:26.282:  Components in scope for resolution:\\\n{ typeName: \"fluid.uploader\" id: 3vptys63-5}\\\n{ typeName: \"fluid.dynamicEnvironment\" id: 3vptys63-4}\\\n{ typeName: \"fluid.instantiator\" id: 3vptys63-8}\\\n{ typeName: \"fluid.staticEnvironment\" id: 3vptys63-2}\\\n{ typeName: \"fluid.browser\" id: 3vptys63-3} \\\nLOG: 09:33:26.282:  No matches found for demands, using direct implementation \\\nLOG: 09:33:26.297:  Resolving demands for function names fluid.transformOptions in context of component fluid.progressiveCheckerForComponent \\\nLOG: 09:33:26.298:  Components in scope for resolution:\\\n{ typeName: \"fluid.progressiveCheckerForComponent\" id: 3vptys63-9} - path: uploaderContext\\\n{ typeName: \"fluid.uploader\" id: 3vptys63-5}\\\n{ typeName: \"fluid.dynamicEnvironment\" id: 3vptys63-4}\\\n{ typeName: \"fluid.instantiator\" id: 3vptys63-8}\\\n{ typeName: \"fluid.staticEnvironment\" id: 3vptys63-2}\\\n{ typeName: \"fluid.browser\" id: 3vptys63-3} \\\nLOG: 09:33:26.315:  Resolving demands for function names fluid.transformOptions in context of component fluid.progressiveChecker \\\nLOG: 09:33:26.315:  Components in scope for resolution:\\\n{ typeName: \"fluid.uploader\" id: 3vptys63-5}\\\n{ typeName: \"fluid.dynamicEnvironment\" id: 3vptys63-4}\\\n{ typeName: \"fluid.instantiator\" id: 3vptys63-8}\\\n{ typeName: \"fluid.staticEnvironment\" id: 3vptys63-2}\\\n{ typeName: \"fluid.browser\" id: 3vptys63-3} \\\nLOG: 09:33:26.316:  Finished instantiation of component with name \"uploaderContext\" as child of { typeName: \"fluid.uploader\" id: 3vptys63-5} \\\nLOG: 09:33:26.316:  Beginning instantiation of component with name \"uploaderImpl\" as child of { typeName: \"fluid.uploader\" id: 3vptys63-5} \\\nLOG: 09:33:26.317:  Resolving demands for function names fluid.uploaderImpl,uploaderImpl in context of component fluid.uploader \\\nLOG: 09:33:26.318:  Components in scope for resolution:\\\n{ typeName: \"fluid.uploader\" id: 3vptys63-5}\\\n{ typeName: \"fluid.uploader.singleFile\" id: 3vptys63-11} - path: uploaderContext\\\n{ typeName: \"fluid.dynamicEnvironment\" id: 3vptys63-4}\\\n{ typeName: \"fluid.instantiator\" id: 3vptys63-8}\\\n{ typeName: \"fluid.staticEnvironment\" id: 3vptys63-2}\\\n{ typeName: \"fluid.browser\" id: 3vptys63-3} \\\nLOG: 09:33:26.318:  Located 3 potential matches, selected best match with 2 matched context names: \\[object Object] \\\nLOG: 09:33:26.337:  Resolving demands for function names fluid.transformOptions in context of component fluid.uploader.singleFileUploader \\\nLOG: 09:33:26.338:  Components in scope for resolution:\\\n{ typeName: \"fluid.uploader.singleFileUploader\" id: 3vptys63-12} - path: uploaderImpl\\\n{ typeName: \"fluid.uploader\" id: 3vptys63-5}\\\n{ typeName: \"fluid.uploader.singleFile\" id: 3vptys63-11} - path: uploaderContext\\\n{ typeName: \"fluid.dynamicEnvironment\" id: 3vptys63-4}\\\n{ typeName: \"fluid.instantiator\" id: 3vptys63-8}\\\n{ typeName: \"fluid.staticEnvironment\" id: 3vptys63-2}\\\n{ typeName: \"fluid.browser\" id: 3vptys63-3} \\\nLOG: 09:33:26.340:  Finished instantiation of component with name \"uploaderImpl\" as child of { typeName: \"fluid.uploader\" id: 3vptys63-5}&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-29T12:52:31.490-0400",
      "body": "Uploader.js line 733:\\\ntoggleVisibility($(that.options.selectors.basicUpload), that.container);\n\n$(that.options.selectors.basicUpload) => null\\\nthat.options.selectors.basicUpload => \".fl-progEnhance-basic\"\n\nwhy is it returning a null?\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-29T13:21:45.014-0400",
      "body": "I did a $('body').html() after uploader is initialized, i don't see the basic html markup included in the container.  I looked at the uploader demo, and saw the following, <https://github.com/harriswong/infusion/blob/master/src/webapp/components/uploader/html/Uploader.html#L50>,&#x20;\n\nIt seems like \"flc-uploader fl-uploader\" are only applying to the multi file uploader but excluding the single file uploader.  Should there be a container that wraps both the singleFile and multieFile uploader with class=\"flc-uploader fl-uploader\" instead?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-07-29T14:19:19.618-0400",
      "body": "Hi Harris,\n\nThe single file upload controls should be in a separate container from the full Uploader's markup. Here's the code in question:\n\n<https://github.com/harriswong/infusion/blob/master/src/webapp/components/uploader/js/Uploader.js#L730-735>\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-09-19T13:39:05.989-0400",
      "body": "Same bug as <https://fluidproject.atlassian.net/browse/FLUID-4444#icft=FLUID-4444> which has now been resolved.\n"
    }
  ]
}
---
steps to reproduce:\
1\. Use IE9 on a Windows 7 machine, loads up <http://build.fluidproject.org/infusion/demos/uploader/html/uploader.html>\
2\. Get blank screen.

        