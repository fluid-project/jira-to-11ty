---json
{
  "title": "FLUID-2937",
  "summary": "modify build.xml to accomodate maven settings file in command line call to maven",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-06-10T11:36:47.000-0400",
  "updated": "2009-10-22T16:24:56.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2931/",
      "key": "FLUID-2931"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3140/",
      "key": "FLUID-3140"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2937/customBuild.sh",
      "filename": "customBuild.sh"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2937/FLUID-2937.txt",
      "filename": "FLUID-2937.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2937/FLUID-2937.txt",
      "filename": "FLUID-2937.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-06-18T11:45:46.000-0400",
      "body": "This modification to build.xml adds the ability to use a mvn settings file in the ant script command line arguments. This was required for the customBuild on the website.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-18T11:49:47.000-0400",
      "body": "Resolved with the attached patch.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-13T12:14:04.000-0400",
      "body": "re-write this code, or better yet, solve the problem on the server so the code is not required.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-15T13:10:03.000-0400",
      "body": "Discussions in the channel on the wiki:\\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-05-19>\n\n\\[14:09:32 EDT(-0400)] \\<colinclark> Is this the first artifact Maven is trying to download?\\\n\\[14:10:53 EDT(-0400)] \\<laurelw> it seems to be...the .m2/repository directory did not exist for the nobody user (the apache is running in nobody)\\\n\\[14:11:57 EDT(-0400)] \\<colinclark> You explicitly have to specify where the local repo should be located. Does nobody even have a home directory? Does it have permissions to write into it? I suspect this isn't a maven problem at all.\\\n\\[14:13:55 EDT(-0400)] \\<jamon> permissions on /home/fluidpro/.m2/repository/ are 755, apache has permission\\\n\\[14:14:11 EDT(-0400)] \\<anastasiac> colinclark, laurelw, I was also wondering if it was some kind of environment variable problem, too\\\n\\[14:14:14 EDT(-0400)] \\<jamon> there is no settings.xml in there though laurelw\\\n\\[14:14:39 EDT(-0400)] \\<anastasiac> with the continuum tasks, we had to create a script that set all of the necessary variable and then run the commands\\\n\\[14:14:42 EDT(-0400)] \\<jamon> i think maven needs that, otherwise it looks to it's default /usr/maven/foo location, where apache definitely has no permissions\\\n\\[14:14:45 EDT(-0400)] \\<anastasiac> and continuum had to run that script\\\n\\[14:14:54 EDT(-0400)] \\<laurelw> nobody has a home directory and seems to have permissions to write to it\\\n\\[14:14:54 EDT(-0400)] \\<laurelw> does creating directories imply write permissions?\\\n\\[14:15:07 EDT(-0400)] \\<jamon> yep\\\n\\[14:15:26 EDT(-0400)] \\<laurelw> i actually created .m2/repository myself , in case that was the problem\\\n\\[14:16:00 EDT(-0400)] \\<jamon> what's the command laurelw?\\\n\\[14:16:28 EDT(-0400)] \\<laurelw> ok...so I'll try creating a simple settings.xml\\\n\\[14:16:28 EDT(-0400)] \\<jamon> the ant customBuild thing?\\\n\\[14:16:45 EDT(-0400)] \\<jamon> copy the one i emailed you about and then alter it, will be easier i'd imagine\\\n\\[14:17:36 EDT(-0400)] \\<laurelw> yes, the ant customBuild thing command. let me be more specific though:\\\n\\[14:17:52 EDT(-0400)] \\<jamon> i can see it in .bash\\_history, no worries\\\n\\[14:18:22 EDT(-0400)] \\<laurelw> ok...thx\\\n\\[14:18:28 EDT(-0400)] \\<laurelw> I've tried a bunch as you can see\\\n\\[14:18:43 EDT(-0400)] \\<laurelw> the one I'm working with now is simplified somewhat\\\n\\[14:19:00 EDT(-0400)] \\<jamon> try the settings.xml and adding o+w permissions where they're needed first, then let me know what happens\\\n\\[14:19:17 EDT(-0400)] \\<laurelw> but I've also tried creating a simple php page with just a mvn clean command and that fails with a very similar error message\\\n\\[14:19:32 EDT(-0400)] \\<laurelw> I will do that and get back to you.\\\n\\[14:19:52 EDT(-0400)] \\<laurelw> espresso brownie for you if this does it!\\\n\\[14:20:09 EDT(-0400)] \\<jamon> looking forward to it already\\\n\\[14:24:05 EDT(-0400)] \\<laurelw> jamon: do I need to alter it, or just change the permissions\\\n\\[14:24:53 EDT(-0400)] \\<jamon> read the file first, see what paths it is looking at\\\n\\[14:24:59 EDT(-0400)] \\<jamon> s/what/which\\\n\\[14:27:09 EDT(-0400)] \\<laurelw> ok, but everything seems to be commented out...ie all default settings\\\n\\[14:27:37 EDT(-0400)] \\<laurelw> jamon: yes, I am a little confused.\\\n\\[14:28:11 EDT(-0400)] \\<jamon> laurelw: i don't know anything about maven, but i'm assuming anything you uncomment will override the default maven settings (whatever they are)\\\n\\[14:29:23 EDT(-0400)] \\<laurelw> jamon: I guess I'm only a little more knowledgeable than you...so no worries. I'll try some stuff and escalate until something works.\\\n\\[14:29:46 EDT(-0400)] \\<laurelw> kinda hard to chmod stuff without command line...this is a pain!\\\n\\[14:50:45 EDT(-0400)] \\<laurelw> jamon: I tried just moving the settings.xml to the nobody/.m2/ directory - that didn't work\\\n\\[14:51:03 EDT(-0400)] \\<laurelw> so then I tried editting the settings.xml to set the local repository path\\\n\\[14:51:19 EDT(-0400)] \\<laurelw> I tried \\~/.m2/repository - that didn't work\\\n\\[14:51:35 EDT(-0400)] \\<laurelw> I also tried /home/nobody/.m2/repository - still no luck\\\n\\[14:52:41 EDT(-0400)] \\<laurelw> i can't find anythine else in the settings.xml that I think requires a specific path related to the nobody user\\\n\\[14:55:02 EDT(-0400)] \\<laurelw> I think I have the right permissions on the file, but wondering if you agree\n\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-06-19>\n\n\\[15:11:25 EDT(-0400)] \\<colinclark> laurel: quick question for you\\\n\\[15:11:39 EDT(-0400)] \\<colinclark> what value do you use for mvn-settings-file in the ant build, typically?\\\n\\[15:11:52 EDT(-0400)] \\<colinclark> and is it something that you only set on the server?\\\n\\[15:12:05 EDT(-0400)] \\<laurel> Hi colin\\\n\\[15:12:36 EDT(-0400)] \\<laurel> on the server I put a mvn settings file where it would be expected - in \\~.m2\\\n\\[15:12:55 EDT(-0400)] \\<laurel> we had to put it there (it doesn't get put there with a default installation or anything)\\\n\\[15:13:07 EDT(-0400)] \\<laurel> then jamon changed the permissions on it\\\n\\[15:13:18 EDT(-0400)] \\<laurel> just trying to recall - will check\\\n\\[15:14:51 EDT(-0400)] \\<laurel> hmm...maybe he didn't change the permissions - at least not to the one on the server in the fluid user\\\n\\[15:15:32 EDT(-0400)] \\<laurel> so on the server I set it to --settings \"\\~/.m2/settings.xml\"\\\n\\[15:16:08 EDT(-0400)] \\<laurel> then Justin and I talked about whether it made sense to have this setting in a Windows environment\\\n\\[15:16:13 EDT(-0400)] \\<colinclark> ok\\\n\\[15:16:30 EDT(-0400)] \\<colinclark> I'm slightly confused why we have to set it... The maven documentation says it looks in that place for it.\\\n\\[15:16:31 EDT(-0400)] \\<colinclark> <http://maven.apache.org/settings.html>\\\n\\[15:16:34 EDT(-0400)] \\<laurel> I haven't thought of a use case really, but I didn't want to neglect it just in case\\\n\\[15:16:43 EDT(-0400)] \\<colinclark> \"There are two locations where a settings.xml file may live:\\\n\\[15:16:43 EDT(-0400)] \\<colinclark> \\* The Maven install: $M2\\_HOME/conf/settings.xml\\\n\\[15:16:44 EDT(-0400)] \\<colinclark> \\* A user's install: ${user.home}/.m2/settings.xml\"\\\n\\[15:16:55 EDT(-0400)] \\<laurel> I'm confused too, but it worked when I put it in and doesn't work when I dont\\\n\\[15:17:09 EDT(-0400)] \\<laurel> which was a pretty good test for why it was needed\\\n\\[15:17:29 EDT(-0400)] \\<laurel> I assumed it had something to do with the fact that the web server runs as nobody\\\n\\[15:18:04 EDT(-0400)] \\<laurel> which may or may not be a good assumption\\\n\\[15:20:12 EDT(-0400)] \\<colinclark> but you only ever need to do this on the server, right?\\\n\\[15:20:29 EDT(-0400)] \\<laurel> now, I only tried ...hey...stop anticipating my typing\\\n\\[15:20:36 EDT(-0400)] \\<laurel> i only tried on the server every\\\n\\[15:20:38 EDT(-0400)] \\<laurel> ever\\\n\\[15:20:40 EDT(-0400)] \\<laurel> grin\\\n\\[15:20:55 EDT(-0400)] \\<laurel> so this isn't really a good test\\\n\\[15:21:02 EDT(-0400)] \\<laurel> where else can we try?\\\n\\[15:21:23 EDT(-0400)] \\<colinclark> In part, I wonder if we really need to try elsewhere.\\\n\\[15:22:14 EDT(-0400)] \\<laurel> and I would really like your thoughts on whether I should even bother with putting it on the windows option\\\n\\[15:23:26 EDT(-0400)] \\<laurel> can you clarify - that last sentence looks like it could be interpreted both ways\\\n\\[15:23:42 EDT(-0400)] \\<colinclark> honestly, i don't see any point in looking at adding generality for something that we need only in one context\\\n\\[15:23:51 EDT(-0400)] \\<colinclark> and worse yet, that we don't really understand\\\n\\[15:24:11 EDT(-0400)] \\<laurel> i agree, except for the fact that we are publishing the code for download\\\n\\[15:24:23 EDT(-0400)] \\<colinclark> well, we're not publishing this as a product\\\n\\[15:25:05 EDT(-0400)] \\<colinclark> the Builder is not generally something people want as a code base to use and extend...\\\n\\[15:25:07 EDT(-0400)] \\<laurel> ok...but the build.xml - is that a file that is distributed?\\\n\\[15:25:10 EDT(-0400)] \\<colinclark> it's just something they want to work\\\n\\[15:25:24 EDT(-0400)] \\<colinclark> sure, but my point is this particular feature\\\n\\[15:25:26 EDT(-0400)] \\<laurel> i wouldn't want to \"hard code\" this in\\\n\\[15:25:31 EDT(-0400)] \\<colinclark> it's very specific to a context\\\n\\[15:25:36 EDT(-0400)] \\<laurel> yep\\\n\\[15:25:44 EDT(-0400)] \\<colinclark> honestly, i'd feel better if we understood what was up with our server and maven\\\n\\[15:25:47 EDT(-0400)] \\<laurel> so what do you suggest as an alternative\\\n\\[15:25:53 EDT(-0400)] \\<laurel> i agree.\\\n\\[15:25:58 EDT(-0400)] \\<colinclark> since the documentation seems pretty clear that this should work\\\n\\[15:26:12 EDT(-0400)] \\<laurel> and it does work at the command line\\\n\\[15:26:37 EDT(-0400)] \\<laurel> just not from within the web browser - so I'm pretty sure it is due to \"user\" issues\\\n\\[15:27:09 EDT(-0400)] \\<colinclark> sounds like an environment issue... you're saying that the nobody account does indeed have a home directory, with an .m2 repo in it\\\n\\[15:27:12 EDT(-0400)] \\<colinclark> but that it can't find it\\\n\\[15:27:15 EDT(-0400)] \\<colinclark> is that right?\\\n\\[15:27:25 EDT(-0400)] \\<laurel> seems like it\\\n\\[15:27:41 EDT(-0400)] \\<colinclark> So I think we just want to get to the bottom of why that is.\\\n\\[15:27:58 EDT(-0400)] \\<laurel> but jamon may be able to phrase it better because he tried to explain it to me and I've lost the terminology since his last attempt\\\n\\[15:28:26 EDT(-0400)] \\<laurel> we actually discussed it in the irc a bit, so let me look for the history\\\n\\[15:31:20 EDT(-0400)] \\<laurel> ok - look here <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-05-19>\\\n\\[15:31:28 EDT(-0400)] \\<laurel> at 14:13\\\n\\[15:31:42 EDT(-0400)] \\<laurel> that's part of the discussion\\\n\\[15:33:10 EDT(-0400)] \\<laurel> and then I played with the permissions as suggested, but that didn't help\\\n\\[15:34:44 EDT(-0400)] \\<laurel> in the end I believe that jamon said it was using the settings in the fluid user, not the settings in the nobody user\\\n\\[15:35:07 EDT(-0400)] \\<jessm> laurel: sorry, i have to borrow Colin's brain for a bit\\\n\\[15:35:25 EDT(-0400)] \\<laurel> ok...i guess without the brain, I'll have to get back to colin later\\\n\\[15:36:12 EDT(-0400)] \\<laurel> btw though colin, this is helpful. nice to bash this out with someone again...sometimes you get too focused on the wrong thing.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-12T15:39:24.000-0400",
      "body": "Further examination yielded the following suggested solution from Colin:\n\n1\\. Write a script for the server that will invoke Maven correctly, with an explicit path\\\nto the settings.xml file.\\\n2\\. Parameterize the command that gets executed in our Ant build script to run Maven\\\n3\\. Set a default for this value that works for most people's machines\\\n4\\. In the PHP script that runs Ant (which runs Maven; whew!), specify the alternative,\\\nserver-specific script instead of mvn directly\n\nThe benefit here is that we make only a tiny impact on our build script--no duplicate\\\ncode and users of the script will never need to know.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-17T15:37:05.000-0400",
      "body": "This is one of the three tasks listed in <https://fluidproject.atlassian.net/browse/FLUID-2931#icft=FLUID-2931>\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-19T14:38:40.000-0400",
      "body": "Concerns\\\n1\\) created script customBuild.sh and placed in top directory of infusion for builder\\\n2\\) needed to make executable by everyone.\\\n3\\) needed to make infusion directory writable by everyone\\\n4\\) needed to make .m2 directory writable by everyone\\\n5\\) is the \"parallel\" feature needed for the ant  execution call, and if so I should switch to apply instead of exec command for ant\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-19T14:48:33.000-0400",
      "body": "Attached is the script, which must be placed in the same directory as the pom, and a patch for the build.xml which calls this script.\n\nThe command to run this script is&#x20;\n\nant -DcustomBuildMavenScript=\"true\"\n\nFurther testing required to ensure that this command works in tandem with the customBuild ant target.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-25T14:59:25.000-0400",
      "body": "The script recommended by Colin is now working. I have not committed the script since it consists of a single line of code and includes directories specific to our particular server. An example of the code is:\n\n\\#!/bin/sh\n\n1. A script which calls maven pointing to the correct maven configuration file - used by web user only.\n2. execute mvn --settings filename install\\\n   mvn --settings /home/myhome/.m2/settings.xml install\n\nCreated a file called customBuild.sh and put this text in it. Saved the file in the same directory as the pom.xml (main infusion directory). Made the script executable by all (since the web user needs to access it).\n\nThe ant script patches I submitted earlier run this script to access maven from the browser interface.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-01T15:24:42.000-0400",
      "body": "Modifications on the server have changed the permissions such that we no longer have this problem. All patches, scripts and changes are no longer needed.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-03T14:20:54.000-0400",
      "body": "Completely resolved with the new virtual machine.\n"
    }
  ]
}
---
In order to run the customBuild component we needed to point the mvn command in the build.xml file to the maven settings file. I am not sure if we should make this change for all users or if we should just customize the build.xml file as needed for our purposes.

        