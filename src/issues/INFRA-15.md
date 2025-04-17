---json
{
  "title": "INFRA-15",
  "summary": "Functional tests for websites",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-07T11:17:05.657-0400",
  "updated": "2018-01-23T09:15:37.548-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Migrated from GitHub (<https://github.com/inclusive-design/ops/issues/3):>

avtar commented on Jun 21, 2013

Currently we don't have any functional tests for sites that get deployed. If [http://inclusivedesign.ca](http://inclusivedesign.ca/) or parts of its stack (Apache, MySQL, PHP) gets updated then Anastasia will log in and verify that she can view expected content and confirm that the upgrade was successful. This a slow, manual process and most likely error-prone. It would be useful to create functional tests for the main content management systems that are utilized by the IDRC, namely Drupal, Joomla, Mediawiki, and Wordpress.

"Capybara helps you test web applications by simulating how a real user would interact with your app. \[It has an intuitive] API which mimics the language an actual user would use."

Using its DSL we could automate the task of logging into an updated site which would in turn tell us that its frontend server is online, MySQL and any of its client libraries are available, the app itself was successfully deployed, etc.

When /I sign in/ do\
within("#session") do\
fill\_in 'Login', :with => 'user\@example.com'\
fill\_in 'Password', :with => 'password'\
end\
click\_link 'Sign in'\
end

Related URLs:

<https://github.com/jonleighton/poltergeist> - headless driver that detects and reports any Javascript errors that happen within the page\
<http://matthewdaly.co.uk/blog/2012/11/03/testing-php-web-applications-with-cucumber/>\
<http://blogs.kent.ac.uk/webdev/2012/08/02/using-capybara-webkit-with-cucumber-without-rails-or-rack/>

avtar commented on Dec 17, 2013

Splinter is another popular testing tool.

I came across this one [http://robotframework.org](http://robotframework.org/) today which might be worth looking into.

        