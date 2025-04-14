---json
{
  "title": "FLUID-4109",
  "summary": "layoutReorderer demo has a \"demo is not defined\" error on load",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Harris Wong",
  "date": "2011-02-23T15:44:06.242-0500",
  "updated": "2011-06-06T17:52:37.416-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Layout Reorderer"
  ],
  "environment": "WinXP FF, IE8\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4109/layoutReorderer-error.png",
      "filename": "layoutReorderer-error.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:42:59.428-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-30T15:30:17.647-0400",
      "body": "In master, \"\\<script type=\"text/javascript\" src=\"../js/layoutReorderer.js\">\\</script>\" is already added in demos/reorderer/layoutReorderer/html/layoutReorderer.html.  Check the 1.4-src again before resolving. &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-02T14:46:34.415-0400",
      "body": "Run ant infusionAllBuilds, then you will get the error.  Screen shot layoutReorderer-error.png attached.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-02T17:00:24.942-0400",
      "body": "Seems like build.js's that.buildJSReplaceRegExpression() is striping \\<script>\\</script> tags blindly. It might be a reason why listReorderer, layoutReorderer tags got stripped.&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-03T10:38:31.811-0400",
      "body": "In build.js, buildRegExpression returns the regExpression with the following:\\\n\\<script{1,1}?.\\*Reorderer\\\\.js{1,1}?.\\*script>\n\nThis will match the demo's reorderer's links, such as the following:\\\n\\<script type=\"text/javascript\" src=\"../js/layoutReorderer.js\">\\</script>\\\n\\<script type=\"text/javascript\" src=\"../js/listReorderer.js\">\\</script>\\\n\\<script type=\"text/javascript\" src=\"../js/\\<prefix>Reorderer.js\">\\</script>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-03T15:19:30.128-0400",
      "body": "Problem:  Regular expression allows the script to remove any string that has \"Reorderer.js\" in it.  It was designed to remove components \"LayoutReorderer.js\", \"ListReorderer.js\", \"ImageReorderer.js\" dynamically; however it also removes \"layoutReorderer.js\" which is not supposed to.  This only affect demos with custom build using the build-scripts.\n\nPossible solutions:\\\n1\\. Change the demo js files name; ie. change layoutReorderer.js to layoutReordererDemo.js.  This doesn't prevent future demo from breaking though.\\\n2\\. Change the regular expression sightly to match \"\\<script{1,1}?.**\\<componentName>\\\\.js{1,1}?.\\*script>\" to \"\\<script{1,1}?.**\\\\/\\<componentName>\\\\.js{1,1}?.\\*script>\" so it will only remove components related js files.  However this doesn't prevent users from using component name as the demo js, ie. LayoutReorderer.js instead of layoutReorderer.js.\\\n3\\. Match the \\<componentName> to a list of component and remove it iff the component is on the list.  This list needs to be updated per new component added, making it hard to maintain.\n\nDiscussed with Justin, we believe it's better to add a directory separator in front of the filename(opt #2) for now. &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-06T15:20:17.479-0400",
      "body": "Instead of adding the front slash to the actual build.js, we can modify the rules in the build.xml instead.  Change line 18\\\n\\<property name=\"regexStartJS\" value=\"\\&lt;script{1,1}?.\\*\" /> to \\\n\\<property name=\"regexStartJS\" value=\"\\&lt;script{1,1}?.\\*\\\\/\" />\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-06T17:52:01.914-0400",
      "body": "Merged into the project repo at a60418a57b88923ff2dd33d61b44c5f49bbeafac\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-06T17:52:26.629-0400",
      "body": "reopening to set the resolution\n"
    }
  ]
}
---
1\. Download the "infusion-InfusionAll-1.3.1-src.zip" from <http://wiki.fluidproject.org/display/fluid/Release+Package+QA+Test+Plan>\
2\. Run infusion-InfusionAll-1.3.1-src/demos/reorderer/layoutReorderer/demo.html\
3\. Get the following error:

Error: demo is not defined\
Source File: <http://localhost/fluid/infusion_diff/infusion-InfusionAll-1.3.1-src/demos/reorderer/layoutReorderer/html/layoutReorderer.html>\
Line: 138

This could be an url rewriting problem in the the build process.

Adding "\<script type="text/javascript" src="../js/layoutReorderer.js">\</script>" in demos/reorderer/layoutReorderer/html/layoutReorderer.html line 15 would fix the problem.

        