---json
{
  "title": "FLUID-4209",
  "summary": "Replace rsf:ids in template of the table of contents component with flc classes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2011-05-09T11:19:12.537-0400",
  "updated": "2011-07-25T15:12:03.602-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3742/",
      "key": "FLUID-3742"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:08:06.281-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-30T10:11:16.152-0400",
      "body": "After some discussion with Justin and James.  We are going to add a new model into tableOfContents.modelBuilder.  This new model ignore skipped headings, and indent the headings incrementally, as shown belown\n\noriginal model:\\\nh1\\\nh2\\\nh3\\\nh6\\\nh5\\\nh4\n\nnew model\\\nh1\\\nh2\\\nh3\\\nh6\\\nh5\\\nh4\n\nThe new model's \"levels\" does not depend on the heading's level.  I found the second model more \"usable\" than the first one in terms of table of contents.  The original model with random headings is more scattered and \"harder to click\". &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-04T14:01:48.710-0400",
      "body": "We have added two functions to generate the model, namely, gradualModelLevelFn, skippedModelLevelFn.  These function are passed into the modelBuilder.defaults as part of the invoker, which allow users to specify the desired model type to be used for this table of content.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-04T15:27:35.570-0400",
      "body": "Test results:\\\nIE7: Fails on all \"anchor set correctly\", ie. the expected is \"#h1\", but actual is \"[http://url#h1](http://url/#h1)\". Problem lies in elm.attr('href'):\\\njqUnit.assertEquals(\"ToC anchor set correctly\", fluid.get(hInfo, \"url\"), elm.attr(\"href\"));\n\nFF5: running standalone demo and component tests under file system (ie. file:///Users/lala/fluid/src/webapp/standalone-demos/table-of-contents/html/TableOfContents.html) gives the following error:\\\nMon Jul 04 2011 15:26:01 GMT-0400 (EDT): ASSERTION FAILED: empty template supplied to fluid.parseTemplate\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-04T16:55:16.749-0400",
      "body": "The above FF5 problem is about:config, security.fileuri.strict.origin problem, set it to false and it will run <http://kb.mozillazine.org/Security.fileuri.strict_origin_policy>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-05T10:08:54.822-0400",
      "body": "Regarding to IE7 attr('href') returning the full path instead of the relative link.  It seems like jQuery is aware of this issue and there is no obvious fix: <http://bugs.jquery.com/ticket/7117>\\\n\"It appears that only \\<a> elements generated programmatically using strings exhibit this problem. Elements that are generated like $('\\<a>', { href: '#foo' }) work properly, as do elements that existed in the document when it was loaded.\n\nShort of scanning all strings passed to jQuery and html for anchors and manually resetting their attributes, there is almost certainly no way that jQuery can work around this issue, as IE is irreparably modifying the href property when building elements from strings. You can see this by inspecting the generated markup (the href attribute magically becomes absolute). As a result, this is probably only going to be a documentation fix. \"\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-05T11:08:29.179-0400",
      "body": "A work around is to use the \"hash\" property from the \"a\" element.  ie. $(elm)\\[0].hash.\\\nAccording to <https://developer.mozilla.org/en/DOM/window.location>, hash is \"the part of the URL that follows the # symbol, including the # symbol.\"  In the table of content tests, we may use the hashes, which is LEQV to the relative URL in this case.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-05T16:49:26.688-0400",
      "body": "The use of .hash doesn't fix the \"root of the problem\" since the href is still appeared to be a full URL on IE7.  I have ran a few more **quick** tests to nail down the problem, as follow (will put them into unit test format if required):\n\nTo reproduce, run the following on IE7: \\\n\\<div class=\".container\">\\</div>\\\n$('.container').html('\\<a class=\"link2\" href=\"#foo\">Test Link2\\</a>')\\\nconsole.log($('.link2').attr('href'));  //expected \"#foo\", actual \"<http://domain/#foo>\"\n\nIt seems like crafting \\<a href> with .html() will cause IE7 to print out the entire URL, (IE8, 9, Chrome, FF are fine).\n\nThe next question is what is generating the \"\\<a href>\"?  The answer is the renderer.  I looked into the framework/renderer/js/fluidRenderer.js and saw the following:\\\nline 1491\\~1496:\\\n1491        if ($.browser.msie) {\\\n1492            $(node).html(rendered);\\\n1493        }\\\n1494        else {\\\n1495            node.innerHTML = rendered;\\\n1496        }\n\nIf we are running IE7, we will execute line 1492 and the problem I mentioned above will occur.  I tried replacing line 1492 with line 1495, the href is still generated with a full URL.  This could be something that is on the IE7 parser which jQuery cannot fix (<http://bugs.jquery.com/ticket/7117>).\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-19T12:21:57.194-0400",
      "body": "There is a minor display problem with IE7, described here #FLUID-4346\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-25T15:12:03.599-0400",
      "body": "Was merged into the project repo at 6d6c5ddc4ac62499c026c9d61430459eb73d2e94 ( <https://github.com/fluid-project/infusion/pull/111> )\n"
    }
  ]
}
---
To utilize the current framework feature, replace all the rsf:ids in template of table of contents component with flc classes

        