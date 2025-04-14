---json
{
  "title": "FLUID-2608",
  "summary": "The Infusion build scripts should provide more informative errors when input parameters (such as the list of things to build) is invalid",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Laurel Williams",
  "date": "2009-04-20T09:58:07.000-0400",
  "updated": "2014-03-02T14:32:29.043-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-20T11:43:12.000-0400",
      "body": "There is no error handling right now for the custom build parameters. This can be done in the javascript portion of the build.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-02T14:32:29.018-0500",
      "body": "This was fixed with the <https://fluidproject.atlassian.net/browse/FLUID-5120#icft=FLUID-5120>\n"
    }
  ]
}
---
I entered 'ant customBuild -Dinclude="UIOptions"' instead of "uiOptions" and got a stack dump as shown below.\
We could provide a somewhat more graceful error.

C:\Documents and Settings\Laurel\My Documents\fluid-1.0\build-scripts>ant custom\
Build -Dinclude="UIOptions" -Djsfilename="UIOptionsCustomInfusion.js"\
"C:\Program Files\apache-ant-1.7.1"\
"C:\Program Files\Java\jdk1.6.0\_13"\
""\
Buildfile: build.xml

clean:\
\[delete] Deleting directory C:\Documents and Settings\Laurel\My Documents\flu\
id-1.0\build\
\[delete] Deleting directory C:\Documents and Settings\Laurel\My Documents\flu\
id-1.0\products

init:\
\[mkdir] Created dir: C:\Documents and Settings\Laurel\My Documents\fluid-1.0\
\products\
\[mkdir] Created dir: C:\Documents and Settings\Laurel\My Documents\fluid-1.0\
\build\
\[mkdir] Created dir: C:\Documents and Settings\Laurel\My Documents\fluid-1.0\
\products\dist\
\[mkdir] Created dir: C:\Documents and Settings\Laurel\My Documents\fluid-1.0\
\products\src-dist

resolveDependencies:\
Excluding modules:\
Including modules: UIOptions\
Processing module: UIOptions

BUILD FAILED\
java.io.FileNotFoundException: C:\Documents and Settings\Laurel\My Documents\flu\
id-1.0\src\webapp\null\UIOptionsDependencies.json (The system cannot find the pa\
th specified)\
at java.io.FileInputStream.open(Native Method)\
at java.io.FileInputStream.\<init>(FileInputStream.java:106)\
at java.io.FileReader.\<init>(FileReader.java:55)\
at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstruct\
orAccessorImpl.java:39)\
at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingC\
onstructorAccessorImpl.java:27)\
at java.lang.reflect.Constructor.newInstance(Constructor.java:513)\
at org.mozilla.javascript.MemberBox.newInstance(MemberBox.java:166)\
at org.mozilla.javascript.NativeJavaClass.constructSpecific(NativeJavaCl\
ass.java:227)\
at org.mozilla.javascript.NativeJavaClass.construct(NativeJavaClass.java\
:183)\
at org.mozilla.javascript.ScriptRuntime.newObject(ScriptRuntime.java:206\
7\)\
at org.mozilla.javascript.gen.c1.\_c27(Unknown Source)\
at org.mozilla.javascript.gen.c1.call(Unknown Source)\
at org.mozilla.javascript.optimizer.OptRuntime.call1(OptRuntime.java:64)

at org.mozilla.javascript.gen.c1.\_c21(Unknown Source)\
at org.mozilla.javascript.gen.c1.call(Unknown Source)\
at org.mozilla.javascript.optimizer.OptRuntime.callName(OptRuntime.java:\
95\)\
at org.mozilla.javascript.gen.c1.\_c24(Unknown Source)\
at org.mozilla.javascript.gen.c1.call(Unknown Source)\
at org.mozilla.javascript.optimizer.OptRuntime.callName0(OptRuntime.java\
:106)\
at org.mozilla.javascript.gen.c1.\_c23(Unknown Source)\
at org.mozilla.javascript.gen.c1.call(Unknown Source)\
at org.mozilla.javascript.optimizer.OptRuntime.call2(OptRuntime.java:74)

at org.mozilla.javascript.gen.c1.\_c28(Unknown Source)\
at org.mozilla.javascript.gen.c1.call(Unknown Source)\
at org.mozilla.javascript.optimizer.OptRuntime.callName0(OptRuntime.java\
:106)\
at org.mozilla.javascript.gen.c1.\_c8(Unknown Source)\
at org.mozilla.javascript.gen.c1.call(Unknown Source)\
at org.mozilla.javascript.optimizer.OptRuntime.call0(OptRuntime.java:55)

at org.mozilla.javascript.gen.c1.\_c0(Unknown Source)\
at org.mozilla.javascript.gen.c1.call(Unknown Source)\
at org.mozilla.javascript.ContextFactory.doTopCall(ContextFactory.java:3\
37\)\
at org.mozilla.javascript.ScriptRuntime.doTopCall(ScriptRuntime.java:275\
5\)\
at org.mozilla.javascript.gen.c1.call(Unknown Source)\
at org.mozilla.javascript.gen.c1.exec(Unknown Source)\
at org.mozilla.javascript.Context.evaluateString(Context.java:1144)\
at org.apache.bsf.engines.javascript.JavaScriptEngine.eval(JavaScriptEng\
ine.java:138)\
at org.apache.bsf.util.BSFEngineImpl.exec(BSFEngineImpl.java:141)\
at org.apache.bsf.BSFManager$6.run(BSFManager.java:493)\
at java.security.AccessController.doPrivileged(Native Method)\
at org.apache.bsf.BSFManager.exec(BSFManager.java:491)\
at org.apache.tools.ant.util.optional.ScriptRunner.executeScript(ScriptR\
unner.java:100)\
at org.apache.tools.ant.taskdefs.optional.Script.execute(Script.java:52)

at org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\
at sun.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\
at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAcces\
sorImpl.java:25)\
at java.lang.reflect.Method.invoke(Method.java:597)\
at org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.jav\
a:106)\
at org.apache.tools.ant.Task.perform(Task.java:348)\
at org.apache.tools.ant.Target.execute(Target.java:357)\
at org.apache.tools.ant.Target.performTasks(Target.java:385)\
at org.apache.tools.ant.Project.executeSortedTargets(Project.java:1337)\
at org.apache.tools.ant.Project.executeTarget(Project.java:1306)\
at org.apache.tools.ant.helper.DefaultExecutor.executeTargets(DefaultExe\
cutor.java:41)\
at org.apache.tools.ant.Project.executeTargets(Project.java:1189)\
at org.apache.tools.ant.Main.runBuild(Main.java:758)\
at org.apache.tools.ant.Main.startAnt(Main.java:217)\
at org.apache.tools.ant.launch.Launcher.run(Launcher.java:257)\
at org.apache.tools.ant.launch.Launcher.main(Launcher.java:104)

Total time: 0 seconds

        