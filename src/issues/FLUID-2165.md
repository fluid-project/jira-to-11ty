---json
{
  "title": "FLUID-2165",
  "summary": "Stray references to \"jQuery\" within our private closure cause problems when jQuery.noConflict(true) is used.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2009-01-27T12:27:00.000-0500",
  "updated": "2011-01-18T12:28:57.471-0500",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-01-27T13:57:58.000-0500",
      "body": "There are a couple of places in third-party code where this is still an issue:\n\n1\\. jARIA's :ariaRole and :ariaState pseudo selectors refer to jQuery().\\\n2\\. The 1.5.3 version of jQuery UI's accordion plugin also refers to jQuery(). This is fixed in the 1.6 release candidates.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:52:43.000-0500",
      "body": "Bug XXX Parade 0.8 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-16T17:41:53.000-0500",
      "body": "I have made a pass through the entire codebase, and no references to raw \"jQuery\" remain in our own code. Also, the version of accordion was earlier upgraded to JQuery 1.6rc6 and so the problem has gone away. jARIA is more problematic - the offending lines of code are these:\n\n$.extend($.expr\\[':'], {\\\n// a is the element being tested, m\\[3] is the argument to the selector.\n\nariaRole : \"jQuery(a).ariaRole()==m\\[3]\",\\\nariaState : \"jQuery(a).ariaState(m\\[3].split(/=/)\\[0])==(/=/.test(m\\[3])?m\\[3].split(/=/)\\[1]:'true')\"\\\n});\n\nIncredibly enough, this seems to factor through a call to \"eval\" which will of course bust through any attempts to firewall a jQuery version. This may be an idiom copied from some now obsolete version of the jQuery codebase, since I don't seem to see it lying around in 1.3.1. Instead I see a whole new framework based on a thing named \"Sizzle\" from the looks of which is both fantastically faster and yet more fantastically obscure than the old way of matching selectors. It is possible that the \"equivalent idiom\" to the above looks like this:\n\nhas: function(elem, i, match){\\\nreturn !!Sizzle( match\\[3], elem ).length;\\\n},\n\nbut I wouldn't feel confident going in and hacking that at this point in the release. I suggest we punt the issue of jARIA back to its author, or reconsider it for 1.0.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T14:13:22.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-03-16T11:02:20.000-0400",
      "body": "jQuery UI 1.7 has built-in support for ARIA roles and states. Rather than punting back to jARIA's author, let's thin out our codebase a bit by switching to the built-in functionality in ui.core.js instead.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-24T16:27:55.000-0400",
      "body": "As of revision 6829, jAria.js is no longer in our codebase, in favour of the jQuery core functionality - as a result, I think our last stray usage of the \"jQuery\" symbol is gone from our build.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-25T16:20:00.000-0400",
      "body": "Except that I introduced a couple new stray jQuery calls into the code. Oops. Line 299 and 301 of UIOptions.js&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-25T16:22:11.000-0400",
      "body": "Also, do we care about sample code and tests? I don't think it matters but several examples and tests have calls to jQuery.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-25T16:26:15.000-0400",
      "body": "I reviewed this issue and the calls to jQuery in UIOptions.js need to be removed before this issue can be closed.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-26T09:08:13.000-0400",
      "body": "Clean Up Parade 1.0&#x20;\n"
    }
  ]
}
---
We wrap all of our code in a private, anonymous closure intended to provide us with a safe alias to jQuery and Fluid. Each file starts and ends with something that looks like this:

(function ($, fluid) {

})(jQuery, fluid\_x\_y);

Within this closure, all references to jQuery should be through the $ variable. In several cases, we've got stray references to the jQuery variable which is causing problems when used with jQuery's extreme noConflicts mode. These should be removed in favour of $.

        