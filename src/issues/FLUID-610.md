---json
{
  "title": "FLUID-610",
  "summary": "Upload component blocks client-side access to server-side data",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Former user",
  "date": "2008-05-16T17:56:31.000-0400",
  "updated": "2008-07-11T16:07:11.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-610/FLUID-610-uploader.patch",
      "filename": "FLUID-610-uploader.patch"
    }
  ],
  "comments": [
    {
      "author": "Former user",
      "date": "2008-05-16T17:59:38.000-0400",
      "body": "Since Eli isn't working today and the Toronto team is heading towards a long weekend, I'll have a try at hacking together a solution. If I'm successful, I'll attach it as a patch.\n"
    },
    {
      "author": "Former user",
      "date": "2008-05-16T20:51:29.000-0400",
      "body": "I've attached a MultiFileUpload.js patch which works with the version of Image Gallery that I'm about to check in.\n\nIt adds one new option to \"settings\":\n\nwhenFileUploaded : function to call when the server reports that an individual file has been successfully stored. It will receive two parameters: \"fileName\" (for the file name as known to the client; note that this is not guaranteed to be unique) and \"serverResponse\" (for the character string returned by the server, usually some sort of server-meaningful ID).\n\nHere's the sample from the Gallery page:\n\nvar settings =   {\\\nfileTypes: \"**.gif;**.jpeg;**.jpg;**.png;\\*.tiff\",\\\nfileTypesText: \"image files\",\\\ncontinueAfterUpload: false,\\\nwhenFileUploaded: function(fileName, serverResponse) {\\\nconsole.log(\"whenFileUploaded called; fileName=\" + fileName + \", serverResponse=\" + serverResponse);\\\njQuery('#new-image-form').append('\\<input type=\"hidden\" name=\"imageIds\" value=\"' + serverResponse + '\"/>');\\\n},\\\ndebug: true\\\n};\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-05-19T13:40:24.000-0400",
      "body": "committed Ray's patch. Current uploader is working against reference JAVA app. May need some re-factoring for other instances\n"
    }
  ]
}
---
The swfupload API lets clients specify an "upload\_success\_handler" callback to receive notifications for each successfully uploaded file. This includes a "server\_data" argument which holds some text response from the file-upload request.

Because literally no identifiers are guaranteed to be shared between a file as the client-side knows it and as the server-side knows it, this argument is needed to keep the two aspects of the application synchronized.

For example, in the primitive Image Gallery demo program, the server returns a unique ID for each successfully stored file, client-side JavaScript accumulates those IDs in hidden input fields, and then they're passed along to the next page in the workflow, "Add Information to New Images". If the client code didn't have access to those IDs, there'd be no easy way to distinguish just which images had been added as part of the current session.

The current implementation of MultiFileUpload doesn't appear to give client-side access to the data which has been returned from an individual file upload to swfupload.

        