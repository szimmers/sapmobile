'use strict';

angular.module('siteTicketPortal')
/**
 * controller for the project page, which owns the tab nav for different ways of viewing the project
 * info. it also ensures the project and tickets are set on the scope, so the children scope of the tab
 * nav have access to that data.
 */
	.controller('ProjectCtrl', function ($scope, project, tickets) {

		// set project and tickets on scope for this and children scopes of the tab nav
		$scope.project = project;
		$scope.tickets = tickets;

		// set up the tab nav
		$scope.tabs = [
			{title: 'Overview', page: 'views/projectOverview.html'},
			{title: 'Detail', page: 'views/projectDetail.html'}
		];

		$scope.tabs.activeTab = 0;
	});
