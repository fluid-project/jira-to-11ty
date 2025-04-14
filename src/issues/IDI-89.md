---json
{
  "title": "IDI-89",
  "summary": "Analytics Tracking",
  "tags": "IDI",
  "project": {
    "key": "IDI",
    "title": "IDI"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Greg Gay",
  "date": "2012-05-25T12:46:46.050-0400",
  "updated": "2014-07-09T16:36:56.256-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IDI site"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Greg Gay",
      "date": "2012-05-25T12:50:22.245-0400",
      "body": "note that Jira replaced the single quote with \\&#39;\\\nthese will need to be replaced with a single quote before adding to the header template.\n"
    }
  ]
}
---
Add the following block of code immediately before the closing HEAD element for the IDI header template. Let greg know when its added so he can check to be sure it's working.

\<script type="text/javascript">

var \_gaq = \_gaq || \[];\
\_gaq.push(\['\_setAccount', 'UA-17057267-8']);\
\_gaq.push(\['\_trackPageview']);

(function() {\
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\
ga.src = ('https:' == document.location.protocol ? '[https://ssl](https://ssl/)' : '[http://www](http://www/)') + '.google-analytics.com/ga.js';\
var s = document.getElementsByTagName('script')\[0]; s.parentNode.insertBefore(ga, s);\
})();

\</script>

        