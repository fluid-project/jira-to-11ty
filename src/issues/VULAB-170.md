---json
{
  "title": "VULAB-170",
  "summary": "First User is Super User",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-02-17T13:58:15.000-0500",
  "updated": "2009-03-02T12:21:00.000-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-170/VULAB-170.patch",
      "filename": "VULAB-170.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-17T13:59:01.000-0500",
      "body": "vulab16\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-17T14:00:42.000-0500",
      "body": "This patches signup.php and manage.php to allow for the first user being the super user. This streamlines the installation process.\n\nEDIT: I deleted the patch and I am using an alternative (and more secure/legit) method to create the first user as a superuser.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-23T13:40:01.000-0500",
      "body": "Here is a better integration of the \"first user being super user\" style of installation\n\nFeatures:\n\n* First user only has option of being researcher and option has been renamed \"Admin User\"\n* Super user check/saving is based on the 'designer' table where the realm is saved as \"superuser\"\n* the User Object Class has been modified to add in the designer table into the objects properties. (This allows for the check of the researcher's realm)\n* After first user has signed up, the options for researcher/tester are re-instituted and superusers will not be automatically created.\n\nNOTE:\n\n* currently system only allows for this first superuser creation and other super-users must be manually set in the database. (modify existing researchers privs in 'designer' table)\n"
    }
  ]
}
---
To streamline the installation process, we are implementing a drupal style admin creation. The first user is automatically created as the super (aka root) user.

A small change to the signup.php process as well as manage.php will allow for this to happen.

        