site-ticket-portal
==================

A demonstration client project for AngularJS. It provides a view into work tickets for physical sites, grouped by project (type of work to be done). The projects available to a user is determined by authorization rules on the server.

The client demonstrates a mobile-friendly, single-page app. In addition to controllers and services, there are custom filters and a directive for a pie chart. The app is minimally styled, relying on Bootstrap UI for most elements. The nav bar and tab navigator are provided by angular-strap.

Currently, it runs against a local, .NET server that is not available publically.

The client was configured with Yeoman, including Bootstrap UI but excluding SASS. Additional resources required for client:

- angular-strap
- angular-resource
- ng-google-chart

To run server:

% grunt server
(note: server not available for download)

To run unit tests:

% grunt test


Planned changes:

client:
- integrate with phone gap

server:
- creation of nodejs server with test data, deployed to something publically accessible (e.g. herokuapp)
