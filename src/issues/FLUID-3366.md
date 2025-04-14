---json
{
  "title": "FLUID-3366",
  "summary": "Uploader's server-side demo, the Image Gallery 2, is broken on the daily build server",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-11-07T11:52:26.000-0500",
  "updated": "2011-03-17T15:06:05.824-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-11-07T13:06:21.000-0500",
      "body": "I've fixed this at r8615 by fixing the version for Sakai Master in the root POM file, updating Image Gallery Web's version of Infusion, and adding master to the list of modules in the root POM. Now we have a much simpler build that allows us to run a mvn clean/install/deploy right at the root, and all sub-modules will be built automatically.\n"
    }
  ]
}
---
The Image Gallery is breaking on the daily build server. This is our primary demo for the Uploader, and should be fixed asap.

Online report : <http://localhost:4040/continuum/servlet/continuum/target/ProjectBuild.vm/view/ProjectBuild/id/41/buildId/6555>\
Build statistics:\
State: Failed\
Previous State: Failed\
Started at: Sat, 7 Nov 2009 02:10:17 -0500\
Finished at: Sat, 7 Nov 2009 02:10:44 -0500\
Total time: 27s\
Build Trigger: Schedule\
Exit code: 1\
Building machine hostname: titan\
Operating system : Linux(unknown)\
Java version : 1.5.0\_11(Sun Microsystems Inc.)

Changes\
fluid-components/src/webapp/components/reorderer/css/Reorderer.css\
fluid-components/src/webapp/demos/reorderer/gridReorderer/html/gridReorderer.html\
fluid-components/src/webapp/demos/reorderer/gridReorderer/demo.html\
fluid-components/src/webapp/demos/reorderer/listReorderer/html/listReorderer.html\
fluid-components/src/webapp/demos/reorderer/listReorderer/demo.html\
fluid-components/src/webapp/demos/reorderer/layoutReorderer/html/layoutReorderer.html\
fluid-components/src/webapp/demos/reorderer/layoutReorderer/demo.html\
fluid-components/src/webapp/demos/reorderer/imageReorderer/html/imageReorderer.html\
fluid-components/src/webapp/demos/reorderer/imageReorderer/demo.html\
fluid-components/src/webapp/demos/reorderer/imageReorderer/css/imageReorderer.css

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\
Output:\
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\
/home/flexibus/scripts/uploader-server/stop-uploader-server.sh: line 5: kill: (32059) - No such process\
rm: cannot remove \`/home/flexibus/scripts/uploader-server/uploader-jetty.log': No such file or directory\
\[INFO] Scanning for projects...\
WAGON\_VERSION: 1.0-beta-2\
\[INFO] ----------------------------------------------------------------------------
\[INFO] Building Sakai Master\
\[INFO]    task-segment: \[clean, install]\
\[INFO] ----------------------------------------------------------------------------
\[INFO] artifact org.apache.maven.plugins:maven-clean-plugin: checking for updates from codehaus snapshot repository\
\[INFO] artifact org.apache.maven.plugins:maven-clean-plugin: checking for updates from Sakai Plugin Repo\
\[INFO] artifact org.apache.maven.plugins:maven-compiler-plugin: checking for updates from codehaus snapshot repository\
\[INFO] artifact org.apache.maven.plugins:maven-compiler-plugin: checking for updates from Sakai Plugin Repo\
\[INFO] \[clean:clean]\
\[INFO] artifact org.apache.maven.plugins:maven-site-plugin: checking for updates from codehaus snapshot repository\
\[INFO] artifact org.apache.maven.plugins:maven-site-plugin: checking for updates from Sakai Plugin Repo\
\[INFO] artifact org.apache.maven.plugins:maven-install-plugin: checking for updates from codehaus snapshot repository\
\[INFO] artifact org.apache.maven.plugins:maven-install-plugin: checking for updates from Sakai Plugin Repo\
\[INFO] \[site:attach-descriptor]\
\[INFO] \[install:install]\
\[INFO] Installing /home/flexibus/continuum/working/41/master/pom.xml to /home/flexibus/.m2/repository/org/sakaiproject/master/SNAPSHOT/master-SNAPSHOT.pom\
\[INFO] ------------------------------------------------------------------------
\[INFO] BUILD SUCCESSFUL\
\[INFO] ------------------------------------------------------------------------
\[INFO] Total time: 6 seconds\
\[INFO] Finished at: Sat Nov 07 02:10:24 EST 2009\
\[INFO] Final Memory: 12M/254M\
\[INFO] ------------------------------------------------------------------------
\[INFO] Scanning for projects...\
\[INFO] ----------------------------------------------------------------------------
\[INFO] Building Unnamed - org.fluidproject:fluid-components:war:1.2\
\[INFO]    task-segment: \[clean, install]\
\[INFO] ----------------------------------------------------------------------------
\[INFO] \[clean:clean]\
\[INFO] Deleting directory /home/flexibus/continuum/working/41/fluid-components/target\
\[INFO] \[resources:resources]\
\[INFO] Using default encoding to copy filtered resources.\
\[INFO] \[compiler:compile]\
\[INFO] No sources to compile\
\[INFO] \[resources:testResources]\
\[INFO] Using default encoding to copy filtered resources.\
\[INFO] \[compiler:testCompile]\
\[INFO] No sources to compile\
\[INFO] \[surefire:test]\
\[INFO] No tests to run.\
\[INFO] \[war:war]\
\[INFO] Packaging webapp\
\[INFO] Assembling webapp\[fluid-components] in [/home/flexibus/continuum/working/41/fluid-components/target/fluid-components-1.2](/home/flexibus/continuum/working/41/fluid-components/target/fluid-components-1.2)\
\[INFO] Processing war project\
\[INFO] Webapp assembled in\[11149 msecs]\
\[INFO] Building war: /home/flexibus/continuum/working/41/fluid-components/target/fluid-components-1.2.war\
\[INFO] \[install:install]\
\[INFO] Installing /home/flexibus/continuum/working/41/fluid-components/target/fluid-components-1.2.war to /home/flexibus/.m2/repository/org/fluidproject/fluid-components/1.2/fluid-components-1.2.war\
\[INFO] ------------------------------------------------------------------------
\[INFO] BUILD SUCCESSFUL\
\[INFO] ------------------------------------------------------------------------
\[INFO] Total time: 17 seconds\
\[INFO] Finished at: Sat Nov 07 02:10:43 EST 2009\
\[INFO] Final Memory: 14M/254M\
\[INFO] ------------------------------------------------------------------------
\[INFO] Scanning for projects...\
\[INFO] ------------------------------------------------------------------------
\[ERROR] FATAL ERROR\
\[INFO] ------------------------------------------------------------------------
\[INFO] Error building POM (may not be this project's POM).

Project ID: org.sakaiproject:sakai-imagegallery-base:pom:SNAPSHOT

Reason: Cannot find parent: org.sakaiproject:master for project: org.sakaiproject:sakai-imagegallery-base:pom:SNAPSHOT

\[INFO] ------------------------------------------------------------------------
\[INFO] Trace\
org.apache.maven.reactor.MavenExecutionException: Cannot find parent: org.sakaiproject:master for project: org.sakaiproject:sakai-imagegallery-base:pom:SNAPSHOT\
at org.apache.maven.DefaultMaven.getProjects(DefaultMaven.java:378)\
at org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:290)\
at org.apache.maven.DefaultMaven.execute(DefaultMaven.java:125)\
at org.apache.maven.cli.MavenCli.main(MavenCli.java:272)\
at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\
at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\
at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\
at java.lang.reflect.Method.invoke(Method.java:585)\
at org.codehaus.classworlds.Launcher.launchEnhanced(Launcher.java:315)\
at org.codehaus.classworlds.Launcher.launch(Launcher.java:255)\
at org.codehaus.classworlds.Launcher.mainWithExitCode(Launcher.java:430)\
at org.codehaus.classworlds.Launcher.main(Launcher.java:375)\
Caused by: org.apache.maven.project.ProjectBuildingException: Cannot find parent: org.sakaiproject:master for project: org.sakaiproject:sakai-imagegallery-base:pom:SNAPSHOT\
at org.apache.maven.project.DefaultMavenProjectBuilder.assembleLineage(DefaultMavenProjectBuilder.java:1264)\
at org.apache.maven.project.DefaultMavenProjectBuilder.assembleLineage(DefaultMavenProjectBuilder.java:1281)\
at org.apache.maven.project.DefaultMavenProjectBuilder.buildInternal(DefaultMavenProjectBuilder.java:749)\
at org.apache.maven.project.DefaultMavenProjectBuilder.buildFromSourceFileInternal(DefaultMavenProjectBuilder.java:479)\
at org.apache.maven.project.DefaultMavenProjectBuilder.build(DefaultMavenProjectBuilder.java:200)\
at org.apache.maven.DefaultMaven.getProject(DefaultMaven.java:537)\
at org.apache.maven.DefaultMaven.collectProjects(DefaultMaven.java:467)\
at org.apache.maven.DefaultMaven.collectProjects(DefaultMaven.java:511)\
at org.apache.maven.DefaultMaven.getProjects(DefaultMaven.java:364)\
... 11 more\
Caused by: org.apache.maven.project.ProjectBuildingException: Error getting POM for 'org.sakaiproject:master' from the repository: Unable to read local copy of metadata: Cannot read metadata from '/home/flexibus/.m2/repository/org/sakaiproject/master/SNAPSHOT/maven-metadata-media-berkeley-edu-dev.xml': entity reference name can not contain character =' (position: TEXT seen ...ww.atlassian.com/ex/GenerateLicense.jspa?product=Crucible\&version=... @148:128) \
org.sakaiproject:master:pom:SNAPSHOT

at org.apache.maven.project.DefaultMavenProjectBuilder.findModelFromRepository(DefaultMavenProjectBuilder.java:560)\
at org.apache.maven.project.DefaultMavenProjectBuilder.assembleLineage(DefaultMavenProjectBuilder.java:1260)\
... 19 more\
Caused by: org.apache.maven.artifact.resolver.ArtifactResolutionException: Unable to read local copy of metadata: Cannot read metadata from '/home/flexibus/.m2/repository/org/sakaiproject/master/SNAPSHOT/maven-metadata-media-berkeley-edu-dev.xml': entity reference name can not contain character =' (position: TEXT seen ...ww.atlassian.com/ex/GenerateLicense.jspa?product=Crucible\&version=... @148:128) \
org.sakaiproject:master:pom:SNAPSHOT

at org.apache.maven.artifact.transform.SnapshotTransformation.transformForResolve(SnapshotTransformation.java:68)\
at org.apache.maven.artifact.transform.DefaultArtifactTransformationManager.transformForResolve(DefaultArtifactTransformationManager.java:57)\
at org.apache.maven.artifact.resolver.DefaultArtifactResolver.resolve(DefaultArtifactResolver.java:114)\
at org.apache.maven.artifact.resolver.DefaultArtifactResolver.resolve(DefaultArtifactResolver.java:73)\
at org.apache.maven.project.DefaultMavenProjectBuilder.findModelFromRepository(DefaultMavenProjectBuilder.java:526)\
... 20 more\
Caused by: org.apache.maven.artifact.repository.metadata.RepositoryMetadataResolutionException: Unable to read local copy of metadata: Cannot read metadata from '/home/flexibus/.m2/repository/org/sakaiproject/master/SNAPSHOT/maven-metadata-media-berkeley-edu-dev.xml': entity reference name can not contain character =' (position: TEXT seen ...ww.atlassian.com/ex/GenerateLicense.jspa?product=Crucible\&version=... @148:128) \
at org.apache.maven.artifact.repository.metadata.DefaultRepositoryMetadataManager.resolve(DefaultRepositoryMetadataManager.java:143)\
at org.apache.maven.artifact.transform.AbstractVersionTransformation.resolveVersion(AbstractVersionTransformation.java:65)\
at org.apache.maven.artifact.transform.SnapshotTransformation.transformForResolve(SnapshotTransformation.java:63)\
... 24 more\
Caused by: org.apache.maven.artifact.repository.metadata.RepositoryMetadataReadException: Cannot read metadata from '/home/flexibus/.m2/repository/org/sakaiproject/master/SNAPSHOT/maven-metadata-media-berkeley-edu-dev.xml': entity reference name can not contain character =' (position: TEXT seen ...ww.atlassian.com/ex/GenerateLicense.jspa?product=Crucible\&version=... @148:128) \
at org.apache.maven.artifact.repository.metadata.DefaultRepositoryMetadataManager.readMetadata(DefaultRepositoryMetadataManager.java:292)\
at org.apache.maven.artifact.repository.metadata.DefaultRepositoryMetadataManager.loadMetadata(DefaultRepositoryMetadataManager.java:244)\
at org.apache.maven.artifact.repository.metadata.DefaultRepositoryMetadataManager.mergeMetadata(DefaultRepositoryMetadataManager.java:166)\
at org.apache.maven.artifact.repository.metadata.DefaultRepositoryMetadataManager.resolve(DefaultRepositoryMetadataManager.java:134)\
... 26 more\
Caused by: org.codehaus.plexus.util.xml.pull.XmlPullParserException: entity reference name can not contain character =' (position: TEXT seen ...ww.atlassian.com/ex/GenerateLicense.jspa?product=Crucible\&version=... @148:128) \
at org.codehaus.plexus.util.xml.pull.MXParser.parseEntityRef(MXParser.java:2219)\
at org.codehaus.plexus.util.xml.pull.MXParser.parseAttribute(MXParser.java:2044)\
at org.codehaus.plexus.util.xml.pull.MXParser.parseStartTag(MXParser.java:1796)\
at org.codehaus.plexus.util.xml.pull.MXParser.nextImpl(MXParser.java:1124)\
at org.codehaus.plexus.util.xml.pull.MXParser.next(MXParser.java:1090)\
at org.apache.maven.artifact.repository.metadata.io.xpp3.MetadataXpp3Reader.parseMetadata(MetadataXpp3Reader.java:386)\
at org.apache.maven.artifact.repository.metadata.io.xpp3.MetadataXpp3Reader.read(MetadataXpp3Reader.java:866)\
at org.apache.maven.artifact.repository.metadata.DefaultRepositoryMetadataManager.readMetadata(DefaultRepositoryMetadataManager.java:279)\
... 29 more\
\[INFO] ------------------------------------------------------------------------
\[INFO] Total time: < 1 second\
\[INFO] Finished at: Sat Nov 07 02:10:44 EST 2009\
\[INFO] Final Memory: 1M/254M\
\[INFO] ------------------------------------------------------------------------
ERROR # 1 : error building and deploying the app.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

        