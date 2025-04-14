---json
{
  "title": "FLUID-2938",
  "summary": "swfUploadSetupDecorator options not being passed on",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2009-06-10T12:34:48.000-0400",
  "updated": "2011-01-20T15:09:45.269-0500",
  "versions": [
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-06-29T17:36:17.000-0400",
      "body": "This isn't actually a bug, though it is remarkably confusing. Since there may be several decorators attached to a component, the decorator options need to be wrapped in an array, even if there is only one decorator being specified. This code should work:\n\nvar myUploader = fluid.progressiveEnhanceableUploader(\".flc-uploader\", \".fl-progEnhance-basic\", {\\\ndemo: true,\\\nuploadManager: \"fluid.swfUploadManager\",\\\ndecorators: \\[{\\\ntype: \"fluid.swfUploadSetupDecorator\",\\\noptions: {\\\nflashButtonImageURL: \"../images/error.png\"\\\n}\\\n}]\\\n};\n\nNote the square brackets around the value of decorators:\n\nThe larger issue of how decorators are configured will be fixed with the introduction of our new IoC container in Infusion 1.2. Keep an eye out for it soon.\n"
    }
  ]
}
---
When the Uploader options are used to specify a non-custom browse button url for the swfUploadSetupDecorator, the options are not reaching the swfUploadSetupDecorator subcomponent, and the default button url is still being used.

To reproduce:

Assuming you're working on a locally checked out copy of the code:\
1\) Edit the Uploader template file at components/uploader/html/Uploader.html\
2\) Add a decorators option to the script block, as follows:\
var myUploader = fluid.progressiveEnhanceableUploader(".flc-uploader", ".fl-progEnhance-basic", {\
demo: true,\
uploadManager: "fluid.swfUploadManager",\
decorators: {\
type: "fluid.swfUploadSetupDecorator",\
options: {\
flashButtonImageURL: "../images/error.png"\
}\
}\
(note that the flashButtonImageURL can be anything other than the default string, which is "../images.browse.png")\
3\) Reload the template file in the browser.

Note that the default browse button image is still being used.

        