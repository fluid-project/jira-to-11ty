---json
{
  "title": "ENGAGE-405",
  "summary": "remove servlet-api-2.5-20081211.jar from final build",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jamon Jamon",
  "date": "2010-02-18T12:57:48.000-0500",
  "updated": "2017-12-22T09:44:29.885-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": "Tomcat 6.0.x, 5.x\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:29.883-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
When serving engage via tomcat as a servlet container, Tomcat provides the servlet-api.jar dependency. It can be removed from the final build for anyone deploying the application in Tomcat. For reference the message in catalina.out is:

INFO: validateJarFile(\<snip>webapps/engage/WEB-INF/lib/servlet-api-2.5-20081211.jar) - jar not loaded. See Servlet Spec 2.3, section 9.7.2. Offending class: javax/servlet/Servlet.class

        