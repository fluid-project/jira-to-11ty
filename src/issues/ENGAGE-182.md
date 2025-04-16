---json
{
  "title": "ENGAGE-182",
  "summary": "refactor path structure for mvn (maven2)",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "joan garcia",
  "date": "2009-11-04T10:54:31.000-0500",
  "updated": "2014-03-03T14:21:10.688-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-182/fluid-engage-kettle-build.patch",
      "filename": "fluid-engage-kettle-build.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-182/fluid-engage-kettle-build-plus-encoding-handling.patch",
      "filename": "fluid-engage-kettle-build-plus-encoding-handling.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-182/pom.xml",
      "filename": "pom.xml"
    }
  ],
  "comments": [
    {
      "author": "joan garcia",
      "date": "2009-11-04T10:57:47.000-0500",
      "body": "for example, \\<fluid-all/kettle> project.\n\nmvn eclipse:eclipse will recognise the project structure and will create a proper .project file.\n\n* 2change \\[new WebAppContext contructor argument]:\n\npublic class JettyLauncher {\n\npublic static void main(String\\[] args) throws Exception {\\\nServer server = new Server();\n\nConnector connector = new SelectChannelConnector();\\\nconnector.setPort(Integer.getInteger(\"jetty.port\", 8080).intValue());\\\nserver.setConnectors(new Connector\\[] { connector });\n\nWebAppContext webapp = new WebAppContext(\"src/main/webapp\", \"/\");\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-04T11:00:46.000-0500",
      "body": "maven 2 interesting link: \\\n<http://www.javaworld.com/javaworld/jw-12-2005/jw-1205-maven.html>\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-05T10:54:10.000-0500",
      "body": "this is my local fluid-engage-kettle pom.xml  (it seems to work). I compile and run kettle on Jetty.\\\nNote that there are no source references, maven 2 handle sources properly (using: \"convention over configuration\" pattern).\\\n\\----------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\\\n\\<project xmlns=\"<http://maven.apache.org/POM/4.0.0>\" xmlns:xsi=\"<http://www.w3.org/2001/XMLSchema-instance>\"\\\nxsi:schemaLocation=\"<http://maven.apache.org/POM/4.0.0> <http://maven.apache.org/maven-v4_0_0.xsd>\">\\\n\\<modelVersion>4.0.0\\</modelVersion>\\\n\\<artifactId>fluid-engage\\</artifactId>\\\n\\<groupId>org.fluidproject\\</groupId>\\\n\\<version>0.3-SNAPSHOT\\</version>\\\n\\<organization>\\\n\\<name>Fluid Project\\</name>\\\n\\<url>http\\://fluidproject.org\\</url>\\\n\\</organization>\\\n\\<inceptionYear>2009\\</inceptionYear>\\\n\\<packaging>war\\</packaging>\\\n\\<description>\\\nA set of test components for evaluating conversion and rendering strategies\\\n\\</description>\n\n\\<repositories>\\\n\\<repository>\\\n\\<id>CARET-Maven2\\</id>\\\n\\<name>CARET Maven 2 Repository\\</name>\\\n\\<url>[http://www2.caret.cam.ac.uk/maven2\\</url](http://www2.caret.cam.ac.uk/maven2%3C/url)>\\\n\\</repository>\\\n\\<repository>\\\n\\<id>Fluid-Maven2\\</id>\\\n\\<name>Fluid Maven 2 Repository\\</name>\\\n\\<url>[http://developer.jasig.org/repo/content/repositories/fluid-m2\\</url](http://developer.jasig.org/repo/content/repositories/fluid-m2%3C/url)>\\\n\\</repository>\\\n\\<repository>\\\n\\<id>3rd-party\\</id>\\\n\\<name>jasig 3rd party Maven 2 Repository\\</name>\\\n\\<url>[http://developer.jasig.org/repo/content/repositories/3rd-party\\</url](http://developer.jasig.org/repo/content/repositories/3rd-party%3C/url)>\\\n\\</repository>\\\n\\<repository>\\\n\\<id>CARET-Maven2-dev\\</id>\\\n\\<name>CARET Maven 2 Development Repository\\</name>\\\n\\<url>[http://www2.caret.cam.ac.uk/maven2dev\\</url](http://www2.caret.cam.ac.uk/maven2dev%3C/url)>\\\n\\<snapshots>\\\n\\<enabled>true\\</enabled>\\\n\\</snapshots>\\\n\\</repository>\\\n\\</repositories>\n\n\\<dependencies>\\\n\\<dependency>\\\n\\<groupId>uk.org.ponder\\</groupId>\\\n\\<artifactId>ponderutilcore\\</artifactId>\\\n\\<version>1.2.4A\\</version>\\\n\\<type>jar\\</type>\\\n\\</dependency>\\\n\\<dependency>\\\n\\<groupId>rhino\\</groupId>\\\n\\<artifactId>js\\</artifactId>\\\n\\<version>1.7R3pre\\</version>\\\n\\<type>jar\\</type>\\\n\\</dependency>\\\n\\<dependency>\\\n\\<groupId>javax.servlet\\</groupId>\\\n\\<artifactId>servlet-api\\</artifactId>\\\n\\<version>2.3\\</version>\\\n\\<type>jar\\</type>\\\n\\<scope>provided\\</scope>\\\n\\</dependency>\\\n\\<dependency>\\\n\\<groupId>log4j\\</groupId>\\\n\\<artifactId>log4j\\</artifactId>\\\n\\<version>1.2.14\\</version>\\\n\\<type>jar\\</type>\\\n\\</dependency>\\\n\\<dependency>\\\n\\<groupId>xpp3\\</groupId>\\\n\\<artifactId>xpp3\\_min\\</artifactId>\\\n\\<version>1.1.3.4.O\\</version>\\\n\\<type>jar\\</type>\\\n\\</dependency>\\\n\\<dependency>\\\n\\<groupId>junit\\</groupId>\\\n\\<artifactId>junit\\</artifactId>\\\n\\<version>3.8.1\\</version>\\\n\\<scope>provided\\</scope>\\\n\\</dependency>\\\n\\<dependency>\\\n\\<artifactId>jetty\\</artifactId>\\\n\\<groupId>org.mortbay.jetty\\</groupId>\\\n\\<version>6.1.18\\</version>\\\n\\</dependency>\\\n\\<dependency>\\\n\\<artifactId>jetty-util\\</artifactId>\\\n\\<groupId>org.mortbay.jetty\\</groupId>\\\n\\<version>6.1.18\\</version>\\\n\\</dependency>\\\n\\<dependency>\\\n\\<artifactId>xercesImpl\\</artifactId>\\\n\\<groupId>xerces\\</groupId>\\\n\\<version>2.9.1\\</version>\\\n\\</dependency>\\\n\\</dependencies>\n\n\\<build>\\\n\\<finalName>fluid-engage\\</finalName>\\\n\\<plugins>\\\n\\<plugin>\\\n\\<groupId>org.mortbay.jetty\\</groupId>\\\n\\<artifactId>maven-jetty-plugin\\</artifactId>\\\n\\</plugin>\\\n\\<plugin>\\\n\\<groupId>org.apache.maven.plugins\\</groupId>\\\n\\<artifactId>maven-compiler-plugin\\</artifactId>\\\n\\<version>2.0.2\\</version>\\\n\\<configuration>\\\n\\<source>1.5\\</source>\\\n\\<target>1.5\\</target>\\\n\\</configuration>\\\n\\</plugin>\\\n\\<plugin>\\\n\\<groupId>org.codehaus.mojo\\</groupId>\\\n\\<artifactId>surefire-report-maven-plugin\\</artifactId>\\\n\\<version>2.0-beta-1\\</version>\\\n\\</plugin>\\\n\\</plugins>\\\n\\</build>\\\n\\</project>\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-05T11:00:01.000-0500",
      "body": "local pom.xml\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-17T06:13:45.000-0500",
      "body": "this a build patch for engage.\n\nSimplifies the build process and stores java source classes in the public webapp space.\\\n(Not mixed with build resources inside WEB-INF/classes).\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-17T06:46:10.000-0500",
      "body": "This patch includes the previous one.\n\nAdded encoding support on maven build.\n\nIt's a good approach make build process \"system independent\".\\\nWe cannot trust systems 's defaults.\n"
    }
  ]
}
---
refactor java project directories to:

/src/main/java\
/src/main/resources\
/src/main/webapp

        